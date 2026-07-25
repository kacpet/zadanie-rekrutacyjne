import{n as e,o as t,t as n}from"./index-CHhblf_M.js";import{t as r}from"./react-nmgMNcS4.js";import{a as i,i as a,n as o,o as s,r as c,s as l}from"./arrow-B3jBI4JY.js";var u=t(e(),1),d=n();function f(){let e=[l,s,i,a],[t,n]=(0,u.useState)(0),[f,p]=(0,u.useState)(null),[m,h]=(0,u.useState)(1),[g,_]=(0,u.useState)(!1);function v(n){g||(_(!0),n?(h(1),p((t+1)%e.length)):(h(-1),p((t-1+e.length)%e.length)))}(0,u.useEffect)(()=>{let e=setInterval(()=>{v(!0)},1e4);return()=>clearInterval(e)},[t,g]);let y=`absolute inset-0 w-full h-full object-cover`;return(0,d.jsxs)(`div`,{className:`relative w-full h-full min-h-[350px] overflow-hidden`,children:[(0,d.jsx)(r.img,{src:e[t],alt:`ogród`,className:y,animate:{x:f===null?`0%`:m===1?`-100%`:`100%`},transition:{duration:.5,ease:`easeInOut`}},`current-${t}`),f!==null&&(0,d.jsx)(r.img,{src:e[f],alt:`ogród`,className:y,initial:{x:m===1?`100%`:`-100%`},animate:{x:`0%`},transition:{duration:.5,ease:`easeInOut`},onAnimationComplete:()=>{n(f),p(null),_(!1)}},`next-${f}`),(0,d.jsxs)(`div`,{className:`\r
          absolute\r
          bottom-0\r
          left-1/2\r
          -translate-x-1/2\r
          z-10\r
          flex\r
          h-16\r
          w-38\r
          items-center\r
          justify-center\r
          gap-10\r
          bg-[#F5F0EC]\r
        `,children:[(0,d.jsx)(`button`,{onClick:()=>v(!1),className:`cursor-pointer`,children:(0,d.jsx)(`img`,{src:o,alt:`strzałka w lewo`})}),(0,d.jsx)(`button`,{onClick:()=>v(!0),className:`cursor-pointer`,children:(0,d.jsx)(`img`,{src:c,alt:`strzałka w prawo`})})]})]})}export{f as t};