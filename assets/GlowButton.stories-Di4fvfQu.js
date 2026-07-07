import{j as e}from"./jsx-runtime-u17CrQMm.js";function c({children:l,href:s,onClick:m,variant:r="cyan",external:u=!1,className:d=""}){const o=`ds-button group px-5 py-3 focus:outline-none sm:min-w-0 sm:px-6 ${r==="cyan"?"ds-button-primary":"ds-button-secondary"} ${d}`,i=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:r==="cyan"?"ds-button-shimmer":"ds-button-shimmer","aria-hidden":!0}),e.jsx("span",{className:"relative z-10 inline-flex items-center gap-2",children:l})]});return s?e.jsx("a",{href:s,className:o,...u&&{target:"_blank",rel:"noopener noreferrer"},children:i}):e.jsx("button",{type:"button",onClick:m,className:o,children:i})}c.__docgenInfo={description:"",methods:[],displayName:"GlowButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},href:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"cyan" | "violet"',elements:[{name:"literal",value:'"cyan"'},{name:"literal",value:'"violet"'}]},description:"",defaultValue:{value:'"cyan"',computed:!1}},external:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const v={title:"Components/GlowButton",component:c,tags:["autodocs"],args:{children:"Open project",variant:"cyan"}},t={},a={args:{variant:"violet",children:"Contact me"}},n={args:{href:"https://example.com",external:!0,children:"Visit website"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "violet",
    children: "Contact me"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    external: true,
    children: "Visit website"
  }
}`,...n.parameters?.docs?.source}}};const b=["Cyan","Violet","AsExternalLink"];export{n as AsExternalLink,t as Cyan,a as Violet,b as __namedExportsOrder,v as default};
