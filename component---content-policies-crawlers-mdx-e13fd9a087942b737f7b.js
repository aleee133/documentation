(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{L6wk:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("O6H6"),i={},r={_frontmatter:i},c=l.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"npm's full public dataset is available via the ",Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/registry"},"public registry"),". Using CouchDB replication, you can get a full copy of all metadata, and it is acceptable within our terms of use to download copies of tarballs for inspection or experimentation."),Object(o.b)("p",null,"npm's ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com"},"website")," also has package metadata available. We allow this content to be indexed by commercial crawlers such as GoogleBot. At our discretion, we also allow experimental crawlers to access the site, as long as they keep their request velocity to 1 request per second or less. At that velocity, indexing all packages would take 3 days, so if you want a full copy of our metadata it is always going to be faster to access the data via replication, which takes only an hour or two to provide full data and will thereafter automatically stay in sync."),Object(o.b)("p",null,"If you do not wish to install CouchDB to manage replication, we provide ",Object(o.b)("a",{parentName:"p",href:"https://github.com/npm/concurrent-couch-follower"},"open source software")," that makes it easy to sync to the registry's public feed."),Object(o.b)("p",null,"If you attempt to access package metadata by high-velocity crawling of the npm website, we reserve the right to rate-limit or ban your IP, user-agent or both."))}s.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),l=a("aOgs"),i=a("q1tI"),r=a.n(i),c=a("7ljp"),s=a("pD55"),m=a("8Aig"),u=a("ReZb"),p=a("GCVy"),d=a("+6vE");var b=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=a("gnlW"),y=a("mwnC"),g=a("/Rw0"),w=a("dVM4"),E=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,a=e.depth;return r.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:a+1}):null)})))}v.defaultProps={depth:0};var k=v,x=a("MfeC");function O(e){var t=x.a.getPath(e.location.pathname),a=x.a.getVariantAndPage(e.root,t);if(!a)return null;var n=x.a.getVariantsForPage(e.root,a.page),l=[],i=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(i=e),l.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,i.variant.title),r.a.createElement(O.Menu,{direction:e.direction,width:e.menuWidth},l)))}O.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var _=O,C=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),j=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),N=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,i=a.frontmatter,E=i.title,v=i.description,O=i.status,B=i.source,G=i.additionalContributors,H=void 0===G?[]:G,W=x.a.getVariantRoot(n.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:b,PromptReply:h,Screenshot:f.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:E,description:v}),r.a.createElement(m.b,{location:n,isSearchEnabled:a.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(y.a,{editOnGitHub:a.themeOptions.editOnGitHub,location:n})),r.a.createElement(j,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},E),v))),null!=W?r.a.createElement(S,null,r.a.createElement(_,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:n})):null),a.tableOfContents.items?r.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:a.tableOfContents.items})):null,r.a.createElement(z,null,O||B?r.a.createElement(o.k,{mb:3,alignItems:"center"},O?r.a.createElement(w.a,{status:O}):null,r.a.createElement(o.e,{mx:"auto"}),B?r.a.createElement(g.a,{href:B}):null):null,a.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:l.b,mr:2}):r.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(k,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(H.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-policies-crawlers-mdx-e13fd9a087942b737f7b.js.map