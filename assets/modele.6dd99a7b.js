import{d as m,w as f,o as t,c as a,a as e,F as x,r as h,u as g,s as k,i as w,b as l,j as b,m as v,h as _}from"./index.d370108c.js";import{_ as E}from"./MontreProfil.vue_vue_type_script_setup_true_lang.ca6b1966.js";const y={class:""},C={class:"grid grid-cols-2 gap-20"},V=m({__name:"ListeMontre",props:{max:null},async setup(c){let s,o;const d=c;let{data:u,error:i}=([s,o]=f(()=>{var r;return k.from("montre").select("*").limit((r=d.max)!=null?r:100)}),s=await s,o(),s);return i&&console.log("n'a pas pu r\xE9cup\xE9rer les montres",{error:i}),(r,M)=>{const p=w("router-link");return t(),a("div",y,[e("ul",C,[(t(!0),a(x,null,h(g(u),n=>(t(),a("li",{key:n.id_montre},[l(p,{to:{name:"montre-edit-id",params:{id:n.montre_id}}},{default:b(()=>[l(E,v({class:"w-64"},n),null,16)]),_:2},1032,["to"])]))),128))])])}}}),$={class:"dark:bg-black"},B=e("div",{class:"flex"},[e("h1",{class:"text-4xl font-medium mt-32 ml-96 dark:text-white"},[_(" VOS"),e("br"),_(" MODELES ")])],-1),L={class:"justify-center mt-40 flex gap-40"},F=m({__name:"modele",setup(c){return(s,o)=>(t(),a("main",$,[e("section",null,[B,e("div",L,[e("div",null,[l(V,{class:"w-full"})])])])]))}});export{F as default};
