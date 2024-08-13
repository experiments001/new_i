import{q as U,k as d,j,r as C,b as r,c as u,d as s,w as i,e as l,F as b,f as D,l as k,g as V,u as n,t as p,p as I,I as P}from"./index-29a91f62.js";import{_ as T,a as z}from"./LayoutHeader-d3ca6986.js";import{a as E,_ as L}from"./global-7d1669ca.js";import{_ as R,N as S}from"./NoteModal-2036878e.js";import{_ as q}from"./ViewControls-ed2bb842.js";import{t as A,d as G,a as H}from"./index-12263c08.js";import{D as J}from"./Dropdown-a48e38bc.js";import{T as K}from"./Link-00b86c9a.js";import{_ as O}from"./ListFooter-96a0f786.js";import"./ArrowUpRightIcon-b156aad4.js";import"./DetailsIcon-b7ac1f53.js";import"./NestedPopover-620c36ca.js";import"./EditIcon-94a66fee.js";import"./views-f9b9afbd.js";import"./FadedScrollableDiv-9ed81c90.js";import"./settings-01f42b9c.js";import"./DragVerticalIcon-2de8ea46.js";import"./label-0b0a7961.js";const Q={class:"flex-1 overflow-y-auto"},W={key:0,class:"grid grid-cols-1 gap-2 px-3 pb-2 sm:grid-cols-4 sm:gap-4 sm:px-5 sm:pb-3"},X=["onClick"],Y={class:"flex items-center justify-between"},Z={class:"truncate text-lg font-medium"},ee={class:"mt-2 flex items-center justify-between gap-2"},te={class:"flex items-center gap-2"},oe={class:"text-sm text-gray-800"},ae={class:"text-sm text-gray-700"},se={key:1,class:"flex h-full items-center justify-center"},le={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},Ve={__name:"Notes",setup(ne){const{getUser:F}=U(),M=[{label:__("Notes"),route:{name:"Notes"}}],m=d(!1),c=d(null),a=d({}),_=d(1),f=d(20);j(()=>{var o,e;return(e=(o=a.value)==null?void 0:o.data)==null?void 0:e.page_length_count},(o,e)=>{!o||o===e||(f.value=o)});function g(){c.value={title:"",content:""},m.value=!0}function $(o){c.value=o,m.value=!0}async function B(o){await P("frappe.client.delete",{doctype:"FCRM Note",name:o}),a.value.reload()}return(o,e)=>{var h,w,N,y;const x=C("FeatherIcon"),v=C("Button");return r(),u(b,null,[s(T,null,{"left-header":i(()=>[s(n(z),{items:M})]),"right-header":i(()=>[s(v,{variant:"solid",label:o.__("Create"),onClick:g},{prefix:i(()=>[s(x,{name:"plus",class:"h-4"})]),_:1},8,["label"])]),_:1}),s(q,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),loadMore:_.value,"onUpdate:loadMore":e[1]||(e[1]=t=>_.value=t),updatedPageCount:f.value,"onUpdate:updatedPageCount":e[2]||(e[2]=t=>f.value=t),doctype:"FCRM Note",options:{hideColumnsButton:!0,defaultViewName:o.__("Notes View")}},null,8,["modelValue","loadMore","updatedPageCount","options"]),l("div",Q,[(w=(h=a.value.data)==null?void 0:h.data)!=null&&w.length?(r(),u("div",W,[(r(!0),u(b,null,D(a.value.data.data,t=>(r(),u("div",{class:"group flex h-56 cursor-pointer flex-col justify-between gap-2 rounded-lg border px-5 py-4 shadow-sm hover:bg-gray-50",onClick:re=>$(t)},[l("div",Y,[l("div",Z,p(t.title),1),s(n(J),{options:[{label:o.__("Delete"),icon:"trash-2",onClick:()=>B(t.name)}],onClick:e[3]||(e[3]=I(()=>{},["stop"]))},{default:i(()=>[s(v,{icon:"more-horizontal",variant:"ghosted",class:"hover:bg-white"})]),_:2},1032,["options"])]),t.content?(r(),V(n(K),{key:0,content:t.content,editable:!1,"editor-class":"!prose-sm max-w-none !text-sm text-gray-600 focus:outline-none",class:"flex-1 overflow-hidden"},null,8,["content"])):k("",!0),l("div",ee,[l("div",te,[s(E,{user:t.owner,size:"xs"},null,8,["user"]),l("div",oe,p(n(F)(t.owner).full_name),1)]),s(n(L),{text:n(G)(t.modified,n(H))},{default:i(()=>[l("div",ae,p(o.__(n(A)(t.modified))),1)]),_:2},1032,["text"])])],8,X))),256))])):k("",!0)]),(y=(N=a.value.data)==null?void 0:N.data)!=null&&y.length?(r(),V(n(O),{key:0,class:"border-t px-3 py-2 sm:px-5",modelValue:a.value.data.page_length_count,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value.data.page_length_count=t),options:{rowCount:a.value.data.row_count,totalCount:a.value.data.total_count},onLoadMore:e[5]||(e[5]=()=>_.value++)},null,8,["modelValue","options"])):(r(),u("div",se,[l("div",le,[s(S,{class:"h-10 w-10"}),l("span",null,p(o.__("No {0} Found",[o.__("Notes")])),1),s(v,{label:o.__("Create"),onClick:g},{prefix:i(()=>[s(x,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])),s(R,{modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=t=>m.value=t),reloadNotes:a.value,"onUpdate:reloadNotes":e[7]||(e[7]=t=>a.value=t),note:c.value},null,8,["modelValue","reloadNotes","note"])],64)}}};export{Ve as default};
//# sourceMappingURL=Notes-e46a4c81.js.map
