(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"C6/n":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("ayPR"),c=n("3MMh"),o=n("gP4Z"),l=(n("f3/d"),n("vOnD")),s=n("MqQV"),u=n("vRqb"),d=n("Mt1y"),p=n("p3AD"),b=n("shvM"),f=n("eJM4"),m=n("pVnL"),h=n.n(m),v=n("TSYQ"),O=n.n(v),j=(n("17x9"),n("ZeOK")),g=n("ICNK"),y=(n("LK8F"),n("RIqP")),k=n.n(y),w=n("lwsE"),E=n.n(w),x=n("W8MJ"),C=n.n(x),N=n("a1gu"),T=n.n(N),I=n("Nsbk"),z=n.n(I),P=n("PJYZ"),S=n.n(P),A=n("7W2i"),M=n.n(A),_=n("lSNA"),R=n.n(_),W=n("3WF5"),K=n.n(W),D=n("Og4/"),G=n.n(D),L=n("Wt1U"),q=n.n(L),B=n("ijCd"),H=n.n(B),J=(n("Z0cm"),n("Y53p")),Z=n("H+2d"),U=n("g4M/"),Y=n("MZgk"),F=n("J2iB"),Q=n.n(F),V=n("D1pA"),X=function(e){function t(){var e,n;E()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=T()(this,(e=z()(t)).call.apply(e,[this].concat(r))),R()(S()(n),"handleClick",(function(e){return G()(n.props,"onClick",e,n.props)})),n}return M()(t,e),C()(t,[{key:"render",value:function(){var e=this.props,n=e.active,a=e.children,i=e.className,c=e.content,o=e.icon,l=O()(Object(j.a)(n,"active"),"title",i),s=Object(g.a)(t,this.props),u=Object(J.a)(t,this.props),d=Q()(o)?"dropdown":o;return Z.a.isNil(a)?r.a.createElement(u,h()({},s,{className:l,onClick:this.handleClick}),V.a.create(d,{autoGenerateKey:!1}),c):r.a.createElement(u,h()({},s,{className:l,onClick:this.handleClick}),a)}}]),t}(a.Component);function $(e){var t=e.active,n=e.children,a=e.className,i=e.content,c=O()("content",Object(j.a)(t,"active"),a),o=Object(g.a)($,e),l=Object(J.a)($,e);return r.a.createElement(l,h()({},o,{className:c}),Z.a.isNil(n)?i:n)}R()(X,"handledProps",["active","as","children","className","content","icon","index","onClick"]),X.propTypes={},X.create=Object(Y.a)(X,(function(e){return{content:e}})),$.handledProps=["active","as","children","className","content"],$.propTypes={},$.create=Object(Y.a)($,(function(e){return{content:e}}));var ee=$,te=function(e){function t(){var e,n;E()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=T()(this,(e=z()(t)).call.apply(e,[this].concat(r))),R()(S()(n),"handleTitleOverrides",(function(e){return{onClick:function(t,a){G()(e,"onClick",t,a),G()(n.props,"onTitleClick",t,a)}}})),n}return M()(t,e),C()(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.content,i=e.index,c=e.title;return r.a.createElement(a.Fragment,null,X.create(c,{autoGenerateKey:!1,defaultProps:{active:t,index:i},overrideProps:this.handleTitleOverrides}),ee.create(n,{autoGenerateKey:!1,defaultProps:{active:t}}))}}]),t}(a.Component);R()(te,"handledProps",["active","content","index","onTitleClick","title"]),te.propTypes={},te.create=Object(Y.a)(te,null);var ne=te,ae=function(e){function t(){var e,n;E()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=T()(this,(e=z()(t)).call.apply(e,[this].concat(r))),R()(S()(n),"computeNewIndex",(function(e){var t=n.props.exclusive,a=n.state.activeIndex;return t?e===a?-1:e:H()(a,e)?q()(a,e):[].concat(k()(a),[e])})),R()(S()(n),"handleTitleClick",(function(e,t){var a=t.index;n.trySetState({activeIndex:n.computeNewIndex(a)}),G()(n.props,"onTitleClick",e,t)})),R()(S()(n),"isIndexActive",(function(e){var t=n.props.exclusive,a=n.state.activeIndex;return t?a===e:H()(a,e)})),n}return M()(t,e),C()(t,[{key:"getInitialAutoControlledState",value:function(e){return{activeIndex:e.exclusive?-1:[]}}},{key:"componentDidMount",value:function(){0}},{key:"componentDidUpdate",value:function(){0}},{key:"render",value:function(){var e=this,n=this.props,a=n.className,i=n.children,c=n.panels,o=O()("accordion",a),l=Object(g.a)(t,this.props),s=Object(J.a)(t,this.props);return r.a.createElement(s,h()({},l,{className:o}),Z.a.isNil(i)?K()(c,(function(t,n){return ne.create(t,{defaultProps:{active:e.isIndexActive(n),index:n,onTitleClick:e.handleTitleClick}})})):i)}}]),t}(U.a);function re(e){var t=e.className,n=e.fluid,a=e.inverted,i=e.styled,c=O()("ui",Object(j.a)(n,"fluid"),Object(j.a)(a,"inverted"),Object(j.a)(i,"styled"),t),o=Object(g.a)(re,e);return r.a.createElement(ae,h()({},o,{className:c}))}R()(ae,"defaultProps",{exclusive:!0}),R()(ae,"autoControlledProps",["activeIndex"]),R()(ae,"handledProps",["activeIndex","as","children","className","defaultActiveIndex","exclusive","onTitleClick","panels"]),ae.propTypes={},ae.create=Object(Y.a)(ae,(function(e){return{content:e}})),re.handledProps=["className","fluid","inverted","styled"],re.propTypes={},re.Accordion=ae,re.Content=ee,re.Panel=ne,re.Title=X;var ie=re;function ce(){var e=se(["\n  width: 80%\n  margin: 0 auto\n  &> div > ul {\n      width: auto;\n      li {\n        color: #96acb3;\n        list-style: decimal;\n        line-height: ","\n      }\n      a {\n        text-decoration: none\n        text-shadow: none\n        color: rgb(82, 82, 82);\n      }\n    }\n  }\n"]);return ce=function(){return e},e}function oe(){var e=se(["\n  font-size: ","\n  font-weight: bold\n  color: grey\n"]);return oe=function(){return e},e}function le(){var e=se(["\n  margin: "," 0 "," 0\n  padding: "," ","\n  background-color: rgba(224, 224, 224, 0.5);\n"]);return le=function(){return e},e}function se(e,t){return t||(t=e.slice(0)),e.raw=t,e}var ue=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={active:!1},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this,t=this.state.active;return r.a.createElement(de,null,r.a.createElement(ie,null,r.a.createElement(ie.Title,{active:t,onClick:function(n){e.setState({active:!t})}},r.a.createElement(V.a,{name:"dropdown",color:"grey"}),r.a.createElement(pe,null,"目次")),r.a.createElement(ie.Content,{active:t},r.a.createElement(be,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.data}})))))},a}(a.Component),de=l.a.div(le(),Object(p.a)(3),Object(p.a)(1),Object(p.a)(.5),Object(p.a)(1)),pe=l.a.span(oe(),Object(p.b)(1/6).fontSize),be=l.a.div(ce(),Object(p.a)(1)),fe=(n("dZ+Y"),n("85CM"));function me(e){var t=e.children,n=e.className,a=e.content,i=e.hidden,c=e.visible,o=O()(Object(j.a)(c,"visible"),Object(j.a)(i,"hidden"),"content",n),l=Object(g.a)(me,e),s=Object(J.a)(me,e);return r.a.createElement(s,h()({},l,{className:o}),Z.a.isNil(t)?a:t)}me.handledProps=["as","children","className","content","hidden","visible"],me.propTypes={};var he=me;function ve(e){var t=e.attached,n=e.basic,a=e.buttons,i=e.children,c=e.className,o=e.color,l=e.compact,s=e.content,u=e.floated,d=e.fluid,p=e.icon,b=e.inverted,f=e.labeled,m=e.negative,v=e.positive,y=e.primary,k=e.secondary,w=e.size,E=e.toggle,x=e.vertical,C=e.widths,N=O()("ui",o,w,Object(j.a)(n,"basic"),Object(j.a)(l,"compact"),Object(j.a)(d,"fluid"),Object(j.a)(p,"icon"),Object(j.a)(b,"inverted"),Object(j.a)(f,"labeled"),Object(j.a)(m,"negative"),Object(j.a)(v,"positive"),Object(j.a)(y,"primary"),Object(j.a)(k,"secondary"),Object(j.a)(E,"toggle"),Object(j.a)(x,"vertical"),Object(j.b)(t,"attached"),Object(j.d)(u,"floated"),Object(j.f)(C),"buttons",c),T=Object(g.a)(ve,e),I=Object(J.a)(ve,e);return Q()(a)?r.a.createElement(I,h()({},T,{className:N}),Z.a.isNil(i)?s:i):r.a.createElement(I,h()({},T,{className:N}),K()(a,(function(e){return ke.create(e)})))}ve.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],ve.propTypes={};var Oe=ve;function je(e){var t=e.className,n=e.text,a=O()("or",t),i=Object(g.a)(je,e),c=Object(J.a)(je,e);return r.a.createElement(c,h()({},i,{className:a,"data-text":n}))}je.handledProps=["as","className","text"],je.propTypes={};var ge=je,ye=function(e){function t(){var e,n;E()(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return n=T()(this,(e=z()(t)).call.apply(e,[this].concat(i))),R()(S()(n),"ref",Object(a.createRef)()),R()(S()(n),"computeElementType",(function(){var e=n.props,t=e.attached,a=e.label;if(!Q()(t)||!Q()(a))return"div"})),R()(S()(n),"computeTabIndex",(function(e){var t=n.props,a=t.disabled,r=t.tabIndex;return Q()(r)?a?-1:"div"===e?0:void 0:r})),R()(S()(n),"focus",(function(){return G()(n.ref.current,"focus")})),R()(S()(n),"handleClick",(function(e){n.props.disabled?e.preventDefault():G()(n.props,"onClick",e,n.props)})),R()(S()(n),"hasIconClass",(function(){var e=n.props,t=e.labelPosition,a=e.children,r=e.content,i=e.icon;return!0===i||i&&(t||Z.a.isNil(a)&&Q()(r))})),n}return M()(t,e),C()(t,[{key:"computeButtonAriaRole",value:function(e){var t=this.props.role;return Q()(t)?"button"!==e?"button":void 0:t}},{key:"render",value:function(){var e=this.props,n=e.active,a=e.animated,i=e.attached,c=e.basic,o=e.children,l=e.circular,u=e.className,d=e.color,p=e.compact,b=e.content,f=e.disabled,m=e.floated,v=e.fluid,y=e.icon,k=e.inverted,w=e.label,E=e.labelPosition,x=e.loading,C=e.negative,N=e.positive,T=e.primary,I=e.secondary,z=e.size,P=e.toggle,S=O()(d,z,Object(j.a)(n,"active"),Object(j.a)(c,"basic"),Object(j.a)(l,"circular"),Object(j.a)(p,"compact"),Object(j.a)(v,"fluid"),Object(j.a)(this.hasIconClass(),"icon"),Object(j.a)(k,"inverted"),Object(j.a)(x,"loading"),Object(j.a)(C,"negative"),Object(j.a)(N,"positive"),Object(j.a)(T,"primary"),Object(j.a)(I,"secondary"),Object(j.a)(P,"toggle"),Object(j.b)(a,"animated"),Object(j.b)(i,"attached")),A=O()(Object(j.b)(E||!!w,"labeled")),M=O()(Object(j.a)(f,"disabled"),Object(j.d)(m,"floated")),_=Object(g.a)(t,this.props),R=Object(J.a)(t,this.props,this.computeElementType),W=this.computeTabIndex(R);if(!Q()(w)){var K=O()("ui",S,"button",u),D=O()("ui",A,"button",u,M),G=s.a.create(w,{defaultProps:{basic:!0,pointing:"left"===E?"right":"left"},autoGenerateKey:!1});return r.a.createElement(R,h()({},_,{className:D,onClick:this.handleClick}),"left"===E&&G,r.a.createElement(fe.a,{innerRef:this.ref},r.a.createElement("button",{className:K,"aria-pressed":P?!!n:void 0,disabled:f,tabIndex:W},V.a.create(y,{autoGenerateKey:!1})," ",b)),("right"===E||!E)&&G)}var L=O()("ui",S,M,A,"button",u),q=!Z.a.isNil(o),B=this.computeButtonAriaRole(R);return r.a.createElement(fe.a,{innerRef:this.ref},r.a.createElement(R,h()({},_,{className:L,"aria-pressed":P?!!n:void 0,disabled:f&&"button"===R||void 0,onClick:this.handleClick,role:B,tabIndex:W}),q&&o,!q&&V.a.create(y,{autoGenerateKey:!1}),!q&&b))}}]),t}(a.Component);R()(ye,"defaultProps",{as:"button"}),R()(ye,"Content",he),R()(ye,"Group",Oe),R()(ye,"Or",ge),R()(ye,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]),ye.propTypes={},ye.create=Object(Y.a)(ye,(function(e){return{content:e}}));var ke=ye;function we(){var e=Ce(["\n  width: 100%\n  border-radius: 0 !important\n"]);return we=function(){return e},e}function Ee(){var e=Ce(["\n  width: 100%;\n"]);return Ee=function(){return e},e}function xe(){var e=Ce(["\n  margin: "," 0;\n  display: flex\n  justify-content: space-around\n"]);return xe=function(){return e},e}function Ce(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Ne=function(e){var t=e.url,n=e.title;return r.a.createElement(Te,null,r.a.createElement(Ie,{href:"https://www.facebook.com/share.php?u="+t,target:"_blank",rel:"nofollow"},r.a.createElement(ke,{color:"facebook",icon:"facebook",as:ze})),r.a.createElement(Ie,{href:"https://twiter.com/share?url="+t,target:"_blank",rel:"nofollow"},r.a.createElement(ke,{color:"twitter",icon:"twitter",as:ze})),r.a.createElement(Ie,{href:"https://b.hatena.ne.jp/add?mode=confirm&url="+t+"&title="+n,target:"_blank",rel:"nofollow"},r.a.createElement(ke,{color:"linkedin",content:"B!",as:ze})),r.a.createElement(Ie,{href:"https://getpocket.com/edit?url="+t+"&title="+n,target:"_blank",rel:"nofollow"},r.a.createElement(ke,{color:"youtube",icon:"get pocket",as:ze})))},Te=l.a.div(xe(),Object(p.a)(1)),Ie=l.a.a(Ee()),ze=l.a.button(we());function Pe(){var e=Le(["\n  display: flex;\n"]);return Pe=function(){return e},e}function Se(){var e=Le([""]);return Se=function(){return e},e}function Ae(){var e=Le(["\n  font-size: ","\n  line-height: ","\n  margin-top: ","\n"]);return Ae=function(){return e},e}function Me(){var e=Le(["\n  font-size: ","\n  line-height: ","\n  padding-top: ","\n  margin-bottom: 0\n  color:  #4b5454\n"]);return Me=function(){return e},e}function _e(){var e=Le(["\n  padding-top: ","\n  font-size: ","\n  line-height: ","\n"]);return _e=function(){return e},e}function Re(){var e=Le(["\n  padding-top: ","\n  font-size: ","\n  line-height: ","\n"]);return Re=function(){return e},e}function We(){var e=Le(["\n  padding-top: ",";\n  .anchor {\n    background-image: none;\n  }\n  & > p {\n    font-size: ","\n    line-height: ","\n    margin: "," 0\n  }\n  & > ol > li {\n    font-size: ","\n    line-height: ","\n  }\n  & > h2 {\n    font-size: ","\n    line-height: ","\n  }\n  & > ul > li {\n    font-size: ","\n    line-height: ","\n  }\n"]);return We=function(){return e},e}function Ke(){var e=Le(["\n  padding-top: ",";\n  .anchor {\n    background-image: none;\n  }\n  & > p {\n    font-size: ","\n    line-height: ","\n    margin: "," 0\n  }\n  & > ol > li {\n    font-size: ","\n    line-height: ","\n  }\n  & > h2 {\n    font-size: ","\n    line-height: ","\n  }\n  & > ul > li {\n    font-size: ","\n    line-height: ","\n  }\n"]);return Ke=function(){return e},e}function De(){var e=Le(["\n  padding-bottom: ","\n  margin: auto\n  width: 84%\n"]);return De=function(){return e},e}function Ge(){var e=Le(["\n  background-color: white\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;\n"]);return Ge=function(){return e},e}function Le(e,t){return t||(t=e.slice(0)),e.raw=t,e}var qe=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getTags=function(e){return e.map((function(e){return r.a.createElement(s.a,{tag:!0,size:"mini",style:{marginLeft:Object(p.a)(1)}},e)}))},i.render=function(){var e=this.props.metadata,t=this.props.toc,n="https://www.takigawa-memo.com"+e.slug,a=e.title+" - TAKIGAWA MEMO";return r.a.createElement(Be,null,r.a.createElement(He,null,r.a.createElement(u.a,{as:Ue,minWidth:u.a.onlyTablet.minWidth},e.title),r.a.createElement(u.a,{as:Ye,maxWidth:u.a.onlyMobile.maxWidth},e.title),r.a.createElement(Xe,null,r.a.createElement(Fe,null,e.date),r.a.createElement(Ve,null,this.getTags(e.tags))),r.a.createElement(Qe,null,e.description),r.a.createElement(d.a,null),r.a.createElement(b.a,{fileName:e.thumbnail.name,alt:"thumbnail"}),r.a.createElement(Ne,{url:n,title:a}),r.a.createElement(ue,{data:t}),r.a.createElement(u.a,{as:Je,minWidth:u.a.onlyTablet.minWidth,dangerouslySetInnerHTML:{__html:this.props.html}}),r.a.createElement(u.a,{as:Ze,maxWidth:u.a.onlyMobile.maxWidth,dangerouslySetInnerHTML:{__html:this.props.html}})),r.a.createElement(f.a,null))},a}(r.a.Component),Be=l.a.div(Ge()),He=l.a.div(De(),Object(p.a)(4)),Je=l.a.div(Ke(),Object(p.a)(2),Object(p.b)(1/8).fontSize,Object(p.a)(2),Object(p.a)(1),Object(p.b)(1/8).fontSize,Object(p.a)(2),Object(p.b)(.5).fontSize,Object(p.a)(2),Object(p.b)(1/8).fontSize,Object(p.a)(2)),Ze=l.a.div(We(),Object(p.a)(2),Object(p.b)(0).fontSize,Object(p.a)(2),Object(p.a)(1),Object(p.b)(0).fontSize,Object(p.a)(1),Object(p.b)(.5).fontSize,Object(p.a)(2),Object(p.b)(0).fontSize,Object(p.a)(1)),Ue=l.a.h1(Re(),Object(p.a)(4),Object(p.b)(1.5).fontSize,Object(p.a)(3)),Ye=l.a.h1(_e(),Object(p.a)(2),Object(p.b)(1).fontSize,Object(p.a)(2)),Fe=l.a.h4(Me(),Object(p.b)(0).fontSize,Object(p.b)(0).lineHeight,Object(p.a)(1/8)),Qe=l.a.p(Ae(),Object(p.b)(0).fontSize,Object(p.b)(0).lineHeight,Object(p.a)(1)),Ve=l.a.div(Se()),Xe=l.a.div(Pe());n.d(t,"query",(function(){return $e}));t.default=function(e){var t=e.data,n=t.markdownRemark.frontmatter,a=t.markdownRemark.html,l=t.markdownRemark.tableOfContents,s="https://www.takigawa-memo.com"+t.markdownRemark.frontmatter.slug,u="https://www.takigawa-memo.com"+t.markdownRemark.frontmatter.thumbnail.publicURL;return r.a.createElement(i.a,null,r.a.createElement(o.a,{isPostPage:!0,title:n.title,description:n.description,url:s,imageUrl:u}),r.a.createElement(c.a,null,r.a.createElement(qe,{metadata:n,html:a,toc:l})))};var $e="3029658406"},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||i()}}}]);
//# sourceMappingURL=component---src-components-templates-post-template-js-a615060f1b86751e1e62.js.map