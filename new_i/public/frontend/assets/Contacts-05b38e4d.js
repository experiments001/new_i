import{_ as A}from"./CustomActions-3e5f5139.js";import{C as B}from"./ContactsIcon-11a1459a.js";import{_ as E,a as I}from"./LayoutHeader-d3ca6986.js";import{C as P}from"./ContactModal-fd543427.js";import{_ as N}from"./QuickEntryModal-0b009000.js";import{_ as q}from"./ContactsListView-1de00779.js";import{_ as D}from"./ViewControls-ed2bb842.js";import{A as R,k as r,i as k,r as w,b as m,c as z,d as u,w as v,g as V,e as L,t as S,l as b,F as T,u as j}from"./index-29a91f62.js";import{o as O}from"./organizations-e15a7320.js";import{d as Q,t as W,a as G}from"./index-12263c08.js";import"./Dropdown-a48e38bc.js";import"./settings-01f42b9c.js";import"./Fields-4d667b5d.js";import"./NestedPopover-620c36ca.js";import"./EditIcon-94a66fee.js";import"./global-7d1669ca.js";import"./IndicatorIcon-2e26ac17.js";import"./Link-00b86c9a.js";import"./Email2Icon-90bca55a.js";import"./PhoneIcon-df7b879a.js";import"./OrganizationsIcon-b4d9134c.js";import"./Dropdown-a2a4924b.js";import"./DragVerticalIcon-2de8ea46.js";import"./ListBulkActions-8ddaba3b.js";import"./AssignmentModal-8d3e4385.js";import"./ListFooter-96a0f786.js";import"./label-0b0a7961.js";import"./DetailsIcon-b7ac1f53.js";import"./views-f9b9afbd.js";import"./FadedScrollableDiv-9ed81c90.js";const H={key:1,class:"flex h-full items-center justify-center"},J={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},ze={__name:"Contacts",setup(K){const{getOrganization:M}=O(),$=R(),p=r(!1),i=r(!1),f=k(()=>{var o,e,s;return(s=(e=(o=a.value)==null?void 0:o.data)==null?void 0:e.data)==null?void 0:s.find(l=>l.name===$.params.contactId)}),x=k(()=>{let o=[{label:__("Contacts"),route:{name:"Contacts"}}];return f.value&&o.push({label:__(f.value.full_name),route:{name:"Contact",params:{contactId:f.value.name}}}),o}),C=r(null),a=r({}),_=r(1),g=r(1),y=r(20),d=r(null),F=k(()=>{var o,e,s;return!((e=(o=a.value)==null?void 0:o.data)!=null&&e.data)||!["list","group_by"].includes(a.value.data.view_type)?[]:(s=a.value)==null?void 0:s.data.data.map(l=>{var c;let t={};return(c=a.value)==null||c.data.rows.forEach(n=>{var U;t[n]=l[n],n=="full_name"?t[n]={label:l.full_name,image_label:l.full_name,image:l.image}:n=="company_name"?t[n]={label:l.company_name,logo:(U=M(l.company_name))==null?void 0:U.organization_logo}:["modified","creation"].includes(n)&&(t[n]={label:Q(l[n],G),timeAgo:__(W(l[n]))})}),t})});return(o,e)=>{const s=w("FeatherIcon"),l=w("Button");return m(),z(T,null,[u(E,null,{"left-header":v(()=>[u(j(I),{items:x.value},null,8,["items"])]),"right-header":v(()=>{var t;return[(t=C.value)!=null&&t.customListActions?(m(),V(A,{key:0,actions:C.value.customListActions},null,8,["actions"])):b("",!0),u(l,{variant:"solid",label:o.__("Create"),onClick:e[0]||(e[0]=c=>p.value=!0)},{prefix:v(()=>[u(s,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),u(D,{ref_key:"viewControls",ref:d,modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value=t),loadMore:_.value,"onUpdate:loadMore":e[2]||(e[2]=t=>_.value=t),resizeColumn:g.value,"onUpdate:resizeColumn":e[3]||(e[3]=t=>g.value=t),updatedPageCount:y.value,"onUpdate:updatedPageCount":e[4]||(e[4]=t=>y.value=t),doctype:"Contact"},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),a.value.data&&F.value.length?(m(),V(q,{key:0,ref_key:"contactsListView",ref:C,modelValue:a.value.data.page_length_count,"onUpdate:modelValue":e[5]||(e[5]=t=>a.value.data.page_length_count=t),list:a.value,"onUpdate:list":e[6]||(e[6]=t=>a.value=t),rows:F.value,columns:a.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:a.value.data.row_count,totalCount:a.value.data.total_count},onLoadMore:e[7]||(e[7]=()=>_.value++),onColumnWidthUpdated:e[8]||(e[8]=()=>g.value++),onUpdatePageCount:e[9]||(e[9]=t=>y.value=t),onApplyFilter:e[10]||(e[10]=t=>d.value.applyFilter(t)),onApplyLikeFilter:e[11]||(e[11]=t=>d.value.applyLikeFilter(t)),onLikeDoc:e[12]||(e[12]=t=>d.value.likeDoc(t))},null,8,["modelValue","list","rows","columns","options"])):a.value.data?(m(),z("div",H,[L("div",J,[u(B,{class:"h-10 w-10"}),L("span",null,S(o.__("No {0} Found",[o.__("Contacts")])),1),u(l,{label:o.__("Create"),onClick:e[13]||(e[13]=t=>p.value=!0)},{prefix:v(()=>[u(s,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):b("",!0),u(P,{modelValue:p.value,"onUpdate:modelValue":e[14]||(e[14]=t=>p.value=t),quickEntry:i.value,"onUpdate:quickEntry":e[15]||(e[15]=t=>i.value=t),contact:{}},null,8,["modelValue","quickEntry"]),i.value?(m(),V(N,{key:2,modelValue:i.value,"onUpdate:modelValue":e[16]||(e[16]=t=>i.value=t),doctype:"Contact"},null,8,["modelValue"])):b("",!0)],64)}}};export{ze as default};
//# sourceMappingURL=Contacts-05b38e4d.js.map
