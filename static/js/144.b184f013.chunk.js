"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[144],{7144:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(2791),r=n(5861),c=n(4687),s=n.n(c),o=n(8687),i=n(4616),l=n(7998),u=n(9439),m=n(5984),d="ContactForm_phon-container__5HWAs",h="ContactForm_containers__6r4oX",_="ContactForm_form-label__Iv1vR",p="ContactForm_btn__wll+u",x=n(184),f=function(e){var t=e.onSubmit,n=(0,a.useState)(""),r=(0,u.Z)(n,2),c=r[0],s=r[1],o=(0,a.useState)(""),i=(0,u.Z)(o,2),l=i[0],f=i[1],C=function(e){var t=e.target,n=t.name,a=t.value;"name"===n?s(a):"number"===n&&f(a)};return(0,x.jsx)("div",{children:(0,x.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),t({id:(0,m.x0)(),name:c,number:l}),s(""),f("")},children:[(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("label",{htmlFor:"exampleInputName",className:_,children:"Name"}),(0,x.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:C,value:c,placeholder:"Jacob Mercer",required:!0})]}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("label",{htmlFor:"exampleInputNumber",className:_,children:"Number"}),(0,x.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:C,value:l,placeholder:"999-99-99",required:!0})]}),(0,x.jsx)("button",{type:"submit",className:p,children:"Add contact"})]})})},C=n(71),j={item:"ContactList_item__EZYHO",contactLink:"ContactList_contactLink__-gd+P",contactContainer:"ContactList_contactContainer__L+mXg",contactHead:"ContactList_contactHead__xSbFH",contactIndex:"ContactList_contactIndex__Vi9Ni",contactTitle:"ContactList_contactTitle__RzOrZ",btnIcon:"ContactList_btnIcon__OW52S",stats:"ContactList_stats__4i-y2",name:"ContactList_name__UCkFW",icon:"ContactList_icon__Ly80F"},b=function(e){var t=e.contacts,n=void 0===t?[]:t,a=e.onDelete;return(0,x.jsxs)("section",{children:[(0,x.jsxs)("div",{className:j.contactContainer,children:[(0,x.jsx)("h3",{className:j.contactHead,children:"Name"}),(0,x.jsx)("h3",{className:j.contactHead,children:"Number"})]}),(0,x.jsx)("ul",{className:j["contacts-list"],children:n.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,x.jsxs)("li",{className:j.item,children:[(0,x.jsx)("p",{className:j.contactTitle,children:n}),(0,x.jsx)("a",{className:j.contactLink,href:"tel:"+r,children:r}),(0,x.jsx)("button",{type:"click",className:j.btnIcon,onClick:function(){return a(t)},children:(0,x.jsx)("span",{className:j.stats,children:(0,x.jsx)(C._7d,{className:j.icon})})})]},t)}))})]})},v=n(7692),N="Filter_filterContainer__8G57N",g="Filter_filterTitle__5SDqd",w="Filter_filterInput__1Cysk",L="Filter_iconFilter__QnYge",k=function(){var e=(0,a.useState)(""),t=(0,u.Z)(e,2),n=t[0],r=t[1],c=(0,o.useDispatch)();return(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("p",{className:g,children:"Find contacts by name"}),(0,x.jsx)(v.wnI,{className:L}),(0,x.jsx)("input",{className:w,type:"text",name:"name",value:n,onChange:function(e){r(e.target.value),c((0,l.sP)(e.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})})},y=n(5218),A="PhoneContacts_title__1zVkA",F=function(){var e=(0,o.useSelector)((function(e){return e.contacts})),t=e.items,n=e.isLoading,c=e.error,u=(0,o.useSelector)(l.zK),m=(0,o.useDispatch)();(0,a.useEffect)((function(){m((0,i.Pf)())}),[m]);var d=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))){e.next=4;break}return e.abrupt("return",y.Am.error("".concat(n.name," is already in contacts")));case 4:return e.next=6,m((0,i.U7)(n));case 6:y.Am.success("Contact added successfully"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("error"),y.Am.error("Something went wrong");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m((0,i.Uc)(t));case 3:y.Am.success("Contact deleted successfully"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("error"),y.Am.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),_=t.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return n?(0,x.jsx)("h2",{children:"Loading..."}):c?(0,x.jsx)("h2",{children:"Something went wrong..."}):(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{className:A,children:"Phone book"}),(0,x.jsx)(f,{onSubmit:d}),t.length>2&&(0,x.jsx)(k,{}),t.length>0?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h2",{className:A,children:"Contacts"}),(0,x.jsx)(b,{contacts:_,onDelete:h})]}):(0,x.jsx)("p",{className:A,children:"No contacts"})]})},S=function(){return(0,x.jsx)("nav",{children:(0,x.jsx)(F,{})})}}}]);
//# sourceMappingURL=144.b184f013.chunk.js.map