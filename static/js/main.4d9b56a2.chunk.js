(this.webpackJsonpTCP=this.webpackJsonpTCP||[]).push([[0],{25:function(e,t,n){e.exports={listItem:"CountriesListItem_listItem__dvzpZ",name:"CountriesListItem_name__OYClZ",flag:"CountriesListItem_flag__2bKSl"}},26:function(e,t,n){e.exports={list:"CountriesList_list__7ivSk",title:"CountriesList_title__1MTZZ",subtitle:"CountriesList_subtitle__fYhCA"}},31:function(e,t,n){e.exports={header:"Header_header__1VCKf"}},32:function(e,t,n){e.exports={layout:"Layout_layout__3PvPc",main:"Layout_main__1dFZc"}},39:function(e,t,n){e.exports={card:"Card_card__1eE8R"}},40:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__3AWWB"}},41:function(e,t,n){e.exports={line:"Lines_line__2kpHs"}},42:function(e,t,n){e.exports={marker:"Markers_marker__blx3M"}},43:function(e,t,n){e.exports={map:"Map_map__2bGnQ"}},57:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(38),s=n.n(c),o=n(2),i=n.n(o),u=n(13),l=n(8),d=n(7),f=n(39),j=n.n(f),p=n(0),m=function(e){return Object(p.jsx)("div",{className:j.a.card,children:e.children})},b=a.a.createContext({selectedCountries:[],sortedCoordinates:[],addSelectedCountry:function(){},removeSelectedCountry:function(){},selectedCoordinates:{},dragItem:{},allFlags:{set:function(){},get:[]}}),h="https://traveling-salesman-probl-12def-default-rtdb.europe-west1.firebasedatabase.app",O="https://countriesnow.space/api/v0.1/countries",g="ADD",y="REMOVE",x="ADD_COUNTRY",v="REMOVE_COUNTRY",C="light",_="dark",N=n(25),k=n.n(N),S=function(e){var t=Object(r.useContext)(b).dragItem;return Object(p.jsxs)("li",{"data-testid":"countryListItem",className:k.a.listItem,onClick:function(){e.onSelectCountry(e.countryName)},draggable:!0,onDragStart:function(n){return r=e.countryName,a=e.listType,void t.set({country:r,type:a});var r,a},onDragEnd:function(){t.set({})},children:[Object(p.jsx)("p",{"data-testid":"countryName",className:k.a.name,children:e.countryName}),Object(p.jsx)("img",{"data-testid":"flag",className:k.a.flag,src:e.flagUrl,alt:e.flagUrl,draggable:!1})]})},w=n(40),L=n.n(w),E=function(){return Object(p.jsx)("div",{className:L.a.spinner})},T=n(26),M=n.n(T),D=function(e){var t=Object(r.useContext)(b),n=t.selectedCountries,a=t.addSelectedCountry,c=t.removeSelectedCountry,s=t.allFlags,o=t.dragItem,i=s.get,u=!Object.keys(i).length,l=e.highlighted?{border:"0.5rem dashed #c5efc5"}:null,d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.listType;n===g?a(t):n===y&&c(t)},f=e.countries.filter((function(t){return e.listType===g?!n.includes(t):t})).map((function(t){return Object(p.jsx)(S,{"data-testid":"countriesList",flagUrl:i[t],countryName:t,listType:e.listType,onSelectCountry:d},t)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:M.a.title,children:e.title}),Object(p.jsx)("p",{className:M.a.subtitle,children:e.subtitle}),Object(p.jsxs)("ul",{"data-testid":"countriesList",style:l,className:M.a.list,onDragOver:function(e){e.preventDefault()},onDrop:function(){return o.set({}),void(o.get.type!==e.listType&&d(o.get.country,o.get.type))},children:[u&&e.listType===g&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(E,{}),Object(p.jsx)("h3",{children:"Loading..."})]}),!u&&f]})]})},I=D,A=n(31),F=n.n(A),H=function(e){return Object(p.jsxs)("header",{className:F.a.header,children:[Object(p.jsx)("h1",{children:"TRAVELLING SALESMAN PROBLEM"}),Object(p.jsx)("button",{"data-testid":"button",className:F.a.logo,onClick:e.changeThemeHandler})]})},P=n(32),R=n.n(P),U=a.a.memo((function(e){return Object(p.jsxs)("div",{className:R.a.layout,children:[Object(p.jsx)(H,{changeThemeHandler:e.changeThemeHandler}),Object(p.jsx)("main",{className:R.a.main,children:e.children})]})})),J=n(41),V=n.n(J),Z=function(){var e=Object(r.useContext)(b).sortedCoordinates.map((function(e,t){return Object(p.jsx)(d.Line,{className:V.a.line,from:e[0],to:e[1],stroke:"#FF5533",strokeWidth:2,strokeLinecap:"round"},t)}));return Object(p.jsx)(p.Fragment,{children:e})},G=n(42),W=n.n(G),Y=a.a.memo((function(){var e=Object(r.useContext)(b),t=e.selectedCountries,n=e.allCoordinates,a=t.map((function(e){return Object(p.jsxs)(d.Marker,{className:W.a.marker,coordinates:n.get[e],children:[Object(p.jsx)("circle",{r:6,stroke:"#fff",strokeWidth:2}),Object(p.jsx)("text",{textAnchor:"middle",y:"25",children:e})]},e)}));return Object(p.jsx)(p.Fragment,{children:a})})),B=n(43),K=n.n(B),q=a.a.memo((function(e){return Object(p.jsxs)(d.ComposableMap,{className:K.a.map,projectionConfig:{center:[9,49],scale:1100},children:[Object(p.jsx)(d.Geographies,{"data-testid":"geographies",geography:e.geoUrl,children:e.countriesDrawHandler}),Object(p.jsx)(Z,{}),Object(p.jsx)(Y,{})]})})),z=n(4);function Q(e){return X.apply(this,arguments)}function X(){return(X=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,r=n.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){var n,r={},a=Object(z.a)(e);try{var c=function(){var e=n.value,a=e.name,c=t.map((function(t){return e[t]}));r[a]=c};for(a.s();!(n=a.n()).done;)c()}catch(s){a.e(s)}finally{a.f()}return r}function ee(){return te.apply(this,arguments)}function te(){return(te=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("".concat(h,"/countries.json"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return re.apply(this,arguments)}function re(){return(re=Object(u.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("".concat(O,"/positions"));case 2:return t=e.sent,n=t.data,r=$(n,["long","lat"]),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(){return ce.apply(this,arguments)}function ce(){return(ce=Object(u.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("".concat(O,"/flag/images"));case 2:return t=e.sent,n=t.data,r=$(n,["flag"]),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(_),s=Object(l.a)(c,2),o=s[0],f=s[1],j=Object(r.useContext)(b),h=j.allCoordinates,O=j.allFlags,x=j.selectedCountries,v=j.dragItem,N=h.set,k=O.set,S=Object(r.useCallback)(Object(u.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:return t=e.sent,a(t),e.next=6,ne();case 6:return n=e.sent,N(n),e.next=10,ae();case 10:r=e.sent,k(r);case 12:case"end":return e.stop()}}),e)}))),[a,N,k]);Object(r.useEffect)((function(){S()}),[S]),Object(r.useEffect)((function(){["-primary-color","-secondary-color","-list-color","-list-border-color","-text-color","-text-border-color","-card-border-color","-marker-color","-line-color"].forEach((function(e){var t=getComputedStyle(document.documentElement).getPropertyValue("--".concat(o+e));document.documentElement.style.setProperty("--selected".concat(e),t)}))}),[o]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(U,{changeThemeHandler:function(){f((function(e){return e===C?_:C}))},children:[Object(p.jsx)(q,{countriesDrawHandler:function(e){return e.geographies.filter((function(e){return n})).map((function(e){return Object(p.jsx)(d.Geography,{geography:e,fill:"#EAEAEC",stroke:"#D6D6DA"},e.rsmKey)}))},geoUrl:"https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json"}),Object(p.jsxs)(m,{children:[Object(p.jsx)(I,{listType:g,countries:n,title:"All Countries",subtitle:"(drag to select)",highlighted:v.get.type===y}),Object(p.jsx)(I,{listType:y,countries:x,title:"Selected Countries",subtitle:"(drag to remove)",highlighted:v.get.type===g})]})]})})},oe=(n(57),n(11)),ie=n(27),ue=n(44),le=n.n(ue),de=function(e){var t=e.map((function(e,t){return{id:t,name:"".concat(e)}})),n=function(e){var t,n,r,a=[],c=Object(z.a)(e);try{for(c.s();!(t=c.n()).done;){var s,o=t.value,i=Object(z.a)(e);try{for(i.s();!(s=i.n()).done;){var u=s.value;u.id<=o.id||a.push({set:[o.id,u.id],value:(n=JSON.parse("[".concat(o.name,"]")),r=JSON.parse("[".concat(u.name,"]")),r?Math.sqrt(Math.abs(Math.pow(n[0]-r[0],2)+Math.pow(n[1]-r[1],2))):0)})}}catch(l){i.e(l)}finally{i.f()}}}catch(l){c.e(l)}finally{c.f()}return a}(t),r=le()(t,n).result.map((function(e){var t=e.name;return JSON.parse("[".concat(t,"]"))}));console.log(n),r.push(r[0]);var a=r.map((function(e,t,n){var r=n[t+1];return t===n.length-1&&(r=n[0]),[e,r]}));return a},fe={},je=function(e,t){switch(t.type){case x:return Object(ie.a)(Object(ie.a)({},e),{},Object(oe.a)({},t.countryName,t.countryCoordinates));case v:var n=e;return delete n[t.countryName],Object(ie.a)({},n);default:return fe}},pe=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)({}),o=Object(l.a)(s,2),i=o[0],u=o[1],d=Object(r.useState)({}),f=Object(l.a)(d,2),j=f[0],m=f[1],h=Object(r.useState)([]),O=Object(l.a)(h,2),g=O[0],y=O[1],C=Object(r.useReducer)(je,fe),_=Object(l.a)(C,2),N=_[0],k=_[1];Object(r.useEffect)((function(){var e=Object.values(N);y(de(e))}),[N]);var S=Object(r.useMemo)((function(){return{addCountry:function(e){k({type:x,countryName:e,countryCoordinates:i[e]})},removeCountry:function(e){k({type:v,countryName:e})}}}),[i]),w={selectedCountries:Object.keys(N),addSelectedCountry:function(e){S.addCountry(e)},removeSelectedCountry:function(e){S.removeCountry(e)},sortedCoordinates:g,dragItem:{set:c,get:a},allCoordinates:{set:u,get:i},allFlags:{set:m,get:j}};return Object(p.jsx)(b.Provider,{value:w,children:e.children})};s.a.render(Object(p.jsx)(pe,{children:Object(p.jsx)(se,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.4d9b56a2.chunk.js.map