import{A as B,D as V,E as j,f as F}from"./chunk-4GDCIPAL.js";import{D as $,E as A,K as U,L as G,u as h}from"./chunk-UR2TO4CR.js";import{$a as C,Ab as k,Ba as o,Ca as u,Ka as M,Pa as l,Ra as d,Ta as O,V as T,Va as r,Ya as s,Za as p,_ as w,_a as v,aa as b,ab as z,bb as E,cb as S,ea as g,fa as y,fb as I,hb as i,l as N,r as m,rb as f,sb as x,va as D}from"./chunk-6K2CLVX4.js";function W(n,e){n&1&&E(0)}function Z(n,e){if(n&1&&l(0,W,1,0,"ng-container",7),n&2){let t=i(3);d("nzStringTemplateOutlet",t.nzIcon)}}function q(n,e){if(n&1&&v(0,"span",8),n&2){let t=i(3);d("nzType",t.nzIconType||t.inferredIconType)("nzTheme",t.iconTheme)}}function H(n,e){if(n&1&&(s(0,"div",6),l(1,Z,1,1,"ng-container")(2,q,1,2),p()),n&2){let t=i(2);o(),r(1,t.nzIcon?1:2)}}function J(n,e){if(n&1&&(C(0),f(1),z()),n&2){let t=i(4);o(),x(t.nzMessage)}}function K(n,e){if(n&1&&(s(0,"span",12),l(1,J,2,1,"ng-container",7),p()),n&2){let t=i(3);o(),d("nzStringTemplateOutlet",t.nzMessage)}}function Q(n,e){if(n&1&&(C(0),f(1),z()),n&2){let t=i(4);o(),x(t.nzDescription)}}function X(n,e){if(n&1&&(s(0,"span",13),l(1,Q,2,1,"ng-container",7),p()),n&2){let t=i(3);o(),d("nzStringTemplateOutlet",t.nzDescription)}}function Y(n,e){if(n&1&&(s(0,"div",9),l(1,K,2,1,"span",10)(2,X,2,1,"span",11),p()),n&2){let t=i(2);o(),r(1,t.nzMessage?1:-1),o(),r(2,t.nzDescription?2:-1)}}function nn(n,e){if(n&1&&(C(0),f(1),z()),n&2){let t=i(3);o(),x(t.nzAction)}}function tn(n,e){if(n&1&&(s(0,"div",14),l(1,nn,2,1,"ng-container",7),p()),n&2){let t=i(2);o(),d("nzStringTemplateOutlet",t.nzAction)}}function en(n,e){if(n&1&&(C(0),s(1,"span",16),f(2),p(),z()),n&2){let t=i(4);o(2),x(t.nzCloseText)}}function on(n,e){if(n&1&&l(0,en,3,1,"ng-container",7),n&2){let t=i(3);d("nzStringTemplateOutlet",t.nzCloseText)}}function an(n,e){n&1&&v(0,"span",17)}function ln(n,e){if(n&1){let t=S();s(0,"button",15),I("click",function(){g(t);let a=i(2);return y(a.closeAlert())}),l(1,on,1,1,"ng-container")(2,an,1,0),p()}if(n&2){let t=i(2);o(),r(1,t.nzCloseText?1:2)}}function rn(n,e){if(n&1){let t=S();s(0,"div",1),I("@slideAlertMotion.done",function(){g(t);let a=i();return y(a.onFadeAnimationDone())}),l(1,H,3,1,"div",2)(2,Y,3,2,"div",3)(3,tn,2,1,"div",4)(4,ln,3,1,"button",5),p()}if(n&2){let t=i();O("ant-alert-rtl",t.dir==="rtl")("ant-alert-success",t.nzType==="success")("ant-alert-info",t.nzType==="info")("ant-alert-warning",t.nzType==="warning")("ant-alert-error",t.nzType==="error")("ant-alert-no-icon",!t.nzShowIcon)("ant-alert-banner",t.nzBanner)("ant-alert-closable",t.nzCloseable)("ant-alert-with-description",!!t.nzDescription),d("@.disabled",t.nzNoAnimation)("@slideAlertMotion",void 0),o(),r(1,t.nzShowIcon?1:-1),o(),r(2,t.nzMessage||t.nzDescription?2:-1),o(),r(3,t.nzAction?3:-1),o(),r(4,t.nzCloseable||t.nzCloseText?4:-1)}}var L="alert",Mn=(()=>{let e=class e{constructor(c,a,_){this.nzConfigService=c,this.cdr=a,this.directionality=_,this._nzModuleName=L,this.nzAction=null,this.nzCloseText=null,this.nzIconType=null,this.nzMessage=null,this.nzDescription=null,this.nzType="info",this.nzCloseable=!1,this.nzShowIcon=!1,this.nzBanner=!1,this.nzNoAnimation=!1,this.nzIcon=null,this.nzOnClose=new w,this.closed=!1,this.iconTheme="fill",this.inferredIconType="info-circle",this.dir="ltr",this.isTypeSet=!1,this.isShowIconSet=!1,this.destroy$=new N,this.nzConfigService.getConfigChangeEventForComponent(L).pipe(T(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){this.directionality.change?.pipe(T(this.destroy$)).subscribe(c=>{this.dir=c,this.cdr.detectChanges()}),this.dir=this.directionality.value}closeAlert(){this.closed=!0}onFadeAnimationDone(){this.closed&&this.nzOnClose.emit(!0)}ngOnChanges(c){let{nzShowIcon:a,nzDescription:_,nzType:P,nzBanner:R}=c;if(a&&(this.isShowIconSet=!0),P)switch(this.isTypeSet=!0,this.nzType){case"error":this.inferredIconType="close-circle";break;case"success":this.inferredIconType="check-circle";break;case"info":this.inferredIconType="info-circle";break;case"warning":this.inferredIconType="exclamation-circle";break}_&&(this.iconTheme=this.nzDescription?"outline":"fill"),R&&(this.isTypeSet||(this.nzType="warning"),this.isShowIconSet||(this.nzShowIcon=!0))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}};e.\u0275fac=function(a){return new(a||e)(u($),u(M),u(F,8))},e.\u0275cmp=b({type:e,selectors:[["nz-alert"]],inputs:{nzAction:"nzAction",nzCloseText:"nzCloseText",nzIconType:"nzIconType",nzMessage:"nzMessage",nzDescription:"nzDescription",nzType:"nzType",nzCloseable:"nzCloseable",nzShowIcon:"nzShowIcon",nzBanner:"nzBanner",nzNoAnimation:"nzNoAnimation",nzIcon:"nzIcon"},outputs:{nzOnClose:"nzOnClose"},exportAs:["nzAlert"],standalone:!0,features:[D,k],decls:1,vars:1,consts:[["class","ant-alert",3,"ant-alert-rtl","ant-alert-success","ant-alert-info","ant-alert-warning","ant-alert-error","ant-alert-no-icon","ant-alert-banner","ant-alert-closable","ant-alert-with-description"],[1,"ant-alert"],["class","ant-alert-icon"],["class","ant-alert-content"],["class","ant-alert-action"],["type","button","tabindex","0","class","ant-alert-close-icon"],[1,"ant-alert-icon"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType","nzTheme"],[1,"ant-alert-content"],["class","ant-alert-message"],["class","ant-alert-description"],[1,"ant-alert-message"],[1,"ant-alert-description"],[1,"ant-alert-action"],["type","button","tabindex","0",1,"ant-alert-close-icon",3,"click"],[1,"ant-alert-close-text"],["nz-icon","","nzType","close"]],template:function(a,_){a&1&&l(0,rn,5,24,"div",0),a&2&&r(0,_.closed?-1:0)},dependencies:[G,U,j,V],encapsulation:2,data:{animation:[B]},changeDetection:0});let n=e;return m([A(),h()],n.prototype,"nzCloseable",void 0),m([A(),h()],n.prototype,"nzShowIcon",void 0),m([h()],n.prototype,"nzBanner",void 0),m([h()],n.prototype,"nzNoAnimation",void 0),n})();export{Mn as a};