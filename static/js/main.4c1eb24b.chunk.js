(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(12),a=c.n(s),n=c(4),l=c(9),r=c(3),i=c(13),j=c(14),b=(c(20),c(1)),h=c(2),d=c(6),o=c.n(d);var u=c(0),m=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h1",{className:"subtitle is-3",children:"Home page"})})},O=c(10),x=c(15);function p(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(r.a)(e,2),s=t[0],a=t[1];null===a?c.delete(s):Array.isArray(a)?(c.delete(s),a.forEach((function(e){return c.append(s,e)}))):c.set(s,a)})),c.toString()}var f=["children","params"],g=function(e){var t=e.children,c=e.params,s=Object(x.a)(e,f),a=Object(n.d)(),i=Object(r.a)(a,1)[0];return Object(u.jsx)(n.b,Object(l.a)(Object(l.a)({to:{search:p(i,c)}},s),{},{children:t}))},N=function(){var e=Object(n.d)(),t=Object(r.a)(e,1)[0].getAll("centuries");return Object(u.jsxs)("div",{className:"level is-flex-grow-1 is-mobile",children:[Object(u.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(u.jsx)(g,{className:o()("button mr-2",{"has-background-violet-light":t.includes(e)}),params:{centuries:t.includes(e)?t.filter((function(t){return t!==e})):[].concat(Object(O.a)(t),[e])},children:e},e)}))}),Object(u.jsx)("div",{className:"level-right ml-4",children:Object(u.jsx)(g,{params:{centuries:null},className:o()("button has-background-danger-light",{"has-text-danger":t.length>0}),children:"All"})})]})},v=function(){var e=Object(n.d)(),t=Object(r.a)(e,2),c=t[0],s=t[1],a=c.get("query")||"";return Object(u.jsxs)("p",{className:"control has-icons-left",children:[Object(u.jsx)("input",{type:"text",className:"input",placeholder:"Search",value:a,onChange:function(e){return s(p(c,{query:e.target.value||null}))}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})},k=function(){var e=Object(n.d)(),t=Object(r.a)(e,1)[0].get("sex");return Object(u.jsxs)("nav",{className:"panel",children:[Object(u.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(u.jsxs)("p",{className:"panel-tabs",children:[Object(u.jsx)(g,{params:{sex:null},className:o()("link--small",{"is-active":!t}),children:"All"}),Object(u.jsx)(g,{params:{sex:"m"},className:o()("link--small",{"is-active":"m"===t}),children:"Male"}),Object(u.jsx)(g,{params:{sex:"f"},className:o()("link--small",{"is-active":"f"===t}),children:"Female"})]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsx)(v,{})}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsx)(N,{})}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsx)(g,{className:" button is-danger-light has-background-violet-light is-outlined is-fullwidth ",params:{sex:null,query:null,centuries:null},children:"Reset all filters"})})]})},y=function(e){var t=e.person,c=Object(h.f)().search;return Object(u.jsx)(n.b,{to:{pathname:"/people/".concat(t.slug),search:c},className:o()({"has-text-danger":"f"===t.sex,"has-text-link":"m"===t.sex}),children:t.name})},w=function(e){var t=e.field,c=Object(n.d)(),s=Object(r.a)(c,1)[0],a=s.get("sort")||"",l="desc"===s.get("order"),i={sort:t===a&&l?null:t,order:t!==a||l?null:"desc"};return Object(u.jsx)(g,{params:i,children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:o()("fas",{"fa-sort":a!==t,"fa-sort-up":a===t&&!l,"fa-sort-down":a===t&&l})})})})},A=function(e){var t=e.people,c=Object(h.h)().slug;return 0===t.length?Object(u.jsx)("p",{children:"There are no people matching the current search criteria"}):Object(u.jsxs)("table",{className:" PeopleTable people_table table is-bordered ",children:[Object(u.jsxs)("thead",{className:"thead",children:[Object(u.jsxs)("th",{className:"th--name",children:["name",Object(u.jsx)(w,{field:"name"})]}),Object(u.jsxs)("th",{className:"th--details",children:["sex",Object(u.jsx)(w,{field:"sex"})]}),Object(u.jsxs)("th",{className:"th--details",children:["born",Object(u.jsx)(w,{field:"born"})]}),Object(u.jsxs)("th",{className:"th--details",children:["died",Object(u.jsx)(w,{field:"died"})]}),Object(u.jsx)("th",{className:"th--name",children:"mother"}),Object(u.jsx)("th",{className:"th--name",children:"father"})]}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{className:o()({"has-background-violet-light":e.slug===c}),children:[Object(u.jsx)("td",{children:Object(u.jsx)(y,{person:e})}),Object(u.jsx)("td",{children:e.sex}),Object(u.jsx)("td",{children:e.born}),Object(u.jsx)("td",{children:e.died}),Object(u.jsx)("td",{children:e.mother?Object(u.jsx)(y,{person:e.mother}):e.motherName}),Object(u.jsx)("td",{children:e.father?Object(u.jsx)(y,{person:e.father}):e.fatherName})]},e.slug)}))})]})},P=function(e){var t=e.people,c=Object(n.d)(),s=Object(r.a)(c,1)[0],a=Object(O.a)(t),l=s.get("sex"),i=s.get("query"),j=s.getAll("centuries"),b=s.get("sort"),h="desc"===s.get("order");if(l&&(a=a.filter((function(e){return e.sex===l}))),j.length>0&&(a=a.filter((function(e){return j.includes(Math.ceil(e.born/100).toString())}))),i){var d=i.toLowerCase();a=a.filter((function(e){return[e.name,e.motherName||"",e.fatherName||""].join("\n").toLowerCase().includes(d)}))}return b&&a.sort((function(e,t){switch(b){case"name":case"sex":return e[b].localeCompare(t[b]);case"born":case"died":return e[b]-t[b];default:return 0}})),h&&a.reverse(),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"subtitle is-3",children:"People page"}),Object(u.jsx)(k,{}),Object(u.jsx)(A,{people:a})]})},S=function(){return Object(u.jsx)("h1",{className:"subtitle is-3",children:"Page not found"})};i.a.add(j.a);var E=function(e){return o()({"link--selected":e.isActive})},q=function(){var e=Object(h.f)(),t=Object(b.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1];return Object(b.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return Object(l.a)({},e)}));t.forEach((function(e){Object.assign(e,{mother:t.find((function(t){return t.name===e.motherName}))||null,father:t.find((function(t){return t.name===e.fatherName}))||null})})),a(t)}))}),[]),Object(u.jsxs)("div",{className:"container box",children:[Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("h1",{className:"title is-2",children:"People table"})}),Object(u.jsxs)("nav",{className:"nav",children:[Object(u.jsx)(n.c,{to:"/",className:E,children:Object(u.jsx)("p",{className:"link",children:"Home page"})}),Object(u.jsx)(n.c,{to:{pathname:"people",search:e.search},className:E,children:Object(u.jsx)("p",{className:"link",children:"People page"})})]}),Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{path:"/",element:Object(u.jsx)(m,{})}),Object(u.jsxs)(h.b,{path:"/people",children:[Object(u.jsx)(h.b,{index:!0,element:Object(u.jsx)(P,{people:s})}),Object(u.jsx)(h.b,{path:":slug",element:Object(u.jsx)(P,{people:s})})]}),Object(u.jsx)(h.b,{path:"home",element:Object(u.jsx)(h.a,{to:"/",replace:!0})}),Object(u.jsx)(h.b,{path:"*",element:Object(u.jsx)(S,{})})]})]})};a.a.render(Object(u.jsx)(n.a,{children:Object(u.jsx)(q,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4c1eb24b.chunk.js.map