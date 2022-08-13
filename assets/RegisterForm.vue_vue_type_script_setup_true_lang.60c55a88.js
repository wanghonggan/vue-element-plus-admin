import{F as e}from"./Form.40370550.js";import{d as o,s,r as l,o as a,h as r,w as t,e as d,t as n,a as i,g as c,y as p,k as m}from"./index.6c93e529.js";import{u}from"./useForm.d0954446.js";import{E as g}from"./el-button.e4ac2c34.js";import{E as h}from"./el-input.d40254f0.js";import{u as f}from"./useValidator.a3804689.js";const w={class:"text-2xl font-bold text-center w-[100%]"},P={class:"w-[100%] flex"},b={class:"w-[100%]"},v={class:"w-[100%] mt-15px"},k=o({__name:"RegisterForm",emits:["to-login"],setup(o,{emit:k}){const{register:y,elFormRef:_}=u(),{t:x}=m(),{required:j}=f(),F=s([{field:"title",colProps:{span:24}},{field:"username",label:x("login.username"),value:"",component:"Input",colProps:{span:24},componentProps:{placeholder:x("login.usernamePlaceholder")}},{field:"password",label:x("login.password"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:x("login.passwordPlaceholder")}},{field:"check_password",label:x("login.checkPassword"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:x("login.passwordPlaceholder")}},{field:"code",label:x("login.code"),colProps:{span:24}},{field:"register",colProps:{span:24}}]),V={username:[j()],password:[j()],check_password:[j()],code:[j()]},R=()=>{k("to-login")},I=l(!1),U=async()=>{const e=i(_);null==e||e.validate((async e=>{if(e)try{I.value=!0,R()}finally{I.value=!1}}))};return(o,s)=>(a(),r(i(e),{schema:F,rules:V,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:i(y)},{title:t((()=>[d("h2",w,n(i(x)("login.register")),1)])),code:t((e=>[d("div",P,[c(i(h),{modelValue:e.code,"onUpdate:modelValue":o=>e.code=o,placeholder:i(x)("login.codePlaceholder")},null,8,["modelValue","onUpdate:modelValue","placeholder"])])])),register:t((()=>[d("div",b,[c(i(g),{type:"primary",class:"w-[100%]",loading:I.value,onClick:U},{default:t((()=>[p(n(i(x)("login.register")),1)])),_:1},8,["loading"])]),d("div",v,[c(i(g),{class:"w-[100%]",onClick:R},{default:t((()=>[p(n(i(x)("login.hasUser")),1)])),_:1})])])),_:1},8,["schema","onRegister"]))}});export{k as _};
