import{A as N,B as M,C as a,E as T,r as V,o as h,a as _,q as o,t,F as l,T as R,x,H as w,J as C,I as U}from"./vendor.a7353654.js";import{_ as D}from"./rs-logo.b627cd2f.js";import{T as m,B as F}from"./Button.0e1fcce0.js";import{u as H,a as L}from"./index.92ab9cd8.js";import{d,v as q,f as z}from"./debounce.614b3d5c.js";const J={class:"py-10 w-80 text-grey-9"},Y=o("div",{class:"flex items-center space-x-3"},[o("img",{class:"h-10",src:D,alt:""}),o("h1",{class:"text-2xl font-semibold"}," Create Account ")],-1),j={class:"mt-8 relative"},G=["title"],K={class:"mt-8 text-xs text-grey-7"},O=C(" Already have an account? "),Q=C("Login"),W={class:"mt-1"},oe=N({setup(X){const b=M(),y=H(),E=L(),v=a(""),n=a(""),I=d(e=>{s.value="",n.value="",e?v.value=e:n.value="Name cannot be empty"},500),p=a(""),u=a(""),P=d(e=>{s.value="",u.value="",q(e)?p.value=e:u.value="Please provide a valid email address."},500),i=a(""),r=a(""),A=d(e=>{s.value="",r.value=z(e,8,32),r.value||(i.value=e)},500),g=a(""),c=a(""),S=d(e=>{s.value="",c.value="",g.value=e,!r.value&&i.value!==g.value&&(c.value="Passwords do not match")},500),s=a(""),f=T(()=>!!(v.value&&p.value&&i.value&&g.value&&!s.value&&!n.value&&!u.value&&!r.value&&!c.value)),k=async()=>{if(console.log("signup"),!!f.value){y.resetStores();try{await E.createUser(v.value,p.value,i.value),b.push({name:"Home"})}catch(e){s.value=e.message}}};return(e,Z)=>{const B=V("router-link");return h(),_("div",J,[Y,o("div",j,[t(m,{onInputChange:l(I),label:"Name",limit:100,"error-message":n.value},null,8,["onInputChange","error-message"]),t(m,{onInputChange:l(P),label:"Email",limit:100,"error-message":u.value,class:"mt-7"},null,8,["onInputChange","error-message"]),t(m,{onInputChange:l(A),type:"password",label:"Password",limit:32,"error-message":r.value,class:"mt-7"},null,8,["onInputChange","error-message"]),t(m,{onInputChange:l(S),type:"password",label:"Confirm Password",limit:32,"error-message":c.value,class:"mt-7"},null,8,["onInputChange","error-message"]),t(F,{onClick:k,title:"Sign Up",class:"mt-8 w-full",disabled:!l(f)},null,8,["disabled"]),t(R,{name:"fade"},{default:x(()=>[s.value?(h(),_("p",{key:0,class:"absolute w-full top-full mt-0.5 text-xs font-semibold text-red truncate pr-6 text-center",title:s.value},w(s.value),9,G)):U("",!0)]),_:1})]),o("div",K,[o("p",null,[O,t(B,{class:"font-semibold underline text-grey-9",to:{name:"Login"}},{default:x(()=>[Q]),_:1})]),o("p",W," All rights reserved \xA9 Rakibullah Sazib, "+w(new Date().getFullYear()),1)])])}}});export{oe as default};
