(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{309:function(e,n,o){"use strict";o.r(n);var s=o(5),t=o(1),r=o(83),a=o(112);n.default=({onChange:e,autoFocus:n,field:o,value:c,renderContext:l,errors:i,isDisabled:d})=>{const u=o.options.find(e=>e.value===c),b="ks-input-"+o.path,j=i.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),p=i.find(e=>e instanceof Error&&"AccessDeniedError"===e.name),f="dialog"===l?{menuPortalTarget:document.body,menuShouldBlockScroll:!0}:null;return Object(t.jsx)(r.a,null,Object(t.jsx)(r.d,{htmlFor:b,field:o,errors:i}),Object(t.jsx)(r.b,{text:o.adminDoc}),Object(t.jsx)(r.c,null,Object(t.jsx)("div",{css:{flex:1}},Object(t.jsx)(a.a,Object(s.a)({autoFocus:n,value:j?u:void 0,placeholder:j?void 0:p.message,options:o.options,onChange:n=>{e(n?n.value:null)},isClearable:!0,id:"react-select-"+b,inputId:b,instanceId:b,isDisabled:d},f)))))}}}]);