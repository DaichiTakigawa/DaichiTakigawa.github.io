(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r("q1tI"),i=n(a),o=n(r("Gytx"));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function d(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){u.push(this),d()},c.componentDidUpdate=function(){d()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},c.render=function(){return i.createElement(n,this.props)},a}(a.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(f,"canUseDOM",s),f}}},"9eSz":function(e,t,r){"use strict";var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),c=n(r("8OQS")),s=n(r("pVnL")),l=n(r("q1tI")),u=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(h&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=b(t||r||[]);return n&&n.src},b=function(e){if(h&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=d(e),r=p(t);return g[r]||!1},T="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,E=h&&window.IntersectionObserver,y=new WeakMap;function O(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&l.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function A(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function v(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function w(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+l+o+c+r+n+t+i+a+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=l.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,c=l.default.createElement(P,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,a(n),c):c})),P=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,b=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},b,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));P.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=h&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!T&&E&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||h&&(T||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:h}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,c=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,m=e.fixed,T=e.backgroundColor,h=e.durationFadeIn,E=e.Tag,y=e.itemProp,S=e.loading,w=e.draggable,j=g||m;if(!j)return null;var I=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,s.default)({opacity:I?1:0,transition:M?"opacity "+h+"ms":"none"},c),L="boolean"==typeof T?"lightgray":T,N={transitionDelay:h+"ms"},k=(0,s.default)({opacity:this.state.imgLoaded?0:1},M&&N,c,f),x={title:t,alt:this.state.isVisible?"":r,style:k,className:p,itemProp:y},G=this.state.isHydrated?b(j):j[0];if(g)return l.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:G.maxWidth?G.maxWidth+"px":null,maxHeight:G.maxHeight?G.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),L&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&N)}),G.base64&&l.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:x,imageVariants:j,generateSources:v}),G.tracedSVG&&l.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:x,imageVariants:j,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,O(j),l.default.createElement(P,{alt:r,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:w})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:r,title:t,loading:S},G,{imageVariants:j}))}}));if(m){var H=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},i);return"inherit"===i.display&&delete H.display,l.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},L&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:L,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},M&&N)}),G.base64&&l.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:x,imageVariants:j,generateSources:v}),G.tracedSVG&&l.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:x,imageVariants:j,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,O(j),l.default.createElement(P,{alt:r,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:w})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:r,title:t,loading:S},G,{imageVariants:j}))}}))}return null},t}(l.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function L(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");u.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}I.propTypes={resolutions:M,sizes:C,fixed:L(u.default.oneOfType([M,u.default.arrayOf(M)])),fluid:L(u.default.oneOfType([C,u.default.arrayOf(C)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=I;t.default=N},Gytx:function(e,t){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var l=i[s];if(!c(l))return!1;var u=e[l],d=t[l];if(!1===(a=r?r.call(n,u,d,l):void 0)||void 0===a&&u!==d)return!1}return!0}},TJpk:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r("q1tI")),o=d(r("17x9")),c=d(r("8+s/")),s=d(r("bmMU")),l=r("v1p5"),u=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g,m,T,h=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),E=(g=h,T=m=function(e){function t(){return p(this,t),b(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},i,((t={})[a.type]=c,t.titleAttributes=n({},o),t));case u.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},o)});case u.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},o)})}return n({},i,((r={})[a.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(g,a)},a(t,null,[{key:"canUseDOM",set:function(e){g.canUseDOM=e}}]),t}(i.default.Component),m.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=g.peek,m.rewind=function(){var e=g.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},T);E.renderStatic=E.rewind,t.Helmet=E,t.default=E},WeT4:function(e,t,r){"use strict";r.d(t,"h",(function(){return s})),r.d(t,"a",(function(){return g})),r.d(t,"c",(function(){return T})),r.d(t,"d",(function(){return h})),r.d(t,"g",(function(){return S})),r.d(t,"i",(function(){return R})),r.d(t,"j",(function(){return _})),r.d(t,"l",(function(){return I})),r.d(t,"m",(function(){return x})),r.d(t,"b",(function(){return G})),r.d(t,"k",(function(){return H})),r.d(t,"e",(function(){return q})),r.d(t,"f",(function(){return V}));var n=r("q1tI"),a=r("TJpk"),i=r.n(a),o=r("qKvR"),c=function(e){return e.isPostPage?Object(o.b)(n.Fragment,null,Object(o.b)("meta",{property:"og:title",content:e.title}),Object(o.b)("meta",{property:"og:description",content:e.description}),Object(o.b)("meta",{property:"og:url",content:e.url}),Object(o.b)("meta",{property:"og:type",content:"article"}),Object(o.b)("meta",{property:"og:site_name",content:"たきがわのメモ - TAKIGAWA MEMO"}),Object(o.b)("meta",{property:"og:image",content:e.imageUrl}),Object(o.b)("meta",{property:"fb:app_id",content:e.facebookAppId}),Object(o.b)("meta",{name:"twitter:card",content:"summary"}),Object(o.b)("meta",{name:"twitter:site",content:"bob_yama"})):null},s=function(e){var t=e.title+" - TAKIGAWA MEMO";return Object(o.b)(i.a,null,Object(o.b)("html",{lang:"ja"}),Object(o.b)("title",null,t),Object(o.b)("meta",{name:"google-site-verification",content:"b_z5TAwrxYIo9jF886d31cgslCs-bgVKEzzpfYzDEsU"}),Object(o.b)("meta",{name:"author",content:"Daichi Takigawa"}),Object(o.b)("meta",{name:"description",content:e.description}),Object(o.b)(c,{title:t,description:e.description,url:e.url,isPostPage:e.isPostPage,facebookAppId:"132563744601547",imageUrl:e.imageUrl}),Object(o.b)("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.3.1/js/all.js"}),Object(o.b)("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700&display=swap",rel:"stylesheet",type:"text/css"}),Object(o.b)("script",{src:"https://apis.google.com/js/api.js"}))},l=r("wTIg"),u=r("L7gY"),d=r("jxKE");var f=function(e){var t=e.format,r=void 0===t?"auto":t;return Object(n.useEffect)((function(){if(window)try{window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}catch(e){}})),Object(o.b)("div",null,Object(o.b)(b,{className:"adsbygoogle","data-ad-client":"ca-pub-6195920683902846","data-ad-slot":"4511974705","data-ad-format":r}))};f.Responsive=function(e){var t=e.format,r=void 0===t?"auto":t,a=Object(n.useState)(!1),i=a[0],c=a[1];return Object(n.useEffect)((function(){if(i)try{window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}catch(t){}else if(window){var e=d.a.tablet.minWidth;window.innerWidth>=e&&c(!0)}}),[i]),i?Object(o.b)(p,null,Object(o.b)(b,{className:"adsbygoogle","data-ad-client":"ca-pub-6195920683902846","data-ad-slot":"4511974705","data-ad-format":r})):null};var p=Object(l.a)("div",{target:"e8gtail0"})({margin:Object(u.a)(1)+" "+Object(u.a)(.5)},""),b=Object(l.a)("ins",{target:"e8gtail1"})({name:"13o7eu2",styles:"display:block;"}),g=f,m=Object(l.a)("footer",{target:"e6ri6yy0"})({height:Object(u.a)(4),width:"80%",margin:"auto","& > .is-divider":{borderTop:"0.14rem solid rgba(34, 36, 38, 0.15)"},"& > .is-divider::after":{fontSize:Object(u.b)(1/6).fontSize,paddingTop:".1rem",color:"gray"}},""),T=function(){return Object(o.b)(m,null,Object(o.b)("div",{className:"is-divider","data-content":"© 2019- TAKIGAWA MEMO"}))};var h=Object(l.a)("hr",{target:"ey5mv5l0"})({name:"ad2tcz",styles:"background-color:rgba(34, 36, 38, 0.15);height:1px;"}),E=r("Wbzz"),y=r("9eSz"),O=r.n(y),S=function(e){var t=e.fileName,r=e.alt,n=e.style,a=Object(E.useStaticQuery)("112949366").image.nodes.find((function(e){return e.fluid.src.includes(t)})).fluid;return a?Object(o.b)(O.a,{fluid:a,alt:r,style:n}):null};var A,v=Object(l.a)("div",{target:"eripunn0"})({name:"13qm0t1",styles:"margin-top:0;width:100%;margin:auto;"}),w=Object(l.a)("div",{target:"eripunn1"})((function(e){return{background:""+e.color,padding:0,"& > a":{display:"block",color:"#fff",padding:Object(u.a)(1/4)+" 0",textAlign:"center",fontSize:"1.3rem"}}}),""),j=Object(l.a)("span",{target:"eripunn2"})({name:"in3yi3",styles:"font-weight:bold;"}),R=function(e){var t=e.url,r=e.title;return Object(o.b)(v,{className:"columns is-mobile"},Object(o.b)(w,{color:"#3b5998",className:"column"},Object(o.b)("a",{href:"https://www.facebook.com/share.php?u="+t,target:"_blank",rel:"noreferrer noopener"},Object(o.b)("i",{className:"fab fa-facebook"}))),Object(o.b)(w,{color:"#55acee",className:"column"},Object(o.b)("a",{href:"https://twitter.com/share?url="+t,target:"_blank",rel:"noreferrer noopener"},Object(o.b)("i",{className:"fab fa-twitter"}))),Object(o.b)(w,{color:"#008fde",className:"column"},Object(o.b)("a",{href:"https://b.hatena.ne.jp/add?mode=confirm&url="+t+"&title="+r,target:"_blank",rel:"noreferrer noopener"},Object(o.b)(j,null,"B!"))),Object(o.b)(w,{color:"#d3505a",className:"column"},Object(o.b)("a",{href:"https://getpocket.com/edit?url="+t+"&title="+r,target:"_blank",rel:"noreferrer noopener"},Object(o.b)("i",{className:"fab fa-get-pocket"}))))},_=Object(l.a)("span",{target:"er7w8z50"})({fontSize:Object(u.b)(-1/6).fontSize,background:"rgba(204, 204, 204, 0.3)",borderRadius:"10%",marginLeft:Object(u.a)(.5),display:"inline-block","&::before":{content:'""',paddingLeft:"0.5rem"},"&::after":{content:'""',paddingRight:"0.5rem"}},""),P=Object(l.a)("div",{target:"ephq0nn0"})({fontSize:Object(u.b)(1).fontSize,lineHeight:Object(u.a)(2),textAlign:"center",color:"#474747",border:"2px solid #787878",marginLeft:Object(u.a)(1),marginRight:Object(u.a)(1),padding:Object(u.a)(3)+" "+Object(u.a)(1),"&:hover":{backgroundColor:"#4f4f4f",border:"2px solid #4f4f4f",color:"white"}},""),I=function(){return Object(o.b)(E.Link,{to:"/"},Object(o.b)(P,null,"TAKIGAWA",Object(o.b)("br",null),"MEMO"))};var M=Object(l.a)("div",{target:"esgxguw0"})(((A={margin:Object(u.a)(3)+" 0 "+Object(u.a)(2)+" 0",padding:Object(u.a)(.5)+" "+Object(u.a)(1),backgroundColor:"rgba(224, 224, 224, 0.5)"})["@media (min-width: "+d.a.tablet.minWidth+"px)"]={width:"56%"},A),""),C=Object(l.a)("span",{target:"esgxguw1"})({fontSize:Object(u.b)(1/6).fontSize,fontWeight:"bold",color:"rgb(87, 87, 87)"},""),L=Object(l.a)("div",{target:"esgxguw2"})({name:"9jay18",styles:"display:flex;flex-direction:row;justify-content:space-between;"}),N=Object(l.a)("div",{target:"esgxguw3"})({cursor:"pointer",width:Object(u.a)(1.2),height:Object(u.a)(1.2),borderRadius:"50%",background:"rgba(156, 156, 156, 0.5)",textAlign:"center",paddingTop:"2px","& > span":{fontWeight:"bold"}},""),k=Object(l.a)("div",{target:"esgxguw4"})({width:"80%",margin:"0 auto",padding:Object(u.a)(1)+" 0 0 0","& ul":{width:"auto",li:{color:"#96acb3",listStyle:"decimal",lineHeight:Object(u.a)(1.5),p:{margin:"0 auto"},ul:{marginTop:0}},a:{textDecoration:"none",textShadow:"none",color:"rgb(82, 82, 82)"}}},""),x=function(e){var t=e.html,r=Object(n.useState)({expand:!0}),a=r[0],i=r[1],c=null;return a.expand&&(c=Object(o.b)(k,null,Object(o.b)("div",{dangerouslySetInnerHTML:{__html:t}}))),Object(o.b)(M,null,Object(o.b)(L,null,Object(o.b)("div",null,Object(o.b)(C,null,"目次")),Object(o.b)(N,{onClick:function(){return i({expand:!a.expand})}},Object(o.b)("span",null,a.expand?"-":"+"))),c)};var G=function(e){var t=e.label,r=e.onClick,n=e.color,a=void 0===n?"primary":n,i=e.size,c=void 0===i?"default":i,s=e.isDisabled,l=void 0!==s&&s,u=e.isInverted,d=void 0!==u&&u,f="button "+function(e){switch(e){case"primary":return"is-primary";case"link":return"is-link";case"info":return"is-info";case"success":return"is-success";case"warning":return"is-warning";case"danger":return"is-danger";default:return""}}(a)+" "+function(e){switch(e){case"small":return"is-small";case"medium":return"is-medium";case"large":return"is-large";default:return""}}(c);return d&&(f+=" is-inverted"),Object(o.b)("button",{className:f,disabled:l,onClick:r},t)};var H=function(e){var t=e.text,r=e.onChange,n=e.placeholder,a=e.rows,i=e.size,c=void 0===i?"normal":i,s=e.disabled,l=e.errorMessage,u="textarea "+function(e){switch(e){case"small":return"is-small";case"medium":return"is-medium";case"large":return"is-large";default:return""}}(c);return l&&(u+=" is-danger"),Object(o.b)("div",{className:"field"},Object(o.b)("div",{className:"control"},Object(o.b)("textarea",{value:t,className:u,placeholder:n,rows:a,disabled:s,onChange:r}),l?Object(o.b)("span",{className:"help is-danger"},l):null))};var z=Object(l.a)("div",{target:"e1ovlpph0"})({name:"79elbk",styles:"position:relative;"}),U=Object(l.a)("div",{target:"e1ovlpph1"})({cursor:"pointer","&::before":{content:'""',paddingLeft:"0.5rem"},"&::after":{content:'""',paddingRight:"0.5rem"}},""),B=Object(l.a)("div",{target:"e1ovlpph2"})((function(e){return{display:e.shouldShow?"block":"none",position:"absolute",cursor:"pointer",zIndex:1e3,width:Object(u.a)(6),top:Object(u.a)(1.5),right:"0px",backgroundColor:"white",border:"1px solid rgb(221, 221, 221)",boxShadow:"rgba(0, 0, 0, 0.14) 0px 1px 4px",borderRadius:"3px",padding:"8px 0px"}}),""),D=Object(l.a)("div",{target:"e1ovlpph3"})({textAlign:"center",cursor:"pointer",fontSize:Object(u.b)(0).fontSize,lineHeight:Object(u.a)(1.5),"&:hover":{backgroundColor:"whitesmoke"}},""),q=function(e){var t=e.menuLabels,r=e.onSelectMenu,a=n.useState(!1),i=a[0],c=a[1],s=n.useRef(null),l=n.useRef(null),u=n.useCallback((function(){c(!0),l.current&&document.addEventListener("click",l.current)}),[l.current]);n.useEffect((function(){return l.current=function(e){s.current.contains(e.target)||(c(!1),document.removeEventListener("click",l.current))},function(){document.removeEventListener("click",l.current)}}),[]);var d=n.useMemo((function(){return t.map((function(e,t){return Object(o.b)(D,{key:t,onClick:function(){r(t),c(!1),document.removeEventListener("click",l.current)}},e)}))}),[t,r]);return Object(o.b)(z,null,Object(o.b)(U,{onClick:u},Object(o.b)("i",{className:"fas fa-ellipsis-v"})),Object(o.b)(B,{shouldShow:i,ref:s},d))},F=encodeURIComponent("https://api.takigawa-memo.com/oauth/google/callback"),V=function(e){var t=e.slug,r="https://accounts.google.com/o/oauth2/auth?client_id=402513190092-ept29nft077drfeofv7c3ptmidh44ect.apps.googleusercontent.com&redirect_uri="+F+"&scope=profile email&response_type=code&state="+t,a=n.useCallback((function(){window.location.assign(r)}),[]);return Object(o.b)("button",{className:"button is-link",onClick:a},Object(o.b)("span",{className:"icon"},Object(o.b)(S,{fileName:"google.png",alt:"google"})),Object(o.b)("span",null,"Sign Up With Google"))};Object(l.a)("div",{target:"e1opoltj0"})((function(e){var t=e.size;return{width:t,position:"relative",paddingTop:t}}),""),Object(l.a)("canvas",{target:"e1opoltj1"})({name:"1coeg96",styles:"border:1px solid #000000;position:absolute;top:0;left:0;bottom:0;right:0;"})},bmMU:function(e,t,r){"use strict";var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,s,l,u=n(t),d=n(r);if(u&&d){if((s=t.length)!=r.length)return!1;for(c=s;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(u!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var b=t instanceof RegExp,g=r instanceof RegExp;if(b!=g)return!1;if(b&&g)return t.toString()==r.toString();var m=a(t);if((s=m.length)!==a(r).length)return!1;for(c=s;0!=c--;)if(!i.call(r,m[c]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(c=s;0!=c--;)if(!("_owner"===(l=m[c])&&t.$$typeof||e(t[l],r[l])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){r("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=s(r("q1tI")),o=s(r("YVoz")),c=r("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=m(e,c.TAG_NAMES.TITLE),r=m(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=m(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return m(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},b=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},g=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&O("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],l=s.toLowerCase();-1===t.indexOf(l)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),s=0;s<i.length;s++){var l=i[s],u=(0,o.default)({},a[l],n[l]);a[l]=u}return e}),[]).reverse()},m=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},T=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){T(e)}),0)}),h=function(e){return clearTimeout(e)},E="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||T:e.requestAnimationFrame||T,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,O=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,A=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;j(c.TAG_NAMES.BODY,n),j(c.TAG_NAMES.HTML,a),w(f,p);var b={baseTag:R(c.TAG_NAMES.BASE,r),linkTags:R(c.TAG_NAMES.LINK,i),metaTags:R(c.TAG_NAMES.META,o),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,s),scriptTags:R(c.TAG_NAMES.SCRIPT,u),styleTags:R(c.TAG_NAMES.STYLE,d)},g={},m={};Object.keys(b).forEach((function(e){var t=b[e],r=t.newTags,n=t.oldTags;r.length&&(g[e]=r),n.length&&(m[e]=b[e].oldTags)})),t&&t(),l(e,g,m)},v=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=v(e)),j(c.TAG_NAMES.TITLE,t)},j=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var d=i.indexOf(l);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},R=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},_=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},I=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,a=P(r,n),[i.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=_(r),i=v(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(i,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return _(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){S&&y(S),e.defer?S=E((function(){A(e,(function(){S=null}))})):(A(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:I(c.TAG_NAMES.BASE,t,n),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,a,n),link:I(c.TAG_NAMES.LINK,i,n),meta:I(c.TAG_NAMES.META,o,n),noscript:I(c.TAG_NAMES.NOSCRIPT,s,n),script:I(c.TAG_NAMES.SCRIPT,l,n),style:I(c.TAG_NAMES.STYLE,u,n),title:I(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:b([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:m(e,c.HELMET_PROPS.DEFER),encode:m(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:g(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:g(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:g(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:g(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:g(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=E,t.warn=O}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=036c48d37d16b04cec7e6af6323ff7e855a1d3d0-f40715b52fd81d7ca9c0.js.map