import{F as e}from"./Form.40370550.js";import{d as a,a9 as i,r as t,H as o,x as n,o as s,c as l,g as r,w as c,a as d,a1 as m,h as u,Z as f,a0 as p,y as h,t as y,k as v,ch as x,bl as g}from"./index.6c93e529.js";import{E as k}from"./el-button.e4ac2c34.js";import{u as b}from"./useForm.d0954446.js";const w={key:0},F=a({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:i.bool.def(!1),labelWidth:i.oneOfType([String,Number]).def("auto"),layout:i.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttomPosition:i.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:i.bool.def(!0),showReset:i.bool.def(!0),expand:i.bool.def(!1),expandField:i.string.def(""),inline:i.bool.def(!0)},emits:["search","reset"],setup(a,{emit:i}){const F=a,{t:_}=v(),C=t(!0),R=o((()=>{let e=x(F.schema);if(F.expand&&F.expandField&&!d(C)){const a=g(e,(e=>e.field===F.expandField));if(a>-1){const i=e.length;e.splice(a+1,i)}}return"inline"===F.layout&&(e=e.concat([{field:"action",formItemProps:{labelWidth:"0px"}}])),e})),{register:S,elFormRef:j,methods:q}=b(),P=async()=>{var e;await(null==(e=d(j))?void 0:e.validate((async e=>{if(e){const{getFormData:e}=q,a=await e();i("search",a)}})))},W=async()=>{var e;null==(e=d(j))||e.resetFields();const{getFormData:a}=q,t=await a();i("reset",t)},A=o((()=>({textAlign:F.buttomPosition}))),D=()=>{var e;null==(e=d(j))||e.resetFields(),C.value=!d(C)};return(i,t)=>{const o=n("Icon");return s(),l(p,null,[r(d(e),{"is-custom":!1,"label-width":a.labelWidth,"hide-required-asterisk":"",inline:a.inline,"is-col":a.isCol,schema:d(R),onRegister:d(S)},{action:c((()=>["inline"===a.layout?(s(),l("div",w,[a.showSearch?(s(),u(d(k),{key:0,type:"primary",onClick:P},{default:c((()=>[r(o,{icon:"ep:search",class:"mr-5px"}),h(" "+y(d(_)("common.query")),1)])),_:1})):f("v-if",!0),a.showReset?(s(),u(d(k),{key:1,onClick:W},{default:c((()=>[r(o,{icon:"ep:refresh-right",class:"mr-5px"}),h(" "+y(d(_)("common.reset")),1)])),_:1})):f("v-if",!0),a.expand?(s(),u(d(k),{key:2,text:"",onClick:D},{default:c((()=>[h(y(d(_)(C.value?"common.shrink":"common.expand"))+" ",1),r(o,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):f("v-if",!0)])):f("v-if",!0)])),_:1},8,["label-width","inline","is-col","schema","onRegister"]),"bottom"===a.layout?(s(),l("div",{key:0,style:m(d(A))},[a.showSearch?(s(),u(d(k),{key:0,type:"primary",onClick:P},{default:c((()=>[r(o,{icon:"ep:search",class:"mr-5px"}),h(" "+y(d(_)("common.query")),1)])),_:1})):f("v-if",!0),a.showReset?(s(),u(d(k),{key:1,onClick:W},{default:c((()=>[r(o,{icon:"ep:refresh-right",class:"mr-5px"}),h(" "+y(d(_)("common.reset")),1)])),_:1})):f("v-if",!0),a.expand?(s(),u(d(k),{key:2,text:"",onClick:D},{default:c((()=>[h(y(d(_)(C.value?"common.shrink":"common.expand"))+" ",1),r(o,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):f("v-if",!0)],4)):f("v-if",!0)],64)}}});export{F as _};
