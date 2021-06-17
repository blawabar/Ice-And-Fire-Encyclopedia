(this["webpackJsonpice-and-fire-encyclopedia"]=this["webpackJsonpice-and-fire-encyclopedia"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(16),o=a.n(s),i=a(5),u=(a(35),a(12)),l=(a(36),a(1)),j=function(){return Object(l.jsx)("header",{className:"app-header",children:Object(l.jsx)("h1",{className:"app-header__text",children:"Encyclopedia Of Ice And Fire"})})},d=a(4),b="/house",h="https://anapioficeandfire.com/api",f="".concat(h,"/characters"),O="".concat(h,"/houses"),p={region:"Region",coatOfArms:"Coat Of Arms",words:"Words",titles:"Titles",seats:"Seats",diedOut:"Has died out",overlord:"Has overlord",cadetBranches:"Number of Cadet Branches"};!function(e){e.Character="Character",e.Alive="Alive",e.Gender="Gender",e.Culture="Culture",e.Allegiances="Allegiances",e.NumberOfBooks="# of Books"}(n||(n={}));var g,v=[n.Character,n.Alive,n.Gender,n.Culture,n.Allegiances,n.NumberOfBooks],x=a(11),C=a.n(x),E=a(3),m=a(13),S=a(7),A=a(23),T=a(24),_=function(e){return Object.entries(e).filter((function(e){var t=Object(S.a)(e,2),a=(t[0],t[1]);return Boolean(a)})).map((function(e){var t=Object(S.a)(e,2),a=t[0],n=t[1];return"".concat(a,"=").concat(n)})).join("&")},R=function(e){var t,a,n;return parseInt((null===(t=e.get("Link"))||void 0===t||null===(a=t.split(",").filter((function(e){return e.includes("last")})))||void 0===a||null===(n=a[0].match(/page=([0-9]+)/))||void 0===n?void 0:n[1])||"1")},k=function(){function e(){Object(A.a)(this,e)}return Object(T.a)(e,null,[{key:"getHouseData",value:function(){var e=Object(m.a)(C.a.mark((function e(t){var a,n,r,c,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/").concat(t));case 3:if(n=e.sent,r=n.ok,c=n.status,!r){e.next=12;break}return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:throw s=404===c?"Could not find any house that matches the request, try again!":"Something went wrong - Error: ".concat(c),new Error(s);case 15:e.next=20;break;case 17:throw e.prev=17,e.t0=e.catch(0),e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getCharacters",value:function(){var e=Object(m.a)(C.a.mark((function e(t){var a,n,r,c,s,o,i,u;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=_(t),e.next=4,fetch("".concat(f,"/?").concat(a));case 4:if(r=e.sent,c=r.ok,s=r.status,o=r.headers,!c){e.next=14;break}return e.next=9,r.json();case 9:return n=e.sent,i=R(o),e.abrupt("return",{data:n,lastPage:i});case 14:throw u="Something went wrong - Error: ".concat(s),new Error(u);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(0),e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),N=function(e){var t=Object(r.useState)({isLoading:!0}),a=Object(S.a)(t,2),n=a[0],c=a[1],s=function(){var e=Object(m.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.getHouseData(t);case 3:a=e.sent,c((function(e){return Object(E.a)(Object(E.a)({},e),{},{data:a,isLoading:!1})})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c((function(t){return Object(E.a)(Object(E.a)({},t),{},{error:e.t0.toString()})}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s(e)}),[e]),n},w=function(e,t){var a=t.name,r=t.aliases,c=t.born,s=t.died,o=t.gender,i=t.culture,j=t.allegiances,d=t.books,h=t.url;return e.map((function(e,t){var f=null;switch(e){case n.Character:f=function(e,t){var a=Boolean(e),n=Boolean(t.join()),r="Unknown";return a&&n?r="".concat(e,", ").concat(t.join(", ")):a?r=e:n&&(r=t.join(", ")),r}(a,r);break;case n.Alive:f=function(e,t){var a=Boolean(e),n=Boolean(t),r="Unknown";if(a&&!n)r="Yes";else if(a&&n){var c=e.match(/[0-9]+/g),s=t.match(/[0-9]+/g);if(!s||!c)return r;var o=1===c.length?parseInt(c[0]):Math.max(parseInt(c[0]),parseInt(c[1])),i=parseInt(s[0])-o;r="No, died at ".concat(i," years old")}return r}(c,s);break;case n.Gender:f=Boolean(o)?o:"Unknown";break;case n.Culture:f=Boolean(i)?i:"Unknown";break;case n.Allegiances:f=function(e){return Boolean(e.length)?Object(l.jsx)("ul",{children:e.map((function(e,t){var a=e.substring(e.lastIndexOf("/")+1);return Object(l.jsx)("li",{children:Object(l.jsx)(u.b,{to:"".concat(b,"/").concat(a),children:"House-#".concat(t+1)})},"".concat(e,"-").concat(t))}))}):" - "}(j);break;case n.NumberOfBooks:f=d.length.toString()}return Object(l.jsx)("td",{children:f},"".concat(h,"-").concat(t))}))},y=function(){return Object(i.c)((function(e){var t=e.requestData.pageSize,a=e.currentPage,n=e.lastPage,r=e.data;return{rootPageSize:t,rootCurrentPage:a,rootLastPage:n,isNavBarHidden:!Boolean(r.length),isDisplayingFirstPage:1===a,isDisplayingLastPage:a===n}}))},D=function(){return Object(i.c)((function(e){var t=e.requestData,a=t.gender,n=t.culture,r=e.isLoading;return{rootGender:a,rootCulture:n,isToolbarDisabled:Boolean(r)}}))},B=function(){return Object(i.c)((function(e){return{data:e.data,isLoading:e.isLoading,error:e.error,requestData:e.requestData}}))},H=function(e){var t=e.data,a=w(v,t);return Object(l.jsx)("tr",{children:a},t.url)},I=function(e){var t=e.data;return Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(H,{data:e},e.url)}))})},L=function(e){var t=e.columnsNames;return Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:t.map((function(e){return Object(l.jsx)("th",{children:e},e)}))})})},P=(a(41),function(e){var t=e.data;return Object(l.jsxs)("table",{className:"characters-table",children:[Object(l.jsx)(L,{columnsNames:v}),Object(l.jsx)(I,{data:t})]})}),G=(a(42),function(e){var t=e.errorMsg;return Object(l.jsxs)("div",{className:"error-info",children:[Object(l.jsx)("h3",{className:"error-info__title",children:"Something went wrong..."}),Object(l.jsx)("p",{className:"error-info__message",children:t})]})}),U=(a(43),function(e){var t=e.resourceName;return Object(l.jsx)("h3",{className:"loading-indicator",children:"Loading ".concat(t," data...")})});!function(e){e.GET_CHARACTERS_REQUEST="GET_CHARACTERS_REQUEST",e.GET_CHARACTERS_SUCCESS="GET_CHARACTERS_SUCCESS",e.GET_CHARACTERS_FAILURE="GET_CHARACTERS_FAILURE",e.SET_CHARACTERS_FILTER="SET_CHARACTERS_FILTER",e.SET_CHARACTERS_PAGINATION="SET_CHARACTERS_PAGINATION"}(g||(g={}));var F=function(e){return{type:g.GET_CHARACTERS_FAILURE,payload:e}},q=function(e){return{type:g.SET_CHARACTERS_PAGINATION,payload:e}},z=a(27),M=(a(44),["isDisabled","label"]),Q=function(e){var t=e.isDisabled,a=e.label,n=Object(z.a)(e,M);return Object(l.jsx)("input",Object(E.a)({type:"button",className:"page-btn",disabled:t,value:a},n))},J=(a(45),function(){var e=Object(i.b)(),t=y(),a=t.rootPageSize,n=t.rootCurrentPage,c=t.rootLastPage,s=t.isNavBarHidden,o=t.isDisplayingFirstPage,u=t.isDisplayingLastPage,j=Object(r.useState)(a),d=Object(S.a)(j,2),b=d[0],h=d[1],f=Object(r.useState)(n),O=Object(S.a)(f,2),p=O[0],g=O[1];return Object(r.useEffect)((function(){e(q({page:1,pageSize:b}))}),[b]),Object(r.useEffect)((function(){e(q({page:p,pageSize:b}))}),[p]),s?null:Object(l.jsxs)("nav",{className:"nav-bar",children:[Object(l.jsxs)("label",{children:["Rows per page:",Object(l.jsxs)("select",{className:"nav-bar__rows-per-page",value:b,onChange:function(e){return h(parseInt(e.target.value))},children:[Object(l.jsx)("option",{value:10,children:"10"}),Object(l.jsx)("option",{value:25,children:"25"}),Object(l.jsx)("option",{value:50,children:"50"})]})]}),Object(l.jsx)("span",{className:"nav-bar__page-info",children:"Page ".concat(n," of ").concat(c)}),Object(l.jsxs)("div",{className:"nav-bar__buttons-group",children:[Object(l.jsx)(Q,{label:"First",isDisabled:o,onClick:function(){g(1)}}),Object(l.jsx)(Q,{label:"Prev",isDisabled:o,onClick:function(){p>1&&g((function(e){return e-1}))}}),Object(l.jsx)(Q,{label:"Next",isDisabled:u,onClick:function(){p<c&&g((function(e){return e+1}))}}),Object(l.jsx)(Q,{label:"Last",isDisabled:u,onClick:function(){g(c)}})]})]})}),W=(a(46),function(){var e=Object(i.b)(),t=D(),a=t.rootCulture,n=t.rootGender,c=t.isToolbarDisabled,s=Object(r.useState)(a),o=Object(S.a)(s,2),u=o[0],j=o[1],d=Object(r.useState)(n),b=Object(S.a)(d,2),h=b[0],f=b[1];return Object(r.useEffect)((function(){var t;e((t={culture:u,gender:h},{type:g.SET_CHARACTERS_FILTER,payload:t}))}),[u,h]),Object(l.jsxs)("div",{className:"toolbar",children:[Object(l.jsxs)("label",{htmlFor:"culture",children:["Culture:",Object(l.jsx)("input",{type:"search",id:"culture",value:u,onChange:function(e){var t=e.target.value,a=!Boolean(t.length),n=Boolean(t.trim().length);(a||n)&&j(t)},disabled:c})]}),Object(l.jsxs)("label",{htmlFor:"gender",children:["Gender:",Object(l.jsxs)("select",{id:"gender",value:h,onChange:function(e){return f(e.target.value)},disabled:c,children:[Object(l.jsx)("option",{value:"",children:" - Select gender - "}),Object(l.jsx)("option",{value:"male",children:"Male"}),Object(l.jsx)("option",{value:"female",children:"Female"}),Object(l.jsx)("option",{value:"unknown",children:"Unknown"})]})]})]})}),Y=(a(47),function(){var e=Object(i.b)(),t=B(),a=t.data,n=t.isLoading,c=t.error,s=t.requestData;Object(r.useEffect)((function(){var t;e((t=s,function(){var e=Object(m.a)(C.a.mark((function e(a){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:g.GET_CHARACTERS_REQUEST}),e.next=4,k.getCharacters(t);case 4:n=e.sent,r=n.data,c=n.lastPage,a((s={data:r,requestData:t,lastPage:c},{type:g.GET_CHARACTERS_SUCCESS,payload:s})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a(F("Error during getting characters data..."));case 13:case"end":return e.stop()}var s}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()))}),[s.culture,s.gender,s.page,s.pageSize]);var o=null;return c?o=Object(l.jsx)(G,{errorMsg:c}):n?o=Object(l.jsx)(U,{resourceName:"characters"}):a&&(o=Boolean(a.length)?Object(l.jsx)(P,{data:a}):"No characters found"),Object(l.jsxs)("div",{className:"characters-page",children:[Object(l.jsx)("h2",{className:"characters-page__title",children:"Characters"}),Object(l.jsx)(W,{}),Object(l.jsx)("section",{className:"characters-page__body",children:o}),Object(l.jsx)(J,{})]})}),K=(a(48),function(e,t){var a=Object.keys(e);return Object.entries(t).map((function(e){var n=Object(S.a)(e,1)[0];if(a.includes(n)){var r=p[n],c=function(e,t){var a=t[e];switch(e){case"titles":case"seats":return Boolean(a.length>1)?a.join(", "):"Unknown";case"overlord":return Boolean(a)?"Yes":"No";case"diedOut":return Boolean(a)?a:"No";case"cadetBranches":return a.length;default:return Boolean(a)?a:"Unknown"}}(n,t);return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:"".concat(r,": ")}),c]},n)}return null}))}),V=function(e){var t=e.houseData;return Object(l.jsx)("ul",{className:"house-details-list",children:K(p,t)})},X=(a(49),function(e){var t=e.link,a=e.linkText;return Object(l.jsx)(u.b,{to:t,className:"nav-btn",children:a})}),Z=(a(50),function(){var e=Object(d.g)().houseId,t=N(e),a=t.isLoading,n=t.data,r=t.error,c=null;if(r)c=Object(l.jsx)(G,{errorMsg:r});else if(a)c=Object(l.jsx)(U,{resourceName:"house"});else if(n){var s=n.name;c=Object(l.jsxs)("div",{className:"house-page",children:[Object(l.jsx)(X,{linkText:"Back To Characters",link:"/"}),Object(l.jsx)("h2",{className:"house-page__name",children:s}),Object(l.jsx)(V,{houseData:n})]})}return c}),$=(a(51),function(){return Object(l.jsx)("div",{className:"page-holder",children:Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{exact:!0,strict:!0,path:"/",component:Y}),Object(l.jsx)(d.b,{exact:!0,strict:!0,path:"".concat(b,"/:houseId"),component:Z}),Object(l.jsx)(d.a,{to:"/"})]})})});var ee=function(){return Object(l.jsxs)(u.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)($,{})]})},te=a(18),ae=a(25),ne=a(26),re={data:[],isLoading:!1,error:null,currentPage:1,lastPage:1,requestData:{page:1,pageSize:25,gender:"",culture:""}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.GET_CHARACTERS_REQUEST:return Object(E.a)(Object(E.a)({},e),{},{isLoading:!0,error:null,data:[]});case g.GET_CHARACTERS_SUCCESS:var a=t.payload,n=a.data,r=a.requestData,c=a.lastPage;return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,data:n,currentPage:r.page,lastPage:c,requestData:r});case g.GET_CHARACTERS_FAILURE:return Object(E.a)(Object(E.a)({},e),{},{isLoading:!1,error:t.payload,data:[]});case g.SET_CHARACTERS_FILTER:var s=t.payload,o=s.culture,i=s.gender;return Object(E.a)(Object(E.a)({},e),{},{requestData:Object(E.a)(Object(E.a)({},e.requestData),{},{page:1,culture:o,gender:i})});case g.SET_CHARACTERS_PAGINATION:var u=t.payload,l=u.page,j=u.pageSize;return Object(E.a)(Object(E.a)({},e),{},{requestData:Object(E.a)(Object(E.a)({},e.requestData),{},{page:l,pageSize:j})});default:return e}};var se=function(){var e=Object(ne.composeWithDevTools)(Object(te.applyMiddleware)(ae.a));return Object(te.createStore)(ce,e)}();o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{store:se,children:Object(l.jsx)(ee,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.a40bdc9f.chunk.js.map