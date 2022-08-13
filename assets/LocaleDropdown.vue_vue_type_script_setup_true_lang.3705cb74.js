import{_ as e,z as o,r as n,A as t,B as l,C as r,a,D as s,E as i,F as u,G as d,d as c,H as p,I as m,J as f,v as g,K as v,x as b,o as w,h,w as I,g as y,L as C,M as E,N as _,O as k,P as T,Q as F,R as S,S as R,U as x,V as O,W as B,c as D,X as M,Y as L,n as P,Z as K,e as N,$,a0 as G,a1 as z,a2 as A,a3 as j,b as H,j as V,a4 as J,a5 as Y,a6 as U,a7 as W,a8 as q,a9 as Q,aa as X,ab as Z,y as ee,t as oe}from"./index.6c93e529.js";import{E as ne}from"./el-switch.2b11eb5b.js";import{u as te}from"./useIcon.e63fd6de.js";import{E as le}from"./el-button.e4ac2c34.js";import{c as re,u as ae,a as se,E as ie,O as ue,w as de,F as ce}from"./el-popper.d501c030.js";import{u as pe}from"./index.39a5e946.js";import{u as me}from"./index.1be34ebc.js";import{c as fe}from"./refs.79701841.js";var ge=e({inheritAttrs:!1},[["render",function(e,n,t,l,r,a){return o(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var ve=e({name:"ElCollectionItem",inheritAttrs:!1},[["render",function(e,n,t,l,r,a){return o(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const be=e=>{const o=`El${e}Collection`,i=`${o}Item`,u=Symbol(o),d=Symbol(i),c={...ge,name:o,setup(){const e=n(null),o=new Map;t(u,{itemMap:o,getItems:()=>{const n=a(e);if(!n)return[];const t=Array.from(n.querySelectorAll("[data-el-collection-item]"));return[...o.values()].sort(((e,o)=>t.indexOf(e.ref)-t.indexOf(o.ref)))},collectionRef:e})}},p={...ve,name:i,setup(e,{attrs:o}){const i=n(null),c=l(u,void 0);t(d,{collectionItemRef:i}),r((()=>{const e=a(i);e&&c.itemMap.set(e,{ref:e,...o})})),s((()=>{const e=a(i);c.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:u,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:c,ElCollectionItem:p}},we=i({style:{type:u([String,Array,Object])},currentTabId:{type:u(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:u(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:he,ElCollectionItem:Ie,COLLECTION_INJECTION_KEY:ye,COLLECTION_ITEM_INJECTION_KEY:Ce}=be("RovingFocusGroup"),Ee=Symbol("elRovingFocusGroup"),_e=Symbol("elRovingFocusGroupItem"),ke={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Te=(e,o,n)=>{const t=((e,o)=>{if("rtl"!==o)return e;switch(e){case d.right:return d.left;case d.left:return d.right;default:return e}})(e.key,n);if(!("vertical"===o&&[d.left,d.right].includes(t)||"horizontal"===o&&[d.up,d.down].includes(t)))return ke[t]},Fe=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},Se={bubbles:!1,cancelable:!0},Re=c({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:we,emits:["currentTabIdChange","entryFocus"],setup(e,{emit:o}){var r;const s=n(null!=(r=e.currentTabId||e.defaultCurrentTabId)?r:null),i=n(!1),u=n(!1),d=n(null),{getItems:c}=l(ye,void 0),b=p((()=>[{outline:"none"},e.style])),w=re((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{u.value=!0})),h=re((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!a(u),{target:n,currentTarget:t}=e;if(n===t&&o&&!a(i)){const e=new Event("rovingFocusGroup.entryFocus",Se);if(null==t||t.dispatchEvent(e),!e.defaultPrevented){const e=c().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===a(s))),...e].filter(Boolean).map((e=>e.ref));Fe(o)}}u.value=!1})),I=re((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{i.value=!1}));t(Ee,{currentTabbedId:m(s),loop:f(e,"loop"),tabIndex:p((()=>a(i)?-1:0)),rovingFocusGroupRef:d,rovingFocusGroupRootStyle:b,orientation:f(e,"orientation"),dir:f(e,"dir"),onItemFocus:e=>{o("currentTabIdChange",e)},onItemShiftTab:()=>{i.value=!0},onBlur:I,onFocus:h,onMousedown:w}),g((()=>e.currentTabId),(e=>{s.value=null!=e?e:null})),v(d,"rovingFocusGroup.entryFocus",((...e)=>{o("entryFocus",...e)}))}});var xe=e(c({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:he,ElRovingFocusGroupImpl:e(Re,[["render",function(e,n,t,l,r,a){return o(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,n,t,l,r,a){const s=b("el-roving-focus-group-impl"),i=b("el-focus-group-collection");return w(),h(i,null,{default:I((()=>[y(s,C(E(e.$attrs)),{default:I((()=>[o(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var Oe=e(c({components:{ElRovingFocusCollectionItem:Ie},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:r,loop:s,onItemFocus:i,onItemShiftTab:u}=l(Ee,void 0),{getItems:c}=l(ye,void 0),m=me(),f=n(null),g=re((e=>{o("mousedown",e)}),(o=>{e.focusable?i(a(m)):o.preventDefault()})),v=re((e=>{o("focus",e)}),(()=>{i(a(m))})),b=re((e=>{o("keydown",e)}),(e=>{const{key:o,shiftKey:n,target:t,currentTarget:l}=e;if(o===d.tab&&n)return void u();if(t!==l)return;const r=Te(e);if(r){e.preventDefault();let o=c().filter((e=>e.focusable)).map((e=>e.ref));switch(r){case"last":o.reverse();break;case"prev":case"next":{"prev"===r&&o.reverse();const e=o.indexOf(l);o=s.value?(i=e+1,(a=o).map(((e,o)=>a[(o+i)%a.length]))):o.slice(e+1);break}}_((()=>{Fe(o)}))}var a,i})),w=p((()=>r.value===a(m)));return t(_e,{rovingFocusGroupItemRef:f,tabIndex:p((()=>a(w)?0:-1)),handleMousedown:g,handleFocus:v,handleKeydown:b}),{id:m,handleKeydown:b,handleFocus:v,handleMousedown:g}}}),[["render",function(e,n,t,l,r,a){const s=b("el-roving-focus-collection-item");return w(),h(s,{id:e.id,focusable:e.focusable,active:e.active},{default:I((()=>[o(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Be=i({trigger:ae.trigger,effect:{...se.effect,default:"light"},type:{type:u(String)},placement:{type:u(String),default:"bottom"},popperOptions:{type:u(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:u([Number,String]),default:0},maxHeight:{type:u([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:u(Object)}}),De=i({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:k}}),Me=i({onKeydown:{type:u(Function)}}),Le=[d.down,d.pageDown,d.home],Pe=[d.up,d.pageUp,d.end],Ke=[...Le,...Pe],{ElCollection:Ne,ElCollectionItem:$e,COLLECTION_INJECTION_KEY:Ge,COLLECTION_ITEM_INJECTION_KEY:ze}=be("Dropdown"),Ae=Symbol("elDropdown"),{ButtonGroup:je}=le;var He=e(c({name:"ElDropdown",components:{ElButton:le,ElButtonGroup:je,ElScrollbar:T,ElDropdownCollection:Ne,ElTooltip:ie,ElRovingFocusGroup:xe,ElOnlyChild:ue,ElIcon:F,ArrowDown:S},props:Be,emits:["visible-change","click","command"],setup(e,{emit:o}){const l=B(),r=R("dropdown"),{t:s}=pe(),i=n(),u=n(),c=n(null),m=n(null),g=n(null),v=n(null),b=n(!1),w=[d.enter,d.space,d.down],h=p((()=>({maxHeight:x(e.maxHeight)}))),I=p((()=>[r.m(_.value)])),y=me().value,C=p((()=>e.id||y));function E(){var e;null==(e=c.value)||e.onClose()}const _=O();t(Ae,{contentRef:m,role:p((()=>e.role)),triggerId:C,isUsingKeyboard:b,onItemEnter:function(){},onItemLeave:function(){const e=a(m);null==e||e.focus(),v.value=null}}),t("elDropdown",{instance:l,dropdownSize:_,handleClick:function(){E()},commandHandler:function(...e){o("command",...e)},trigger:f(e,"trigger"),hideOnClick:f(e,"hideOnClick")});return{t:s,ns:r,scrollbar:g,wrapStyle:h,dropdownTriggerKls:I,dropdownSize:_,triggerId:C,triggerKeys:w,currentTabId:v,handleCurrentTabIdChange:function(e){v.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){b.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:E,handleOpen:function(){var e;null==(e=c.value)||e.onOpen()},handleBeforeShowTooltip:function(){o("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&m.value.focus()},handleBeforeHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:e=>{var o,n;e.preventDefault(),null==(n=null==(o=m.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:c,contentRef:m,triggeringElementRef:i,referenceElementRef:u}}}),[["render",function(e,n,t,l,r,a){var s;const i=b("el-dropdown-collection"),u=b("el-roving-focus-group"),d=b("el-scrollbar"),c=b("el-only-child"),p=b("el-tooltip"),m=b("el-button"),f=b("arrow-down"),g=b("el-icon"),v=b("el-button-group");return w(),D("div",{class:P([e.ns.b(),e.ns.is("disabled",e.disabled)])},[y(p,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(s=e.referenceElementRef)?void 0:s.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:"",pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},M({content:I((()=>[y(d,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:I((()=>[y(u,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:I((()=>[y(i,null,{default:I((()=>[o(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:I((()=>[y(c,{id:e.triggerId,role:"button",tabindex:e.tabindex},{default:I((()=>[o(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(w(),h(v,{key:0},{default:I((()=>[y(m,L({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:I((()=>[o(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),y(m,L({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:I((()=>[y(g,{class:P(e.ns.e("icon"))},{default:I((()=>[y(f)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):K("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Ve=c({name:"DropdownItemImpl",components:{ElIcon:F},props:De,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const n=R("dropdown"),{role:t}=l(Ae,void 0),{collectionItemRef:r}=l(ze,void 0),{collectionItemRef:a}=l(Ce,void 0),{rovingFocusGroupItemRef:s,tabIndex:i,handleFocus:u,handleKeydown:c,handleMousedown:m}=l(_e,void 0);return{ns:n,itemRef:fe(r,a,s),dataset:{"data-el-collection-item":""},role:p((()=>"menu"===t.value?"menuitem":"navigation"===t.value?"link":"button")),tabIndex:i,handleFocus:u,handleKeydown:re((e=>{const{code:n}=e;if(n===d.enter||n===d.space)return e.preventDefault(),e.stopImmediatePropagation(),o("clickimpl",e),!0}),c),handleMousedown:m}}}),Je=["aria-disabled","tabindex","role"];const Ye=()=>{const e=l("elDropdown",{}),o=p((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var Ue=e(c({name:"ElDropdownItem",components:{ElDropdownCollectionItem:$e,ElRovingFocusItem:Oe,ElDropdownItemImpl:e(Ve,[["render",function(e,n,t,l,r,a){const s=b("el-icon");return w(),D(G,null,[e.divided?(w(),D("li",L({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):K("v-if",!0),N("li",L({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:n[0]||(n[0]=o=>e.$emit("clickimpl",o)),onFocus:n[1]||(n[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:n[2]||(n[2]=(...o)=>e.handleKeydown&&e.handleKeydown(...o)),onMousedown:n[3]||(n[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:n[4]||(n[4]=o=>e.$emit("pointermove",o)),onPointerleave:n[5]||(n[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(w(),h(s,{key:0},{default:I((()=>[(w(),h($(e.icon)))])),_:1})):K("v-if",!0),o(e.$slots,"default")],16,Je)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:De,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:t}){const{elDropdown:r}=Ye(),s=B(),i=n(null),u=p((()=>{var e,o;return null!=(o=null==(e=a(i))?void 0:e.textContent)?o:""})),{onItemEnter:d,onItemLeave:c}=l(Ae,void 0),m=re((e=>(o("pointermove",e),e.defaultPrevented)),de((o=>{var n;e.disabled?c(o):(d(o),o.defaultPrevented||null==(n=o.currentTarget)||n.focus())}))),f=re((e=>(o("pointerleave",e),e.defaultPrevented)),de((e=>{c(e)})));return{handleClick:re((e=>(o("click",e),"keydown"!==e.type&&e.defaultPrevented)),(o=>{var n,t,l;e.disabled?o.stopImmediatePropagation():((null==(n=null==r?void 0:r.hideOnClick)?void 0:n.value)&&(null==(t=r.handleClick)||t.call(r)),null==(l=r.commandHandler)||l.call(r,e.command,s,o))})),handlePointerMove:m,handlePointerLeave:f,textContent:u,propsAndAttrs:p((()=>({...e,...t})))}}}),[["render",function(e,n,t,l,r,a){var s;const i=b("el-dropdown-item-impl"),u=b("el-roving-focus-item"),d=b("el-dropdown-collection-item");return w(),h(d,{disabled:e.disabled,"text-value":null!=(s=e.textValue)?s:e.textContent},{default:I((()=>[y(u,{focusable:!e.disabled},{default:I((()=>[y(i,L(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:I((()=>[o(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const We=c({name:"ElDropdownMenu",props:Me,setup(e){const o=R("dropdown"),{_elDropdownSize:n}=Ye(),t=n.value,{focusTrapRef:r,onKeydown:s}=l(ce,void 0),{contentRef:i,role:u,triggerId:c}=l(Ae,void 0),{collectionRef:m,getItems:f}=l(Ge,void 0),{rovingFocusGroupRef:g,rovingFocusGroupRootStyle:v,tabIndex:b,onBlur:w,onFocus:h,onMousedown:I}=l(Ee,void 0),{collectionRef:y}=l(ye,void 0),C=p((()=>[o.b("menu"),o.bm("menu",null==t?void 0:t.value)])),E=fe(i,m,r,g,y),_=re((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:n,target:t}=e;if(o.contains(t),d.tab===n&&e.stopImmediatePropagation(),e.preventDefault(),t!==a(i))return;if(!Ke.includes(n))return;const l=f().filter((e=>!e.disabled)).map((e=>e.ref));Pe.includes(n)&&l.reverse(),Fe(l)}));return{size:t,rovingFocusGroupRootStyle:v,tabIndex:b,dropdownKls:C,role:u,triggerId:c,dropdownListWrapperRef:E,handleKeydown:e=>{_(e),s(e)},onBlur:w,onFocus:h,onMousedown:I}}}),qe=["role","aria-labelledby"];var Qe=e(We,[["render",function(e,n,t,l,r,a){return w(),D("ul",{ref:e.dropdownListWrapperRef,class:P(e.dropdownKls),style:z(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:n[0]||(n[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:n[1]||(n[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:n[2]||(n[2]=(...o)=>e.handleKeydown&&e.handleKeydown(...o)),onMousedown:n[3]||(n[3]=(...o)=>e.onMousedown&&e.onMousedown(...o))},[o(e.$slots,"default")],46,qe)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Xe=A(He,{DropdownItem:Ue,DropdownMenu:Qe}),Ze=j(Ue),eo=j(Qe),oo="var(--el-color-black)",no=c({__name:"ThemeSwitch",setup(e){const{getPrefixCls:o}=V(),t=o("theme-switch"),l=te({icon:"emojione-monotone:sun",color:"#fde047"}),r=te({icon:"emojione-monotone:crescent-moon",color:"#fde047"}),s=H(),i=n(s.getIsDark),u=e=>{s.setIsDark(e)};return(e,o)=>(w(),h(a(ne),{class:P(a(t)),modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=e=>i.value=e),"inline-prompt":"","border-color":oo,"inactive-color":oo,"active-color":oo,"active-icon":a(l),"inactive-icon":a(r),onChange:u},null,8,["class","modelValue","active-icon","inactive-icon"]))}}),to=()=>({changeLocale:async e=>{const o=J.global,n=await Y(Object.assign({"../../locales/en.ts":()=>U((()=>import("./en.f126b89c.js")),[]),"../../locales/zh-CN.ts":()=>U((()=>import("./zh-CN.9721dedd.js")),[])}),`../../locales/${e}.ts`);o.setLocaleMessage(e,n.default),(e=>{const o=W();"legacy"===J.mode?J.global.locale=e:J.global.locale.value=e,o.setCurrentLocale({lang:e}),q(e)})(e)}}),lo=c({__name:"LocaleDropdown",props:{color:Q.string.def("")},setup(e){const{getPrefixCls:o}=V(),n=o("locale-dropdown"),t=X(),l=p((()=>t.getLocaleMap)),r=p((()=>t.getCurrentLocale)),s=e=>{if(e===a(r).lang)return;window.location.reload(),t.setCurrentLocale({lang:e});const{changeLocale:o}=to();o(e)};return(o,t)=>{const r=b("Icon");return w(),h(a(Xe),{class:P(a(n)),trigger:"click",onCommand:s},{dropdown:I((()=>[y(a(eo),null,{default:I((()=>[(w(!0),D(G,null,Z(a(l),(e=>(w(),h(a(Ze),{key:e.lang,command:e.lang},{default:I((()=>[ee(oe(e.name),1)])),_:2},1032,["command"])))),128))])),_:1})])),default:I((()=>[y(r,{size:18,icon:"ion:language-sharp",class:P(["cursor-pointer",o.$attrs.class]),color:e.color},null,8,["class","color"])])),_:1},8,["class"])}}});export{Ze as E,no as _,lo as a,eo as b,Xe as c};
