(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),l=n("q1tI"),i=n.n(l),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),p=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),g=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var v=E,w=n("MfeC");function N(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},r)))}N.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=N,x=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),P=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,j=l.title,E=l.description,N=l.status,z=l.source,T=l.additionalContributors,H=void 0===T?[]:T,W=w.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:j,description:E}),i.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(y.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},j),E))),null!=W?i.a.createElement(S,null,i.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?i.a.createElement(P,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(v,{items:n.tableOfContents.items})):null,i.a.createElement(I,null,N||z?i.a.createElement(o.k,{mb:3,alignItems:"center"},N?i.a.createElement(O.a,{status:N}):null,i.a.createElement(o.e,{mx:"auto"}),z?i.a.createElement(g.a,{href:z}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},zXE7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),l={},i={_frontmatter:l},c=r.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"npm, Inc. offers software and services under a few different licenses\nand terms of use."),Object(o.b)("h2",null,"Software from npm"),Object(o.b)("p",null,"License terms and notices for the ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," command-line program can\nbe found in the LICENSE file of the project's source code at\n",Object(o.b)("a",{parentName:"p",href:"https://www.github.com/npm/cli"},"https://www.github.com/npm/cli"),"."),Object(o.b)("h2",null,"Free to use npm services"),Object(o.b)("p",null,"Free usage of ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com"},"https://www.npmjs.com"),", the npm public registry,\nand ",Object(o.b)("a",{parentName:"p",href:"https://npm.community"},"https://npm.community"),"\nare covered by the npm Open Source Terms at ",Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/policies/open-source-terms"},"https://docs.npmjs.com/policies/open-source-terms"),".\nThese terms include several important policies, including:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"What npm considers ",Object(o.b)("a",{parentName:"p",href:"/policies/open-source-terms#acceptable-use"},"acceptable package content"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"npm's ",Object(o.b)("a",{parentName:"p",href:"/policies/conduct"},"Code of Conduct"),", which includes our policy on harassment.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"npm's ",Object(o.b)("a",{parentName:"p",href:"/policies/privacy"},"Privacy Policy"),", which limits use and sharing of information\nabout you collected by npm Services.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"npm's policy on ",Object(o.b)("a",{parentName:"p",href:"/policies/dmca"},"copyright")," including how to report violations thereof.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"npm's ",Object(o.b)("a",{parentName:"p",href:"/policies/disputes"},"Dispute Policy"),' which addresses how to resolve disputes\nover the control of a package name, user name, or organization name in the Public Registry. This includes\nour policy on users "squatting" on these names.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"User of npm's trademarks is governed by our ",Object(o.b)("a",{parentName:"p",href:"/policies/trademark"},"Trademark Policy"),". If you\nhave concerns about your own trademark's use on npm please see our ",Object(o.b)("a",{parentName:"p",href:"/policies/disputes#trademarks"},"Disputes Policy"),"."))),Object(o.b)("h2",null,"Paid npm services"),Object(o.b)("p",null,"npm's paid products, including the npm Solo and Orgs plans, are\ncovered by the npm Paid Services Terms at ",Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/policies/private-terms"},"https://docs.npmjs.com/policies/private-terms"),"."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/policies/solo-plan"},"npm Solo Payment Plan"),"\nand the ",Object(o.b)("a",{parentName:"p",href:"/policies/orgs-plan"},"npm Orgs Payment Plan"),"\ngovern payment for these services."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-policies-terms-mdx-30862371186b17d70a85.js.map