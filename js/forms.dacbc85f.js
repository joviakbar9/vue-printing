"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[790],{9252:function(e,l,t){t.d(l,{Z:function(){return i}});var o=t(2119),n=t(5317),a={name:"BottomOtherPagesSection",setup(){const e=(0,o.tv)(),l=e.getRoutes(),t=[];for(const o in l){const e=l[o].path,n=l[o].meta&&l[o].meta.title?l[o].meta.title:null;n&&t.push({path:e,title:n})}return{screens:t,mdiGithub:n.LcO}}};const u=a;var i=u},9830:function(e,l,t){t.d(l,{Z:function(){return f}});var o=t(6252),n=t(3577),a=t(9963);const u=["type","name","value"],i=(0,o._)("span",{class:"check"},null,-1),r={class:"control-label"};function m(e,l,t,m,s,c){return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":t.column}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.options,((e,s)=>((0,o.wg)(),(0,o.iD)("label",{key:s,class:(0,n.C_)([t.type,"mr-6 mb-3 last:mr-0"])},[(0,o.wy)((0,o._)("input",{type:m.inputType,name:t.name,"onUpdate:modelValue":l[0]||(l[0]=e=>m.computedValue=e),value:s},null,8,u),[[a.YZ,m.computedValue]]),i,(0,o._)("span",r,(0,n.zw)(e),1)],2)))),128))],2)}var s=t(2262),c={name:"CheckRadioPicker",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:[String,Number,Boolean,Array]},emits:["update:modelValue"],setup(e,{emit:l}){const t=(0,s.Fl)({get:()=>e.modelValue,set:e=>{l("update:modelValue",e)}}),o=(0,s.Fl)((()=>"radio"===e.type?"radio":"checkbox"));return{computedValue:t,inputType:o}}},d=t(3744);const p=(0,d.Z)(c,[["render",m]]);var f=p},338:function(e,l,t){t.d(l,{Z:function(){return p}});var o=t(6252),n=t(3577);const a={class:"mb-6 last:mb-0"},u={key:0,class:"block font-bold mb-2"},i={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};function r(e,l,t,r,m,s){return(0,o.wg)(),(0,o.iD)("div",a,[t.label?((0,o.wg)(),(0,o.iD)("label",u,(0,n.zw)(t.label),1)):(0,o.kq)("",!0),(0,o._)("div",{class:(0,n.C_)(r.wrapperClass)},[(0,o.WI)(e.$slots,"default")],2),t.help?((0,o.wg)(),(0,o.iD)("div",i,(0,n.zw)(t.help),1)):(0,o.kq)("",!0)])}var m=t(2262),s={name:"Field",props:{label:String,help:String},setup(e,{slots:l}){const t=(0,m.Fl)((()=>{const e=[],t=l.default().length;return t>1&&e.push("grid grid-cols-1 gap-3"),2===t&&e.push("md:grid-cols-2"),e}));return{wrapperClass:t}}},c=t(3744);const d=(0,c.Z)(s,[["render",r]]);var p=d},36:function(e,l,t){t.d(l,{Z:function(){return w}});var o=t(6252),n=t(3577);const a={class:"flex items-stretch justify-start relative"},u={class:"inline-flex"},i=["accept"],r={key:0},m={class:"inline-flex px-4 py-2 justify-center bg-gray-100 border-gray-200 border rounded-r"};function s(e,l,t,s,c,d){const p=(0,o.up)("jb-button");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("label",u,[(0,o.Wm)(p,{as:"a",label:t.label,icon:t.icon,color:t.color,class:(0,n.C_)({"rounded-r-none":s.file})},null,8,["label","icon","color","class"]),(0,o._)("input",{type:"file",ref:"root",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:t.accept,onInput:l[0]||(l[0]=(...e)=>s.upload&&s.upload(...e))},null,40,i)]),s.file?((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("span",m,(0,n.zw)(s.file.name),1)])):(0,o.kq)("",!0)])}var c=t(5317),d=t(2262),p=t(1479),f={name:"FilePicker",components:{JbButton:p.Z},props:{modelValue:[Object,File,Array],label:{type:String,default:"Upload"},icon:{type:String,default:c.xyB},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup(e,{emit:l}){const t=(0,d.iH)(null),n=(0,d.iH)(e.modelValue),a=(0,d.Fl)((()=>e.modelValue));(0,o.YP)(a,(e=>{n.value=e,e||(t.value.input.value=null)}));const u=e=>{const t=e.target.files||e.dataTransfer.files;n.value=t[0],l("update:modelValue",n.value)};return{root:t,file:n,upload:u}}},b=t(3744);const h=(0,b.Z)(f,[["render",s]]);var w=h},4453:function(e,l,t){t.d(l,{Z:function(){return s}});var o=t(6252),n=t(3577);const a={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};function u(e,l,t,u,i,r){return(0,o.wg)(),(0,o.iD)("section",{class:(0,n.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":t.first,"-mt-6":t.last,"-my-6":!t.first&&!t.last}])},[t.custom?(0,o.WI)(e.$slots,"default",{key:0}):((0,o.wg)(),(0,o.iD)("h1",a,[(0,o.WI)(e.$slots,"default")]))],2)}var i={name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean}},r=t(3744);const m=(0,r.Z)(i,[["render",u]]);var s=m},5731:function(e,l,t){t.r(l),t.d(l,{default:function(){return F}});var o=t(6252),n=t(9963);const a=(0,o.Uk)("Forms"),u=(0,o.Uk)(" Custom elements ");function i(e,l,t,i,r,m){const s=(0,o.up)("title-bar"),c=(0,o.up)("hero-bar"),d=(0,o.up)("title-sub-bar"),p=(0,o.up)("control"),f=(0,o.up)("field"),b=(0,o.up)("divider"),h=(0,o.up)("jb-button"),w=(0,o.up)("jb-buttons"),y=(0,o.up)("card-component"),g=(0,o.up)("main-section"),k=(0,o.up)("titled-section"),v=(0,o.up)("check-radio-picker"),W=(0,o.up)("file-picker"),V=(0,o.up)("bottom-other-pages-section");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s,{"title-stack":i.titleStack},null,8,["title-stack"]),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[a])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{icon:i.mdiBallotOutline,title:"Forms example"},null,8,["icon"]),(0,o.Wm)(y,{title:"Forms",icon:i.mdiBallot,onSubmit:(0,n.iM)(i.submit,["prevent"]),form:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{label:"Grouped with icons"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{icon:i.mdiAccount,modelValue:i.form.name,"onUpdate:modelValue":l[0]||(l[0]=e=>i.form.name=e)},null,8,["icon","modelValue"]),(0,o.Wm)(p,{type:"email",icon:i.mdiMail,modelValue:i.form.email,"onUpdate:modelValue":l[1]||(l[1]=e=>i.form.email=e)},null,8,["icon","modelValue"])])),_:1}),(0,o.Wm)(f,{label:"With help line",help:"Do not enter the leading zero"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{type:"tel",placeholder:"Your phone number",modelValue:i.form.phone,"onUpdate:modelValue":l[2]||(l[2]=e=>i.form.phone=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(f,{label:"Dropdown"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{options:i.selectOptions,modelValue:i.form.department,"onUpdate:modelValue":l[3]||(l[3]=e=>i.form.department=e)},null,8,["options","modelValue"])])),_:1}),(0,o.Wm)(b),(0,o.Wm)(f,{label:"Question",help:"Your question. Max 255 characters"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{type:"textarea",placeholder:"Explain how we can help you"})])),_:1}),(0,o.Wm)(b),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(h,{type:"submit",color:"info",label:"Submit"}),(0,o.Wm)(h,{type:"reset",color:"info",outline:"",label:"Reset"})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1}),(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{title:"Custom elements",icon:i.mdiBallotOutline},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{label:"Checkbox","wrap-body":""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{name:"sample-checkbox",modelValue:i.customElementsForm.checkbox,"onUpdate:modelValue":l[4]||(l[4]=e=>i.customElementsForm.checkbox=e),options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])])),_:1}),(0,o.Wm)(b),(0,o.Wm)(f,{label:"Radio","wrap-body":""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{name:"sample-radio",type:"radio",modelValue:i.customElementsForm.radio,"onUpdate:modelValue":l[5]||(l[5]=e=>i.customElementsForm.radio=e),options:{one:"One",two:"Two"}},null,8,["modelValue"])])),_:1}),(0,o.Wm)(b),(0,o.Wm)(f,{label:"Switch"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{name:"sample-switch",type:"switch",modelValue:i.customElementsForm.switch,"onUpdate:modelValue":l[6]||(l[6]=e=>i.customElementsForm.switch=e),options:{one:"One",two:"Two"}},null,8,["modelValue"])])),_:1}),(0,o.Wm)(b),(0,o.Wm)(W,{modelValue:i.customElementsForm.file,"onUpdate:modelValue":l[7]||(l[7]=e=>i.customElementsForm.file=e)},null,8,["modelValue"])])),_:1},8,["icon"])])),_:1}),(0,o.Wm)(V)],64)}var r=t(2262),m=t(5317),s=t(179),c=t(3386),d=t(1330),p=t(9830),f=t(36),b=t(7637),h=t(338),w=t(2439),y=t(4312),g=t(1479),k=t(9275),v=t(9252),W=t(4453),V=t(5231),x={name:"Forms",components:{TitleSubBar:V.Z,TitledSection:W.Z,Divider:y.Z,MainSection:s.Z,HeroBar:b.Z,FilePicker:f.Z,CheckRadioPicker:p.Z,CardComponent:d.Z,TitleBar:c.Z,Field:h.Z,Control:w.Z,JbButton:g.Z,JbButtons:k.Z,BottomOtherPagesSection:v.Z},setup(){const e=(0,r.iH)(["Admin","Forms"]),l=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],t=(0,r.qj)({name:"John Doe",email:"john.doe@example.com",phone:"",department:l[0],subject:"",question:""}),o=(0,r.qj)({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),n=()=>{};return{titleStack:e,selectOptions:l,form:t,customElementsForm:o,submit:n,mdiBallot:m.hjO,mdiBallotOutline:m.fmz,mdiAccount:m.rI3,mdiMail:m.xaU,mdiCheck:m.oL1}}},_=t(3744);const Z=(0,_.Z)(x,[["render",i]]);var F=Z}}]);
//# sourceMappingURL=forms.dacbc85f.js.map