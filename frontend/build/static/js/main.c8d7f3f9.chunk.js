(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(10),r=n.n(i),o=(n(98),n(99),n(25)),s=n(150),l=n(109),d=n(155),j=n(170),u=n(153),b=n(4),h=Object(s.a)((function(e){return Object(j.a)({root:{display:"flex",justifyContent:"center","& > * + *":{marginLeft:e.spacing(2)}}})})),O=function(){var e=h();return Object(b.jsx)("div",{className:e.root,children:Object(b.jsx)(u.a,{})})},p=n(16),f=n(28),x=Object(f.b)({name:"generation",initialState:{generation:0},reducers:{changeGeneration:function(e,t){e.generation=t.payload}}}),g=x.actions.changeGeneration,m=function(e){return e.generationReducer.generation},v=x.reducer,y=Object(f.b)({name:"searchStore",initialState:{search:""},reducers:{changeGeneration:function(e,t){e.search=t.payload}}}),k=y.actions.changeGeneration,C=function(e){return e.searchReducer.search},w=y.reducer,N=Object(f.b)({name:"stockStore",initialState:{stcok:null},reducers:{changeGeneration:function(e,t){e.stcok=t.payload}}}),S=N.actions.changeGeneration,G=function(e){return e.stockReducer.stcok},L=N.reducer,I=Object(s.a)((function(e){return{outer:{width:"100%",height:"100%",backgroundColor:e.palette.background.default,display:"flex",alignItems:"center",justifyContent:"center"},inner:{width:"720px",minHeight:"420px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},message:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",margin:"16px"},buttonArea:{display:"flex",alignItems:"center",justifyContent:"center",margin:"16px"}}})),R=function(){var e=I(),t=a.a.useState(null),n=Object(o.a)(t,2),c=(n[0],n[1]),i=a.a.useState(!0),r=Object(o.a)(i,2),s=r[0],j=r[1],u=Object(p.c)(m),h=Object(p.c)(C),f=Object(p.c)(G),x=Object(p.b)(),v=function(){fetch("https://raw.githubusercontent.com/makoto14/lesson-python/main/asset/stock_data/data.json").then((function(e){return e.json()})).then((function(e){var t=JSON.parse(e);console.log(t),c(t),x(S(t))})).then((function(){return j(!1)}))};return a.a.useEffect((function(){v()}),[]),Object(b.jsx)("div",{className:e.outer,children:Object(b.jsxs)(l.a,{className:e.inner,children:[Object(b.jsxs)("div",{className:e.message,children:[Object(b.jsx)("div",{className:e.message,children:null===s||null===f?Object(b.jsx)(O,{}):JSON.stringify(f.Open)}),Object(b.jsxs)("div",{className:e.message,children:["Click count : ",u]}),Object(b.jsxs)("div",{className:e.message,children:["Search input : ",h]})]}),Object(b.jsxs)("div",{className:e.buttonArea,children:[Object(b.jsx)(d.a,{color:"primary",onClick:function(){x(g(u+=-1)),x(k("minus"))},children:"Minus"}),Object(b.jsx)(d.a,{variant:"contained",onClick:function(){x(g(u+=1)),x(k("add")),j(!0),v()},children:"Add"})]})]})})},D=n(31),T=n(13),A=n(162),M=n(163),B=n(160),E=n(57),F=n(161),H=n(84),J=n(81),P=n.n(J),z=n(82),W=n.n(z),K=n(62),U=n(3),_=n(169),q=n(156),Q=n(159),V=n(110),X=n(157),Y=n(158),Z=n(78),$=n.n(Z),ee=n(79),te=n.n(ee),ne=n(76),ce=n.n(ne),ae=n(77),ie=n.n(ae),re=n(80),oe=n.n(re),se=n(12),le=Object(s.a)({list:{width:250},fullList:{width:"auto"}});function de(){var e=le(),t=a.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(o.a)(t,2),c=n[0],i=n[1],r="left",s=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(Object(K.a)(Object(K.a)({},c),{},Object(D.a)({},r,e)))}},l=Object(se.f)(),d=function(e){console.log(e),s(!1),l.push(e)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(B.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:s(!0),children:Object(b.jsx)(oe.a,{})}),Object(b.jsx)(_.a,{anchor:r,open:c.left,onClose:s(!1),children:function(t){return Object(b.jsxs)("div",{className:Object(U.a)(e.list,Object(D.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:s(!1),onKeyDown:s(!1),children:[Object(b.jsx)(q.a,{children:["Home"].map((function(e,t){return Object(b.jsxs)(V.a,{button:!0,onClick:function(){return d("/")},children:[Object(b.jsx)(X.a,{children:Object(b.jsx)(ce.a,{})}),Object(b.jsx)(Y.a,{primary:e})]},e)}))}),Object(b.jsx)(Q.a,{}),Object(b.jsx)(q.a,{children:["Todo"].map((function(e,t){return Object(b.jsxs)(V.a,{button:!0,onClick:function(){return d("/todo")},children:[Object(b.jsx)(X.a,{children:Object(b.jsx)(ie.a,{})}),Object(b.jsx)(Y.a,{primary:e})]},e)}))}),Object(b.jsx)(Q.a,{}),Object(b.jsx)(q.a,{children:["Hoge","Hoge2"].map((function(e,t){return Object(b.jsxs)(V.a,{button:!0,onClick:function(){return d("/hoge")},children:[Object(b.jsx)(X.a,{children:t%2===0?Object(b.jsx)($.a,{}):Object(b.jsx)(te.a,{})}),Object(b.jsx)(Y.a,{primary:e})]},e)}))})]})}(r)})]})}var je=n(165),ue=Object(s.a)((function(e){return Object(j.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(D.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(D.a)({position:"relative",display:"flex",alignItems:"center",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.b)(e.palette.common.white,.4),marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(D.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(D.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})})}));function be(){var e=ue(),t=a.a.useState(null),n=Object(o.a)(t,2),c=n[0],i=n[1],r=Boolean(c),s=Object(p.b)(),l=function(){i(null)},d="primary-search-account-menu",j=Object(b.jsxs)(H.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:d,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:l,children:[Object(b.jsx)(F.a,{onClick:l,children:"Profile"}),Object(b.jsx)(F.a,{onClick:l,children:"My account"})]});return Object(b.jsxs)("div",{className:e.grow,children:[Object(b.jsx)(A.a,{position:"static",children:Object(b.jsxs)(M.a,{children:[Object(b.jsx)(de,{}),Object(b.jsx)(E.a,{className:e.title,variant:"h6",noWrap:!0,children:"Material-UI-Test"}),Object(b.jsxs)("div",{className:e.search,children:[Object(b.jsx)("div",{className:e.searchIcon,children:Object(b.jsx)(P.a,{})}),Object(b.jsx)(je.a,{id:"standard-basic",label:"Search",color:"primary",onChange:function(e){s(k(e.target.value))}})]}),Object(b.jsx)("div",{className:e.grow}),Object(b.jsx)("div",{className:e.sectionDesktop,children:Object(b.jsx)(B.a,{edge:"end","aria-label":"account of current user","aria-controls":d,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"inherit",children:Object(b.jsx)(W.a,{})})})]})}),j]})}var he=n(61),Oe={todoList:new Array},pe=Object(f.b)({name:"todoStore",initialState:Oe,reducers:{changeGeneration:function(e,t){e.todoList=t.payload},addGeneration:function(e,t){e.todoList.unshift(t.payload)},doneGeneration:function(e,t){var n=e.todoList.find((function(e){return t.payload===e.id}));void 0!==n?n.isDone=!(null===n||void 0===n?void 0:n.isDone):console.error("undefined todo")},deleteGeneration:function(e,t){e.todoList=e.todoList.filter((function(e){return t.payload!==e.id}))}}}),fe=pe.actions,xe=(fe.changeGeneration,fe.addGeneration),ge=fe.doneGeneration,me=fe.deleteGeneration,ve=function(e){return e.todoReducer.todoList},ye=pe.reducer,ke=Object(f.a)({reducer:{generationReducer:v,searchReducer:w,stockReducer:L,todoReducer:ye}}),Ce=n(168),we=n(164),Ne=n(83),Se=n.n(Ne),Ge=Object(s.a)((function(e){return Object(j.a)({root:{width:"100%",backgroundColor:e.palette.background.paper}})}));function Le(e){var t=e.todos,n=Ge(),c=Object(p.b)(),a=function(e){return function(){c(ge(e))}},i=function(e){return function(){c(me(e))}};return Object(b.jsx)(q.a,{className:n.root,children:t.map((function(e){var t="checkbox-list-label-".concat(e.id);return Object(b.jsxs)(V.a,{role:void 0,dense:!0,button:!0,onClick:a(e.id),children:[Object(b.jsx)(X.a,{children:Object(b.jsx)(Ce.a,{edge:"start",checked:e.isDone,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(b.jsx)(Y.a,{id:t,primary:e.name}),Object(b.jsx)(we.a,{children:Object(b.jsx)(B.a,{edge:"end","aria-label":"comments",onClick:i(e.id),children:Object(b.jsx)(Se.a,{})})})]},e.id)}))})}var Ie=n(167),Re=Object(s.a)((function(e){return Object(j.a)({root:{display:"flex",justifyContent:"center",margin:"24px"},todoContainer:{width:"600px",backgroundColor:e.palette.background.paper},newTodo:{display:"flex"}})})),De=function(){var e=Re(),t=a.a.useState(""),n=Object(o.a)(t,2),c=n[0],i=n[1],r=a.a.useState(!1),s=Object(o.a)(r,2),l=s[0],j=s[1],u=a.a.useState(""),h=Object(o.a)(u,2),O=h[0],f=h[1],x=Object(p.c)(ve),g=Object(p.b)(),m=function(){var e="",t=!1;return""===c&&(t=!0,e="Input string is empty"),f(e),j(t),t},v=function(){i("")};return Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)("div",{className:e.todoContainer,children:[Object(b.jsxs)("div",{className:e.newTodo,children:[Object(b.jsx)(je.a,{id:"standard-basic",label:"ToDo name",color:"primary",fullWidth:!0,value:c,onChange:function(e){i(e.target.value)},helperText:O,error:l}),Object(b.jsx)(d.a,{color:"primary",onClick:function(){if(!m()){var e={id:Object(Ie.a)(),name:c,isDone:!1};g(xe(e)),v()}},children:"Add"})]}),Object(b.jsx)(Le,{todos:x})]})})};var Te=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(he.a,{basename:".",children:Object(b.jsxs)(p.a,{store:ke,children:[Object(b.jsx)(be,{}),Object(b.jsxs)(se.c,{children:[Object(b.jsx)(se.a,{path:"/hoge",component:R}),Object(b.jsx)(se.a,{path:"/todo",component:De})]})]})})})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Te,{})}),document.getElementById("root")),Ae()},98:function(e,t,n){},99:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.c8d7f3f9.chunk.js.map