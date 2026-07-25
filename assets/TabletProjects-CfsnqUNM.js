import{t as e}from"./index-lKhfFXvt.js";import{t}from"./react-v9gTOvsp.js";import{n,t as r}from"./arrow-DP-qFJ4U.js";var i=e(),a={hidden:{},visible:{}},o={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:1.1,ease:`easeOut`}}},s={hidden:{clipPath:`inset(0 0 100% 0)`},visible:{clipPath:`inset(0 0 0% 0)`,transition:{duration:1.3,ease:[.76,0,.24,1]}}},c={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,delay:1,ease:`easeOut`}}};function l(){return(0,i.jsx)(`div`,{id:`projects`,className:`\r
        flex\r
        min-h-screen\r
        w-full\r
        flex-col\r
        bg-[#DCC1AB]\r
        pt-26\r
        pb-10\r
      `,children:(0,i.jsxs)(t.div,{variants:a,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.05,margin:`0px 0px -150px 0px`},className:`\r
          flex\r
          min-h-screen\r
          flex-col\r
        `,children:[(0,i.jsxs)(t.h2,{variants:o,className:`\r
            mb-16\r
            px-12\r
            text-4xl\r
            font-medium\r
          `,children:[`Nasze `,(0,i.jsx)(`span`,{className:`italic font-inter`,children:`projekty`})]}),(0,i.jsxs)(t.div,{variants:s,className:`\r
            relative\r
            flex-1\r
            w-full\r
            overflow-hidden\r
          `,children:[(0,i.jsx)(`img`,{className:`\r
              block\r
              h-full\r
              w-full\r
              object-cover\r
            `,src:n,alt:`nasze projekty`}),(0,i.jsxs)(t.button,{variants:c,className:`\r
              absolute\r
              bottom-12\r
              left-1/2\r
              flex\r
              -translate-x-1/2\r
              items-center\r
              rounded-full\r
              border\r
              border-black\r
              px-6\r
              py-3\r
              font-inter\r
              transition-transform\r
              duration-500\r
              hover:scale-105\r
              hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]\r
            `,children:[`Rozwiń`,(0,i.jsx)(`img`,{className:`ml-2 w-4`,src:r,alt:`strzałka`})]})]})]})})}export{l as default};