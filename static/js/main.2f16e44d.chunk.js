(this["webpackJsonptodo-form"]=this["webpackJsonptodo-form"]||[]).push([[0],{34:function(n,e,t){"use strict";t.r(e);var o,r,c,a,i,l=t(0),d=t.n(l),b=t(14),s=t.n(b),u=t(7),p=t(8),f=t(2),j=t(9),g=Object(u.b)({key:"toDo",default:[]}),x=Object(u.c)({key:"toDoSelector",get:function(n){var e=n.get,t=e(g),o=e(O);return t.filter((function(n){return n.category===o}))}}),m=Object(u.b)({key:"cateTest",default:[]}),O=Object(u.b)({key:"selectOptions",default:""}),h=t(4),y=t(5),v=t(18),k=t(3),w=p.c.div(o||(o=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background-color: darkgray; */\n"]))),S=p.c.input(r||(r=Object(j.a)(["\n    min-width: 200px;\n    padding: 5px 5px;\n    font-size: 1.1rem;\n    outline: none;\n    border: none;\n    color: ",";\n    border-bottom: white solid 1px;\n    background-color: transparent;\n    margin-bottom: 20px;\n"])),(function(n){return n.theme.textColor})),C=p.c.ul(c||(c=Object(j.a)(["\n    display: flex;\n    border-bottom: white dotted 2px;\n    margin-bottom: 30px;\n"]))),q=p.c.button(a||(a=Object(j.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    border: none;\n    border-radius: 20px;\n    padding: 3px 10px;\n    margin: 6px 5px;\n    cursor: pointer;\n    :hover{\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.accentColor})),z=p.c.div(i||(i=Object(j.a)(["\n    font-size: 12px;\n    border: red solid 1px;\n    border-radius: 15px;\n    padding: 1px 5px 2px 5px;\n    margin-left: 15px;\n    color: red;\n    :hover{\n        background-color: red;\n        color: white;\n    }\n"])));var I,D,J=function(){var n=Object(u.f)(O),e=Object(u.d)(m),t=Object(f.a)(e,2),o=t[0],r=t[1],c=Object(v.a)(),a=c.register,i=c.handleSubmit,l=c.setValue,d=function(e){n(e.target.value)},b=function(n){window.confirm('are you sure you want to delete "'.concat(n.target.id,'"?'))&&r((function(e){var t=e.findIndex((function(e){return e.label===n.target.id}));return[].concat(Object(y.a)(e.slice(0,t)),Object(y.a)(e.slice(t+1)))}))};return Object(k.jsxs)(w,{children:[Object(k.jsx)("form",{onSubmit:i((function(e){var t=e.cateInput;r((function(n){return[{label:t,id:Date.now()}].concat(Object(y.a)(n))})),n(t),l("cateInput","")})),autoComplete:"off",children:Object(k.jsx)(S,Object(h.a)(Object(h.a)({},a("cateInput",{required:"create a category"})),{},{placeholder:"Create a category here"}))}),Object(k.jsx)(C,{children:null===o||void 0===o?void 0:o.map((function(n){return Object(k.jsxs)(q,{value:n.label,onClick:d,children:[n.label,Object(k.jsx)(z,{id:n.label,onClick:b,children:"x"},n.id+"delete")]},n.id)}))})]})},L=p.c.input(I||(I=Object(j.a)(["\n  font-size: 1rem;\n  outline: none;\n  padding: 5px 10px;\n  border: none;\n  /* border-bottom-left-radius: 15px; */\n"]))),T=p.c.button(D||(D=Object(j.a)(["\n  font-size: 1rem;\n  padding: 5px 10px 5px 7px;\n  border: none;\n  border-left: dotted 1px gray;\n  border-top-right-radius:15px;\n  border-bottom-right-radius: 15px;\n  background-color: white;\n  color: lightgray;\n  cursor: pointer;\n  :hover{\n    background-color: lightgray;\n    color: gray;\n  }\n"])));var N,E,M,P,B,H=function(){var n=Object(u.f)(g),e=Object(u.e)(O),t=Object(v.a)(),o=t.register,r=t.handleSubmit,c=t.setValue;return Object(k.jsxs)("form",{onSubmit:r((function(t){var o=t.toDo;n((function(n){return[{text:o,id:Date.now(),category:e}].concat(Object(y.a)(n))})),c("toDo","")})),autoComplete:"off",children:[Object(k.jsx)(L,Object(h.a)(Object(h.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(k.jsx)(T,{children:"+"})]})},V=p.c.li(N||(N=Object(j.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    list-style: none;\n    margin-top: 10px;\n    /* background-color: green; */\n"]))),F=p.c.span(E||(E=Object(j.a)(["\n    font-size: 1.2rem;\n    font-weight: 500;\n    "]))),W=p.c.div(M||(M=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    margin-left: 5px;\n"]))),A=p.c.button(P||(P=Object(j.a)(["\n    border:none;\n    border-radius: 20px;\n    padding: 3px 8px;\n    margin-left: 5px;\n    color: gray;\n    background-color: rgba(0, 0, 0, 0.451);\n    cursor: pointer;\n    :hover{\n        background-color: ",";\n        color: ",";\n    }\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.textColor})),G=p.c.button(B||(B=Object(j.a)(["\n    font-size: 12px;\n    border: rgba(255, 0, 0, 0.6) solid 1px;\n    border-radius: 15px;\n    padding: .5px 5px 2px 5.3px;\n    margin-left: 7px;\n    color: rgba(255, 0, 0, 0.6);\n    background-color: transparent;\n    cursor: pointer;\n    :hover{\n        background-color: red;\n        color: white;\n    }\n"])));var K,Q,R,U,X=function(n){var e=n.text,t=(n.category,n.id),o=Object(u.f)(g),r=Object(u.d)(m),c=Object(f.a)(r,2),a=c[0],i=(c[1],Object(u.e)(O)),l=function(n){var r=n.currentTarget.name;o((function(n){var o=n.findIndex((function(n){return n.id===t})),c={text:e,id:t,category:r};return[].concat(Object(y.a)(n.slice(0,o)),[c],Object(y.a)(n.slice(o+1)))}))};return Object(k.jsxs)(V,{children:[Object(k.jsx)(F,{children:e}),Object(k.jsxs)(W,{children:[null===a||void 0===a?void 0:a.filter((function(n){return n.label!==i})).map((function(n){return Object(k.jsx)(A,{name:n.label,onClick:l,children:n.label},"".concat(t,"+").concat(n.label))})),Object(k.jsx)(G,{name:e,onClick:function(n){console.log(n.target.name),o((function(e){var t=e.findIndex((function(e){return e.text===n.target.name}));return[].concat(Object(y.a)(e.slice(0,t)),Object(y.a)(e.slice(t+1)))}))},children:"x"})]})]})},Y=p.c.div(K||(K=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n  padding: 100px 0px;\n"]))),Z=p.c.h1(Q||(Q=Object(j.a)(["\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 30px;\n"]))),$=p.c.h2(R||(R=Object(j.a)(["\n  font-size: 1.4rem;\n  font-weight: 500;\n  margin: 30px 0px 10px 0px;\n"]))),_=p.c.ul(U||(U=Object(j.a)(["\n  margin-top: 15px;\n  /* background-color: green; */\n"])));var nn,en=function(){var n=Object(u.e)(x),e=Object(u.e)(O);return Object(k.jsxs)(Y,{children:[Object(k.jsx)(Z,{children:"ToDoList"}),Object(k.jsx)(J,{}),Object(k.jsxs)($,{children:[e,"-List"]}),Object(k.jsx)(H,{}),Object(k.jsx)(_,{children:null===n||void 0===n?void 0:n.map((function(n){return Object(k.jsx)(X,Object(h.a)({},n),n.id)}))})]})},tn=Object(p.b)(nn||(nn=Object(j.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var on=function(){var n=Object(u.d)(m),e=Object(f.a)(n,2),t=e[0],o=e[1],r=Object(u.d)(g),c=Object(f.a)(r,2),a=c[0],i=c[1],d=Object(u.f)(O);return Object(l.useEffect)((function(){var n,e=localStorage.getItem("category"),t=localStorage.getItem("todoList");null!==e&&(o(JSON.parse(e)),d(null===(n=JSON.parse(e)[0])||void 0===n?void 0:n.label),null!==t&&i(JSON.parse(t)))}),[]),Object(l.useEffect)((function(){localStorage.setItem("category",JSON.stringify(t)),localStorage.setItem("todoList",JSON.stringify(a))})),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(tn,{}),Object(k.jsx)(en,{})]})};s.a.render(Object(k.jsx)(d.a.StrictMode,{children:Object(k.jsx)(u.a,{children:Object(k.jsx)(p.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(k.jsx)(on,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2f16e44d.chunk.js.map