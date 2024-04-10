import{$ as d,Ca as c,La as y,Pb as _,_ as p,ca as l,fb as g,ia as h,ka as m,pa as f}from"./chunk-6K2CLVX4.js";var a=class{constructor(t,s){this._document=s;let e=this._textarea=this._document.createElement("textarea"),i=e.style;i.position="fixed",i.top=i.opacity="0",i.left="-999em",e.setAttribute("aria-hidden","true"),e.value=t,e.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(e)}copy(){let t=this._textarea,s=!1;try{if(t){let e=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),s=this._document.execCommand("copy"),e&&e.focus()}}catch{}return s}destroy(){let t=this._textarea;t&&(t.remove(),this._textarea=void 0)}},C=(()=>{let t=class t{constructor(e){this._document=e}copy(e){let i=this.beginCopy(e),n=i.copy();return i.destroy(),n}beginCopy(e){return new a(e,this._document)}};t.\u0275fac=function(i){return new(i||t)(f(_))},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})(),v=new m("CDK_COPY_TO_CLIPBOARD_CONFIG"),M=(()=>{let t=class t{constructor(e,i,n){this._clipboard=e,this._ngZone=i,this.text="",this.attempts=1,this.copied=new p,this._pending=new Set,n&&n.attempts!=null&&(this.attempts=n.attempts)}copy(e=this.attempts){if(e>1){let i=e,n=this._clipboard.beginCopy(this.text);this._pending.add(n);let r=()=>{let u=n.copy();!u&&--i&&!this._destroyed?this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(r,1)):(this._currentTimeout=null,this._pending.delete(n),n.destroy(),this.copied.emit(u))};r()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(e=>e.destroy()),this._pending.clear(),this._destroyed=!0}};t.\u0275fac=function(i){return new(i||t)(c(C),c(y),c(v,8))},t.\u0275dir=l({type:t,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(i,n){i&1&&g("click",function(){return n.copy()})},inputs:{text:[d.None,"cdkCopyToClipboard","text"],attempts:[d.None,"cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"},standalone:!0});let o=t;return o})();export{M as a};
