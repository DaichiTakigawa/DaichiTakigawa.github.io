(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{obHf:function(t){t.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"AmplifyとAndroidでPush通知","description":"awsのamplifyとandroidの連携方法をまとめたtutorial。Cognitoでユーザー管理、S3でファイル保存、PinpointとLambdaでPush通知という流れ。この投稿はその第三弾です。","slug":"/amplify-android-pinpoint/","date":"2020.01.23","tags":["AWS","Android"],"thumbnail":{"name":"android-amplify-thumbnail"}}}},{"node":{"frontmatter":{"title":"AmplifyとAndroidでファイル保存","description":"awsのamplifyとandroidの連携方法をまとめたtutorial。Cognitoでユーザー管理、S3でファイル保存、PinpointとLambdaでPush通知という流れ。この投稿はその第二弾です。","slug":"/amplify-android-s3/","date":"2020.01.22","tags":["AWS","Android"],"thumbnail":{"name":"android-amplify-thumbnail"}}}},{"node":{"frontmatter":{"title":"AmplifyとAndroidでログイン","description":"awsのamplifyとandroidの連携方法をまとめたtutorial。Cognitoでユーザー管理、S3でファイル保存、PinpointとLambdaでPush通知という流れ。この投稿はその第一弾です。","slug":"/amplify-android-congito/","date":"2020.01.20","tags":["AWS","Android"],"thumbnail":{"name":"android-amplify-thumbnail"}}}},{"node":{"frontmatter":{"title":"AndroidのImageViewを同じUriで更新する","description":"AndroidのImageViewを同じUriで更新する方法を調べたので備忘録。","slug":"/android-img-update-uri/","date":"2020.01.12","tags":["Android"],"thumbnail":{"name":"android-thumbnail"}}}},{"node":{"frontmatter":{"title":"WindowsにNeovimをインストールする","description":"windowsにneovimをインストールする際に少し躓いたのでまとめました。dein.vimの設定やnerd-fontsのvim-deviconsを導入する方法もまとめてあります。","slug":"/windows-neovim-install/","date":"2020.01.11","tags":["Windows","Neovim"],"thumbnail":{"name":"windows-neovim-thumbnail"}}}},{"node":{"frontmatter":{"title":"Typographyjsのrhythmとscaleの使い方","description":"Gatsbyを用いて作成されたWebサイトでよく見かけるTypograhpyjsのrhythmとscaleの使い方をまとめました。","slug":"/typographyjs-rhythm-scale/","date":"2020.01.03","tags":["Gatsby","Typographyjs"],"thumbnail":{"name":"gatsby-thumbnail"}}}},{"node":{"frontmatter":{"title":"GatsbyとSemanticUIでブログを作成","description":"Hello World. GatsbyとSemanticUIでブログを作成しました。","slug":"/gatsby-semantic-ui/","date":"2019.12.27","tags":["Gatsby","SemanticUI"],"thumbnail":{"name":"gatsby-semantic-ui"}}}}]}}}')},vx99:function(t,n,e){"use strict";e.r(n);var a=e("q1tI"),i=e.n(a),r=e("3MMh"),o=e("ayPR"),l=(e("f3/d"),e("obHf")),u=e("vOnD"),d=e("Wbzz"),c=e("vRqb"),m=e("MqQV"),s=e("Mt1y"),p=e("p3AD"),f=e("shvM");function b(){var t=S(["\n  display: flex;\n"]);return b=function(){return t},t}function g(){var t=S(["\n  font-size: ","\n  line-height: ","\n  padding-top: ","\n  margin-bottom: 0\n  color:  #4b5454\n"]);return g=function(){return t},t}function h(){var t=S(["\n  font-size: ","\n  line-height: ","\n  margin-top: ","\n"]);return h=function(){return t},t}function y(){var t=S(["\n  display: flex\n  justify-content: space-between\n  margin-top: ","\n"]);return y=function(){return t},t}function v(){var t=S(["\n  font-size: ","\n  line-height: ","\n"]);return v=function(){return t},t}function E(){var t=S(["\n  margin-top: 0 !important;\n"]);return E=function(){return t},t}function j(){var t=S(["\n  font-size: ","\n  line-height: ","\n  color: rgb(70, 70, 70);\n  padding-top: ","\n"]);return j=function(){return t},t}function w(){var t=S(["\n  font-size: ","\n  line-height: ","\n  color: rgb(70, 70, 70);\n  padding-top: ","\n  margin-bottom: 0\n"]);return w=function(){return t},t}function O(){var t=S(["\n  padding-top: ","\n  padding-bottom: ","\n  margin: auto\n  width: 80%\n"]);return O=function(){return t},t}function A(){var t=S(["\n  background-color: white\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;\n"]);return A=function(){return t},t}function S(t,n){return n||(n=t.slice(0)),t.raw=n,t}function W(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}var z=function(){return i.a.createElement(d.StaticQuery,{query:"1410138222",render:function(t){return i.a.createElement(x,{data:t})},data:l})},x=function(t){function n(n){var e;return(e=t.call(this,n)||this).data=n.data,e}W(n,t);var e=n.prototype;return e.getlist=function(){return this.data.allMarkdownRemark.edges.map((function(t){var n=t.node.frontmatter;return i.a.createElement(M,{info:n})}))},e.render=function(){return i.a.createElement(P,null,i.a.createElement(k,null,i.a.createElement(c.a,{as:T,minWidth:c.a.onlyTablet.minWidth},"Blog"),i.a.createElement(c.a,{as:I,maxWidth:c.a.onlyMobile.maxWidth},"Blog"),i.a.createElement(C,null),this.getlist()))},n}(i.a.Component),M=function(t){function n(){return t.apply(this,arguments)||this}W(n,t);var e=n.prototype;return e.getTags=function(t){return t.map((function(t){return i.a.createElement(m.a,{tag:!0,size:"mini",style:{marginLeft:Object(p.a)(1)}},t)}))},e.render=function(){var t=this.props.info,n=t.title,e=t.slug,a=t.description,r=t.date,o=t.tags,l=t.thumbnail.name;return i.a.createElement("div",null,i.a.createElement(c.a,{as:U,minWidth:c.a.onlyTablet.minWidth},i.a.createElement("div",{style:{width:Object(p.a)(8),marginRight:Object(p.a)(2)}},i.a.createElement(f.a,{fileName:l,alt:"thumbnail"})),i.a.createElement("div",{style:{margin:"auto",width:"100%"}},i.a.createElement(G,{to:e},n),i.a.createElement(L,null,i.a.createElement(R,null,r),i.a.createElement("div",null,this.getTags(o))),i.a.createElement(N,null,a))),i.a.createElement(c.a,{maxWidth:c.a.onlyMobile.maxWidth},i.a.createElement(f.a,{fileName:l,alt:"thumbnail"}),i.a.createElement("div",null,i.a.createElement(G,{to:e},n),i.a.createElement(L,null,i.a.createElement(R,null,r),i.a.createElement("div",null,this.getTags(o))),i.a.createElement(N,null,a))),i.a.createElement(s.a,null))},n}(i.a.Component),P=u.a.div(A()),k=u.a.div(O(),Object(p.a)(2),Object(p.a)(4)),T=u.a.h1(w(),Object(p.b)(1).fontSize,Object(p.a)(3),Object(p.a)(2)),I=u.a.h1(j(),Object(p.b)(.5).fontSize,Object(p.a)(2),Object(p.a)(1)),C=Object(u.a)(s.a)(E()),G=Object(u.a)(d.Link)(v(),Object(p.b)(1).fontSize,Object(p.a)(2)),L=u.a.div(y(),Object(p.a)(.25)),N=u.a.p(h(),Object(p.b)(0).fontSize,Object(p.a)(1),Object(p.a)(.25)),R=u.a.h4(g(),Object(p.b)(0).fontSize,Object(p.a)(1),Object(p.a)(1/7)),U=u.a.div(b()),q=e("gP4Z");n.default=function(){return i.a.createElement(o.a,null,i.a.createElement(q.a,{title:"ブログ",description:"ブログ"}),i.a.createElement(r.a,{active:"Blog"},i.a.createElement(z,null)))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-21a467131846bfcda824.js.map