import{d as e,a9 as r,o as s,c as t,e as a,t as o,g as n,w as l,a as i,k as m,y as u}from"./index.ca8543f6.js";import{E as c}from"./el-button.73ad49c8.js";const p={class:"flex justify-center"},d={class:"text-center"},f=["src"],v={class:"text-14px text-[var(--el-color-info)]"},x={class:"mt-20px"},g=e({__name:"Error",props:{type:r.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:r}){const g=e,{t:y}=m(),T={404:{url:"/vue-element-plus-admin/assets/404.1759fece.svg",message:y("error.pageError"),buttonText:y("error.returnToHome")},500:{url:"/vue-element-plus-admin/assets/500.8fda557c.svg",message:y("error.networkError"),buttonText:y("error.returnToHome")},403:{url:"/vue-element-plus-admin/assets/403.af24f6bf.svg",message:y("error.noPermission"),buttonText:y("error.returnToHome")}},b=()=>{r("errorClick",g.type)};return(r,m)=>(s(),t("div",p,[a("div",d,[a("img",{width:"350",src:T[e.type].url,alt:""},null,8,f),a("div",v,o(T[e.type].message),1),a("div",x,[n(i(c),{type:"primary",onClick:b},{default:l((()=>[u(o(T[e.type].buttonText),1)])),_:1})])])]))}});export{g as _};
