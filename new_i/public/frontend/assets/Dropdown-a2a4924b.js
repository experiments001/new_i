import{v as N,al as P,i as b,b as a,g as u,w as i,d as m,u as o,am as T,L as h,M as V,C as k,ak as z,H as A,t as f,e as v,n as x,c as d,F as C,f as w,l as p,G as _,D as M}from"./index-29a91f62.js";import{S as O,c as j,M as E,g as G}from"./Dropdown-a48e38bc.js";const H={class:"rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"},I={key:0,class:"flex h-7 items-center px-2 text-sm font-medium text-gray-500"},R=["onClick"],q={class:"whitespace-nowrap"},J={key:0,class:"border-t p-1.5"},U={__name:"Dropdown",props:{button:{type:Object,default:null},options:{type:Array,default:()=>[]},placement:{type:String,default:"left"}},setup(r){const c=r,g=N(),S=P(),B={enterActiveClass:"transition duration-100 ease-out",enterFromClass:"transform scale-95 opacity-0",enterToClass:"transform scale-100 opacity-100",leaveActiveClass:"transition duration-75 ease-in",leaveFromClass:"transform scale-100 opacity-100",leaveToClass:"transform scale-95 opacity-0"},D=b(()=>{var t;return((t=c.options[0])!=null&&t.group?c.options:[{group:"",items:c.options}]).map((l,s)=>({key:s,group:l.group,hideLabel:l.hideLabel||!1,items:F(l.items)}))}),L=b(()=>c.placement==="left"?"bottom-start":c.placement==="right"?"bottom-end":c.placement==="center"?"bottom-center":"bottom");function $(e){let t=e.onClick||null;return!t&&e.route&&g&&(t=()=>g.push(e.route)),{label:e.label,icon:e.icon,group:e.group,component:e.component,onClick:t}}function F(e){return(e||[]).filter(Boolean).filter(t=>t.condition?t.condition():!0).map(t=>$(t))}return(e,t)=>(a(),u(o(G),{as:"div",class:"relative inline-block text-left"},{default:i(({open:l})=>[m(o(T),{transition:B,show:l,placement:L.value},{target:i(()=>[m(o(O),{as:"div"},{default:i(()=>[e.$slots.default?h(e.$slots,"default",V(k({key:0},{open:l}))):(a(),u(o(z),k({key:1,active:l},r.button),{default:i(()=>{var s;return[A(f(r.button?((s=r.button)==null?void 0:s.label)||null:"Options"),1)]}),_:2},1040,["active"]))]),_:2},1024)]),body:i(()=>[v("div",H,[m(o(j),{class:x(["mt-2 min-w-40 divide-y divide-gray-100",{"left-0 origin-top-left":r.placement=="left","right-0 origin-top-right":r.placement=="right","inset-x-0 origin-top":r.placement=="center"}])},{default:i(()=>[(a(!0),d(C,null,w(D.value,s=>(a(),d("div",{key:s.key,class:"p-1.5"},[s.group&&!s.hideLabel?(a(),d("div",I,f(s.group),1)):p("",!0),(a(!0),d(C,null,w(s.items,n=>(a(),u(o(E),{key:n.label},{default:i(({active:y})=>[n.component?(a(),u(_(n.component),{key:0,active:y},null,8,["active"])):(a(),d("button",{key:1,class:x([y?"bg-gray-100":"text-gray-800","group flex h-7 w-full items-center rounded px-2 text-base"]),onClick:n.onClick},[n.icon&&typeof n.icon=="string"?(a(),u(o(M),{key:0,name:n.icon,class:"mr-2 h-4 w-4 flex-shrink-0 text-gray-700","aria-hidden":"true"},null,8,["name"])):n.icon?(a(),u(_(n.icon),{key:1,class:"mr-2 h-4 w-4 flex-shrink-0 text-gray-700"})):p("",!0),v("span",q,f(n.label),1)],10,R))]),_:2},1024))),128))]))),128))]),_:1},8,["class"]),o(S).footer?(a(),d("div",J,[h(e.$slots,"footer")])):p("",!0)])]),_:2},1032,["show","placement"])]),_:3}))}};export{U as _};
//# sourceMappingURL=Dropdown-a2a4924b.js.map
