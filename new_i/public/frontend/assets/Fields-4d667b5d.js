import{_ as M,D as j}from"./NestedPopover-620c36ca.js";import{_ as L,b as o,c as s,e as r,k as w,a as N,z as f,r as _,S as B,T as D,t as p,d as n,p as F,R as T,u as i,aA as E,g as d,w as c,l as y,q as A,F as U,f as $,n as x,H as I,E as O}from"./index-29a91f62.js";import{E as P}from"./EditIcon-94a66fee.js";import{_ as C,a as S}from"./global-7d1669ca.js";import{I as R}from"./IndicatorIcon-2e26ac17.js";import{_ as z,D as Z}from"./Link-00b86c9a.js";const K={},q={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H=r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM11.2909 5.98482C11.4666 5.77175 11.4363 5.45663 11.2232 5.28096C11.0101 5.1053 10.695 5.13561 10.5193 5.34868L7.07001 9.53239L5.72845 7.79857C5.55946 7.58018 5.24543 7.54012 5.02703 7.70911C4.80863 7.8781 4.76858 8.19214 4.93756 8.41053L6.66217 10.6394C6.7552 10.7596 6.89788 10.831 7.04988 10.8334C7.20188 10.8357 7.3467 10.7688 7.4434 10.6515L11.2909 5.98482Z",fill:"currentColor"},null,-1),G=[H];function J(a,h){return o(),s("svg",q,G)}const Q=L(K,[["render",J]]),W={class:"group flex w-full items-center justify-between rounded bg-transparent p-1 pl-2 text-base text-gray-800 transition-colors hover:bg-gray-200 active:bg-gray-300"},X={class:"flex items-center justify-between gap-7"},Y={class:"actions flex items-center justify-center"},ee={__name:"DropdownItem",props:{option:{type:Object,default:()=>{}}},setup(a){const h=a,l=w(!1),v=w(!1),m=w(null);N(()=>{var u;(u=h.option)!=null&&u.value||(l.value=!0,v.value=!0,f(()=>m.value.el.focus()))});const g=()=>{l.value=!l.value,l.value&&f(()=>m.value.el.focus())},k=()=>{g(),h.option.onSave(h.option,v.value),v.value=!1};return(u,e)=>{const t=_("Button"),b=_("FeatherIcon");return o(),s("div",W,[r("div",X,[B(r("div",null,p(a.option.value),513),[[D,!l.value]]),B(n(i(E),{ref_key:"inputRef",ref:m,modelValue:a.option.value,"onUpdate:modelValue":e[0]||(e[0]=V=>a.option.value=V),class:"w-full",placeholder:a.option.placeholder,onBlur:F(k,["stop"]),onKeydown:e[1]||(e[1]=T(F(V=>V.target.blur(),["stop"]),["enter"]))},null,8,["modelValue","placeholder"]),[[D,l.value]]),r("div",Y,[!v.value&&!a.option.selected?(o(),d(i(C),{key:0,text:"Set As Primary"},{default:c(()=>[r("div",null,[n(t,{variant:"ghost",size:"sm",class:"opacity-0 hover:bg-gray-300 group-hover:opacity-100",onClick:a.option.onClick},{default:c(()=>[n(Q)]),_:1},8,["onClick"])])]),_:1})):y("",!0),n(i(C),{text:"Edit"},{default:c(()=>[r("div",null,[n(t,{variant:"ghost",size:"sm",class:"opacity-0 hover:bg-gray-300 group-hover:opacity-100",onClick:g},{default:c(()=>[n(P)]),_:1})])]),_:1}),n(i(C),{text:"Delete"},{default:c(()=>[r("div",null,[n(t,{variant:"ghost",icon:"x",size:"sm",class:"opacity-0 hover:bg-gray-300 group-hover:opacity-100",onClick:e[2]||(e[2]=()=>a.option.onDelete(a.option,v.value))})])]),_:1})])]),r("div",null,[a.option.selected?(o(),d(b,{key:0,name:"check",class:"text-primary-500 h-4 w-6",size:"sm"})):y("",!0)])])}}};const ae={class:"flex flex-col gap-4"},te={key:0,class:"flex h-7 mb-3 max-w-fit cursor-pointer items-center gap-2 text-base font-semibold leading-5"},oe={key:0},le={key:0,class:"mb-2 text-sm text-gray-600"},ne={key:0,class:"text-red-500"},se={key:3,class:"flex items-center gap-2"},re=["onClick"],ce={key:0,class:"text-red-500"},de={class:"cursor-pointer"},ue={key:6},me={class:"truncate"},ie={class:"my-2 space-y-1.5 divide-y rounded-lg border border-gray-100 bg-white p-1.5 shadow-xl"},he={key:1},pe={class:"p-1.5 px-7 text-base text-gray-500"},ye={class:"pt-1.5"},ve={__name:"Fields",props:{sections:Array,data:Object},setup(a){const{getUser:h}=A();return(l,v)=>{const m=_("FormControl"),g=_("FeatherIcon"),k=_("Button");return o(),s("div",ae,[(o(!0),s(U,null,$(a.sections,u=>(o(),s("div",{key:u.label,class:x(["first:border-t-0 first:pt-0",u.hideBorder?"":"border-t pt-4"])},[u.hideLabel?y("",!0):(o(),s("div",te,p(u.label),1)),r("div",{class:x(["grid gap-4",u.columns?"grid-cols-"+u.columns:"grid-cols-2 sm:grid-cols-3"])},[(o(!0),s(U,null,$(u.fields,e=>(o(),s("div",{key:e.name},[e.type=="Check"||e.read_only&&a.data[e.name]||!e.read_only||!e.hidden?(o(),s("div",oe,[e.type!="Check"?(o(),s("div",le,[I(p(l.__(e.label))+" ",1),e.mandatory?(o(),s("span",ne,"*")):y("",!0)])):y("",!0),e.read_only&&e.type!=="Check"?(o(),d(m,{key:1,type:"text",placeholder:l.__(e.placeholder||e.label),modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,disabled:!0},null,8,["placeholder","modelValue","onUpdate:modelValue"])):e.type==="Select"?(o(),d(m,{key:2,type:"select",class:x(["form-control",e.prefix?"prefix":""]),options:e.options,modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,placeholder:l.__(e.placeholder||e.label)},O({_:2},[e.prefix?{name:"prefix",fn:c(()=>[n(R,{class:x(e.prefix)},null,8,["class"])]),key:"0"}:void 0]),1032,["class","options","modelValue","onUpdate:modelValue","placeholder"])):e.type=="Check"?(o(),s("div",se,[n(m,{class:"form-control",type:"checkbox",modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,onChange:t=>a.data[e.name]=t.target.checked,disabled:!!e.read_only},null,8,["modelValue","onUpdate:modelValue","onChange","disabled"]),r("label",{class:"text-sm text-gray-600",onClick:t=>a.data[e.name]=!a.data[e.name]},[I(p(l.__(e.label))+" ",1),e.mandatory?(o(),s("span",ce,"*")):y("",!0)],8,re)])):e.type==="Link"?(o(),d(z,{key:4,class:"form-control",value:a.data[e.name],doctype:e.options,onChange:t=>a.data[e.name]=t,placeholder:l.__(e.placeholder||e.label),onCreate:e.create},null,8,["value","doctype","onChange","placeholder","onCreate"])):e.type==="User"?(o(),d(z,{key:5,class:"form-control",value:i(h)(a.data[e.name]).full_name,doctype:e.options,onChange:t=>a.data[e.name]=t,placeholder:l.__(e.placeholder||e.label),hideMe:!0},{prefix:c(()=>[n(S,{class:"mr-2",user:a.data[e.name],size:"sm"},null,8,["user"])]),"item-prefix":c(({option:t})=>[n(S,{class:"mr-2",user:t.value,size:"sm"},null,8,["user"])]),"item-label":c(({option:t})=>[n(i(C),{text:t.value},{default:c(()=>[r("div",de,p(i(h)(t.value).full_name),1)]),_:2},1032,["text"])]),_:2},1032,["value","doctype","onChange","placeholder"])):e.type==="Dropdown"?(o(),s("div",ue,[n(M,null,{target:c(({open:t})=>[n(k,{label:a.data[e.name],class:"dropdown-button flex w-full items-center justify-between rounded border border-gray-100 bg-gray-100 px-2 py-1.5 text-base text-gray-800 placeholder-gray-500 transition-colors hover:border-gray-200 hover:bg-gray-200 focus:border-gray-500 focus:bg-white focus:shadow-sm focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-400"},{suffix:c(()=>[n(g,{name:t?"chevron-up":"chevron-down",class:"h-4 text-gray-600"},null,8,["name"])]),default:c(()=>[r("div",me,p(a.data[e.name]),1)]),_:2},1032,["label"])]),body:c(()=>{var t;return[r("div",ie,[r("div",null,[(t=e.options)!=null&&t.length?(o(!0),s(U,{key:0},$(e.options,b=>(o(),d(ee,{key:b.name,option:b},null,8,["option"]))),128)):(o(),s("div",he,[r("div",pe,p(l.__("No {0} Available",[e.label])),1)]))]),r("div",ye,[n(k,{variant:"ghost",class:"w-full !justify-start",label:l.__("Create New"),onClick:b=>e.create()},{prefix:c(()=>[n(g,{name:"plus",class:"h-4"})]),_:2},1032,["label","onClick"])])])]}),_:2},1024)])):e.type==="Datetime"?(o(),d(i(Z),{key:7,modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,placeholder:l.__(e.placeholder||e.label),"input-class":"border-none"},null,8,["modelValue","onUpdate:modelValue","placeholder"])):e.type==="Date"?(o(),d(i(j),{key:8,modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,placeholder:l.__(e.placeholder||e.label),"input-class":"border-none"},null,8,["modelValue","onUpdate:modelValue","placeholder"])):["Small Text","Text","Long Text"].includes(e.type)?(o(),d(m,{key:9,type:"textarea",placeholder:l.__(e.placeholder||e.label),modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t},null,8,["placeholder","modelValue","onUpdate:modelValue"])):["Int"].includes(e.type)?(o(),d(m,{key:10,type:"number",placeholder:l.__(e.placeholder||e.label),modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t},null,8,["placeholder","modelValue","onUpdate:modelValue"])):(o(),d(m,{key:11,type:"text",placeholder:l.__(e.placeholder||e.label),modelValue:a.data[e.name],"onUpdate:modelValue":t=>a.data[e.name]=t,disabled:!!e.read_only},null,8,["placeholder","modelValue","onUpdate:modelValue","disabled"]))])):y("",!0)]))),128))],2)],2))),128))])}}},Ve=L(ve,[["__scopeId","data-v-4ce3afb6"]]);export{Ve as F,Q as S};
//# sourceMappingURL=Fields-4d667b5d.js.map
