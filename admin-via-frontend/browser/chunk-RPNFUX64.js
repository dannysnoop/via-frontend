import{a as c,b as le,c as E,d as ae,e as he,f as ce}from"./chunk-IP7SDAB2.js";import{B as te,D as re,E as se,f as I,v as Z,w as ee}from"./chunk-4GDCIPAL.js";import{D as pe,m as ie,p as ne,r as oe,u as w}from"./chunk-UR2TO4CR.js";import{$ as l,$a as $,Ab as G,Ba as d,Ca as r,Ea as j,F as f,Ia as T,Ib as J,Ka as _,M,Ma as O,N as V,Na as D,Pa as P,Ra as p,Sb as X,Ta as b,V as g,Ya as N,Yb as Y,Za as A,_ as C,_a as L,a as y,aa as R,ab as B,b as k,ca as m,fb as Q,ha as z,hb as S,l as u,nb as K,o as x,ob as U,pb as H,r as v,rb as q,sb as W,va as F}from"./chunk-6K2CLVX4.js";var de=["overlay"];function ue(o,n){if(o&1&&($(0),q(1),B()),o&2){let s=S(2);d(),W(s.nzTitle)}}function ge(o,n){if(o&1&&(N(0,"div",2)(1,"div",3)(2,"div",4),L(3,"span",5),A(),N(4,"div",6),P(5,ue,2,1,"ng-container",7),A()()()),o&2){let s=S();b("ant-tooltip-rtl",s.dir==="rtl"),p("ngClass",s._classMap)("ngStyle",s.nzOverlayStyle)("@.disabled",!!(s.noAnimation!=null&&s.noAnimation.nzNoAnimation))("nzNoAnimation",s.noAnimation==null?null:s.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),d(3),p("ngStyle",s._contentStyleMap),d(),p("ngStyle",s._contentStyleMap),d(),p("nzStringTemplateOutlet",s.nzTitle)("nzStringTemplateOutletContext",s.nzTitleContext)}}var me=(()=>{let n=class n{get _title(){return this.title||this.directiveTitle||null}get _content(){return this.content||this.directiveContent||null}get _trigger(){return typeof this.trigger<"u"?this.trigger:"hover"}get _placement(){let e=this.placement;return Array.isArray(e)&&e.length>0?e:typeof e=="string"&&e?[e]:["top"]}get _visible(){return(typeof this.visible<"u"?this.visible:this.internalVisible)||!1}get _mouseEnterDelay(){return this.mouseEnterDelay||.15}get _mouseLeaveDelay(){return this.mouseLeaveDelay||.1}get _overlayClassName(){return this.overlayClassName||null}get _overlayStyle(){return this.overlayStyle||null}getProxyPropertyMap(){return{noAnimation:["noAnimation",()=>!!this.noAnimation]}}constructor(e,t,i,a,h){this.elementRef=e,this.hostView=t,this.renderer=i,this.noAnimation=a,this.nzConfigService=h,this.visibleChange=new C,this.internalVisible=!1,this.destroy$=new u,this.triggerDisposables=[]}ngOnChanges(e){let{trigger:t}=e;t&&!t.isFirstChange()&&this.registerTriggers(),this.component&&this.updatePropertiesByChanges(e)}ngAfterViewInit(){this.createComponent(),this.registerTriggers()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.clearTogglingTimer(),this.removeTriggerListeners()}show(){this.component?.show()}hide(){this.component?.hide()}updatePosition(){this.component&&this.component.updatePosition()}createComponent(){let e=this.componentRef;this.component=e.instance,this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),e.location.nativeElement),this.component.setOverlayOrigin(this.origin||this.elementRef),this.initProperties();let t=this.component.nzVisibleChange.pipe(V());t.pipe(g(this.destroy$)).subscribe(i=>{this.internalVisible=i,this.visibleChange.emit(i)}),t.pipe(f(i=>i),M(0,x),f(()=>!!this.component?.overlay?.overlayRef),g(this.destroy$)).subscribe(()=>{this.component?.updatePosition()})}registerTriggers(){let e=this.elementRef.nativeElement,t=this.trigger;if(this.removeTriggerListeners(),t==="hover"){let i;this.triggerDisposables.push(this.renderer.listen(e,"mouseenter",()=>{this.delayEnterLeave(!0,!0,this._mouseEnterDelay)})),this.triggerDisposables.push(this.renderer.listen(e,"mouseleave",()=>{this.delayEnterLeave(!0,!1,this._mouseLeaveDelay),this.component?.overlay.overlayRef&&!i&&(i=this.component.overlay.overlayRef.overlayElement,this.triggerDisposables.push(this.renderer.listen(i,"mouseenter",()=>{this.delayEnterLeave(!1,!0,this._mouseEnterDelay)})),this.triggerDisposables.push(this.renderer.listen(i,"mouseleave",()=>{this.delayEnterLeave(!1,!1,this._mouseLeaveDelay)})))}))}else t==="focus"?(this.triggerDisposables.push(this.renderer.listen(e,"focusin",()=>this.show())),this.triggerDisposables.push(this.renderer.listen(e,"focusout",()=>this.hide()))):t==="click"&&this.triggerDisposables.push(this.renderer.listen(e,"click",i=>{i.preventDefault(),this.show()}))}updatePropertiesByChanges(e){this.updatePropertiesByKeys(Object.keys(e))}updatePropertiesByKeys(e){let t=y({title:["nzTitle",()=>this._title],directiveTitle:["nzTitle",()=>this._title],content:["nzContent",()=>this._content],directiveContent:["nzContent",()=>this._content],trigger:["nzTrigger",()=>this._trigger],placement:["nzPlacement",()=>this._placement],visible:["nzVisible",()=>this._visible],mouseEnterDelay:["nzMouseEnterDelay",()=>this._mouseEnterDelay],mouseLeaveDelay:["nzMouseLeaveDelay",()=>this._mouseLeaveDelay],overlayClassName:["nzOverlayClassName",()=>this._overlayClassName],overlayStyle:["nzOverlayStyle",()=>this._overlayStyle],arrowPointAtCenter:["nzArrowPointAtCenter",()=>this.arrowPointAtCenter],cdkConnectedOverlayPush:["cdkConnectedOverlayPush",()=>this.cdkConnectedOverlayPush]},this.getProxyPropertyMap());(e||Object.keys(t).filter(i=>!i.startsWith("directive"))).forEach(i=>{if(t[i]){let[a,h]=t[i];this.updateComponentValue(a,h())}}),this.component?.updateByDirective()}initProperties(){this.updatePropertiesByKeys()}updateComponentValue(e,t){typeof t<"u"&&(this.component[e]=t)}delayEnterLeave(e,t,i=-1){this.delayTimer?this.clearTogglingTimer():i>0?this.delayTimer=setTimeout(()=>{this.delayTimer=void 0,t?this.show():this.hide()},i*1e3):t&&e?this.show():this.hide()}removeTriggerListeners(){this.triggerDisposables.forEach(e=>e()),this.triggerDisposables.length=0}clearTogglingTimer(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=void 0)}};n.\u0275fac=function(t){return new(t||n)(r(z),r(O),r(T),r(c),r(pe))},n.\u0275dir=m({type:n,features:[F]});let o=n;return o})(),ye=(()=>{let n=class n{set nzVisible(e){let t=oe(e);this._visible!==t&&(this._visible=t,this.nzVisibleChange.next(t))}get nzVisible(){return this._visible}set nzTrigger(e){this._trigger=e}get nzTrigger(){return this._trigger}set nzPlacement(e){let t=e.map(i=>le[i]);this._positions=[...t,...E]}constructor(e,t,i){this.cdr=e,this.directionality=t,this.noAnimation=i,this.nzTitle=null,this.nzContent=null,this.nzArrowPointAtCenter=!1,this.nzOverlayStyle={},this.nzBackdrop=!1,this.cdkConnectedOverlayPush=!0,this.nzVisibleChange=new u,this._visible=!1,this._trigger="hover",this.preferredPlacement="top",this.dir="ltr",this._classMap={},this._prefix="ant-tooltip",this._positions=[...E],this.destroy$=new u}ngOnInit(){this.directionality.change?.pipe(g(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.nzVisibleChange.complete(),this.destroy$.next(),this.destroy$.complete()}show(){this.nzVisible||(this.isEmpty()||(this.nzVisible=!0,this.nzVisibleChange.next(!0),this.cdr.detectChanges()),this.origin&&this.overlay&&this.overlay.overlayRef&&this.overlay.overlayRef.getDirection()==="rtl"&&this.overlay.overlayRef.setDirection("ltr"))}hide(){this.nzVisible&&(this.nzVisible=!1,this.nzVisibleChange.next(!1),this.cdr.detectChanges())}updateByDirective(){this.updateStyles(),this.cdr.detectChanges(),Promise.resolve().then(()=>{this.updatePosition(),this.updateVisibilityByTitle()})}updatePosition(){this.origin&&this.overlay&&this.overlay.overlayRef&&this.overlay.overlayRef.updatePosition()}onPositionChange(e){this.preferredPlacement=ae(e),this.updateStyles(),this.cdr.detectChanges()}setOverlayOrigin(e){this.origin=e,this.cdr.markForCheck()}onClickOutside(e){!this.origin.nativeElement.contains(e.target)&&this.nzTrigger!==null&&this.hide()}updateVisibilityByTitle(){this.isEmpty()&&this.hide()}updateStyles(){this._classMap={[this.nzOverlayClassName]:!0,[`${this._prefix}-placement-${this.preferredPlacement}`]:!0}}};n.\u0275fac=function(t){return new(t||n)(r(_),r(I,8),r(c))},n.\u0275dir=m({type:n,viewQuery:function(t,i){if(t&1&&K(de,5),t&2){let a;U(a=H())&&(i.overlay=a.first)}}});let o=n;return o})();function ve(o){return o instanceof j?!1:o===""||!ne(o)}var Je=(()=>{let n=class n extends me{constructor(e,t,i,a){super(e,t,i,a),this.titleContext=null,this.trigger="hover",this.placement="top",this.cdkConnectedOverlayPush=!0,this.visibleChange=new C,this.componentRef=this.hostView.createComponent(fe)}getProxyPropertyMap(){return k(y({},super.getProxyPropertyMap()),{nzTooltipColor:["nzColor",()=>this.nzTooltipColor],titleContext:["nzTitleContext",()=>this.titleContext]})}};n.\u0275fac=function(t){return new(t||n)(r(z),r(O),r(T),r(c,9))},n.\u0275dir=m({type:n,selectors:[["","nz-tooltip",""]],hostVars:2,hostBindings:function(t,i){t&2&&b("ant-tooltip-open",i.visible)},inputs:{title:[l.None,"nzTooltipTitle","title"],titleContext:[l.None,"nzTooltipTitleContext","titleContext"],directiveTitle:[l.None,"nz-tooltip","directiveTitle"],trigger:[l.None,"nzTooltipTrigger","trigger"],placement:[l.None,"nzTooltipPlacement","placement"],origin:[l.None,"nzTooltipOrigin","origin"],visible:[l.None,"nzTooltipVisible","visible"],mouseEnterDelay:[l.None,"nzTooltipMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:[l.None,"nzTooltipMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:[l.None,"nzTooltipOverlayClassName","overlayClassName"],overlayStyle:[l.None,"nzTooltipOverlayStyle","overlayStyle"],arrowPointAtCenter:[l.None,"nzTooltipArrowPointAtCenter","arrowPointAtCenter"],cdkConnectedOverlayPush:"cdkConnectedOverlayPush",nzTooltipColor:"nzTooltipColor"},outputs:{visibleChange:"nzTooltipVisibleChange"},exportAs:["nzTooltip"],standalone:!0,features:[D]});let o=n;return v([w()],o.prototype,"arrowPointAtCenter",void 0),v([w()],o.prototype,"cdkConnectedOverlayPush",void 0),o})(),fe=(()=>{let n=class n extends ye{constructor(e,t,i){super(e,t,i),this.nzTitle=null,this.nzTitleContext=null,this._contentStyleMap={}}isEmpty(){return ve(this.nzTitle)}updateStyles(){let e=this.nzColor&&ie(this.nzColor);this._classMap={[this.nzOverlayClassName]:!0,[`${this._prefix}-placement-${this.preferredPlacement}`]:!0,[`${this._prefix}-${this.nzColor}`]:e},this._contentStyleMap={backgroundColor:this.nzColor&&!e?this.nzColor:null,"--color":this.nzColor}}};n.\u0275fac=function(t){return new(t||n)(r(_),r(I,8),r(c,9))},n.\u0275cmp=R({type:n,selectors:[["nz-tooltip"]],exportAs:["nzTooltipComponent"],standalone:!0,features:[D,G],decls:2,vars:5,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-tooltip",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-tooltip-content"],[1,"ant-tooltip-arrow"],[1,"ant-tooltip-arrow-content",3,"ngStyle"],[1,"ant-tooltip-inner",3,"ngStyle"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"]],template:function(t,i){t&1&&(P(0,ge,6,11,"ng-template",0,1,J),Q("overlayOutsideClick",function(h){return i.onClickOutside(h)})("detach",function(){return i.hide()})("positionChange",function(h){return i.onPositionChange(h)})),t&2&&p("cdkConnectedOverlayOrigin",i.origin)("cdkConnectedOverlayOpen",i._visible)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayPush",i.cdkConnectedOverlayPush)("nzArrowPointAtCenter",i.nzArrowPointAtCenter)},dependencies:[ee,Z,X,Y,c,se,re,ce,he],encapsulation:2,data:{animation:[te]},changeDetection:0});let o=n;return o})();export{Je as a};