import{a as Z}from"./chunk-4JH2UKYF.js";import{a as pe,b as ge,c as T,d as ue,e as O}from"./chunk-QYNFAZMW.js";import{a as $}from"./chunk-SWGVYQEU.js";import{a as z}from"./chunk-IA4EQO5P.js";import{a as de,b as N}from"./chunk-2LHNZLNA.js";import{d as ee}from"./chunk-UYMFFECA.js";import{d as te,e as V,g as ne,h as ie,j as re,k as oe,n as ae,o as se,p as ce,q as me,r as le}from"./chunk-U2BK7JJZ.js";import{a as Y}from"./chunk-GAJDQISX.js";import{a as k}from"./chunk-RMJNHSUB.js";import{$a as U,Ba as g,Ca as w,Ib as v,Na as B,Pa as P,Ra as u,Ub as G,Vb as K,Wb as H,Ya as a,Za as s,Zb as q,_a as x,aa as R,ab as L,ba as M,bb as b,cb as y,dc as J,ea as l,fa as p,fb as d,fc as Q,hb as c,ia as W,ja as I,pa as j,qb as E,qc as X,rb as m,sc as A,wb as _,xb as h,yb as f}from"./chunk-6K2CLVX4.js";var C=class extends Error{};C.prototype.name="InvalidTokenError";function Ce(i){return decodeURIComponent(atob(i).replace(/(.)/g,(n,r)=>{let t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t}))}function we(i){let n=i.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return Ce(n)}catch{return atob(n)}}function D(i,n){if(typeof i!="string")throw new C("Invalid token specified: must be a string");n||(n={});let r=n.header===!0?0:1,t=i.split(".")[r];if(typeof t!="string")throw new C(`Invalid token specified: missing part #${r+1}`);let e;try{e=we(t)}catch(o){throw new C(`Invalid token specified: invalid base64 for part #${r+1} (${o.message})`)}try{return JSON.parse(e)}catch(o){throw new C(`Invalid token specified: invalid json for part #${r+1} (${o.message})`)}}var _e=(()=>{let n=class n{constructor(t){this.http=t}signIn(t){return this.http.post(`${k.apiUrl}/auth`,t)}forgetPass(t){let e={email:t};return this.http.post(`${k.apiUrl}/user/reset-pass`,e)}confirmOPT(t){let e={otp:t};return this.http.post(`${k.apiUrl}/user/confirm-otp`,e)}registerAcc(t){return this.http.post(`${k.apiUrl}/user`,t)}};n.\u0275fac=function(e){return new(e||n)(j(Q))},n.\u0275prov=W({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();function be(i,n){if(i&1&&b(0,7),i&2){c();let r=E(11);u("ngTemplateOutlet",r)}}function ye(i,n){if(i&1&&b(0,7),i&2){c();let r=E(9);u("ngTemplateOutlet",r)}}function Ee(i,n){if(i&1&&b(0,7),i&2){c();let r=E(7);u("ngTemplateOutlet",r)}}function ve(i,n){if(i&1&&b(0,7),i&2){c();let r=E(13);u("ngTemplateOutlet",r)}}function ke(i,n){if(i&1){let r=y();a(0,"div",8)(1,"div",9)(2,"h1"),m(3,"VIA10K.COM"),s(),a(4,"p"),m(5,"OTP"),s(),a(6,"input",10),f("ngModelChange",function(e){l(r);let o=c();return h(o.otp,e)||(o.otp=e),p(e)}),s(),a(7,"button",11),d("click",function(){l(r);let e=c();return p(e.sendOTP())}),m(8,"X\xE1c nh\u1EADn OTP"),s()()()}if(i&2){let r=c();g(6),_("ngModel",r.otp)}}function Me(i,n){if(i&1){let r=y();a(0,"div",8)(1,"div",12)(2,"h1"),m(3,"VIA10K.COM"),s(),a(4,"p"),m(5,"RESET M\u1EACT KH\u1EA8U"),s(),a(6,"input",13),f("ngModelChange",function(e){l(r);let o=c();return h(o.email,e)||(o.email=e),p(e)}),s(),a(7,"button",11),d("click",function(){l(r);let e=c();return p(e.sendEmail())}),m(8,"G\u1EEDi email"),s(),a(9,"a",14),d("click",function(){l(r);let e=c();return p(e.back())}),m(10," Quay l\u1EA1i"),s()()()}if(i&2){let r=c();g(6),_("ngModel",r.email)}}function Ie(i,n){i&1&&(a(0,"p",38),m(1,"T\xE0i kho\u1EA3n ho\u1EB7c m\u1EADt kh\u1EA9u kh\xF4ng \u0111\xFAng"),s())}function Pe(i,n){if(i&1){let r=y();a(0,"div",15)(1,"div",16)(2,"h1"),m(3,"VIA10K.COM"),s(),a(4,"p"),m(5,"\u0110\u0103ng nh\u1EADp"),s(),a(6,"div",17)(7,"form",18),d("ngSubmit",function(){l(r);let e=c();return p(e.submitForm())}),a(8,"nz-form-item")(9,"nz-form-control",19)(10,"nz-input-group",20),x(11,"input",21),s()()(),a(12,"nz-form-item")(13,"nz-form-control",22)(14,"nz-input-group",23),x(15,"input",24),s(),P(16,Ie,2,0,"p",25),s()(),a(17,"div",26)(18,"div")(19,"label",27)(20,"span"),m(21,"Ghi nh\u1EDB"),s()()(),a(22,"div")(23,"a",28),d("click",function(){l(r);let e=c();return p(e.forgetPassword())}),m(24,"Qu\xEAn m\u1EADt kh\u1EA9u"),s()()(),a(25,"div")(26,"button",29),m(27,"\u0110\u0103ng nh\u1EADp"),s()()(),a(28,"div",30)(29,"span",31),m(30,"Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? "),a(31,"a",32),d("click",function(){l(r);let e=c();return p(e.registerAccPage())}),m(32,"\u0110\u0103ng k\xFD"),s()()(),a(33,"div",33)(34,"div",34),x(35,"img",35),s(),a(36,"div",36),x(37,"img",37),s()()()()()}if(i&2){let r=c();g(7),u("formGroup",r.validateForm),g(9),u("ngIf",r.showAlertPassword)}}function Te(i,n){if(i&1){let r=y();a(0,"div",15)(1,"div",16)(2,"h1"),m(3,"VIA10K.COM"),s(),a(4,"p"),m(5,"T\u1EA0O T\xC0I KHO\u1EA2N"),s(),a(6,"input",39),f("ngModelChange",function(e){l(r);let o=c();return h(o.username,e)||(o.username=e),p(e)}),s(),a(7,"input",40),f("ngModelChange",function(e){l(r);let o=c();return h(o.password,e)||(o.password=e),p(e)}),s(),a(8,"input",41),f("ngModelChange",function(e){l(r);let o=c();return h(o.confirmPassword,e)||(o.confirmPassword=e),p(e)}),s(),a(9,"input",42),f("ngModelChange",function(e){l(r);let o=c();return h(o.emailRegister,e)||(o.emailRegister=e),p(e)}),s(),a(10,"input",43),f("ngModelChange",function(e){l(r);let o=c();return h(o.phone,e)||(o.phone=e),p(e)}),s(),a(11,"button",11),d("click",function(){l(r);let e=c();return p(e.registerAcc())}),m(12,"\u0110\u0103ng k\xFD"),s(),a(13,"div",30)(14,"span",31),m(15,"\u0110\xE3 c\xF3 t\xE0i kho\u1EA3n "),a(16,"a",32),d("click",function(){l(r);let e=c();return p(e.changeToLogin())}),m(17,"\u0110\u0103ng nh\u1EADp"),s()()(),a(18,"div",33)(19,"div",34),x(20,"img",35),s(),a(21,"div",36),x(22,"img",37),s()()()()}if(i&2){let r=c();g(6),_("ngModel",r.username),g(),_("ngModel",r.password),g(),_("ngModel",r.confirmPassword),g(),_("ngModel",r.emailRegister),g(),_("ngModel",r.phone)}}var he=(()=>{let n=class n extends Y{constructor(t,e,o,S,xe){super(),this.fb=t,this.service=e,this.router=o,this.toastr=S,this.chatService=xe,this.email="",this.isRegister=0,this.otp="",this.username="",this.password="",this.confirmPassword="",this.emailRegister="",this.phone="",this.showAlertPassword=!1,this.validateForm=this.fb.group({userName:["",[V.required]],password:["",[V.required]],remember:[!0]})}ngOnInit(){let t=localStorage.getItem("access_token");if(!t)return;let{exp:e}=t&&D(t);e&&Date.now()>=e*1e3?(this.router.navigate(["/sign-in"]),localStorage.removeItem("access_token")):this.router.navigate(["/shop"])}submitForm(){if(this.showAlertPassword=!1,this.validateForm.valid){let t={password:this.validateForm.value.password,username:this.validateForm.value.userName};this.service.signIn(t).subscribe({next:e=>{let{access_token:o}=e;this.chatService.sendMessage(o);let S=o&&D(o);localStorage.setItem("access_token",o),localStorage.setItem("user",JSON.stringify(S)),this.router.navigate(["/shop"])},error:e=>{let{error:o}=e;this.showAlertPassword=!0,setTimeout(()=>{this.showAlertPassword=!1},2e3)}})}}forgetPassword(){this.isRegister=1}sendEmail(){let t=this.service.forgetPass(this.email).subscribe({next:e=>{this.toastr.success("\u0110\xE3 g\u1EEDi OTP v\u1EC1 mail"),this.isRegister=2}});this.subscriptions.push(t)}sendOTP(){let t=this.service.confirmOPT(this.otp).subscribe({next:e=>{this.toastr.success("\u0110\xE3 g\u1EEDi password t\u1EA1m th\u1EDDi v\u1EC1 mail"),this.isRegister=0}});this.subscriptions.push(t)}registerAcc(){if(this.password!==this.confirmPassword){this.toastr.error("X\xE1c nh\u1EADn l\u1EA1i m\u1EADt kh\u1EA9u");return}let t={email:this.emailRegister,password:this.password,phone:this.phone,username:this.username},e=this.service.registerAcc(t).subscribe({next:o=>{this.toastr.success("\u0110\u0103ng k\xFD th\xE0nh c\xF4ng"),this.emailRegister=this.password=this.password=this.username=this.confirmPassword="",this.isRegister=0},error:o=>{let{message:S}=o;this.toastr.error(S)}});this.subscriptions.push(e)}changeToLogin(){this.isRegister=0}registerAccPage(){this.isRegister=3}back(){this.isRegister=0}};n.\u0275fac=function(e){return new(e||n)(w(ce),w(_e),w(X),w($),w(Z))},n.\u0275cmp=R({type:n,selectors:[["app-sign-in"]],features:[B],decls:14,vars:5,consts:[[1,"background"],[3,"ngSwitch"],[3,"ngTemplateOutlet",4,"ngSwitchCase"],["otpConfirm",""],["forgetpassword",""],["signIn",""],["register",""],[3,"ngTemplateOutlet"],[1,"background__main1","px-lg-5","px-xl-6","py-4","py-md-5","py-lg-6","bg-white"],[1,"background__main1--content"],["type","text","nz-input","","placeholder","OTP",3,"ngModel","ngModelChange"],[1,"login-button","mt-3",3,"click"],[1,"background__main1--content","pe-2","ps-2"],["type","text","nz-input","","placeholder","Email",3,"ngModel","ngModelChange"],[3,"click"],[1,"background__main","px-lg-5","px-xl-6","py-4","py-md-5","py-lg-6","bg-white"],[1,"background__main--content"],[1,"background__main--content-form"],["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],["nzErrorTip","Please input your username!"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","userName","placeholder","Username"],["nzErrorTip","Please input your Password!"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","Password"],["class","error-pass",4,"ngIf"],["nz-row","",1,"login-form-margin"],["nz-checkbox","","formControlName","remember"],[1,"login-form-forgot",3,"click"],[1,"login-button"],[1,"div-ask"],[1,"ask"],[1,"regis-button",3,"click"],[1,"side-bar__lang"],[1,"side-bar__lang-vi"],["ngSrc","../../../assets/images/109-vietnam.png","height","25","width","25"],[1,"side-bar__lang-en","ms-1"],["ngSrc","../../../assets/images/110-united kingdom.png","height","25","width","25"],[1,"error-pass"],["type","text","nz-input","","placeholder","T\xE0i kho\u1EA3n",1,"mt-3",3,"ngModel","ngModelChange"],["type","text","nz-input","","placeholder","M\u1EADt kh\u1EA9u",1,"mt-3",3,"ngModel","ngModelChange"],["type","text","nz-input","","placeholder","Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u",1,"mt-3",3,"ngModel","ngModelChange"],["type","text","nz-input","","placeholder","Email",1,"mt-3",3,"ngModel","ngModelChange"],["type","text","nz-input","","placeholder","S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",1,"mt-3",3,"ngModel","ngModelChange"]],template:function(e,o){e&1&&(a(0,"div",0),U(1,1),P(2,be,1,1,"ng-container",2)(3,ye,1,1,"ng-container",2)(4,Ee,1,1,"ng-container",2)(5,ve,1,1,"ng-container",2),L(),s(),P(6,ke,9,1,"ng-template",null,3,v)(8,Me,11,1,"ng-template",null,4,v)(10,Pe,38,2,"ng-template",null,5,v)(12,Te,23,5,"ng-template",null,6,v)),e&2&&(g(),u("ngSwitch",o.isRegister),g(),u("ngSwitchCase",0),g(),u("ngSwitchCase",1),g(),u("ngSwitchCase",2),g(),u("ngSwitchCase",3))},dependencies:[T,O,N,ge,oe,te,ne,ie,ae,se,z,pe,de,ue,J,G,re,K,H,q],styles:[".login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px;display:flex;justify-content:space-between}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}.background[_ngcontent-%COMP%]{background:#054d9ecc;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}.background__main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;width:33%;min-width:400px;height:82%;background:#fff}.background__main--content[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}.background__main--content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;margin-bottom:1.25rem;color:#6c757d;letter-spacing:.0625rem;text-transform:uppercase}.background__main--content-form[_ngcontent-%COMP%]{width:80%}.background__main1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;height:400px;width:400px;background:#fff}.background__main1--content[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}.background__main1--content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;margin-bottom:1.25rem;color:#6c757d;letter-spacing:.0625rem;text-transform:uppercase}.background__main1--content-form[_ngcontent-%COMP%]{width:80%}nz-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{line-height:1.5rem}.login-button[_ngcontent-%COMP%]{color:#fff;text-transform:uppercase;letter-spacing:.0625rem;font-weight:700;padding:.625rem 1.5rem;font-size:.875rem;line-height:1.5;border-radius:.25rem;background-color:#0665d0;border:none}.regis-button[_ngcontent-%COMP%]{color:#0665d0;text-decoration:none;background-color:transparent}.div-ask[_ngcontent-%COMP%]{padding-top:30px}.div-ask[_ngcontent-%COMP%]   .ask[_ngcontent-%COMP%]{font-size:.875rem;color:#495057;font-weight:600}.side-bar__lang[_ngcontent-%COMP%]{display:flex;margin-top:5px;justify-content:center}.ant-form-item-explain-error[_ngcontent-%COMP%]{text-align:left!important}.error-pass[_ngcontent-%COMP%]{color:red;text-align:left}"]});let i=n;return i})();var Oe=[{path:"",component:he}],fe=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=M({type:n}),n.\u0275inj=I({imports:[A.forChild(Oe),A]});let i=n;return i})();var st=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=M({type:n}),n.\u0275inj=I({imports:[fe,T,O,N,le,ee,z,me]});let i=n;return i})();export{st as a};
