import{_ as p,b as C,c as g,e as a,q as h}from"./index-29a91f62.js";import{k as b,d as y,t as v,a as I}from"./index-12263c08.js";import{c as L}from"./contacts-d5d98e1c.js";const k={},B={width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M=a("g",{"clip-path":"url(#clip0_4750_5685)"},[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.4375 6C10.4375 8.45076 8.45076 10.4375 6 10.4375C3.54924 10.4375 1.5625 8.45076 1.5625 6C1.5625 3.54924 3.54924 1.5625 6 1.5625C8.45076 1.5625 10.4375 3.54924 10.4375 6ZM11.4375 6C11.4375 9.00305 9.00305 11.4375 6 11.4375C2.99695 11.4375 0.5625 9.00305 0.5625 6C0.5625 2.99695 2.99695 0.5625 6 0.5625C9.00305 0.5625 11.4375 2.99695 11.4375 6ZM9.00005 5.50004C9.27619 5.50004 9.50004 5.72391 9.50004 6.00005C9.50004 6.27619 9.27618 6.50004 9.00003 6.50004L6.25001 6.5C5.8358 6.49999 5.50003 6.16421 5.50002 5.75L5.5 3C5.5 2.72386 5.72385 2.5 6 2.5C6.27614 2.5 6.5 2.72385 6.5 3L6.50002 5.5L9.00005 5.50004Z",fill:"currentColor"})],-1),x=a("defs",null,[a("clipPath",{id:"clip0_4750_5685"},[a("rect",{width:"12",height:"12",fill:"white"})])],-1),D=[M,x];function F(t,e){return C(),g("svg",B,D)}const R=p(k,[["render",F]]),{getUser:i}=h(),{getContact:r,getLeadContact:s}=L();function U(t,e){var l,o,c,d,u,m,_,f;let n=e.type==="Incoming";return t==="caller"?{label:n?((l=r(e.from))==null?void 0:l.full_name)||((o=s(e.from))==null?void 0:o.full_name)||"Unknown":i(e.caller).full_name,image:n?((c=r(e.from))==null?void 0:c.image)||((d=s(e.from))==null?void 0:d.image):i(e.caller).user_image}:t==="receiver"?{label:n?i(e.receiver).full_name:((u=r(e.to))==null?void 0:u.full_name)||((m=s(e.to))==null?void 0:m.full_name)||"Unknown",image:n?i(e.receiver).user_image:((_=r(e.to))==null?void 0:_.image)||((f=s(e.to))==null?void 0:f.image)}:t==="duration"?{label:b(e.duration),icon:"clock"}:t==="type"?{label:e.type,icon:n?"phone-incoming":"phone-outgoing"}:t==="status"?{label:w[e.status],color:A[e.status]}:["modified","creation"].includes(t)?{label:y(e[t],I),timeAgo:__(v(e[t]))}:e[t]}const w={Completed:"Completed",Initiated:"Initiated",Busy:"Declined",Failed:"Failed",Queued:"Queued",Cancelled:"Cancelled",Ringing:"Ringing","No Answer":"Missed Call","In Progress":"In Progress"},A={Completed:"green",Busy:"orange",Failed:"red",Initiated:"gray",Queued:"gray",Cancelled:"gray",Ringing:"gray","No Answer":"red","In Progress":"blue"};export{R as D,A as a,U as g,w as s};
//# sourceMappingURL=callLog-1e378f99.js.map
