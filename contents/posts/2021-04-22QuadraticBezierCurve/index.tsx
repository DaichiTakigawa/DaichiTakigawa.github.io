import * as React from 'react';
import styled from '@emotion/styled';
import {vec2, vec3, vec4, mat4} from 'gl-matrix';
import {rhythm, scale} from '../../../src/lib/typography';
import {
  glu,
  get_camera,
  get_drawutil,
  get_legacygl,
  Camera,
  Drawutil,
  LegacyGL,
} from '../../../src/lib/legacygl';

declare module '../../../src/lib/legacygl' {
  interface LegacyGL {
    vertex2(p: vec2): void;
  }
}

let gl: WebGLRenderingContext;
let canvas: HTMLCanvasElement;
let legacygl: LegacyGL;
let drawutil: Drawutil;
let camera: Camera;
let p0: vec2, p1: vec2, p2: vec2;
let selected: vec2 = null;

function eval_quadratic_bezier(p0: vec2, p1: vec2, p2: vec2, t: number) {
  const p01 = vec2.scaleAndAdd_ip(vec2.scale(vec2.create(), p0, 1 - t), p1, t);
  const p12 = vec2.scaleAndAdd_ip(vec2.scale(vec2.create(), p1, 1 - t), p2, t);
  return vec2.scaleAndAdd_ip(vec2.scale(vec2.create(), p01, 1 - t), p12, t);
}

function draw() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // projection & camera position
  mat4.perspective(
    legacygl.uniforms.projection.value as mat4,
    Math.PI / 6,
    canvas.aspect_ratio(),
    0.1,
    1000
  );
  const modelview = legacygl.uniforms.modelview;
  camera.lookAt(modelview.value as mat4);

  // xy grid
  gl.lineWidth(1);
  legacygl.color(0.5, 0.5, 0.5);
  drawutil.xygrid(100);

  // draw line segments composing curve
  legacygl.color(1, 0.6, 0.2);
  legacygl.begin(gl.LINE_STRIP);
  const input_numsteps = document.getElementById(
    'input_numsteps'
  ) as HTMLInputElement;
  const numsteps = Number(input_numsteps.value);
  for (let i = 0; i <= numsteps; ++i) {
    const t = i / numsteps;
    legacygl.vertex2(eval_quadratic_bezier(p0, p1, p2, t));
  }
  legacygl.end();
  // draw sample points
  const input_show_samplepoints = document.getElementById(
    'input_show_samplepoints'
  ) as HTMLInputElement;
  if (input_show_samplepoints.checked) {
    legacygl.begin(gl.POINTS);
    for (let i = 0; i <= numsteps; ++i) {
      const t = i / numsteps;
      legacygl.vertex2(eval_quadratic_bezier(p0, p1, p2, t));
    }
    legacygl.end();
  }
  // draw control points
  const input_show_controlpoints = document.getElementById(
    'input_show_controlpoints'
  ) as HTMLInputElement;
  if (input_show_controlpoints.checked) {
    legacygl.color(0.2, 0.5, 1);
    legacygl.begin(gl.LINE_STRIP);
    legacygl.vertex2(p0);
    legacygl.vertex2(p1);
    legacygl.vertex2(p2);
    legacygl.end();
    legacygl.begin(gl.POINTS);
    legacygl.vertex2(p0);
    legacygl.vertex2(p1);
    legacygl.vertex2(p2);
    legacygl.end();
  }
}
function init() {
  // OpenGL context
  canvas = document.getElementById('canvas') as HTMLCanvasElement;
  gl = canvas.getContext('experimental-webgl') as WebGLRenderingContext;
  if (!gl) alert('Could not initialize WebGL, sorry :-(');
  const vertex_shader_src =
    '\
        attribute vec3 a_vertex;\
        attribute vec3 a_color;\
        varying vec3 v_color;\
        uniform mat4 u_modelview;\
        uniform mat4 u_projection;\
        void main(void) {\
            gl_Position = u_projection * u_modelview * vec4(a_vertex, 1.0);\
            v_color = a_color;\
            gl_PointSize = 5.0;\
        }\
        ';
  const fragment_shader_src =
    '\
        precision mediump float;\
        varying vec3 v_color;\
        void main(void) {\
            gl_FragColor = vec4(v_color, 1.0);\
        }\
        ';
  legacygl = get_legacygl(gl, vertex_shader_src, fragment_shader_src);
  legacygl.add_uniform('modelview', 'Matrix4f');
  legacygl.add_uniform('projection', 'Matrix4f');
  legacygl.add_vertex_attribute('color', 3);
  legacygl.vertex2 = function (p: vec2) {
    this.vertex(p[0], p[1], 0);
  };
  drawutil = get_drawutil(gl, legacygl);
  camera = get_camera(canvas.width);
  camera.eye = [0, 0, 7];
  p0 = [-0.5, -0.6];
  p1 = [1.2, 0.5];
  p2 = [-0.4, 1.3];
  // event handlers
  canvas.onmousedown = function (evt) {
    const mouse_win = canvas.get_mousepos(evt);
    if (evt.altKey) {
      camera.start_moving(mouse_win, evt.shiftKey ? 'zoom' : 'pan');
      return;
    }
    // pick nearest object
    const points = [p0, p1, p2];
    const viewport: vec4 = [0, 0, canvas.width, canvas.height];
    let dist_min = 10000000;
    for (let i = 0; i < 3; ++i) {
      const object_win = glu.project(
        [points[i][0], points[i][1], 0],
        legacygl.uniforms.modelview.value as mat4,
        legacygl.uniforms.projection.value as mat4,
        viewport
      );
      const dist = vec2.dist(mouse_win as vec2, object_win as vec2);
      if (dist < dist_min) {
        dist_min = dist;
        selected = points[i];
      }
    }
  };
  canvas.onmousemove = function (evt) {
    const mouse_win = canvas.get_mousepos(evt) as number[];
    if (camera.is_moving()) {
      camera.move(mouse_win as vec2);
      draw();
      return;
    }
    if (selected != null) {
      const viewport: vec4 = [0, 0, canvas.width, canvas.height];
      mouse_win.push(1);
      const mouse_obj = glu.unproject(
        mouse_win as vec3,
        legacygl.uniforms.modelview.value as mat4,
        legacygl.uniforms.projection.value as mat4,
        viewport
      );
      // just reuse the same code as the 3D case
      const plane_origin: vec3 = [0, 0, 0];
      const plane_normal: vec3 = [0, 0, 1];
      const eye_to_mouse = vec3.sub(vec3.create(), mouse_obj, camera.eye);
      const eye_to_origin = vec3.sub(vec3.create(), plane_origin, camera.eye);
      const s1 = vec3.dot(eye_to_mouse, plane_normal);
      const s2 = vec3.dot(eye_to_origin, plane_normal);
      const eye_to_intersection = vec3.scale(
        vec3.create(),
        eye_to_mouse,
        s2 / s1
      );
      vec3.add(selected as any, camera.eye, eye_to_intersection);
      draw();
    }
  };
  document.onmouseup = function () {
    if (camera.is_moving()) {
      camera.finish_moving();
      return;
    }
    selected = null;
  };
  // init OpenGL settings
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(1, 1, 1, 1);
}

