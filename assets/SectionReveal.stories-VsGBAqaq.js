import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-C5F1mbke.js";import{C as f}from"./Card-jR7JNZka.js";import"./preload-helper-PPVm8Dsz.js";function x(s){const t=a.useRef(null),[n,o]=a.useState(!1),i=.1,c="0px 0px -40px 0px",l=null;return a.useEffect(()=>{const p=t.current;if(!p)return;const d=new IntersectionObserver(([m])=>{m.isIntersecting&&o(!0)},{threshold:i,rootMargin:c,root:l});return d.observe(p),()=>d.disconnect()},[i,c,l]),{ref:t,inView:n}}function u({children:s,className:t=""}){const{ref:n,inView:o}=x();return e.jsx("div",{ref:n,className:`transition-all duration-700 ease-out ${o?"translate-y-0 opacity-100":"translate-y-8 opacity-0"} ${t}`,children:s})}u.__docgenInfo={description:"",methods:[],displayName:"SectionReveal",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const g={title:"Components/SectionReveal",component:u,tags:["autodocs"],decorators:[s=>e.jsx("div",{className:"w-[420px] p-6",children:e.jsx(s,{})})]},r={args:{children:e.jsx(f,{className:"p-4",children:e.jsx("p",{className:"ds-text",children:"This block reveals on first viewport entry."})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Card className="p-4">
        <p className="ds-text">
          This block reveals on first viewport entry.
        </p>
      </Card>
  }
}`,...r.parameters?.docs?.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,g as default};
