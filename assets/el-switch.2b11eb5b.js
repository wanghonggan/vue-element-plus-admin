import{E as e,O as a,F as i,aK as t,ao as l,aJ as n,d as s,V as o,S as c,H as r,ar as v,r as u,U as d,v as f,aD as p,C as m,o as h,c as y,e as b,a as g,n as k,au as x,h as I,w,$ as C,Q as S,Z as V,t as T,a0 as _,g as B,at as N,a1 as E,aw as j,_ as P,W as U,N as K,aU as F,ax as z,a2 as A}from"./index.6c93e529.js";import{i as D}from"./validator.217700c8.js";import{U as H,C as J,I as O}from"./event.0d56b427.js";import{u as Q,a as W}from"./index.fdc7f5fe.js";import{u as Z}from"./el-button.e4ac2c34.js";const $=e({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:a,default:""},inactiveIcon:{type:a,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:i(Function)},size:{type:String,validator:D},tabindex:{type:[String,Number]}}),q=["onClick"],G=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],L=["aria-hidden"],M=["aria-hidden"],R=["aria-hidden"],X=["aria-hidden"];const Y=A(P(s({name:"ElSwitch",props:$,emits:{[H]:e=>t(e)||l(e)||n(e),[J]:e=>t(e)||l(e)||n(e),[O]:e=>t(e)||l(e)||n(e)},setup(e,{expose:a,emit:i}){const l=e,n="ElSwitch",s=U(),{formItem:P}=Q(),A=o(),D=c("switch");Z({from:'"value"',replacement:'"model-value" or "v-model"',scope:n,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},r((()=>{var e;return!!(null==(e=s.vnode.props)?void 0:e.value)})));const{inputId:$}=W(l,{formItemContext:P}),Y=v(r((()=>l.loading))),ee=u(!1!==l.modelValue),ae=u(),ie=u(),te=r((()=>[D.b(),D.m(A.value),D.is("disabled",Y.value),D.is("checked",se.value)])),le=r((()=>({width:d(l.width)})));f((()=>l.modelValue),(()=>{ee.value=!0})),f((()=>l.value),(()=>{ee.value=!1}));const ne=r((()=>ee.value?l.modelValue:l.value)),se=r((()=>ne.value===l.activeValue));[l.activeValue,l.inactiveValue].includes(ne.value)||(i(H,l.inactiveValue),i(J,l.inactiveValue),i(O,l.inactiveValue)),f(se,(e=>{var a;ae.value.checked=e,l.validateEvent&&(null==(a=null==P?void 0:P.validate)||a.call(P,"change").catch((e=>p())))}));const oe=()=>{const e=se.value?l.inactiveValue:l.activeValue;i(H,e),i(J,e),i(O,e),K((()=>{ae.value.checked=se.value}))},ce=()=>{if(Y.value)return;const{beforeChange:e}=l;if(!e)return void oe();const a=e();[F(a),t(a)].includes(!0)||z(n,"beforeChange must return type `Promise<boolean>` or `boolean`"),F(a)?a.then((e=>{e&&oe()})).catch((e=>{})):a&&oe()},re=r((()=>D.cssVarBlock({...l.activeColor?{"on-color":l.activeColor}:null,...l.inactiveColor?{"off-color":l.inactiveColor}:null,...l.borderColor?{"border-color":l.borderColor}:null})));return m((()=>{ae.value.checked=se.value})),a({focus:()=>{var e,a;null==(a=null==(e=ae.value)?void 0:e.focus)||a.call(e)}}),(e,a)=>(h(),y("div",{class:k(g(te)),style:E(g(re)),onClick:j(ce,["prevent"])},[b("input",{id:g($),ref_key:"input",ref:ae,class:k(g(D).e("input")),type:"checkbox",role:"switch","aria-checked":g(se),"aria-disabled":g(Y),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:g(Y),tabindex:e.tabindex,onChange:oe,onKeydown:x(ce,["enter"])},null,42,G),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?V("v-if",!0):(h(),y("span",{key:0,class:k([g(D).e("label"),g(D).em("label","left"),g(D).is("active",!g(se))])},[e.inactiveIcon?(h(),I(g(S),{key:0},{default:w((()=>[(h(),I(C(e.inactiveIcon)))])),_:1})):V("v-if",!0),!e.inactiveIcon&&e.inactiveText?(h(),y("span",{key:1,"aria-hidden":g(se)},T(e.inactiveText),9,L)):V("v-if",!0)],2)),b("span",{ref_key:"core",ref:ie,class:k(g(D).e("core")),style:E(g(le))},[e.inlinePrompt?(h(),y("div",{key:0,class:k(g(D).e("inner"))},[e.activeIcon||e.inactiveIcon?(h(),y(_,{key:0},[e.activeIcon?(h(),I(g(S),{key:0,class:k([g(D).is("icon"),g(se)?g(D).is("show"):g(D).is("hide")])},{default:w((()=>[(h(),I(C(e.activeIcon)))])),_:1},8,["class"])):V("v-if",!0),e.inactiveIcon?(h(),I(g(S),{key:1,class:k([g(D).is("icon"),g(se)?g(D).is("hide"):g(D).is("show")])},{default:w((()=>[(h(),I(C(e.inactiveIcon)))])),_:1},8,["class"])):V("v-if",!0)],64)):e.activeText||e.inactiveIcon?(h(),y(_,{key:1},[e.activeText?(h(),y("span",{key:0,class:k([g(D).is("text"),g(se)?g(D).is("show"):g(D).is("hide")]),"aria-hidden":!g(se)},T(e.activeText.substring(0,3)),11,M)):V("v-if",!0),e.inactiveText?(h(),y("span",{key:1,class:k([g(D).is("text"),g(se)?g(D).is("hide"):g(D).is("show")]),"aria-hidden":g(se)},T(e.inactiveText.substring(0,3)),11,R)):V("v-if",!0)],64)):V("v-if",!0)],2)):V("v-if",!0),b("div",{class:k(g(D).e("action"))},[e.loading?(h(),I(g(S),{key:0,class:k(g(D).is("loading"))},{default:w((()=>[B(g(N))])),_:1},8,["class"])):V("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?V("v-if",!0):(h(),y("span",{key:1,class:k([g(D).e("label"),g(D).em("label","right"),g(D).is("active",g(se))])},[e.activeIcon?(h(),I(g(S),{key:0},{default:w((()=>[(h(),I(C(e.activeIcon)))])),_:1})):V("v-if",!0),!e.activeIcon&&e.activeText?(h(),y("span",{key:1,"aria-hidden":!g(se)},T(e.activeText),9,X)):V("v-if",!0)],2))],14,q))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]));export{Y as E};
