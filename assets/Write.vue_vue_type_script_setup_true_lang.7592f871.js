import{F as e}from"./Form.40370550.js";import{u as r}from"./useForm.d0954446.js";import{u as t}from"./useValidator.a3804689.js";import{d as s,s as o,v as a,o as m,h as i,a as u}from"./index.6c93e529.js";const n=s({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(s,{expose:n}){const p=s,{required:l}=t(),c=o({title:[l()],author:[l()],importance:[l()],pageviews:[l()],display_time:[l()],content:[l()]}),{register:d,methods:f,elFormRef:F}=r({schema:p.formSchema});return a((()=>p.currentRow),(e=>{if(!e)return;const{setValues:r}=f;r(e)}),{deep:!0,immediate:!0}),n({elFormRef:F,getFormData:f.getFormData}),(r,t)=>(m(),i(u(e),{rules:c,onRegister:u(d)},null,8,["rules","onRegister"]))}});export{n as _};
