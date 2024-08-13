import{m as g,h as x,i as V,s as P,j as R,k as I,r as $,b as t,c as u,d as n,w as i,u as r,F as h,f as A,g as c,n as w,l as f,e as S,t as B,p as T}from"./index-29a91f62.js";import{_ as j,H as F,a as q,f as H,b as O,g as E,c as J,d as G,e as K}from"./ListBulkActions-8ddaba3b.js";import{P as Q}from"./PhoneIcon-df7b879a.js";import{b as L,_ as X}from"./global-7d1669ca.js";import{D as Y}from"./Dropdown-a48e38bc.js";import{_ as Z}from"./ListFooter-96a0f786.js";const ee={key:0},te={key:1},se={key:2},le=["onClick"],oe={key:1},ae={key:2},ne=["onClick"],fe={__name:"ContactsListView",props:g({rows:{type:Array,required:!0},columns:{type:Array,required:!0},options:{type:Object,default:()=>({selectable:!0,showTooltip:!0,resizeColumn:!1,totalCount:0,rowCount:0})}},{modelValue:{},modelModifiers:{},list:{},listModifiers:{}}),emits:g(["loadMore","updatePageCount","columnWidthUpdated","applyFilter","applyLikeFilter","likeDoc"],["update:modelValue","update:list"]),setup(o,{expose:M,emit:U}){const m=U,p=x(o,"modelValue"),y=x(o,"list"),z=V(()=>{var a,s;return!!((s=(a=y.value.params)==null?void 0:a.filters)!=null&&s._liked_by)}),{user:W}=P();function v(a){if(a)return JSON.parse(a).includes(W)}R(p,(a,s)=>{a!==s&&m("updatePageCount",a)});const _=I(null);return M({customListActions:V(()=>{var a;return(a=_.value)==null?void 0:a.customListActions})}),(a,s)=>{const C=$("Button"),D=$("FormControl");return t(),u(h,null,[n(r(G),{class:w(a.$attrs.class),columns:o.columns,rows:o.rows,options:{getRowRoute:e=>({name:"Contact",params:{contactId:e.name}}),selectable:o.options.selectable,showTooltip:o.options.showTooltip,resizeColumn:o.options.resizeColumn},"row-key":"name"},{default:i(()=>[n(r(j),{class:"mx-3 sm:mx-5",onColumnWidthUpdated:s[1]||(s[1]=e=>m("columnWidthUpdated"))},{default:i(()=>[(t(!0),u(h,null,A(o.columns,e=>(t(),c(r(q),{key:e.key,item:e,onColumnWidthUpdated:k=>m("columnWidthUpdated",e)},{default:i(()=>[e.key=="_liked_by"?(t(),c(C,{key:0,variant:"ghosted",class:w(["!h-4",z.value?"fill-red-500":"fill-white"]),onClick:s[0]||(s[0]=()=>m("applyLikeFilter"))},{default:i(()=>[n(F,{class:"h-4 w-4"})]),_:1},8,["class"])):f("",!0)]),_:2},1032,["item","onColumnWidthUpdated"]))),128))]),_:1}),n(r(H),{class:"mx-3 sm:mx-5",id:"list-rows"},{default:i(()=>[(t(!0),u(h,null,A(o.rows,e=>(t(),c(r(E),{key:e.name,row:e},{default:i(({idx:k,column:d,item:l})=>[n(r(O),{item:l},{prefix:i(()=>[d.key==="full_name"?(t(),u("div",ee,[l.label?(t(),c(r(L),{key:0,class:"flex items-center",image:l.image,label:l.image_label,size:"sm"},null,8,["image","label"])):f("",!0)])):d.key==="company_name"?(t(),u("div",te,[l.label?(t(),c(r(L),{key:0,class:"flex items-center",image:l.logo,label:l.label,size:"sm"},null,8,["image","label"])):f("",!0)])):d.key==="mobile_no"?(t(),u("div",se,[n(Q,{class:"h-4 w-4"})])):f("",!0)]),default:i(({label:N})=>[["modified","creation"].includes(d.key)?(t(),u("div",{key:0,class:"truncate text-base",onClick:b=>m("applyFilter",{event:b,idx:k,column:d,item:l,firstColumn:o.columns[0]})},[n(r(X),{text:l.label},{default:i(()=>[S("div",null,B(l.timeAgo),1)]),_:2},1032,["text"])],8,le)):d.type==="Check"?(t(),u("div",oe,[n(D,{type:"checkbox",modelValue:l,disabled:!0,class:"text-gray-900"},null,8,["modelValue"])])):d.key==="_liked_by"?(t(),u("div",ae,[d.key=="_liked_by"?(t(),c(C,{key:0,variant:"ghosted",class:w(v(l)?"fill-red-500":"fill-white"),onClick:T(()=>m("likeDoc",{name:e.name,liked:v(l)}),["stop","prevent"])},{default:i(()=>[n(F,{class:"h-4 w-4"})]),_:2},1032,["class","onClick"])):f("",!0)])):(t(),u("div",{key:3,class:"truncate text-base",onClick:b=>m("applyFilter",{event:b,idx:k,column:d,item:l,firstColumn:o.columns[0]})},B(N),9,ne))]),_:2},1032,["item"])]),_:2},1032,["row"]))),128))]),_:1}),n(r(J),null,{actions:i(({selections:e,unselectAll:k})=>[n(r(Y),{options:_.value.bulkActions(e,k)},{default:i(()=>[n(C,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])]),_:1})]),_:1},8,["class","columns","rows","options"]),p.value?(t(),c(r(Z),{key:0,class:"border-t px-3 py-2 sm:px-5",modelValue:p.value,"onUpdate:modelValue":s[2]||(s[2]=e=>p.value=e),options:{rowCount:o.options.rowCount,totalCount:o.options.totalCount},onLoadMore:s[3]||(s[3]=e=>m("loadMore"))},null,8,["modelValue","options"])):f("",!0),n(K,{ref_key:"listBulkActionsRef",ref:_,modelValue:y.value,"onUpdate:modelValue":s[4]||(s[4]=e=>y.value=e),doctype:"Contact",options:{hideAssign:!0}},null,8,["modelValue"])],64)}}};export{fe as _};
//# sourceMappingURL=ContactsListView-1de00779.js.map
