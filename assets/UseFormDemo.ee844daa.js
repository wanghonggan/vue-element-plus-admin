import{F as e}from"./Form.40370550.js";import{_ as o}from"./ContentWrap.vue_vue_type_script_setup_true_lang.ba15bad3.js";import{d as l,s as t,r as a,o as i,c as m,g as s,w as r,a as n,y as d,t as p,a0 as f,k as c,c7 as u}from"./index.6c93e529.js";import{u as b}from"./useForm.d0954446.js";import{E as _}from"./el-button.e4ac2c34.js";import{u as D}from"./useValidator.a3804689.js";import"./el-col.978d1a6c.js";import"./el-popper.d501c030.js";import"./index.1be34ebc.js";import"./el-input.d40254f0.js";import"./event.0d56b427.js";import"./index.fdc7f5fe.js";import"./el-tag.c2dc5123.js";import"./tsxHelper.21c89763.js";import"./index.39a5e946.js";import"./scroll.a030fdde.js";import"./debounce.44d5c571.js";import"./validator.217700c8.js";import"./el-input-number.97b70ac4.js";import"./el-switch.2b11eb5b.js";import"./el-divider.8250fc34.js";import"./InputPassword.2870d7a5.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./style.css_vue_type_style_index_0_src_true_lang.b41fb403.js";import"./aria.062511a5.js";import"./browser.30c5ae69.js";import"./el-card.4d399944.js";const v=l({__name:"UseFormDemo",setup(l){const{required:v}=D(),{t:j}=c(),h=t([{field:"field1",label:j("formDemo.input"),component:"Input",formItemProps:{rules:[v()]}},{field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:j("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:j("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:j("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:j("formDemo.timeSelect")}]),{register:k,methods:C,elFormRef:P}=b({schema:h}),g=e=>{const{setProps:o}=C;o({labelWidth:e})},x=e=>{const{setProps:o}=C;o({size:e})},$=e=>{const{setProps:o}=C;o({disabled:e})},y=e=>{const{delSchema:o,addSchema:l}=C;e?o("field2"):e||"field2"===h[1].field||l({field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},F=e=>{var o;const{setValues:l}=C;e?null==(o=n(P))||o.resetFields():l({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},S=a(7),w=()=>{const{setSchema:e}=C;e([{field:"field2",path:"label",value:`${j("formDemo.select")} ${S.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),S.value++},I=()=>{const{addSchema:e}=C;n(S)%2==0?e({field:`field${n(S)}`,label:`${j("formDemo.input")}${n(S)}`,component:"Input"}):e({field:`field${n(S)}`,label:`${j("formDemo.input")}${n(S)}`,component:"Input"},n(S)),S.value++},R=()=>{n(P).validate((e=>{}))},V=()=>{var e;null==(e=n(P))||e.resetFields()},W=async()=>{const e=await u();if(e){const{setSchema:o}=C;o([{field:"field2",path:"componentProps.options",value:e.data}])}};return(l,t)=>(i(),m(f,null,[s(n(o),{title:`UseForm ${n(j)("formDemo.operate")}`},{default:r((()=>[s(n(_),{onClick:t[0]||(t[0]=e=>g(150))},{default:r((()=>[d(p(n(j)("formDemo.change"))+" labelWidth",1)])),_:1}),s(n(_),{onClick:t[1]||(t[1]=e=>g("auto"))},{default:r((()=>[d(p(n(j)("formDemo.restore"))+" labelWidth",1)])),_:1}),s(n(_),{onClick:t[2]||(t[2]=e=>x("large"))},{default:r((()=>[d(p(n(j)("formDemo.change"))+" size",1)])),_:1}),s(n(_),{onClick:t[3]||(t[3]=e=>x("default"))},{default:r((()=>[d(p(n(j)("formDemo.restore"))+" size",1)])),_:1}),s(n(_),{onClick:t[4]||(t[4]=e=>$(!0))},{default:r((()=>[d(p(n(j)("formDemo.disabled")),1)])),_:1}),s(n(_),{onClick:t[5]||(t[5]=e=>$(!1))},{default:r((()=>[d(p(n(j)("formDemo.disablement")),1)])),_:1}),s(n(_),{onClick:t[6]||(t[6]=e=>y(!0))},{default:r((()=>[d(p(n(j)("formDemo.delete"))+" "+p(n(j)("formDemo.select")),1)])),_:1}),s(n(_),{onClick:t[7]||(t[7]=e=>y(!1))},{default:r((()=>[d(p(n(j)("formDemo.add"))+" "+p(n(j)("formDemo.select")),1)])),_:1}),s(n(_),{onClick:t[8]||(t[8]=e=>F(!1))},{default:r((()=>[d(p(n(j)("formDemo.setValue")),1)])),_:1}),s(n(_),{onClick:t[9]||(t[9]=e=>F(!0))},{default:r((()=>[d(p(n(j)("formDemo.resetValue")),1)])),_:1}),s(n(_),{onClick:w},{default:r((()=>[d(p(n(j)("formDemo.set"))+" "+p(n(j)("formDemo.select"))+" label ",1)])),_:1}),s(n(_),{onClick:I},{default:r((()=>[d(p(n(j)("formDemo.add"))+" "+p(n(j)("formDemo.subitem")),1)])),_:1}),s(n(_),{onClick:R},{default:r((()=>[d(p(n(j)("formDemo.formValidation")),1)])),_:1}),s(n(_),{onClick:V},{default:r((()=>[d(p(n(j)("formDemo.verifyReset")),1)])),_:1}),s(n(_),{onClick:W},{default:r((()=>[d(p(n(j)("searchDemo.dynamicOptions")),1)])),_:1})])),_:1},8,["title"]),s(n(o),{title:`UseForm ${n(j)("formDemo.example")}`},{default:r((()=>[s(n(e),{onRegister:n(k)},null,8,["onRegister"])])),_:1},8,["title"])],64))}});export{v as default};
