(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"C6/n":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),o=n("ayPR"),r=n("3MMh"),c=n("gP4Z"),l=(n("f3/d"),n("vOnD")),m=n("p3AD"),p=n("shvM"),s=n("eJM4"),d=n("rOcY");var h=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={active:!1},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.getToc=function(e){if(e)return i.a.createElement(w,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.data}}))},o.render=function(){var e=this,t=this.state.active;return i.a.createElement(b,null,i.a.createElement(u,null,i.a.createElement("div",null,i.a.createElement(f,null,"目次")),i.a.createElement(g,{onClick:function(){return e.setState({active:!t})}},i.a.createElement("span",null,t?"-":"+"))),this.getToc(t))},a}(a.Component),b=l.a.div.withConfig({componentId:"stcxjh-0"})(["margin:"," 0 "," 0;padding:"," ",";background-color:rgba(224,224,224,0.5);@media (min-width:","){width:56%;}"],Object(m.a)(3),Object(m.a)(1),Object(m.a)(.5),Object(m.a)(1),d.responsive.tablet.minWidth),f=l.a.span.withConfig({componentId:"stcxjh-1"})(["font-size:",";font-weight:bold;color:rgb(87,87,87);"],Object(m.b)(1/6).fontSize),u=l.a.div.withConfig({componentId:"stcxjh-2"})(["display:flex;flex-direction:row;justify-content:space-between;"]),g=l.a.div.withConfig({componentId:"stcxjh-3"})(["cursor:pointer;width:",";height:",";border-radius:50%;background:rgba(156,156,156,0.5);text-align:center;& > span{font-weight:bold;}"],Object(m.a)(1.2),Object(m.a)(1.2)),w=l.a.div.withConfig({componentId:"stcxjh-4"})(["width:80%;margin:0 auto;padding:"," 0;& > div > ul{width:auto;li{color:#96acb3;list-style:decimal;line-height:",";p{margin-bottom:0;}ul{margin-top:0;}}a{text-decoration:none;text-shadow:none;color:rgb(82,82,82);}}}"],Object(m.a)(1),Object(m.a)(1.5)),j=function(e){var t=e.url,n=e.title;return i.a.createElement(O,{className:"columns is-mobile"},i.a.createElement(E,{color:"#3b5998",className:"column"},i.a.createElement("a",{href:"https://www.facebook.com/share.php?u="+t,target:"_blank",rel:"noreferrer noopener"},i.a.createElement("i",{className:"fab fa-facebook"}))),i.a.createElement(E,{color:"#55acee",className:"column"},i.a.createElement("a",{href:"https://twitter.com/share?url="+t,target:"_blank",rel:"noreferrer noopener"},i.a.createElement("i",{className:"fab fa-twitter"}))),i.a.createElement(E,{color:"#008fde",className:"column"},i.a.createElement("a",{href:"https://b.hatena.ne.jp/add?mode=confirm&url="+t+"&title="+n,target:"_blank",rel:"noreferrer noopener"},i.a.createElement(v,null,"B!"))),i.a.createElement(E,{color:"#d3505a",className:"column"},i.a.createElement("a",{href:"https://getpocket.com/edit?url="+t+"&title="+n,target:"_blank",rel:"noreferrer noopener"},i.a.createElement("i",{className:"fab fa-get-pocket"}))))},O=l.a.div.withConfig({componentId:"sc-15fiicb-0"})(["margin-top:0;width:100%;margin:auto;"]),E=l.a.div.withConfig({componentId:"sc-15fiicb-1"})(["background:",";padding:0;& > a{display:block;color:#fff;padding:"," 0;text-align:center;font-size:1.3em;}"],(function(e){return e.color}),Object(m.a)(.25)),v=l.a.span.withConfig({componentId:"sc-15fiicb-2"})(["font-weight:bold;"]),k=n("XFC8"),z=n("wppB");var y=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.format||"auto";return i.a.createElement(C,null,i.a.createElement(I,{className:"adsbygoogle","data-ad-client":"ca-pub-6195920683902846","data-ad-slot":"4511974705","data-ad-format":e,"data-full-width-responsive":"true"}))},a}(i.a.Component),C=l.a.div.withConfig({componentId:"fmcwub-0"})(["margin:"," ",";"],Object(m.a)(1),Object(m.a)(.5)),I=l.a.ins.withConfig({componentId:"fmcwub-1"})(["display:block;"]);var _=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.getTags=function(e){return e.map((function(e){return i.a.createElement(z.a,null,e)}))},o.render=function(){var e=this.props.metadata,t=this.props.toc,n="https://www.takigawa-memo.com"+e.slug,a=e.title+" - TAKIGAWA MEMO";return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,null,i.a.createElement(N,{className:"title"},e.title),i.a.createElement(A,null,i.a.createElement(M,null,i.a.createElement("h4",null,e.date)),i.a.createElement(T,null,this.getTags(e.tags))),i.a.createElement(R,null,e.description),i.a.createElement(k.a,null),i.a.createElement(p.a,{fileName:e.thumbnail.name,alt:"thumbnail"}),i.a.createElement(j,{url:n,title:a}),i.a.createElement(h,{data:t}),i.a.createElement(y,null),i.a.createElement(x,{dangerouslySetInnerHTML:{__html:this.props.html}})),i.a.createElement(s.a,null))},a}(i.a.Component),S=l.a.div.withConfig({componentId:"piuekt-0"})(["padding-bottom:",";width:90%;margin:auto;"],Object(m.a)(4)),x=l.a.div.withConfig({componentId:"piuekt-1"})(["padding-top:",";& p{font-size:",";line-height:",";margin:"," 0;}& li{font-size:",";line-height:",";}& tr{font-size:",";line-height:",";}& h2{font-weight:bold;font-size:",";line-height:",";margin:"," 0;}& h3{font-weight:bold;font-size:",";line-height:",";margin:"," 0;}@media (min-width:","){padding-top:",";& p{font-size:",";line-height:",";margin:"," 0;}& li{font-size:",";line-height:",";}& tr{font-size:",";line-height:",";}& h2{font-size:",";line-height:",";}& h3{font-weight:bold;font-size:",";line-height:",";margin:"," 0;}}"],Object(m.a)(2),Object(m.b)(0).fontSize,Object(m.a)(1.5),Object(m.a)(1),Object(m.b)(0).fontSize,Object(m.a)(1.5),Object(m.b)(0).fontSize,Object(m.a)(1.2),Object(m.b)(.5).fontSize,Object(m.a)(2),Object(m.a)(1.5),Object(m.b)(1/6).fontSize,Object(m.a)(2),Object(m.a)(1),d.responsive.tablet.minWidth,Object(m.a)(2),Object(m.b)(0).fontSize,Object(m.a)(1.5),Object(m.a)(1),Object(m.b)(1/8).fontSize,Object(m.a)(2),Object(m.b)(0).fontSize,Object(m.a)(1.5),Object(m.b)(.5).fontSize,Object(m.a)(2),Object(m.b)(1/6).fontSize,Object(m.a)(2),Object(m.a)(1)),N=l.a.h1.withConfig({componentId:"piuekt-2"})(["padding-top:",";font-size:",";line-height:",";@media (min-width:","){padding-top:",";font-size:",";line-height:",";}"],Object(m.a)(2),Object(m.b)(1).fontSize,Object(m.a)(2),d.responsive.tablet.minWidth,Object(m.a)(4),Object(m.b)(1.5).fontSize,Object(m.a)(3)),M=l.a.div.withConfig({componentId:"piuekt-3"})(["& > h4{font-size:",";line-height:",";text-align:center;color:#4b5454;margin:auto;}"],Object(m.b)(0).fontSize,Object(m.a)(2)),R=l.a.p.withConfig({componentId:"piuekt-4"})(["font-size:",";line-height:",";"],Object(m.b)(0).fontSize,Object(m.b)(0).lineHeight),T=l.a.div.withConfig({componentId:"piuekt-5"})(["margin-left:",";height:",";line-height:",";align-self:center;"],Object(m.a)(.5),Object(m.a)(1),Object(m.a)(1)),A=l.a.div.withConfig({componentId:"piuekt-6"})(["display:flex;height:",";"],Object(m.a)(2));n.d(t,"query",(function(){return D}));t.default=function(e){var t=e.data,n=t.markdownRemark.frontmatter,a=t.markdownRemark.html,l=t.markdownRemark.tableOfContents,m="https://www.takigawa-memo.com"+t.markdownRemark.frontmatter.slug,p="https://www.takigawa-memo.com"+t.markdownRemark.frontmatter.thumbnail.publicURL;return i.a.createElement(o.a,null,i.a.createElement(c.a,{isPostPage:!0,title:n.title,description:n.description,url:m,imageUrl:p}),i.a.createElement(r.a,null,i.a.createElement(_,{metadata:n,html:a,toc:l})))};var D="3029658406"},wppB:function(e,t,n){"use strict";var a=n("vOnD"),i=n("p3AD"),o=a.a.span.withConfig({componentId:"sc-1usn3im-0"})(["font-size:",";background:rgba(204,204,204,0.3);border-radius:10%;margin-left:",';display:inline-block;&::before{content:"";padding-left:0.5rem;}&::after{content:"";padding-right:0.5rem;}'],Object(i.b)(-1/6).fontSize,Object(i.a)(.5));t.a=o}}]);
//# sourceMappingURL=component---src-components-templates-post-template-js-b768a0539e1bcf6bfe6e.js.map