import{_ as X,q as Y,v as Z,k as h,i as v,B as ee,x as $,r as x,b as l,c,u as a,g as d,w as m,l as r,d as n,F as ae,I as B,e as i,C as te,G as w,t as u,n as I,H as S}from"./index-29a91f62.js";import{g as oe,b as N,_ as se}from"./global-7d1669ca.js";import{_ as le,a as ne}from"./LayoutHeader-d3ca6986.js";import{F as ie}from"./FileUploader-ae370410.js";import{_ as re}from"./Tabs-a1293733.js";import{_ as ce}from"./Dropdown-a2a4924b.js";import{E as me}from"./Email2Icon-90bca55a.js";import{P as de}from"./PhoneIcon-df7b879a.js";import{E as ue}from"./EditIcon-94a66fee.js";import{C as _e}from"./CameraIcon-59068c83.js";import{D as pe}from"./DealsIcon-c7294f54.js";import{_ as ge}from"./DealsListView-fa85100b.js";import{C as fe}from"./ContactModal-fd543427.js";import{_ as be}from"./QuickEntryModal-0b009000.js";import{b as ye,d as he,t as ve,a as xe}from"./index-12263c08.js";import{o as we}from"./organizations-e15a7320.js";import{s as ke}from"./statuses-cf7e371a.js";import{c as z}from"./settings-01f42b9c.js";import"./Dropdown-a48e38bc.js";import"./ListBulkActions-8ddaba3b.js";import"./Link-00b86c9a.js";import"./NestedPopover-620c36ca.js";import"./AssignmentModal-8d3e4385.js";import"./IndicatorIcon-2e26ac17.js";import"./ListRows-f2bc9a56.js";import"./ListFooter-96a0f786.js";import"./label-0b0a7961.js";import"./Fields-4d667b5d.js";import"./OrganizationsIcon-b4d9134c.js";import"./DragVerticalIcon-2de8ea46.js";const Ce={key:1,class:"flex h-full flex-col overflow-hidden"},Ie={class:"flex items-start justify-start gap-6 p-5 sm:items-center"},ze={class:"group relative h-24 w-24"},Ee={class:"z-1 absolute bottom-0 left-0 right-0 flex h-14 cursor-pointer items-center justify-center rounded-b-full bg-black bg-opacity-40 pt-3 opacity-0 duration-300 ease-in-out group-hover:opacity-100",style:{"-webkit-clip-path":"inset(12px 0 0 0)","clip-path":"inset(12px 0 0 0)"}},Ve={class:"flex flex-col gap-2 truncate sm:gap-0.5"},De={class:"truncate text-3xl font-semibold"},Fe={key:0},Me={class:"flex flex-col flex-wrap gap-3 text-base text-gray-700 sm:flex-row sm:items-center sm:gap-2"},$e={key:0,class:"flex items-center gap-1.5"},Be={class:""},Se={key:1,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},Ne={class:""},Ue={key:3,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},je={key:4,class:"flex items-center gap-1.5"},qe={class:""},Pe={key:5,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},Ae={class:"mt-2 flex gap-1.5"},Oe={key:1,class:"grid flex-1 place-items-center text-xl font-medium text-gray-500"},Re={class:"flex flex-col items-center justify-center space-y-3"},Ge={__name:"Contact",props:{contactId:{type:String,required:!0}},setup(U){const{$dialog:j,makeCall:q}=oe(),{getUser:E}=Y(),{getOrganization:V}=we(),{getDealStatus:P}=ke(),_=U,A=Z(),f=h(!1),g=h(!1),k=h(!1),O=v(()=>{var o;let e=[{label:__("Contacts"),route:{name:"Contacts"}}];return e.push({label:(o=t.data)==null?void 0:o.full_name,route:{name:"Contact",params:{contactId:_.contactId}}}),e});function R(e){let o=e.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg"].includes(o))return __("Only PNG and JPG images are allowed")}async function D(e){await B("frappe.client.set_value",{doctype:"Contact",name:_.contactId,fieldname:"image",value:(e==null?void 0:e.file_url)||""}),t.reload()}async function G(){j({title:__("Delete contact"),message:__("Are you sure you want to delete this contact?"),actions:[{label:__("Delete"),theme:"red",variant:"solid",async onClick(e){await B("frappe.client.delete",{doctype:"Contact",name:_.contactId}),e(),A.push({name:"Contacts"})}}]})}const F=h(0),T=[{label:"Deals",icon:ee(pe,{class:"h-4 w-4"}),count:v(()=>{var e;return(e=b.data)==null?void 0:e.length})}],t=$({url:"new_i.api.contact.get_contact",cache:["contact",_.contactId],params:{name:_.contactId},auto:!0,transform:e=>({...e,actual_mobile_no:e.mobile_no,mobile_no:e.mobile_no})}),b=$({url:"new_i.api.contact.get_linked_deals",cache:["deals",_.contactId],params:{contact:_.contactId},auto:!0}),C=v(()=>!b.data||b.data==[]?[]:b.data.map(e=>H(e))),L=v(()=>J);function H(e){var o,p;return{name:e.name,organization:{label:e.organization,logo:(o=V(e.organization))==null?void 0:o.organization_logo},annual_revenue:ye(e.annual_revenue,e.currency),status:{label:e.status,color:(p=P(e.status))==null?void 0:p.iconColorClass},email:e.email,mobile_no:e.mobile_no,deal_owner:{label:e.deal_owner&&E(e.deal_owner).full_name,...e.deal_owner&&E(e.deal_owner)},modified:{label:he(e.modified,xe),timeAgo:__(ve(e.modified))}}}const J=[{label:__("Organization"),key:"organization",width:"11rem"},{label:__("Amount"),key:"annual_revenue",width:"9rem"},{label:__("Status"),key:"status",width:"10rem"},{label:__("Email"),key:"email",width:"12rem"},{label:__("Mobile no"),key:"mobile_no",width:"11rem"},{label:__("Deal owner"),key:"deal_owner",width:"10rem"},{label:__("Last modified"),key:"modified",width:"8rem"}];return(e,o)=>{const p=x("Button"),Q=x("FeatherIcon"),K=x("ErrorMessage"),W=x("Badge");return l(),c(ae,null,[a(t).data?(l(),d(le,{key:0},{"left-header":m(()=>[n(a(ne),{items:O.value},null,8,["items"])]),_:1})):r("",!0),a(t).data?(l(),c("div",Ce,[n(a(ie),{onSuccess:D,validateFile:R},{default:m(({openFileSelector:s,error:y})=>{var M;return[i("div",Ie,[i("div",ze,[n(a(N),{size:"3xl",class:"h-24 w-24",label:a(t).data.full_name,image:a(t).data.image},null,8,["label","image"]),(l(),d(w(a(t).data.image?ce:"div"),te(a(t).data.image?{options:[{icon:"upload",label:a(t).data.image?e.__("Change image"):e.__("Upload image"),onClick:s},{icon:"trash-2",label:e.__("Remove image"),onClick:()=>D("")}]}:{onClick:s},{class:"!absolute bottom-0 left-0 right-0"}),{default:m(()=>[i("div",Ee,[n(_e,{class:"h-6 w-6 cursor-pointer text-white"})])]),_:2},1040))]),i("div",Ve,[i("div",De,[a(t).data.salutation?(l(),c("span",Fe,u(a(t).data.salutation+". "),1)):r("",!0),i("span",null,u(a(t).data.full_name),1)]),i("div",Me,[a(t).data.email_id?(l(),c("div",$e,[n(me,{class:"h-4 w-4"}),i("span",Be,u(a(t).data.email_id),1)])):r("",!0),a(t).data.email_id?(l(),c("span",Se," · ")):r("",!0),a(t).data.actual_mobile_no?(l(),d(w(a(z)?a(se):"div"),{key:2,text:e.__("Make Call")},{default:m(()=>[i("div",{class:I(["flex items-center gap-1.5",a(z)?"cursor-pointer":""]),onClick:o[0]||(o[0]=Te=>a(z)&&a(q)(a(t).data.actual_mobile_no))},[n(de,{class:"h-4 w-4"}),i("span",Ne,u(a(t).data.actual_mobile_no),1)],2)]),_:1},8,["text"])):r("",!0),a(t).data.actual_mobile_no?(l(),c("span",Ue," · ")):r("",!0),a(t).data.company_name?(l(),c("div",je,[n(a(N),{size:"xs",label:a(t).data.company_name,image:(M=a(V)(a(t).data.company_name))==null?void 0:M.organization_logo},null,8,["label","image"]),i("span",qe,u(a(t).data.company_name),1)])):r("",!0),a(t).data.company_name?(l(),c("span",Pe," · ")):r("",!0),a(t).data.email_id||a(t).data.mobile_no||a(t).data.company_name?(l(),d(p,{key:6,variant:"ghost",label:e.__("More"),class:"w-fit cursor-pointer hover:text-gray-900 sm:-ml-1",onClick:o[1]||(o[1]=()=>{k.value=!0,f.value=!0})},null,8,["label"])):r("",!0)]),i("div",Ae,[n(p,{label:e.__("Edit"),size:"sm",onClick:o[2]||(o[2]=()=>{k.value=!1,f.value=!0})},{prefix:m(()=>[n(ue,{class:"h-4 w-4"})]),_:1},8,["label"]),n(p,{label:e.__("Delete"),theme:"red",size:"sm",onClick:G},{prefix:m(()=>[n(Q,{name:"trash-2",class:"h-4 w-4"})]),_:1},8,["label"])]),n(K,{message:e.__(y)},null,8,["message"])])])]}),_:1}),n(a(re),{class:"overflow-hidden",modelValue:F.value,"onUpdate:modelValue":o[3]||(o[3]=s=>F.value=s),tabs:T},{tab:m(({tab:s,selected:y})=>[i("button",{class:I(["group flex items-center gap-2 border-b border-transparent py-2.5 text-base text-gray-600 duration-300 ease-in-out hover:border-gray-400 hover:text-gray-900",{"text-gray-900":y}])},[s.icon?(l(),d(w(s.icon),{key:0,class:"h-5"})):r("",!0),S(" "+u(e.__(s.label))+" ",1),n(W,{class:I(["group-hover:bg-gray-900",[y?"bg-gray-900":"bg-gray-600"]]),variant:"solid",theme:"gray",size:"sm"},{default:m(()=>[S(u(s.count),1)]),_:2},1032,["class"])],2)]),default:m(({tab:s})=>[s.label==="Deals"&&C.value.length?(l(),d(ge,{key:0,class:"mt-4",rows:C.value,columns:L.value,options:{selectable:!1,showTooltip:!1}},null,8,["rows","columns"])):r("",!0),C.value.length?r("",!0):(l(),c("div",Oe,[i("div",Re,[(l(),d(w(s.icon),{class:"!h-10 !w-10"})),i("div",null,u(e.__("No {0} Found",[e.__(s.label)])),1)])]))]),_:1},8,["modelValue"])])):r("",!0),n(fe,{modelValue:f.value,"onUpdate:modelValue":o[4]||(o[4]=s=>f.value=s),quickEntry:g.value,"onUpdate:quickEntry":o[5]||(o[5]=s=>g.value=s),contact:a(t),options:{detailMode:k.value}},null,8,["modelValue","quickEntry","contact","options"]),g.value?(l(),d(be,{key:2,modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=s=>g.value=s),doctype:"Contact"},null,8,["modelValue"])):r("",!0)],64)}}},xa=X(Ge,[["__scopeId","data-v-cea81c32"]]);export{xa as default};
//# sourceMappingURL=Contact-5d13d139.js.map
