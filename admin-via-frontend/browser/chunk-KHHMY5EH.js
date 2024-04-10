import{a as D,q as _}from"./chunk-U2BK7JJZ.js";import{Ca as f,La as E,Pa as w,_ as a,a as l,aa as g,ba as m,bc as O,ha as p,ja as y,oa as C,zb as R}from"./chunk-6K2CLVX4.js";function T(n,i,e){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");typeof i=="function"&&(e=i,i={}),i=i||{},e=e||function(){},r.type=i.type||"text/javascript",r.charset=i.charset||"utf8",r.async="async"in i?!!i.async:!0,r.src=n,i.attrs&&K(r,i.attrs),i.text&&(r.text=String(i.text));var s="onload"in r?v:Z;s(r,e),r.onload||v(r,e),t.appendChild(r)}function K(n,i){for(var e in i)n.setAttribute(e,i[e])}function v(n,i){n.onload=function(){this.onerror=this.onload=null,i(null,n)},n.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+this.src),n)}}function Z(n,i){n.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,i(null,n))}}var u;function c(n,i){return"CKEDITOR"in window?Promise.resolve(CKEDITOR):typeof n!="string"||n.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):(u||(u=c.scriptLoader(n).then(function(e){return i&&i(e),e})),u)}c.scriptLoader=function(n){return new Promise(function(i,e){T(n,function(t){if(u=void 0,t)return e(t);if(!window.CKEDITOR)return e(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."));i(CKEDITOR)})})};function U(n,i){}var q=(()=>{class n{constructor(e,t){this.elementRef=e,this.ngZone=t,this.editorUrl="https://cdn.ckeditor.com/4.22.1/standard-all/ckeditor.js",this.tagName="textarea",this.type="classic",this.namespaceLoaded=new a,this.ready=new a,this.dataReady=new a,this.change=new a,this.dataChange=new a,this.dragStart=new a,this.dragEnd=new a,this.drop=new a,this.fileUploadResponse=new a,this.fileUploadRequest=new a,this.focus=new a,this.paste=new a,this.afterPaste=new a,this.blur=new a,this._readOnly=null,this._data=null,this._destroyed=!1}set data(e){if(e!==this._data){if(this.instance){this.instance.setData(e),this._data=this.instance.getData();return}this._data=e}}get data(){return this._data}set readOnly(e){if(this.instance){this.instance.setReadOnly(e);return}this._readOnly=e}get readOnly(){return this.instance?this.instance.readOnly:this._readOnly}ngAfterViewInit(){c(this.editorUrl,e=>{this.namespaceLoaded.emit(e)}).then(()=>{this._destroyed||this.ngZone.runOutsideAngular(this.createEditor.bind(this))}).catch(window.console.error)}ngOnDestroy(){this._destroyed=!0,this.ngZone.runOutsideAngular(()=>{this.instance&&(this.instance.destroy(),this.instance=null)})}writeValue(e){this.data=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}createEditor(){let e=document.createElement(this.tagName);this.elementRef.nativeElement.appendChild(e);let t=this.config?.on?.instanceReady,s=l(l({},{delayIfDetached:!0}),this.config);typeof s.on>"u"&&(s.on={}),s.on.instanceReady=d=>{let o=d.editor;this.instance=o,this.readOnly=this._readOnly!==null?this._readOnly:this.instance.readOnly,this.subscribe(this.instance);let h=o.undoManager;this.data!==null?(h&&h.lock(),o.setData(this.data,{callback:()=>{this.data!==o.getData()&&(h?o.fire("change"):o.fire("dataReady")),h&&h.unlock(),this.ngZone.run(()=>{typeof t=="function"&&t(d),this.ready.emit(d)})}})):this.ngZone.run(()=>{typeof t=="function"&&t(d),this.ready.emit(d)})},this.type==="inline"?CKEDITOR.inline(e,s):CKEDITOR.replace(e,s)}subscribe(e){e.on("focus",t=>{this.ngZone.run(()=>{this.focus.emit(t)})}),e.on("paste",t=>{this.ngZone.run(()=>{this.paste.emit(t)})}),e.on("afterPaste",t=>{this.ngZone.run(()=>{this.afterPaste.emit(t)})}),e.on("dragend",t=>{this.ngZone.run(()=>{this.dragEnd.emit(t)})}),e.on("dragstart",t=>{this.ngZone.run(()=>{this.dragStart.emit(t)})}),e.on("drop",t=>{this.ngZone.run(()=>{this.drop.emit(t)})}),e.on("fileUploadRequest",t=>{this.ngZone.run(()=>{this.fileUploadRequest.emit(t)})}),e.on("fileUploadResponse",t=>{this.ngZone.run(()=>{this.fileUploadResponse.emit(t)})}),e.on("blur",t=>{this.ngZone.run(()=>{this.onTouched&&this.onTouched(),this.blur.emit(t)})}),e.on("dataReady",this.propagateChange,this),this.instance.undoManager?e.on("change",this.propagateChange,this):e.on("selectionCheck",this.propagateChange,this)}propagateChange(e){this.ngZone.run(()=>{let t=this.instance.getData();e.name==="change"?this.change.emit(e):e.name==="dataReady"&&this.dataReady.emit(e),t!==this.data&&(this._data=t,this.dataChange.emit(t),this.onChange&&this.onChange(t))})}}return n.\u0275fac=function(e){return new(e||n)(f(p),f(E))},n.\u0275cmp=g({type:n,selectors:[["ckeditor"]],inputs:{config:"config",editorUrl:"editorUrl",tagName:"tagName",type:"type",data:"data",readOnly:"readOnly"},outputs:{namespaceLoaded:"namespaceLoaded",ready:"ready",dataReady:"dataReady",change:"change",dataChange:"dataChange",dragStart:"dragStart",dragEnd:"dragEnd",drop:"drop",fileUploadResponse:"fileUploadResponse",fileUploadRequest:"fileUploadRequest",focus:"focus",paste:"paste",afterPaste:"afterPaste",blur:"blur"},features:[R([{provide:D,useExisting:C(()=>n),multi:!0}])],decls:1,vars:0,template:function(e,t){e&1&&w(0,U,0,0,"ng-template")},encapsulation:2}),n})();var F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=m({type:n}),n.\u0275inj=y({imports:[[_,O]]}),n})();export{q as a,F as b};