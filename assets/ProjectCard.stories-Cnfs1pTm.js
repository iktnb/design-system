import{j as e}from"./jsx-runtime-u17CrQMm.js";const s={Active:"active",OnHold:"on_hold",Done:"done"},a={Healthy:"healthy",MissingNextAction:"missing_next_action"},d={Active:"active",Done:"done"};function u({title:c,status:p,health:l,linkedActions:m,titleActions:x,controls:g,footer:h,className:j="",labels:t={statusLabel:"Status",statusMap:{[s.Active]:"Active",[s.OnHold]:"On hold",[s.Done]:"Done"},missingNextAction:"Missing Next Action",linkedSection:"Linked Next Actions",noLinkedActions:"No linked actions yet.",noContext:"No context"}}){return e.jsxs("article",{className:"grid gap-3 rounded-2xl border p-4 shadow-[0_0_20px_rgba(56,189,248,0.12)] "+(l===a.MissingNextAction?"border-amber-400/45 bg-[linear-gradient(180deg,rgba(120,53,15,0.2),rgba(2,6,23,0.96))]":"border-slate-400/30 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]")+" "+j,children:[e.jsxs("header",{className:"flex flex-wrap items-start justify-between gap-2",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("h3",{className:"m-0 text-base text-slate-100",children:c}),l===a.MissingNextAction?e.jsx("span",{className:"rounded-full border border-amber-300/60 bg-amber-300/20 px-2 py-0.5 text-[11px] font-semibold tracking-[0.02em] text-amber-100",children:t.missingNextAction}):null]}),e.jsxs("p",{className:"mt-1 mb-0 text-xs text-slate-300",children:[t.statusLabel,": ",t.statusMap[p]]})]}),x]}),g,e.jsxs("section",{"aria-label":t.linkedSection,children:[e.jsx("p",{className:"mt-0 mb-2 text-xs font-semibold tracking-[0.02em] text-slate-300",children:t.linkedSection}),m.length===0?e.jsx("div",{className:"rounded-xl border border-slate-400/25 bg-slate-900/60 p-2.5",children:e.jsx("p",{className:"m-0 text-sm text-slate-300",children:t.noLinkedActions})}):e.jsx("div",{className:"grid gap-2",children:m.map(n=>e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-400/25 bg-slate-900/60 p-2.5",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("p",{className:"m-0 text-sm text-slate-100",children:n.title}),e.jsxs("p",{className:"mt-1 mb-0 text-xs text-slate-300",children:[n.meta??t.noContext," ·"," ",n.status]})]}),n.actions]},n.id))})]}),h]})}u.__docgenInfo={description:"",methods:[],displayName:"ProjectCard",props:{title:{required:!0,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"ProjectCardStatus"},description:""},health:{required:!0,tsType:{name:"ProjectCardHealth"},description:""},linkedActions:{required:!0,tsType:{name:"Array",elements:[{name:"ProjectCardLinkedAction"}],raw:"ProjectCardLinkedAction[]"},description:""},titleActions:{required:!1,tsType:{name:"ReactNode"},description:""},controls:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  statusLabel: string;
  statusMap: Record<ProjectCardStatus, string>;
  missingNextAction: string;
  linkedSection: string;
  noLinkedActions: string;
  noContext: string;
}`,signature:{properties:[{key:"statusLabel",value:{name:"string",required:!0}},{key:"statusMap",value:{name:"Record",elements:[{name:"ProjectCardStatus"},{name:"string"}],raw:"Record<ProjectCardStatus, string>",required:!0}},{key:"missingNextAction",value:{name:"string",required:!0}},{key:"linkedSection",value:{name:"string",required:!0}},{key:"noLinkedActions",value:{name:"string",required:!0}},{key:"noContext",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:`{
  statusLabel: "Status",
  statusMap: {
    [ProjectCardStatus.Active]: "Active",
    [ProjectCardStatus.OnHold]: "On hold",
    [ProjectCardStatus.Done]: "Done",
  },
  missingNextAction: "Missing Next Action",
  linkedSection: "Linked Next Actions",
  noLinkedActions: "No linked actions yet.",
  noContext: "No context",
}`,computed:!1}}}};const N={title:"Components/ProjectCard",component:u,tags:["autodocs"],decorators:[c=>e.jsx("div",{className:"w-[520px] p-4",children:e.jsx(c,{})})]},r={args:{title:"Launch portfolio site",status:s.Active,health:a.Healthy,linkedActions:[{id:"1",title:"Write homepage copy",status:d.Active,meta:"@computer"},{id:"2",title:"Collect hero images",status:d.Done,meta:"@home"}]}},i={args:{title:"Prepare taxes",status:s.Active,health:a.MissingNextAction,linkedActions:[]}},o={args:{title:"Renew passport",status:s.Done,health:a.Healthy,linkedActions:[{id:"3",title:"Submit appointment form",status:d.Done,meta:"@computer"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Launch portfolio site",
    status: ProjectCardStatus.Active,
    health: ProjectCardHealth.Healthy,
    linkedActions: [{
      id: "1",
      title: "Write homepage copy",
      status: ProjectCardLinkedActionStatus.Active,
      meta: "@computer"
    }, {
      id: "2",
      title: "Collect hero images",
      status: ProjectCardLinkedActionStatus.Done,
      meta: "@home"
    }]
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Prepare taxes",
    status: ProjectCardStatus.Active,
    health: ProjectCardHealth.MissingNextAction,
    linkedActions: []
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Renew passport",
    status: ProjectCardStatus.Done,
    health: ProjectCardHealth.Healthy,
    linkedActions: [{
      id: "3",
      title: "Submit appointment form",
      status: ProjectCardLinkedActionStatus.Done,
      meta: "@computer"
    }]
  }
}`,...o.parameters?.docs?.source}}};const b=["Healthy","MissingAction","Done"];export{o as Done,r as Healthy,i as MissingAction,b as __namedExportsOrder,N as default};
