import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang.0c69d32c.js";import{d as a,aO as t,r as l,o,h as i,w as s,g as m,a as r,y as d,t as p,k as n}from"./index.ca8543f6.js";import{_ as b}from"./Table.vue_vue_type_script_lang.248ec8d0.js";import{g as c}from"./index.40c2a96d.js";import{E as f}from"./el-tag.2f69b4d8.js";import{E as u}from"./el-button.73ad49c8.js";import"./el-card.f02580c9.js";import"./el-popper.f3acbe71.js";import"./index.8bd5fe6d.js";import"./tsxHelper.bd62a1d5.js";import"./index.e45e81ad.js";import"./event.0d56b427.js";import"./el-input.25e7e838.js";import"./index.ab0dc9e2.js";import"./scroll.f8e45daf.js";import"./debounce.a2c505c4.js";import"./validator.db186fb8.js";const _=a({__name:"DefaultTable",setup(a){const{t:_}=n(),j=[{field:"index",label:_("tableDemo.index"),type:"index"},{field:"title",label:_("tableDemo.title")},{field:"author",label:_("tableDemo.author")},{field:"display_time",label:_("tableDemo.displayTime")},{field:"importance",label:_("tableDemo.importance"),formatter:(e,a,l)=>t(f,{type:1===l?"success":2===l?"warning":"danger"},(()=>_(1===l?"tableDemo.important":2===l?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:_("tableDemo.pageviews")},{field:"action",label:_("tableDemo.action")}],g=l(!0);let D=l([]);(async e=>{const a=await c(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{g.value=!1}));a&&(D.value=a.data.list)})();return(a,t)=>(o(),i(r(e),{title:r(_)("tableDemo.table"),message:r(_)("tableDemo.tableDes")},{default:s((()=>[m(r(b),{columns:j,data:r(D),loading:g.value},{action:s((e=>[m(r(u),{type:"primary",onClick:e=>{}},{default:s((()=>[d(p(r(_)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{_ as default};
