"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[261],{4261:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(5861),c=n(4687),r=n.n(c),s=n(9439),i=n(2791),o=n(9434),l=n(5984),u=n(4616),m="ContactForm_phon-container__5HWAs",d="ContactForm_containers__6r4oX",h="ContactForm_form-label__Iv1vR",_="ContactForm_btn__wll+u",f=n(184),x=function(e){var t=e.onSubmit,n=(0,i.useState)(""),a=(0,s.Z)(n,2),c=a[0],r=a[1],x=(0,i.useState)(""),p=(0,s.Z)(x,2),C=p[0],j=p[1],N=(0,o.I0)(),b=function(e){var t=e.target,n=t.name,a=t.value;"name"===n?r(a):"number"===n&&j(a)};return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault(),N((0,u.Pf)()),t({id:(0,l.x0)(),name:c,number:C}),r(""),j("")},children:[(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)("label",{htmlFor:"exampleInputName",className:h,children:"Name"}),(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:b,value:c,placeholder:"Jacob Mercer",required:!0})]}),(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)("label",{htmlFor:"exampleInputNumber",className:h,children:"Number"}),(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:b,value:C,placeholder:"999-99-99",required:!0})]}),(0,f.jsx)("button",{type:"submit",className:_,children:"Add contact"})]})})},p=n(71),C={item:"ContactList_item__EZYHO",contactLink:"ContactList_contactLink__-gd+P",contactContainer:"ContactList_contactContainer__L+mXg",contactHead:"ContactList_contactHead__xSbFH",contactIndex:"ContactList_contactIndex__Vi9Ni",contactTitle:"ContactList_contactTitle__RzOrZ",btnIcon:"ContactList_btnIcon__OW52S",stats:"ContactList_stats__4i-y2",name:"ContactList_name__UCkFW",icon:"ContactList_icon__Ly80F"},j=function(e){var t=e.contacts,n=void 0===t?[]:t,a=e.onDelete;return(0,f.jsxs)("section",{children:[(0,f.jsxs)("div",{className:C.contactContainer,children:[(0,f.jsx)("h3",{className:C.contactHead,children:"Name"}),(0,f.jsx)("h3",{className:C.contactHead,children:"Number"})]}),(0,f.jsx)("ul",{className:C["contacts-list"],children:n.map((function(e){var t=e.id,n=e.name,c=e.number;return(0,f.jsxs)("li",{className:C.item,children:[(0,f.jsx)("p",{className:C.contactTitle,children:n}),(0,f.jsx)("a",{className:C.contactLink,href:"tel:"+c,children:c}),(0,f.jsx)("button",{type:"click",className:C.btnIcon,onClick:function(){return a(t)},children:(0,f.jsx)("span",{className:C.stats,children:(0,f.jsx)(p._7d,{className:C.icon})})})]},t)}))})]})},N=n(7692),b={filterContainer:"Filter_filterContainer__8G57N",filterTitle:"Filter_filterTitle__5SDqd",filterInput:"Filter_filterInput__1Cysk",iconFilter:"Filter_iconFilter__QnYge"},v=function(e){var t=e.filter,n=e.onChange;return console.log("first",t),(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:b.filterContainer,children:[(0,f.jsx)("p",{className:b.filterTitle,children:"Find contacts by name"}),(0,f.jsx)(N.wnI,{className:b.iconFilter}),(0,f.jsx)("input",{className:b.filterInput,type:"text",name:"name",value:t,onChange:function(e){return n(e.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})})},g=n(5218),F=n(7998),L=function(){var e=(0,o.v9)((function(e){return e.contacts})),t=e.contacts,n=e.isLoading,c=e.error,s=(0,o.v9)((function(e){return e.filter})),l=(0,o.I0)();(0,i.useEffect)((function(){l((0,u.Pf)())}),[l]);var m=function(){var e=(0,a.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l((0,u.Uc)(t));case 3:g.Am.success("Contact deleted successfully"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("error"),g.Am.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return n?(0,f.jsx)("h2",{children:"Loading..."}):c?(0,f.jsx)("h2",{children:"Something went wrong..."}):(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:b.title,children:"Phone book"}),(0,f.jsx)(x,{onSubmit:function(e){if(t.some((function(t){return t.name===e.name&&t.number===e.number})))return g.Am.success("".concat(e.name," is already in contacts"));l((0,u.U7)(e))}}),(0,f.jsx)("h2",{className:b.title,children:"Contacts"}),(0,f.jsx)(v,{filter:s,onChange:function(e){l((0,F.s)(e))}}),(0,f.jsx)(j,{contacts:function(){if(s)return t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase().trim())}))}(),onDelete:m}),(0,f.jsx)("p",{className:"title",children:"No contacts"})]})},k=function(){return(0,f.jsxs)("nav",{children:[(0,f.jsx)("div",{children:"ContactsPage"}),(0,f.jsx)(L,{})]})}}}]);
//# sourceMappingURL=261.edccd22b.chunk.js.map