(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={label:"filters_label__pesum",input:"filters_input__1q8r8"}},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),o=n(16),i=n(3),l=n(5),b=n.n(l),u=n(37),j=n(4),m=Object(j.b)("contacts/ADD",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(u.a)(),name:t,number:n}}})),d=Object(j.b)("contacts/DELETE"),O=Object(j.b)("contacts/FILTER"),f=n(1);function h(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),l=s[0],u=s[1],j=Object(i.b)(),d=Object(i.c)((function(e){return e.contacts.items})),O=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}};return Object(f.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault();!function(e){return d.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(n)?j(m({name:n,number:l})):alert("".concat(n," is already in contacts.")),c(""),u("")},children:[Object(f.jsxs)("label",{className:b.a.label,children:["Name",Object(f.jsx)("input",{className:b.a.input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:O})]}),Object(f.jsxs)("label",{className:b.a.label,children:["Number",Object(f.jsx)("input",{className:b.a.input,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:O})]}),Object(f.jsx)("button",{className:b.a.btn,type:"submit",children:"Add to contacts"})]})}var p=n(7),_=n.n(p);function x(e){var t=e.id,n=e.name,a=e.number,c=e.onDeleteContact;return Object(f.jsxs)("li",{className:_.a.item,children:[Object(f.jsx)("span",{className:_.a.name,children:n}),Object(f.jsx)("span",{className:_.a.name,children:a}),Object(f.jsx)("button",{className:_.a.btn,type:"button",onClick:function(){return c(t)},children:"Delete"})]})}function v(){var e=Object(i.c)((function(e){return e.contacts.filter})),t=Object(i.c)((function(e){return e.contacts.items})),n=Object(i.b)();return Object(f.jsx)("ul",{className:_.a.list,children:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).map((function(e){var t=e.name,a=e.id,c=e.number;return Object(f.jsx)(x,{name:t,number:c,onDeleteContact:function(){return n(d(a))}},a)}))})}var N=n(15),g=n.n(N);function C(){var e=Object(i.c)((function(e){return e.contacts.filter})),t=Object(i.b)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("label",{className:g.a.label,children:" Find contacts by name:"}),Object(f.jsx)("input",{className:g.a.input,type:"text",name:"filter",value:e,onChange:function(e){return t(O(e.target.value))}})]})}function y(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:b.a.title,children:"Phonebook"}),Object(f.jsx)(h,{}),Object(f.jsx)("h2",{className:b.a.title,children:"Contacts"}),Object(f.jsx)(C,{}),Object(f.jsx)(v,{})]})}var k,w=n(11),A=n(6),D=n(18),E=n.n(D),L=n(19),P=n.n(L),S=n(12),T=n(2),z=Object(j.c)([],(k={},Object(S.a)(k,d,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(S.a)(k,m,(function(e,t){var n=t.payload;return[].concat(Object(w.a)(e),[n])})),k)),I=Object(j.c)("",Object(S.a)({},O,(function(e,t){return t.payload}))),J=Object(T.b)({items:z,filter:I}),q=[].concat(Object(w.a)(Object(j.d)({serializableCheck:{ignoredActions:[A.a,A.f,A.b,A.c,A.d,A.e]}})),[P.a]),F={key:"contacts",storage:E.a,blacklist:["filter"]},M=Object(j.a)({reducer:{contacts:Object(A.g)(F,J)},middleware:q,devTools:!1}),Z=Object(A.h)(M),B=n(20);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(i.a,{store:M,children:Object(f.jsx)(B.a,{loading:null,persistor:Z,children:Object(f.jsx)(y,{})})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"formPhone_form__2Rtpg",label:"formPhone_label__1IApH",input:"formPhone_input__3kseO",btn:"formPhone_btn__NOfJ8",title:"formPhone_title__ns3Mv"}},7:function(e,t,n){e.exports={list:"contacts_list__2NYSe",btn:"contacts_btn__CSrTu",item:"contacts_item__2xIN2",name:"contacts_name__1AKET"}}},[[35,1,2]]]);
//# sourceMappingURL=main.6ccd5b33.chunk.js.map