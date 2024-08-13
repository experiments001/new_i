import{W as X,k as w,i as C,ax as ee,a3 as n,cz as te,au as L,Y as ce,cA as Pe,cB as W,cC as _e,cD as xe,ar as ae,cE as Se,cF as we,cG as ke,cH as De,B as V,Z as le,F as N,$ as z,a as de,as as pe,a2 as Me,cI as ve,a4 as J,a6 as Q,ay as O,az as F,cJ as Ce,at as oe,a0 as ne,a9 as B,cK as E,av as Z,_ as Ie,am as Fe,Q as Ee,ak as Ve,D as Be,aA as $e,r as j,b as $,g as fe,w as T,d as k,C as Oe,e as M,t as R,c as G,f as U,n as Te,o as Ye,u as q,L as se,M as ue,N as ie,S as Ae,T as Ne,z as Le,aE as je}from"./index-29a91f62.js";var Ge=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ge||{});let he=Symbol("PopoverContext");function re(e){let i=ne(he,null);if(i===null){let u=new Error(`<${e} /> is missing a parent <${be.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,re),u}return i}let ze=Symbol("PopoverGroupContext");function ge(){return ne(ze,null)}let me=Symbol("PopoverPanelContext");function Ke(){return ne(me,null)}let be=X({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:i,attrs:u,expose:g}){var y;let r=w(null);g({el:r,$el:r});let l=w(1),t=w(null),P=w(null),_=w(null),c=w(null),p=C(()=>ee(r)),m=C(()=>{var a,s;if(!n(t)||!n(c))return!1;for(let H of document.querySelectorAll("body > *"))if(Number(H==null?void 0:H.contains(n(t)))^Number(H==null?void 0:H.contains(n(c))))return!0;let o=te(),b=o.indexOf(n(t)),D=(b+o.length-1)%o.length,I=(b+1)%o.length,K=o[D],ye=o[I];return!((a=n(c))!=null&&a.contains(K))&&!((s=n(c))!=null&&s.contains(ye))}),v={popoverState:l,buttonId:w(null),panelId:w(null),panel:c,button:t,isPortalled:m,beforePanelSentinel:P,afterPanelSentinel:_,togglePopover(){l.value=L(l.value,{0:1,1:0})},closePopover(){l.value!==1&&(l.value=1)},close(a){v.closePopover();let s=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?n(a):n(v.button):n(v.button))();s==null||s.focus()}};ce(he,v),Pe(C(()=>L(l.value,{0:W.Open,1:W.Closed})));let x={buttonId:v.buttonId,panelId:v.panelId,close(){v.closePopover()}},S=ge(),Y=S==null?void 0:S.registerPopover,[A,f]=_e(),h=xe({mainTreeNodeRef:S==null?void 0:S.mainTreeNodeRef,portals:A,defaultContainers:[t,c]});function d(){var a,s,o,b;return(b=S==null?void 0:S.isFocusWithinPopoverGroup())!=null?b:((a=p.value)==null?void 0:a.activeElement)&&(((s=n(t))==null?void 0:s.contains(p.value.activeElement))||((o=n(c))==null?void 0:o.contains(p.value.activeElement)))}return ae(()=>Y==null?void 0:Y(x)),Se((y=p.value)==null?void 0:y.defaultView,"focus",a=>{var s,o;a.target!==window&&a.target instanceof HTMLElement&&l.value===0&&(d()||t&&c&&(h.contains(a.target)||(s=n(v.beforePanelSentinel))!=null&&s.contains(a.target)||(o=n(v.afterPanelSentinel))!=null&&o.contains(a.target)||v.closePopover()))},!0),we(h.resolveContainers,(a,s)=>{var o;v.closePopover(),ke(s,De.Loose)||(a.preventDefault(),(o=n(t))==null||o.focus())},C(()=>l.value===0)),()=>{let a={open:l.value===0,close:v.close};return V(N,[V(f,{},()=>le({theirProps:{...e,...u},ourProps:{ref:r},slot:a,slots:i,attrs:u,name:"Popover"})),V(h.MainTreeNode)])}}}),He=X({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:i,slots:u,expose:g}){var y;let r=(y=e.id)!=null?y:`headlessui-popover-button-${z()}`,l=re("PopoverButton"),t=C(()=>ee(l.button));g({el:l.button,$el:l.button}),de(()=>{l.buttonId.value=r}),pe(()=>{l.buttonId.value=null});let P=ge(),_=P==null?void 0:P.closeOthers,c=Ke(),p=C(()=>c===null?!1:c.value===l.panelId.value),m=w(null),v=`headlessui-focus-sentinel-${z()}`;p.value||ae(()=>{l.button.value=n(m)});let x=Me(C(()=>({as:e.as,type:i.type})),m);function S(a){var s,o,b,D,I;if(p.value){if(l.popoverState.value===1)return;switch(a.key){case B.Space:case B.Enter:a.preventDefault(),(o=(s=a.target).click)==null||o.call(s),l.closePopover(),(b=n(l.button))==null||b.focus();break}}else switch(a.key){case B.Space:case B.Enter:a.preventDefault(),a.stopPropagation(),l.popoverState.value===1&&(_==null||_(l.buttonId.value)),l.togglePopover();break;case B.Escape:if(l.popoverState.value!==0)return _==null?void 0:_(l.buttonId.value);if(!n(l.button)||(D=t.value)!=null&&D.activeElement&&!((I=n(l.button))!=null&&I.contains(t.value.activeElement)))return;a.preventDefault(),a.stopPropagation(),l.closePopover();break}}function Y(a){p.value||a.key===B.Space&&a.preventDefault()}function A(a){var s,o;e.disabled||(p.value?(l.closePopover(),(s=n(l.button))==null||s.focus()):(a.preventDefault(),a.stopPropagation(),l.popoverState.value===1&&(_==null||_(l.buttonId.value)),l.togglePopover(),(o=n(l.button))==null||o.focus()))}function f(a){a.preventDefault(),a.stopPropagation()}let h=ve();function d(){let a=n(l.panel);if(!a)return;function s(){L(h.value,{[E.Forwards]:()=>O(a,F.First),[E.Backwards]:()=>O(a,F.Last)})===Z.Error&&O(te().filter(o=>o.dataset.headlessuiFocusGuard!=="true"),L(h.value,{[E.Forwards]:F.Next,[E.Backwards]:F.Previous}),{relativeTo:n(l.button)})}s()}return()=>{let a=l.popoverState.value===0,s={open:a},{...o}=e,b=p.value?{ref:m,type:x.value,onKeydown:S,onClick:A}:{ref:m,id:r,type:x.value,"aria-expanded":l.popoverState.value===0,"aria-controls":n(l.panel)?l.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:S,onKeyup:Y,onClick:A,onMousedown:f};return V(N,[le({ourProps:b,theirProps:{...i,...o},slot:s,attrs:i,slots:u,name:"PopoverButton"}),a&&!p.value&&l.isPortalled.value&&V(J,{id:v,features:Q.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:d})])}}}),We=X({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:i,slots:u,expose:g}){var y;let r=(y=e.id)!=null?y:`headlessui-popover-panel-${z()}`,{focus:l}=e,t=re("PopoverPanel"),P=C(()=>ee(t.panel)),_=`headlessui-focus-sentinel-before-${z()}`,c=`headlessui-focus-sentinel-after-${z()}`;g({el:t.panel,$el:t.panel}),de(()=>{t.panelId.value=r}),pe(()=>{t.panelId.value=null}),ce(me,t.panelId),ae(()=>{var f,h;if(!l||t.popoverState.value!==0||!t.panel)return;let d=(f=P.value)==null?void 0:f.activeElement;(h=n(t.panel))!=null&&h.contains(d)||O(n(t.panel),F.First)});let p=Ce(),m=C(()=>p!==null?(p.value&W.Open)===W.Open:t.popoverState.value===0);function v(f){var h,d;switch(f.key){case B.Escape:if(t.popoverState.value!==0||!n(t.panel)||P.value&&!((h=n(t.panel))!=null&&h.contains(P.value.activeElement)))return;f.preventDefault(),f.stopPropagation(),t.closePopover(),(d=n(t.button))==null||d.focus();break}}function x(f){var h,d,a,s,o;let b=f.relatedTarget;b&&n(t.panel)&&((h=n(t.panel))!=null&&h.contains(b)||(t.closePopover(),((a=(d=n(t.beforePanelSentinel))==null?void 0:d.contains)!=null&&a.call(d,b)||(o=(s=n(t.afterPanelSentinel))==null?void 0:s.contains)!=null&&o.call(s,b))&&b.focus({preventScroll:!0})))}let S=ve();function Y(){let f=n(t.panel);if(!f)return;function h(){L(S.value,{[E.Forwards]:()=>{var d;O(f,F.First)===Z.Error&&((d=n(t.afterPanelSentinel))==null||d.focus())},[E.Backwards]:()=>{var d;(d=n(t.button))==null||d.focus({preventScroll:!0})}})}h()}function A(){let f=n(t.panel);if(!f)return;function h(){L(S.value,{[E.Forwards]:()=>{let d=n(t.button),a=n(t.panel);if(!d)return;let s=te(),o=s.indexOf(d),b=s.slice(0,o+1),D=[...s.slice(o+1),...b];for(let I of D.slice())if(I.dataset.headlessuiFocusGuard==="true"||a!=null&&a.contains(I)){let K=D.indexOf(I);K!==-1&&D.splice(K,1)}O(D,F.First,{sorted:!1})},[E.Backwards]:()=>{var d;O(f,F.Previous)===Z.Error&&((d=n(t.button))==null||d.focus())}})}h()}return()=>{let f={open:t.popoverState.value===0,close:t.close},{focus:h,...d}=e,a={ref:t.panel,id:r,onKeydown:v,onFocusout:l&&t.popoverState.value===0?x:void 0,tabIndex:-1};return le({ourProps:a,theirProps:{...i,...d},attrs:i,slot:f,slots:{...u,default:(...s)=>{var o;return[V(N,[m.value&&t.isPortalled.value&&V(J,{id:_,ref:t.beforePanelSentinel,features:Q.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:Y}),(o=u.default)==null?void 0:o.call(u,...s),m.value&&t.isPortalled.value&&V(J,{id:c,ref:t.afterPanelSentinel,features:Q.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:A})])]}},features:oe.RenderStrategy|oe.Static,visible:m.value,name:"PopoverPanel"})}}});const Re={name:"DatePicker",props:["value","modelValue","placeholder","formatter","readonly","inputClass"],emits:["update:modelValue","change"],components:{Popover:Fe,Input:Ee,Button:Ve,FeatherIcon:Be,TextInput:$e},data(){return{currentYear:null,currentMonth:null}},created(){this.selectCurrentMonthYear()},computed:{today(){return this.getDate()},datesAsWeeks(){let e=[],i=this.dates.slice();for(;i.length;){let u=i.splice(0,7);e.push(u)}return e},dates(){if(!(this.currentYear&&this.currentMonth))return[];let e=this.currentMonth-1,i=this.currentYear,u=this.getDate(i,e,1),g=this.getDate(i,e+1,0),y=u.getDay(),r=6-g.getDay(),l=this.getDatesAfter(u,-y),t=this.getDatesAfter(g,r),P=this.getDaysInMonth(e,i),_=this.getDatesAfter(u,P-1),c=[...l,u,..._,...t];if(c.length<42){const p=this.getDatesAfter(c.at(-1),42-c.length);c=c.concat(...p)}return c},formatMonth(){let e=this.getDate(this.currentYear,this.currentMonth-1,1);return`${e.toLocaleString("en-US",{month:"long"})}, ${e.getFullYear()}`},dateValue(){return this.value?this.value:this.modelValue}},methods:{selectDate(e){this.$emit("change",this.toValue(e)),this.$emit("update:modelValue",this.toValue(e))},selectCurrentMonthYear(){let e=this.dateValue?this.getDate(this.dateValue):this.getDate();e==="Invalid Date"&&(e=this.getDate()),this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth()+1},prevMonth(){this.changeMonth(-1)},nextMonth(){this.changeMonth(1)},changeMonth(e){this.currentMonth=this.currentMonth+e,this.currentMonth<1&&(this.currentMonth=12,this.currentYear=this.currentYear-1),this.currentMonth>12&&(this.currentMonth=1,this.currentYear=this.currentYear+1)},getDatesAfter(e,i){let u=1;i<0&&(u=-1,i=Math.abs(i));let g=[];for(;i;)e=this.getDate(e.getFullYear(),e.getMonth(),e.getDate()+u),g.push(e),i--;return u===-1?g.reverse():g},getDaysInMonth(e,i){let g=[31,28,31,30,31,30,31,31,30,31,30,31][e];return e===1&&this.isLeapYear(i)?29:g},isLeapYear(e){return e%400===0?!0:e%100===0?!1:e%4===0},toValue(e){return e?(e.setHours(0,-e.getTimezoneOffset(),0,0),e.toISOString().slice(0,10)):""},getDate(...e){return new Date(...e)}}},Ue={class:"mt-2 w-fit select-none divide-y rounded-lg bg-white text-base shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"},qe={class:"flex items-center p-1 text-gray-500"},Je={class:"flex-1 text-center text-base font-medium text-gray-700"},Qe={class:"flex items-center justify-center gap-1 p-1"},Ze={class:"flex flex-col items-center justify-center p-1 text-gray-800"},Xe={class:"flex items-center text-xs uppercase"},et=["onClick"],tt={class:"flex justify-end p-1"};function at(e,i,u,g,y,r){const l=j("Input"),t=j("FeatherIcon"),P=j("Button"),_=j("TextInput"),c=j("Popover");return $(),fe(c,{onOpen:r.selectCurrentMonthYear,class:"flex w-full [&>div:first-child]:w-full"},{target:T(({togglePopover:p})=>[k(l,Oe({readonly:"",type:"text","icon-left":"calendar",placeholder:u.placeholder,value:r.dateValue&&u.formatter?u.formatter(r.dateValue):r.dateValue,onFocus:m=>u.readonly?null:p(),class:["w-full",u.inputClass]},e.$attrs),null,16,["placeholder","value","onFocus","class"])]),body:T(({togglePopover:p})=>[M("div",Ue,[M("div",qe,[k(P,{variant:"ghost",class:"h-7 w-7",onClick:r.prevMonth},{default:T(()=>[k(t,{"stroke-width":2,name:"chevron-left",class:"h-4 w-4"})]),_:1},8,["onClick"]),M("div",Je,R(r.formatMonth),1),k(P,{variant:"ghost",class:"h-7 w-7",onClick:r.nextMonth},{default:T(()=>[k(t,{"stroke-width":2,name:"chevron-right",class:"h-4 w-4"})]),_:1},8,["onClick"])]),M("div",Qe,[k(_,{class:"text-sm",type:"text",value:r.dateValue,onChange:m=>r.selectDate(r.getDate(m.target.value))||p()},null,8,["value","onChange"]),k(P,{label:"Today",class:"text-sm",onClick:m=>r.selectDate(r.getDate())||p()},null,8,["onClick"])]),M("div",Ze,[M("div",Xe,[($(),G(N,null,U(["su","mo","tu","we","th","fr","sa"],(m,v)=>M("div",{class:"flex h-6 w-8 items-center justify-center text-center",key:v},R(m),1)),64))]),($(!0),G(N,null,U(r.datesAsWeeks,(m,v)=>($(),G("div",{class:"flex items-center",key:v},[($(!0),G(N,null,U(m,x=>($(),G("div",{key:r.toValue(x),class:Te(["flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:bg-gray-50",{"text-gray-400":x.getMonth()!==y.currentMonth-1,"font-extrabold text-gray-900":r.toValue(x)===r.toValue(r.today),"bg-gray-800 text-white hover:bg-gray-800":r.toValue(x)===r.dateValue}]),onClick:()=>{r.selectDate(x),p()}},R(x.getDate()),11,et))),128))]))),128))]),M("div",tt,[k(P,{label:"Clear",class:"text-sm",onClick:()=>{r.selectDate(""),p()}},null,8,["onClick"])])])]),_:1},8,["onOpen"])}const nt=Ie(Re,[["render",at]]),rt={__name:"NestedPopover",props:{placement:{type:String,default:"bottom-start"}},setup(e){const i=e,u=w(null),g=w(null);let y=w(null);function r(){y.value?y.value.update():y.value=je(u.value.el,g.value.el,{placement:i.placement})}function l(){Le(()=>r())}return Ye(()=>{var t;(t=y.value)==null||t.destroy()}),(t,P)=>($(),fe(q(be),null,{default:T(({open:_})=>[k(q(He),{as:"div",ref_key:"reference",ref:u,onClick:l,onFocusin:l,onKeydown:l},{default:T(({open:c})=>[se(t.$slots,"target",ue(ie({open:c})))]),_:2},1536),Ae(M("div",null,[k(q(We),{ref_key:"popover",ref:g,static:"",class:"z-[100]"},{default:T(({open:c,close:p})=>[se(t.$slots,"body",ue(ie({open:c,close:p})))]),_:2},1536)],512),[[Ne,_]])]),_:3}))}};export{nt as D,rt as _};
//# sourceMappingURL=NestedPopover-620c36ca.js.map
