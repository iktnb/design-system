import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-DdFx9z4Y.js";import{C as f}from"./Card-Du1OuCNb.js";import"./preload-helper-PPVm8Dsz.js";function x(t){const r=a.useRef(null),[n,o]=a.useState(!1),i=.1,c="0px 0px -40px 0px",l=null;return a.useEffect(()=>{const p=r.current;if(!p)return;const d=new IntersectionObserver(([m])=>{m.isIntersecting&&o(!0)},{threshold:i,rootMargin:c,root:l});return d.observe(p),()=>d.disconnect()},[i,c,l]),{ref:r,inView:n}}function u({children:t,className:r=""}){const{ref:n,inView:o}=x();return e.jsx("div",{ref:n,className:`transition-all duration-700 ease-out ${o?"translate-y-0 opacity-100":"translate-y-8 opacity-0"} ${r}`,children:t})}u.__docgenInfo={description:"",methods:[],displayName:"SectionReveal",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const g={title:"Components/SectionReveal",component:u,tags:["autodocs"],decorators:[t=>e.jsx("div",{className:"w-[420px] p-6",children:e.jsx(t,{})})]},s={args:{children:e.jsx(f,{className:"p-4",children:e.jsx("p",{className:"text-primary",children:"This block reveals on first viewport entry."})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Card className="p-4">
        <p className="text-primary">
          This block reveals on first viewport entry.
        </p>
      </Card>
  }
}`,...s.parameters?.docs?.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,g as default};
