import{n as e,o as t,t as n}from"./index-CHhblf_M.js";import{n as r,t as i}from"./icon-DC0xKvk2.js";var a=t(e(),1),o=n();function s(){let[e,t]=(0,a.useState)(!1),[n,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{console.log(`Navbar render`)},[]),(0,o.jsxs)(`nav`,{className:`fixed top-0 left-0 z-[9999] box-border w-screen max-w-[100vw] overflow-x-hidden bg-white font-inter text-[14px]`,children:[(0,o.jsxs)(`div`,{className:`flex w-full max-w-[100vw] box-border items-center justify-between bg-white px-5 py-5`,children:[(0,o.jsx)(`a`,{href:`#home`,className:`min-w-0 shrink-0 overflow-hidden`,children:(0,o.jsx)(`img`,{src:r,alt:`logo`,className:`block h-auto max-w-full`})}),(0,o.jsxs)(`button`,{onClick:()=>t(e=>!e),className:`flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-1`,"aria-label":`Otwórz menu`,children:[(0,o.jsx)(`span`,{className:`h-[2px] w-6 bg-black transition-transform duration-300 ${e?`translate-y-1.5 rotate-45`:``}`}),(0,o.jsx)(`span`,{className:`h-[2px] w-6 bg-black transition-opacity duration-300 ${e?`opacity-0`:``}`}),(0,o.jsx)(`span`,{className:`h-[2px] w-6 bg-black transition-transform duration-300 ${e?`-translate-y-1.5 -rotate-45`:``}`})]})]}),(0,o.jsxs)(`div`,{className:`
          box-border
          w-screen
          max-w-[100vw]
          overflow-hidden
          bg-white
          px-5
          shadow-lg
          flex
          flex-col
          gap-3
          transition-all
          duration-300
          ${e?`max-h-screen py-5 opacity-100`:`max-h-0 py-0 opacity-0 pointer-events-none`}
        `,children:[(0,o.jsxs)(`button`,{onClick:()=>s(e=>!e),className:`flex w-full items-center justify-between py-2`,children:[(0,o.jsx)(`span`,{className:`transition-colors hover:text-[#1B5B31]`,children:`Oferta`}),(0,o.jsx)(`img`,{src:i,alt:`ikona`,className:`
              w-3
              transition-transform
              duration-300
              ${n?`rotate-180`:``}
            `})]}),(0,o.jsxs)(`div`,{className:`
            flex
            flex-col
            overflow-hidden
            pl-4
            transition-all
            duration-300
            ${n?`max-h-60 opacity-100`:`max-h-0 opacity-0`}
          `,children:[(0,o.jsx)(`a`,{href:`#offer`,className:`py-2`,children:`Oferta 1`}),(0,o.jsx)(`a`,{href:`#offer`,className:`py-2`,children:`Oferta 2`}),(0,o.jsx)(`a`,{href:`#offer`,className:`py-2`,children:`Oferta 3`}),(0,o.jsx)(`a`,{href:`#offer`,className:`py-2`,children:`Oferta 4`})]}),(0,o.jsx)(`a`,{href:`#about`,className:`py-2`,children:`O firmie`}),(0,o.jsx)(`a`,{href:`#projects`,className:`py-2`,children:`Realizacje`}),(0,o.jsx)(`a`,{href:`#contact`,className:`py-2`,children:`Kontakt`})]})]})}export{s as default};