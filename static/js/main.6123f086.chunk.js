(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(13),function(){return r.a.createElement("h2",null,"Expense Tracker")}),u=n(2),i=n(7),s=n(3),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},E=JSON.parse(localStorage.getItem("state"))||{transactions:[]},d=Object(a.createContext)(E),f=function(e){var t=e.children,n=Object(a.useReducer)(m,E),c=Object(u.a)(n,2),l=c[0],o=c[1];return Object(a.useEffect)((function(){localStorage.setItem("state",JSON.stringify(l))}),[l]),r.a.createElement(d.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){o({type:"ADD_TRANSACTION",payload:e})}}},t)},p=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"\xa3",e))},b=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},n)))},v=function(e){var t=e.transaction,n=Object(a.useContext)(d).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("div",null,r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text,r.a.createElement("span",null,c,"\xa3",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:"delete-btn"},"x")))},h=function(){var e=Object(a.useContext)(d).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},O=n(17),x=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(a.useContext)(d).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(O.a)(),text:n,amount:+i};m(t),c(""),s("")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return s(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};n(14);var N=function(){return r.a.createElement(f,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(h,null),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6123f086.chunk.js.map