import{a as ct}from"./chunk-ACCNQQDT.js";import{D as J,E as Q,f as H}from"./chunk-4GDCIPAL.js";import{D as tt,E as _,K as et,L as nt,p as W,v as C}from"./chunk-UR2TO4CR.js";import{$a as N,Ab as R,Ba as c,Ca as I,Cb as U,Ib as D,Ka as A,Pa as l,Qa as $,Ra as a,Sa as T,Sb as X,Ta as O,Tb as Y,Ub as K,V as F,Ya as m,Yb as Z,Za as u,Zb as q,_a as z,aa as j,ab as G,d as E,da as k,g as at,ga as v,hb as d,l as M,qb as x,r as h,rb as V,tb as B,va as L}from"./chunk-6K2CLVX4.js";function pt(t,n){if(t&1&&(N(0),z(1,"span",8),G()),t&2){let e=d(3);c(),a("nzType",e.icon)}}function lt(t,n){if(t&1&&(N(0),V(1),G()),t&2){let e=n.$implicit,i=d(4);c(),B(" ",e(i.nzPercent)," ")}}var dt=t=>({$implicit:t});function ht(t,n){if(t&1&&l(0,lt,2,1,"ng-container",9),t&2){let e=d(3);a("nzStringTemplateOutlet",e.formatter)("nzStringTemplateOutletContext",U(2,dt,e.nzPercent))}}function gt(t,n){if(t&1&&(m(0,"span",5),l(1,pt,2,1,"ng-container",6)(2,ht,1,4,"ng-template",null,7,D),u()),t&2){let e=x(3),i=d(2);c(),a("ngIf",(i.status==="exception"||i.status==="success")&&!i.nzFormat)("ngIfElse",e)}}function ft(t,n){if(t&1&&l(0,gt,4,2,"span",4),t&2){let e=d();a("ngIf",e.nzShowInfo)}}function mt(t,n){if(t&1&&z(0,"div",17),t&2){let e=d(4);T("width",e.nzSuccessPercent,"%")("border-radius",e.nzStrokeLinecap==="round"?"100px":"0")("height",e.strokeWidth,"px")}}function ut(t,n){if(t&1&&(m(0,"div",13)(1,"div",14),z(2,"div",15),l(3,mt,1,6,"div",16),u()()),t&2){let e=d(3);c(2),T("width",e.nzPercent,"%")("border-radius",e.nzStrokeLinecap==="round"?"100px":"0")("background",e.isGradient?null:e.nzStrokeColor)("background-image",e.isGradient?e.lineGradient:null)("height",e.strokeWidth,"px"),c(),a("ngIf",e.nzSuccessPercent||e.nzSuccessPercent===0)}}function zt(t,n){}function _t(t,n){if(t&1&&(N(0),l(1,ut,4,11,"div",11)(2,zt,0,0,"ng-template",12),G()),t&2){let e=d(2),i=x(1);c(),a("ngIf",!e.isSteps),c(),a("ngTemplateOutlet",i)}}function St(t,n){if(t&1&&z(0,"div",20),t&2){let e=n.$implicit;a("ngStyle",e)}}function yt(t,n){}function vt(t,n){if(t&1&&(m(0,"div",18),l(1,St,1,1,"div",19)(2,yt,0,0,"ng-template",12),u()),t&2){let e=d(2),i=x(1);c(),a("ngForOf",e.steps),c(),a("ngTemplateOutlet",i)}}function Ct(t,n){if(t&1&&(m(0,"div"),l(1,_t,3,2,"ng-container",2)(2,vt,3,2,"div",10),u()),t&2){let e=d();c(),a("ngIf",!e.isSteps),c(),a("ngIf",e.isSteps)}}function xt(t,n){if(t&1&&(v(),z(0,"stop")),t&2){let e=n.$implicit;$("offset",e.offset)("stop-color",e.color)}}function Pt(t,n){if(t&1&&(v(),m(0,"defs")(1,"linearGradient",24),l(2,xt,1,2,"stop",25),u()()),t&2){let e=d(2);c(),a("id","gradient-"+e.gradientId),c(),a("ngForOf",e.circleGradient)}}function kt(t,n){if(t&1&&(v(),z(0,"path",26)),t&2){let e=n.$implicit,i=d(2);a("ngStyle",e.strokePathStyle),$("d",i.pathString)("stroke-linecap",i.nzStrokeLinecap)("stroke",e.stroke)("stroke-width",i.nzPercent?i.strokeWidth:0)}}function It(t,n){t&1&&v()}function $t(t,n){if(t&1&&(m(0,"div",14),v(),m(1,"svg",21),l(2,Pt,3,2,"defs",2),z(3,"path",22),l(4,kt,1,5,"path",23),u(),l(5,It,0,0,"ng-template",12),u()),t&2){let e=d(),i=x(1);T("width",e.nzWidth,"px")("height",e.nzWidth,"px")("font-size",e.nzWidth*.15+6,"px"),O("ant-progress-circle-gradient",e.isGradient),c(2),a("ngIf",e.isGradient),c(),a("ngStyle",e.trailPathStyle),$("stroke-width",e.strokeWidth)("d",e.pathString),c(),a("ngForOf",e.progressCirclePath)("ngForTrackBy",e.trackByFn),c(),a("ngTemplateOutlet",i)}}function Tt(t){return+t.replace("%","")}var st=t=>{let n=[];return Object.keys(t).forEach(e=>{let i=t[e],r=Tt(e);isNaN(r)||n.push({key:r,value:i})}),n=n.sort((e,i)=>e.key-i.key),n},Nt=t=>st(t).map(({key:n,value:e})=>({offset:`${n}%`,color:e})),Gt=t=>{let o=t,{from:n="#1890ff",to:e="#1890ff",direction:i="to right"}=o,r=E(o,["from","to","direction"]);if(Object.keys(r).length!==0){let s=st(r).map(({key:p,value:f})=>`${f} ${p}%`).join(", ");return`linear-gradient(${i}, ${s})`}return`linear-gradient(${i}, ${n}, ${e})`},wt=0,it="progress",bt=new Map([["success","check"],["exception","close"]]),Ft=new Map([["normal","#108ee9"],["exception","#ff5500"],["success","#87d068"]]),Ot=t=>`${t}%`,Zt=(()=>{let n=class n{get formatter(){return this.nzFormat||Ot}get status(){return this.nzStatus||this.inferredStatus}get strokeWidth(){return this.nzStrokeWidth||(this.nzType==="line"&&this.nzSize!=="small"?8:6)}get isCircleStyle(){return this.nzType==="circle"||this.nzType==="dashboard"}constructor(i,r,o){this.cdr=i,this.nzConfigService=r,this.directionality=o,this._nzModuleName=it,this.nzShowInfo=!0,this.nzWidth=132,this.nzStrokeColor=void 0,this.nzSize="default",this.nzPercent=0,this.nzStrokeWidth=void 0,this.nzGapDegree=void 0,this.nzType="line",this.nzGapPosition="top",this.nzStrokeLinecap="round",this.nzSteps=0,this.steps=[],this.lineGradient=null,this.isGradient=!1,this.isSteps=!1,this.gradientId=wt++,this.progressCirclePath=[],this.trailPathStyle=null,this.dir="ltr",this.trackByFn=s=>`${s}`,this.cachedStatus="normal",this.inferredStatus="normal",this.destroy$=new M}ngOnChanges(i){let{nzSteps:r,nzGapPosition:o,nzStrokeLinecap:s,nzStrokeColor:p,nzGapDegree:f,nzType:y,nzStatus:S,nzPercent:g,nzSuccessPercent:P,nzStrokeWidth:w}=i;S&&(this.cachedStatus=this.nzStatus||this.cachedStatus),(g||P)&&(parseInt(this.nzPercent.toString(),10)>=100?(W(this.nzSuccessPercent)&&this.nzSuccessPercent>=100||this.nzSuccessPercent===void 0)&&(this.inferredStatus="success"):this.inferredStatus=this.cachedStatus),(S||g||P||p)&&this.updateIcon(),p&&this.setStrokeColor(),(o||s||f||y||g||p||p)&&this.getCirclePaths(),(g||r||w)&&(this.isSteps=this.nzSteps>0,this.isSteps&&this.getSteps())}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent(it).pipe(F(this.destroy$)).subscribe(()=>{this.updateIcon(),this.setStrokeColor(),this.getCirclePaths()}),this.directionality.change?.pipe(F(this.destroy$)).subscribe(i=>{this.dir=i,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateIcon(){let i=bt.get(this.status);this.icon=i?i+(this.isCircleStyle?"-o":"-circle-fill"):""}getSteps(){let i=Math.floor(this.nzSteps*(this.nzPercent/100)),r=this.nzSize==="small"?2:14,o=[];for(let s=0;s<this.nzSteps;s++){let p;s<=i-1&&(p=this.nzStrokeColor);let f={backgroundColor:`${p}`,width:`${r}px`,height:`${this.strokeWidth}px`};o.push(f)}this.steps=o}getCirclePaths(){if(!this.isCircleStyle)return;let i=W(this.nzSuccessPercent)?[this.nzSuccessPercent,this.nzPercent]:[this.nzPercent],r=50-this.strokeWidth/2,o=this.nzGapPosition||(this.nzType==="circle"?"top":"bottom"),s=Math.PI*2*r,p=this.nzGapDegree||(this.nzType==="circle"?0:75),f=0,y=-r,S=0,g=r*-2;switch(o){case"left":f=-r,y=0,S=r*2,g=0;break;case"right":f=r,y=0,S=r*-2,g=0;break;case"bottom":y=r,g=r*2;break;default:}this.pathString=`M 50,50 m ${f},${y}
       a ${r},${r} 0 1 1 ${S},${-g}
       a ${r},${r} 0 1 1 ${-S},${g}`,this.trailPathStyle={strokeDasharray:`${s-p}px ${s}px`,strokeDashoffset:`-${p/2}px`,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"},this.progressCirclePath=i.map((P,w)=>{let b=i.length===2&&w===0;return{stroke:this.isGradient&&!b?`url(#gradient-${this.gradientId})`:null,strokePathStyle:{stroke:this.isGradient?null:b?Ft.get("success"):this.nzStrokeColor,transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",strokeDasharray:`${(P||0)/100*(s-p)}px ${s}px`,strokeDashoffset:`-${p/2}px`}}}).reverse()}setStrokeColor(){let i=this.nzStrokeColor,r=this.isGradient=!!i&&typeof i!="string";r&&!this.isCircleStyle?this.lineGradient=Gt(i):r&&this.isCircleStyle?this.circleGradient=Nt(this.nzStrokeColor):(this.lineGradient=null,this.circleGradient=[])}};n.\u0275fac=function(r){return new(r||n)(I(A),I(tt),I(H,8))},n.\u0275cmp=j({type:n,selectors:[["nz-progress"]],inputs:{nzShowInfo:"nzShowInfo",nzWidth:"nzWidth",nzStrokeColor:"nzStrokeColor",nzSize:"nzSize",nzFormat:"nzFormat",nzSuccessPercent:"nzSuccessPercent",nzPercent:"nzPercent",nzStrokeWidth:"nzStrokeWidth",nzGapDegree:"nzGapDegree",nzStatus:"nzStatus",nzType:"nzType",nzGapPosition:"nzGapPosition",nzStrokeLinecap:"nzStrokeLinecap",nzSteps:"nzSteps"},exportAs:["nzProgress"],standalone:!0,features:[L,R],decls:5,vars:17,consts:[["progressInfoTemplate",""],[3,"ngClass"],[4,"ngIf"],["class","ant-progress-inner",3,"width","height","fontSize","ant-progress-circle-gradient",4,"ngIf"],["class","ant-progress-text",4,"ngIf"],[1,"ant-progress-text"],[4,"ngIf","ngIfElse"],["formatTemplate",""],["nz-icon","",3,"nzType"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["class","ant-progress-steps-outer",4,"ngIf"],["class","ant-progress-outer",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-progress-outer"],[1,"ant-progress-inner"],[1,"ant-progress-bg"],["class","ant-progress-success-bg",3,"width","border-radius","height",4,"ngIf"],[1,"ant-progress-success-bg"],[1,"ant-progress-steps-outer"],["class","ant-progress-steps-item",3,"ngStyle",4,"ngFor","ngForOf"],[1,"ant-progress-steps-item",3,"ngStyle"],["viewBox","0 0 100 100",1,"ant-progress-circle"],["stroke","#f3f3f3","fill-opacity","0",1,"ant-progress-circle-trail",3,"ngStyle"],["class","ant-progress-circle-path","fill-opacity","0",3,"ngStyle",4,"ngFor","ngForOf","ngForTrackBy"],["x1","100%","y1","0%","x2","0%","y2","0%",3,"id"],[4,"ngFor","ngForOf"],["fill-opacity","0",1,"ant-progress-circle-path",3,"ngStyle"]],template:function(r,o){r&1&&(l(0,ft,1,1,"ng-template",null,0,D),m(2,"div",1),l(3,Ct,3,2,"div",2)(4,$t,6,15,"div",3),u()),r&2&&(c(2),O("ant-progress-line",o.nzType==="line")("ant-progress-small",o.nzSize==="small")("ant-progress-default",o.nzSize==="default")("ant-progress-show-info",o.nzShowInfo)("ant-progress-circle",o.isCircleStyle)("ant-progress-steps",o.isSteps)("ant-progress-rtl",o.dir==="rtl"),a("ngClass","ant-progress ant-progress-status-"+o.status),c(),a("ngIf",o.nzType==="line"),c(),a("ngIf",o.isCircleStyle))},dependencies:[K,nt,et,Q,J,X,q,Y,Z],encapsulation:2,changeDetection:0});let t=n;return h([_()],t.prototype,"nzShowInfo",void 0),h([_()],t.prototype,"nzStrokeColor",void 0),h([_()],t.prototype,"nzSize",void 0),h([C()],t.prototype,"nzSuccessPercent",void 0),h([C()],t.prototype,"nzPercent",void 0),h([_(),C()],t.prototype,"nzStrokeWidth",void 0),h([_(),C()],t.prototype,"nzGapDegree",void 0),h([_()],t.prototype,"nzGapPosition",void 0),h([_()],t.prototype,"nzStrokeLinecap",void 0),h([C()],t.prototype,"nzSteps",void 0),t})();var ot=at(ct());var Jt=(()=>{let n=class n{transform(i){let r=1e3*i,s=(0,ot.default)().diff(r,"minutes");return s<1?"just now":s<60?`${s} minute${s===1?"":"s"} ago`:s<1440?`${Math.floor(s/60)} hour${Math.floor(s/60)===1?"":"s"} ago`:`${Math.floor(s/1440)} day${Math.floor(s/1440)===1?"":"s"} ago`}};n.\u0275fac=function(r){return new(r||n)},n.\u0275pipe=k({name:"timeAgo",type:n,pure:!0,standalone:!0});let t=n;return t})();var te=(()=>{let n=class n{transform(i){switch(i){case 0:return"ACB";case 1:return"VCB";case 2:return"VP";case 3:return"Admin";default:return"Admin"}}};n.\u0275fac=function(r){return new(r||n)},n.\u0275pipe=k({name:"typeDeposit",type:n,pure:!0,standalone:!0});let t=n;return t})();export{Zt as a,Jt as b,te as c};
