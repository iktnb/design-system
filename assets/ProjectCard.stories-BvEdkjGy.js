import{j as e}from"./jsx-runtime-u17CrQMm.js";const x={active:"Active",on_hold:"On hold",done:"Done"};function l({title:r,status:c,health:i,linkedActions:o,titleActions:d,controls:m,footer:p,className:u=""}){return e.jsxs("article",{className:"grid gap-3 rounded-2xl border p-4 shadow-[0_0_20px_rgba(56,189,248,0.12)] "+(i==="missing_next_action"?"border-amber-400/45 bg-[linear-gradient(180deg,rgba(120,53,15,0.2),rgba(2,6,23,0.96))]":"border-slate-400/30 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]")+" "+u,children:[e.jsxs("header",{className:"flex flex-wrap items-start justify-between gap-2",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("h3",{className:"m-0 text-base text-slate-100",children:r}),i==="missing_next_action"?e.jsx("span",{className:"rounded-full border border-amber-300/60 bg-amber-300/20 px-2 py-0.5 text-[11px] font-semibold tracking-[0.02em] text-amber-100",children:"Missing Next Action"}):null]}),e.jsxs("p",{className:"mt-1 mb-0 text-xs text-slate-300",children:["Status: ",x[c]]})]}),d]}),m,e.jsxs("section",{"aria-label":"Linked Next Actions",children:[e.jsx("p",{className:"mt-0 mb-2 text-xs font-semibold tracking-[0.02em] text-slate-300",children:"Linked Next Actions"}),o.length===0?e.jsx("div",{className:"rounded-xl border border-slate-400/25 bg-slate-900/60 p-2.5",children:e.jsx("p",{className:"m-0 text-sm text-slate-300",children:"No linked actions yet."})}):e.jsx("div",{className:"grid gap-2",children:o.map(t=>e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-400/25 bg-slate-900/60 p-2.5",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("p",{className:"m-0 text-sm text-slate-100",children:t.title}),e.jsxs("p",{className:"mt-1 mb-0 text-xs text-slate-300",children:[t.meta??"No context"," · ",t.status]})]}),t.actions]},t.id))})]}),p]})}l.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!0,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:"'active' | 'on_hold' | 'done'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'on_hold'"},{name:"literal",value:"'done'"}]},description:""},health:{required:!0,tsType:{name:"union",raw:"'healthy' | 'missing_next_action'",elements:[{name:"literal",value:"'healthy'"},{name:"literal",value:"'missing_next_action'"}]},description:""},linkedActions:{required:!0,tsType:{name:"Array",elements:[{name:"ProjectCardLinkedAction"}],raw:"ProjectCardLinkedAction[]"},description:""},titleActions:{required:!1,tsType:{name:"ReactNode"},description:""},controls:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const g={title:"Components/ProjectCard",component:l,tags:["autodocs"],decorators:[r=>e.jsx("div",{className:"w-[520px] p-4",children:e.jsx(r,{})})]},s={args:{title:"Launch portfolio site",status:"active",health:"healthy",linkedActions:[{id:"1",title:"Write homepage copy",status:"active",meta:"@computer"},{id:"2",title:"Collect hero images",status:"done",meta:"@home"}]}},a={args:{title:"Prepare taxes",status:"active",health:"missing_next_action",linkedActions:[]}},n={args:{title:"Renew passport",status:"done",health:"healthy",linkedActions:[{id:"3",title:"Submit appointment form",status:"done",meta:"@computer"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Launch portfolio site',
    status: 'active',
    health: 'healthy',
    linkedActions: [{
      id: '1',
      title: 'Write homepage copy',
      status: 'active',
      meta: '@computer'
    }, {
      id: '2',
      title: 'Collect hero images',
      status: 'done',
      meta: '@home'
    }]
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Prepare taxes',
    status: 'active',
    health: 'missing_next_action',
    linkedActions: []
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Renew passport',
    status: 'done',
    health: 'healthy',
    linkedActions: [{
      id: '3',
      title: 'Submit appointment form',
      status: 'done',
      meta: '@computer'
    }]
  }
}`,...n.parameters?.docs?.source}}};const b=["Healthy","MissingAction","Done"];export{n as Done,s as Healthy,a as MissingAction,b as __namedExportsOrder,g as default};