const Post: React.FC = () => {
  const [state, setState] = React.useState({
    numsteps: 20,
    showControlPoints: true,
    showSamplePoints: true,
  });
  const canvasContainerRef: React.LegacyRef<HTMLDivElement> = React.useRef(
    null
  );
  const canvasRef: React.LegacyRef<HTMLCanvasElement> = React.useRef(null);
  React.useEffect(() => {
    const width = canvasContainerRef.current.clientWidth;
    const height = canvasContainerRef.current.clientHeight;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    init();
    draw();
  });

  const numStepsCallback = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({...state, numsteps: Number(e.target.value)});
      draw();
    },
    [setState]
  );
  const showControlPointsCallBack = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({...state, showControlPoints: e.target.checked});
      draw();
    },
    [setState]
  );
  const showSamplePointsCallback = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({...state, showSamplePoints: e.target.checked});
      draw();
    },
    [setState]
  );

  return (
    <div>
      <CanvasContainer ref={canvasContainerRef}>
        <Canvas ref={canvasRef} id="canvas" />
      </CanvasContainer>
      <TableContainer className="table-container">
        <Table className="table is-bordered">
          <tbody>
            <tr>
              <td>Number of Steps:</td>
              <td colSpan={2}>
                <input
                  className="input is-small"
                  type="number"
                  id="input_numsteps"
                  step="1"
                  min="2"
                  value={state.numsteps}
                  onChange={numStepsCallback}
                />
              </td>
            </tr>
            <tr>
              <td>Show Control Points:</td>
              <td colSpan={2}>
                <input
                  type="checkbox"
                  id="input_show_controlpoints"
                  checked={state.showControlPoints}
                  onChange={showControlPointsCallBack}
                />
              </td>
            </tr>
            <tr>
              <td>Show Sample Points:</td>
              <td colSpan={2}>
                <input
                  type="checkbox"
                  id="input_show_samplepoints"
                  checked={state.showSamplePoints}
                  onChange={showSamplePointsCallback}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
      <H3>Usage:</H3>
      <ul>
        <li>drag: move control points</li>
        <li>alt+drag: camera pan</li>
        <li>alt+shift+drag: camera zoom</li>
      </ul>
      <H3>Using Library</H3>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bitbucket.org/kenshi84/legacygl.js/src/master/">
            legachgl.js
          </a>
        </li>
      </ul>
    </div>
  );
};

const CanvasContainer = styled.div({
  width: '80%',
  position: 'relative',
  paddingTop: '80%' /* initial ratio of 1:1 */,
});

const Canvas = styled.canvas({
  border: '1px solid #000000',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const TableContainer = styled.div({
  marginTop: rhythm(2),
  marginBottom: `${rhythm(3)} !important`,
  paddingLeft: '1px',
  paddingTop: '1px',
});

const Table = styled.table({
  color: 'rgb(80, 80, 80)',
  marginBottom: 0,
});

const H3 = styled.h3({
  marginTop: rhythm(2),
  fontSize: scale(1 / 4).fontSize,
  lineHeight: scale(1 / 4).lineHeight,
});

export default Post;
