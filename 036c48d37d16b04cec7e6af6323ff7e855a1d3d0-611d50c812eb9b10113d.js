(self.webpackChunktakigawa_memo=self.webpackChunktakigawa_memo||[]).push([[676],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(!a(e[l],o[l]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!o.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!a(l.value[1],o.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(l=s;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!a(e[u[l]],o[u[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function c(){l=e(u.map((function(e){return e.props}))),d.canUseDOM?t(l):r&&(l=r(l))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),c()},o.componentDidUpdate=function(){c()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},6162:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var i,a=n(r(1506)),o=n(r(5354)),s=n(r(7316)),l=n(r(7154)),u=n(r(7294)),c=n(r(5697)),d=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed,n=m(t||r||[]);return n&&n.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),r=g(t);return h[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,w=v&&window.IntersectionObserver,S=new WeakMap;function T(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),r&&u.default.createElement("source",{media:i,srcSet:r,sizes:a}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function Z(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function C(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+u+o+s+r+n+t+a+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=u.default.createElement(L,(0,l.default)({ref:t,src:r},a,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,i(n),s):s})),L=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,c=e.onError,f=e.loading,p=e.draggable,g=e.ariaHidden,m=(0,s.default)(e,d);return u.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:r,srcSet:n,src:i},m,{onLoad:o,onError:c,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&b(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&w&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),(r=g(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,d=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,E=e.draggable,A=g||h;if(!A)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,l.default)({opacity:O?1:0,transition:I?"opacity "+y+"ms":"none"},s),R="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&P,s,d),z={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:w},M=this.state.isHydrated?m(A):A[0];if(g)return u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},u.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),R&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&P)}),M.base64&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:z,imageVariants:A,generateSources:C}),M.tracedSVG&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:z,imageVariants:A,generateSources:Z}),this.state.isVisible&&u.default.createElement("picture",null,T(A),u.default.createElement(L,{alt:r,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:E})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:S},M,{imageVariants:A}))}}));if(h){var q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},a);return"inherit"===a.display&&delete q.display,u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},R&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:R,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},I&&P)}),M.base64&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:z,imageVariants:A,generateSources:C}),M.tracedSVG&&u.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:z,imageVariants:A,generateSources:Z}),this.state.isVisible&&u.default.createElement("picture",null,T(A),u.default.createElement(L,{alt:r,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:E})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:r,title:t,loading:S},M,{imageVariants:A}))}}))}return null},t}(u.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function P(e){return function(t,r,n){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[r]=e,i),t,"prop",n)}}I.propTypes={resolutions:j,sizes:R,fixed:P(c.default.oneOfType([j,c.default.arrayOf(j)])),fluid:P(c.default.oneOfType([R,c.default.arrayOf(R)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=I;t.Z=N},3733:function(e,t,r){"use strict";r.d(t,{ZA:function(){return Te},zx:function(){return De},wZ:function(){return Ze},iz:function(){return Ce},mH:function(){return Ke},eE:function(){return Qe},Ee:function(){return ke},pQ:function(){return me},nF:function(){return Re},Vp:function(){return Pe},Kx:function(){return Ue},Dx:function(){return ze},of:function(){return We}});var n,i=r(7294),a=r(5697),o=r.n(a),s=r(4839),l=r.n(s),u=r(2993),c=r.n(u),d=r(6494),f=r.n(d),p="bodyAttributes",g="htmlAttributes",m="titleAttributes",h={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(h).map((function(e){return h[e]})),"charset"),y="cssText",v="href",w="http-equiv",S="innerHTML",T="itemprop",E="name",Z="property",C="rel",A="src",O="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",L="defer",I="encodeSpecialCharacters",j="onChangeClientState",R="titleTemplate",P=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),N=[h.NOSCRIPT,h.SCRIPT,h.STYLE],z="data-react-helmet",M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},D=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=K(e,h.TITLE),r=K(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=K(e,x);return t||n||void 0},B=function(e){return K(e,j)||function(){}},F=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},Y=function(e,t){return t.filter((function(e){return void 0!==e[h.BASE]})).map((function(e){return e[h.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ee("Helmet: "+e+' should be of type "Array". Instead found type "'+M(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],l=s.toLowerCase();-1===t.indexOf(l)||r===C&&"canonical"===e[r].toLowerCase()||l===C&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==S&&s!==y&&s!==T||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],l=f()({},n[s],i[s]);n[s]=l}return e}),[]).reverse()},K=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},J=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){J(e)}),0)}),Q=function(e){return clearTimeout(e)},$="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,X="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:r.g.cancelAnimationFrame||Q,ee=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},te=null,re=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,d=e.title,f=e.titleAttributes;ae(h.BODY,n),ae(h.HTML,i),ie(d,f);var p={baseTag:oe(h.BASE,r),linkTags:oe(h.LINK,a),metaTags:oe(h.META,o),noscriptTags:oe(h.NOSCRIPT,s),scriptTags:oe(h.SCRIPT,u),styleTags:oe(h.STYLE,c)},g={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(g[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,g,m)},ne=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=ne(e)),ae(h.TITLE,t)},ae=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(z),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var c=a.indexOf(l);-1!==c&&a.splice(c,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute(z):r.getAttribute(z)!==o.join(",")&&r.setAttribute(z,o.join(","))}},oe=function(e,t){var r=document.head||document.querySelector(h.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===y)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(z,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[k[r]||r]=e[r],t}),t)},ue=function(e,t,r){switch(e){case h.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[z]=!0,a=le(r,n),[i.createElement(h.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var i=se(r),a=ne(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+D(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+D(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case p:case g:return{toComponent:function(){return le(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[z]=!0,n);return Object.keys(t).forEach((function(e){var r=k[e]||e;if(r===S||r===y){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===S||e===y)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+D(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===N.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},ce=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,c=e.title,d=void 0===c?"":c,f=e.titleAttributes;return{base:ue(h.BASE,t,n),bodyAttributes:ue(p,r,n),htmlAttributes:ue(g,i,n),link:ue(h.LINK,a,n),meta:ue(h.META,o,n),noscript:ue(h.NOSCRIPT,s,n),script:ue(h.SCRIPT,l,n),style:ue(h.STYLE,u,n),title:ue(h.TITLE,{title:d,titleAttributes:f},n)}},de=function(e){var t,r;return r=t=function(t){function r(){return q(this,r),W(this,t.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!c()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.SCRIPT:case h.NOSCRIPT:return{innerHTML:t};case h.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return _({},n,((t={})[r.type]=[].concat(n[r.type]||[],[_({},i,this.mapNestedChildrenToProps(r,a))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case h.TITLE:return _({},i,((t={})[n.type]=o,t.titleAttributes=_({},a),t));case h.BODY:return _({},i,{bodyAttributes:_({},a)});case h.HTML:return _({},i,{htmlAttributes:_({},a)})}return _({},i,((r={})[n.type]=_({},a),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=_({},t);return Object.keys(e).forEach((function(t){var n;r=_({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)}(V(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case h.LINK:case h.META:case h.NOSCRIPT:case h.SCRIPT:case h.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=V(t,["children"]),a=_({},n);return r&&(a=this.mapChildrenToProps(r,a)),i.createElement(e,a)},H(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(i.Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(l()((function(e){return{baseTag:Y([v,O],e),bodyAttributes:F(p,e),defer:K(e,L),encode:K(e,I),htmlAttributes:F(g,e),linkTags:G(h.LINK,[C,v],e),metaTags:G(h.META,[E,b,w,Z,T],e),noscriptTags:G(h.NOSCRIPT,[S],e),onChangeClientState:B(e),scriptTags:G(h.SCRIPT,[A,S],e),styleTags:G(h.STYLE,[y],e),title:U(e),titleAttributes:F(m,e)}}),(function(e){te&&X(te),e.defer?te=$((function(){re(e,(function(){te=null}))})):(re(e),te=null)}),ce)((function(){return null})));de.renderStatic=de.rewind;var fe=de,pe=r(3431),ge=function(e){return e.isPostPage?(0,pe.tZ)(i.Fragment,null,(0,pe.tZ)("meta",{property:"og:title",content:e.title}),(0,pe.tZ)("meta",{property:"og:description",content:e.description}),(0,pe.tZ)("meta",{property:"og:url",content:e.url}),(0,pe.tZ)("meta",{property:"og:type",content:"article"}),(0,pe.tZ)("meta",{property:"og:site_name",content:"たきがわのメモ - TAKIGAWA MEMO"}),(0,pe.tZ)("meta",{property:"og:image",content:e.imageUrl}),(0,pe.tZ)("meta",{property:"fb:app_id",content:e.facebookAppId}),(0,pe.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,pe.tZ)("meta",{name:"twitter:site",content:"bob_yama"})):null},me=function(e){var t=e.title+" - TAKIGAWA MEMO";return(0,pe.tZ)(fe,null,(0,pe.tZ)("html",{lang:"ja"}),(0,pe.tZ)("title",null,t),(0,pe.tZ)("meta",{name:"google-site-verification",content:"b_z5TAwrxYIo9jF886d31cgslCs-bgVKEzzpfYzDEsU"}),(0,pe.tZ)("meta",{name:"author",content:"Daichi Takigawa"}),(0,pe.tZ)("meta",{name:"description",content:e.description}),(0,pe.tZ)(ge,{title:t,description:e.description,url:e.url,isPostPage:e.isPostPage,facebookAppId:"132563744601547",imageUrl:e.imageUrl}),(0,pe.tZ)("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.3.1/js/all.js"}),(0,pe.tZ)("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700&display=swap",rel:"stylesheet",type:"text/css"}),(0,pe.tZ)("script",{src:"https://apis.google.com/js/api.js"}))},he=r(6771),be=r(7402),ye=r(863);var ve=function(e){var t=e.format,r=void 0===t?"auto":t;return(0,i.useEffect)((function(){if(window)try{window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}catch(e){}})),(0,pe.tZ)("div",null,(0,pe.tZ)(Se,{className:"adsbygoogle","data-ad-client":"ca-pub-8690013250708757","data-ad-slot":"8825185774","data-ad-format":r}))};ve.Responsive=function(e){var t=e.format,r=void 0===t?"auto":t,n=(0,i.useState)(!1),a=n[0],o=n[1];return(0,i.useEffect)((function(){if(a)try{window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}catch(t){}else if(window){var e=ye.j.tablet.minWidth;window.innerWidth>=e&&o(!0)}}),[a]),a?(0,pe.tZ)(we,null,(0,pe.tZ)(Se,{className:"adsbygoogle","data-ad-client":"ca-pub-8690013250708757","data-ad-slot":"8825185774","data-ad-format":r})):null};var we=(0,he.Z)("div",{target:"e8gtail1"})({margin:(0,be.qZ)(1)+" "+(0,be.qZ)(.5)},""),Se=(0,he.Z)("ins",{target:"e8gtail0"})({name:"4zleql",styles:"display:block"}),Te=ve,Ee=(0,he.Z)("footer",{target:"e6ri6yy0"})({height:(0,be.qZ)(4),width:"80%",margin:"auto","& > .is-divider":{borderTop:"0.14rem solid rgba(34, 36, 38, 0.15)"},"& > .is-divider::after":{fontSize:(0,be.bA)(1/6).fontSize,paddingTop:".1rem",color:"gray"}},""),Ze=function(){return(0,pe.tZ)(Ee,null,(0,pe.tZ)("div",{className:"is-divider","data-content":"© 2019- TAKIGAWA MEMO"}))};var Ce=(0,he.Z)("hr",{target:"ey5mv5l0"})({name:"108ca9f",styles:"background-color:rgba(34, 36, 38, 0.15);height:1px"}),Ae=r(1597),Oe=r(6162),ke=function(e){var t=e.fileName,r=e.alt,n=e.style,i=(0,Ae.useStaticQuery)("112949366").image.nodes.find((function(e){return e.fluid.src.includes(t)})).fluid;return i?(0,pe.tZ)(Oe.Z,{fluid:i,alt:r,style:n}):null};var xe,Le=(0,he.Z)("div",{target:"eripunn2"})({name:"agvfgg",styles:"margin-top:0;width:100%;margin:auto"}),Ie=(0,he.Z)("div",{target:"eripunn1"})((function(e){return{background:""+e.color,padding:0,"& > a":{display:"block",color:"#fff",padding:(0,be.qZ)(1/4)+" 0",textAlign:"center",fontSize:"1.3rem"}}}),""),je=(0,he.Z)("span",{target:"eripunn0"})({name:"1efi8gv",styles:"font-weight:bold"}),Re=function(e){var t=e.url,r=e.title;return(0,pe.tZ)(Le,{className:"columns is-mobile"},(0,pe.tZ)(Ie,{color:"#3b5998",className:"column"},(0,pe.tZ)("a",{href:"https://www.facebook.com/share.php?u="+t,target:"_blank",rel:"noreferrer noopener"},(0,pe.tZ)("i",{className:"fab fa-facebook"}))),(0,pe.tZ)(Ie,{color:"#55acee",className:"column"},(0,pe.tZ)("a",{href:"https://twitter.com/share?url="+t,target:"_blank",rel:"noreferrer noopener"},(0,pe.tZ)("i",{className:"fab fa-twitter"}))),(0,pe.tZ)(Ie,{color:"#008fde",className:"column"},(0,pe.tZ)("a",{href:"https://b.hatena.ne.jp/add?mode=confirm&url="+t+"&title="+r,target:"_blank",rel:"noreferrer noopener"},(0,pe.tZ)(je,null,"B!"))),(0,pe.tZ)(Ie,{color:"#d3505a",className:"column"},(0,pe.tZ)("a",{href:"https://getpocket.com/edit?url="+t+"&title="+r,target:"_blank",rel:"noreferrer noopener"},(0,pe.tZ)("i",{className:"fab fa-get-pocket"}))))},Pe=(0,he.Z)("span",{target:"er7w8z50"})({fontSize:(0,be.bA)(-1/6).fontSize,background:"rgba(204, 204, 204, 0.3)",borderRadius:"10%",marginLeft:(0,be.qZ)(.5),display:"inline-block","&::before":{content:'""',paddingLeft:"0.5rem"},"&::after":{content:'""',paddingRight:"0.5rem"}},""),Ne=(0,he.Z)("div",{target:"ephq0nn0"})({fontSize:(0,be.bA)(1).fontSize,lineHeight:(0,be.qZ)(2),textAlign:"center",color:"#474747",border:"2px solid #787878",marginLeft:(0,be.qZ)(1),marginRight:(0,be.qZ)(1),padding:(0,be.qZ)(3)+" "+(0,be.qZ)(1),"&:hover":{backgroundColor:"#4f4f4f",border:"2px solid #4f4f4f",color:"white"}},""),ze=function(){return(0,pe.tZ)(Ae.Link,{to:"/"},(0,pe.tZ)(Ne,null,"TAKIGAWA",(0,pe.tZ)("br",null),"MEMO"))};var Me=(0,he.Z)("div",{target:"esgxguw4"})(((xe={margin:(0,be.qZ)(3)+" 0 "+(0,be.qZ)(2)+" 0",padding:(0,be.qZ)(.5)+" "+(0,be.qZ)(1),backgroundColor:"rgba(224, 224, 224, 0.5)"})["@media (min-width: "+ye.j.tablet.minWidth+"px)"]={width:"56%"},xe),""),qe=(0,he.Z)("span",{target:"esgxguw3"})({fontSize:(0,be.bA)(1/6).fontSize,fontWeight:"bold",color:"rgb(87, 87, 87)"},""),He=(0,he.Z)("div",{target:"esgxguw2"})({name:"4c6dm7",styles:"display:flex;flex-direction:row;justify-content:space-between"}),_e=(0,he.Z)("div",{target:"esgxguw1"})({cursor:"pointer",width:(0,be.qZ)(1.2),height:(0,be.qZ)(1.2),borderRadius:"50%",background:"rgba(156, 156, 156, 0.5)",textAlign:"center",paddingTop:"2px","& > span":{fontWeight:"bold"}},""),Ve=(0,he.Z)("div",{target:"esgxguw0"})({width:"80%",margin:"0 auto",padding:(0,be.qZ)(1)+" 0 0 0","& ul":{width:"auto",li:{color:"#96acb3",listStyle:"decimal",lineHeight:(0,be.qZ)(1.5),p:{margin:"0 auto"},ul:{marginTop:0}},a:{textDecoration:"none",textShadow:"none",color:"rgb(82, 82, 82)"}}},""),We=function(e){var t=e.html,r=(0,i.useState)({expand:!0}),n=r[0],a=r[1],o=null;return n.expand&&(o=(0,pe.tZ)(Ve,null,(0,pe.tZ)("div",{dangerouslySetInnerHTML:{__html:t}}))),(0,pe.tZ)(Me,null,(0,pe.tZ)(He,null,(0,pe.tZ)("div",null,(0,pe.tZ)(qe,null,"目次")),(0,pe.tZ)(_e,{onClick:function(){return a({expand:!n.expand})}},(0,pe.tZ)("span",null,n.expand?"-":"+"))),o)};var De=function(e){var t=e.label,r=e.onClick,n=e.color,i=void 0===n?"primary":n,a=e.size,o=void 0===a?"default":a,s=e.isDisabled,l=void 0!==s&&s,u=e.isInverted,c=void 0!==u&&u,d="button "+function(e){switch(e){case"primary":return"is-primary";case"link":return"is-link";case"info":return"is-info";case"success":return"is-success";case"warning":return"is-warning";case"danger":return"is-danger";default:return""}}(i)+" "+function(e){switch(e){case"small":return"is-small";case"medium":return"is-medium";case"large":return"is-large";default:return""}}(o);return c&&(d+=" is-inverted"),(0,pe.tZ)("button",{className:d,disabled:l,onClick:r},t)};var Ue=function(e){var t=e.text,r=e.onChange,n=e.placeholder,i=e.rows,a=e.size,o=void 0===a?"normal":a,s=e.disabled,l=e.errorMessage,u="textarea "+function(e){switch(e){case"small":return"is-small";case"medium":return"is-medium";case"large":return"is-large";default:return""}}(o);return l&&(u+=" is-danger"),(0,pe.tZ)("div",{className:"field"},(0,pe.tZ)("div",{className:"control"},(0,pe.tZ)("textarea",{value:t,className:u,placeholder:n,rows:i,disabled:s,onChange:r}),l?(0,pe.tZ)("span",{className:"help is-danger"},l):null))};var Be=(0,he.Z)("div",{target:"e1ovlpph3"})({name:"bjn8wh",styles:"position:relative"}),Fe=(0,he.Z)("div",{target:"e1ovlpph2"})({cursor:"pointer","&::before":{content:'""',paddingLeft:"0.5rem"},"&::after":{content:'""',paddingRight:"0.5rem"}},""),Ye=(0,he.Z)("div",{target:"e1ovlpph1"})((function(e){return{display:e.shouldShow?"block":"none",position:"absolute",cursor:"pointer",zIndex:1e3,width:(0,be.qZ)(6),top:(0,be.qZ)(1.5),right:"0px",backgroundColor:"white",border:"1px solid rgb(221, 221, 221)",boxShadow:"rgba(0, 0, 0, 0.14) 0px 1px 4px",borderRadius:"3px",padding:"8px 0px"}}),""),Ge=(0,he.Z)("div",{target:"e1ovlpph0"})({textAlign:"center",cursor:"pointer",fontSize:(0,be.bA)(0).fontSize,lineHeight:(0,be.qZ)(1.5),"&:hover":{backgroundColor:"whitesmoke"}},""),Ke=function(e){var t=e.menuLabels,r=e.onSelectMenu,n=i.useState(!1),a=n[0],o=n[1],s=i.useRef(null),l=i.useRef(null),u=i.useCallback((function(){o(!0),l.current&&document.addEventListener("click",l.current)}),[l.current]);i.useEffect((function(){return l.current=function(e){s.current.contains(e.target)||(o(!1),document.removeEventListener("click",l.current))},function(){document.removeEventListener("click",l.current)}}),[]);var c=i.useMemo((function(){return t.map((function(e,t){return(0,pe.tZ)(Ge,{key:t,onClick:function(){r(t),o(!1),document.removeEventListener("click",l.current)}},e)}))}),[t,r]);return(0,pe.tZ)(Be,null,(0,pe.tZ)(Fe,{onClick:u},(0,pe.tZ)("i",{className:"fas fa-ellipsis-v"})),(0,pe.tZ)(Ye,{shouldShow:a,ref:s},c))},Je=encodeURIComponent("https://api.takigawa-memo.com/oauth/google/callback"),Qe=function(e){var t=e.slug,r="https://accounts.google.com/o/oauth2/auth?client_id=402513190092-ept29nft077drfeofv7c3ptmidh44ect.apps.googleusercontent.com&redirect_uri="+Je+"&scope=profile email&response_type=code&state="+t,n=i.useCallback((function(){window.location.assign(r)}),[]);return(0,pe.tZ)("button",{className:"button is-link",onClick:n},(0,pe.tZ)("span",{className:"icon"},(0,pe.tZ)(ke,{fileName:"google.png",alt:"google"})),(0,pe.tZ)("span",null,"Sign Up With Google"))};(0,he.Z)("div",{target:"e1opoltj1"})((function(e){var t=e.size;return{width:t,position:"relative",paddingTop:t}}),""),(0,he.Z)("canvas",{target:"e1opoltj0"})({name:"1a0tgz7",styles:"border:1px solid #000000;position:absolute;top:0;left:0;bottom:0;right:0"})}}]);
//# sourceMappingURL=036c48d37d16b04cec7e6af6323ff7e855a1d3d0-611d50c812eb9b10113d.js.map