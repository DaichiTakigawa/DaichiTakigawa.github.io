import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  size?: string;
  id?: string;
}

const Canvas: React.FC<Props> = ({size = '80%', id = 'canvas'}) => {
  const canvasContainerRef: React.LegacyRef<HTMLDivElement> = React.useRef(
    null
  );
  const canvasRef: React.LegacyRef<HTMLCanvasElement> = React.useRef(null);
  React.useEffect(() => {
    const width = canvasContainerRef.current.clientWidth;
    const height = canvasContainerRef.current.clientHeight;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
  }, []);
  return (
    <CanvasContainer size={size} ref={canvasContainerRef}>
      <StyledCanvas ref={canvasRef} id={id} />
    </CanvasContainer>
  );
};

interface SizeProps {
  size: string;
}

const CanvasContainer = styled.div<SizeProps>(({size}) => ({
  width: size,
  position: 'relative',
  paddingTop: size /* initial ratio of 1:1 */,
}));

const StyledCanvas = styled.canvas({
  border: '1px solid #000000',
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

export default Canvas;
