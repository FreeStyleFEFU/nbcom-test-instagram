(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3590:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>m,routeModule:()=>u,tree:()=>c});var o=s(7096),r=s(6132),n=s(7284),a=s.n(n),i=s(2564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5446)),"/home/mikhail/PhpstormProjects/nbcom-test-instagram/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,5345)),"/home/mikhail/PhpstormProjects/nbcom-test-instagram/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/home/mikhail/PhpstormProjects/nbcom-test-instagram/app/page.tsx"],d="/page",h={require:s,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6212:(e,t,s)=>{Promise.resolve().then(s.bind(s,1652))},1652:(e,t,s)=>{"use strict";s.r(t),s.d(t,{PhotosList:()=>PhotosList});var o=s(784),r=s(9885);let makeQueries=e=>void 0!==e?Object.entries(e).reduce((e,[t,s])=>`${e}&${t}=${s}`,"?"):"",getPhotos=e=>fetch(`https://jsonplaceholder.typicode.com/photos${makeQueries(e)}`).then(e=>e.json()),getComments=e=>fetch(`https://jsonplaceholder.typicode.com/comments${makeQueries(e)}`).then(e=>e.json());var n=s(566);let Picture=e=>{let{src:t,src2x:s,alt:r,className:a,classes:i,...l}=e;return void 0===t?(console.warn("Image component must have src or sources property"),null):o.jsx("picture",{className:i?.picture,children:o.jsx("img",{src:t,srcSet:s?`${s} 2x`:void 0,alt:r??"",className:(0,n.Z)(a,i?.image),...l})})};var a=s(373),i=s.n(a);let Spinner=e=>{let{classes:t,isHidden:s,size:r="default"}=e,a={xsmall:8,default:24,large:50,xlarge:120}[r];return o.jsx("div",{className:(0,n.Z)(i().root,s&&i().hidden,t?.root),children:o.jsx("svg",{width:a,height:a,className:i().svg,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("circle",{className:(0,n.Z)(i().circle,t?.circle),cx:"50",cy:"50",r:"45"})})})};var l=s(3474),c=s.n(l);let Comment=e=>{let{className:t,data:{name:s,body:r}}=e;return(0,o.jsxs)("div",{className:(0,n.Z)(c().root,t),children:[(0,o.jsxs)("div",{className:c().textBlock,children:[o.jsx("span",{className:c().name,children:s}),":"," ",o.jsx("span",{className:c().comment,children:r})]}),o.jsx("button",{type:"button",className:c().button,onClick:()=>prompt("Фейковый комментарий без пост запроса",""),children:"Ответить"})]})};var m=s(1161),d=s.n(m);let PhotoDetails=e=>{let{className:t,onBackButtonClick:s,data:{id:a,title:i,url:l}}=e,[c,m]=(0,r.useState)([]),[h,u]=(0,r.useState)(!1),[_,p]=(0,r.useState)(!1),fetchComments=()=>{_||(p(!0),getComments({postId:a}).then(m).catch(console.error).finally(()=>{p(!1),u(!0)}))};return(0,r.useEffect)(()=>{fetchComments()},[]),(0,o.jsxs)("article",{className:(0,n.Z)(d().root,t),children:[(0,o.jsxs)("header",{className:d().header,children:[o.jsx("button",{type:"button",className:d().backButton,"aria-label":"go-to-back",onClick:s,children:"<"}),o.jsx("h3",{title:i,className:d().title,children:i})]}),o.jsx(Picture,{classes:{picture:d().picture,image:d().image},src:l,alt:i}),(0,o.jsxs)("div",{className:d().commentsContainer,children:[_&&o.jsx(Spinner,{size:"large",classes:{root:d().spinner}}),h&&0===c.length&&"Комментарии отсуствуют",c.length>0&&o.jsx("ul",{className:d().comments,children:c.map(e=>o.jsx("li",{className:d().comment,children:o.jsx(Comment,{data:e})},e.id))})]})]})};var h=s(9299),u=s.n(h);let PhotosList=e=>{let{initialItems:t}=e,[s,n]=(0,r.useState)(t),[a,i]=(0,r.useState)(null),[l,c]=(0,r.useState)(!1),[m,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),openPhotoDetails=e=>{i(e),document.body.classList.add(u().isScrollBlocked)},_=(0,r.useCallback)(()=>{l||(c(!0),getPhotos({_start:s.length+1,_limit:30}).then(e=>{n(t=>[...t,...e])}).catch(console.error).finally(()=>{c(!1),d(!0)}))},[l,s.length]),p=(0,r.useCallback)(()=>{if(s.length>=300||null===h||null===h.current)return;if(m){d(!1);return}let e=h.current.getBoundingClientRect().bottom;window.innerHeight+1<e||_()},[_,m,s.length]);return(0,r.useEffect)(()=>(window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)),[p]),(0,o.jsxs)("div",{className:u().root,children:[o.jsx("ul",{ref:h,className:u().list,children:s.map(e=>o.jsx("li",{className:u().item,children:o.jsx("button",{type:"button","aria-label":"go-to-photo-details",className:u().button,onClick:()=>openPhotoDetails(e),children:o.jsx(Picture,{alt:e.title,src:e.thumbnailUrl,classes:{picture:u().picture,image:u().image}})})},e.id))}),l&&o.jsx(Spinner,{size:"large",classes:{root:u().spinner}}),null!==a&&o.jsx(PhotoDetails,{data:a,onBackButtonClick:()=>{i(null),document.body.classList.remove(u().isScrollBlocked)},className:u().photoDetails})]})}},8196:e=>{e.exports={root:"Container_root__jXnmB"}},373:e=>{e.exports={root:"Spinner_root__Q9Eaz",hidden:"Spinner_hidden__btVhe",svg:"Spinner_svg__syAWb",spin:"Spinner_spin__0MN__",circle:"Spinner_circle__FgyjM","loader-animation":"Spinner_loader-animation__PbWX1"}},3474:e=>{e.exports={name:"Comment_name__V8YKA",comment:"Comment_comment__A7oE9",button:"Comment_button__39V8U"}},1161:e=>{e.exports={root:"PhotoDetails_root__x8M9c",header:"PhotoDetails_header__xnxn6",backButton:"PhotoDetails_backButton__5RPku",title:"PhotoDetails_title__fNZUv",picture:"PhotoDetails_picture__Uuyb2",image:"PhotoDetails_image__oh0NX",commentsContainer:"PhotoDetails_commentsContainer__xn9nd",comment:"PhotoDetails_comment__bxvS4",spinner:"PhotoDetails_spinner__iMtXY"}},9299:e=>{e.exports={root:"PhotosList_root__ZvIe5",list:"PhotosList_list__1Jj8C",item:"PhotosList_item__1_rc8",button:"PhotosList_button__FM28f",picture:"PhotosList_picture__87TdJ",image:"PhotosList_image__TmEZn",spinner:"PhotosList_spinner__GH0jf",photoDetails:"PhotosList_photoDetails__7vggl",isScrollBlocked:"PhotosList_isScrollBlocked__sWkA6"}},5446:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>getData,dynamic:()=>d});var o=s(4656);let makeQueries=e=>void 0!==e?Object.entries(e).reduce((e,[t,s])=>`${e}&${t}=${s}`,"?"):"",getPhotos=e=>fetch(`https://jsonplaceholder.typicode.com/photos${makeQueries(e)}`).then(e=>e.json());s(3542);var r=s(8196),n=s.n(r);let Container=({children:e})=>o.jsx("div",{className:n().root,children:e});var a=s(5153);let i=(0,a.createProxy)(String.raw`/home/mikhail/PhpstormProjects/nbcom-test-instagram/components/home/PhotosList/PhotosList.tsx`),{__esModule:l,$$typeof:c}=i;i.default;let m=i.PhotosList,Home=e=>{let{items:t}=e;return o.jsx(Container,{children:o.jsx(m,{initialItems:t})})},d="force-dynamic";async function getData(){let e=await getPhotos({_start:0,_limit:30});return o.jsx(Home,{items:e})}},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var o=s(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,o.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[214,102,757],()=>__webpack_exec__(3590));module.exports=s})();