import{a as tt}from"./chunk-WMCVFNDX.js";import{a as W,b as X,c as z,e as v}from"./chunk-QYNFAZMW.js";import{a as B}from"./chunk-SWGVYQEU.js";import{a as _}from"./chunk-YGDEXIGW.js";import{c as C,d as g,p as Z}from"./chunk-3QVV65MX.js";import{a as P}from"./chunk-PR54DANF.js";import{b as V}from"./chunk-ZKXIWUQB.js";import{a as Y}from"./chunk-2LHNZLNA.js";import{d as G,e as h,g as L,h as $,k as q,l as H,n as R,o as k,p as K,q as J,r as Q}from"./chunk-U2BK7JJZ.js";import{a as O}from"./chunk-GAJDQISX.js";import{a as b}from"./chunk-S3AX5MZX.js";import{Ba as l,Ca as a,Na as w,Pa as j,Ra as d,Tb as A,Ya as o,Za as n,_a as f,aa as I,ba as u,fb as M,fc as U,ia as D,ja as c,pa as x,rb as m,sc as N,ub as T,x as y}from"./chunk-6K2CLVX4.js";var et=(()=>{let t=class t{constructor(r){this.http=r}addMoneyForUser(r){return this.http.post(`${b.apiUrl}/transaction`,r)}getAllUser(){return this.http.get(`${b.apiUrl}/user?page=1&take=100000`)}};t.\u0275fac=function(i){return new(i||t)(x(U))},t.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function st(e,t){if(e&1&&(o(0,"nz-option",13)(1,"span",14),m(2),n()()),e&2){let p=t.$implicit;d("nzCustomContent",!0)("nzValue",p.id)("nzLabel",p.username),l(2),T("ID: ",p.id," - ",p.username,"")}}var it=(()=>{let t=class t extends O{constructor(r,i,s,F){super(),this.fb=r,this.service=i,this.pageService=s,this.toast=F,this.users=[],this.validateForm=this.fb.group({userId:[0,[h.required]],amount:[0,[h.required]],description:["Admin c\u1ED9ng ti\u1EC1n",[h.required]],code:[`${Math.floor(Math.random()*1e9)+1}`]}),this.submit=()=>{let rt={userId:this.validateForm.value.userId,amount:this.validateForm.value.amount,code:this.validateForm.value.code,description:this.validateForm.value.description},nt=this.service.addMoneyForUser(rt).subscribe({next:S=>{P().id===S.user.id&&this.pageService.myBehaviorSubject.next(S.user),this.toast.success("T\u1EA1o giao d\u1ECBch th\xE0nh c\xF4ng")}});this.subscriptions.push(nt)}}ngOnInit(){this.getAllUser()}getAllUser(){let r=this.service.getAllUser().pipe(y(i=>i.data)).subscribe({next:i=>{this.users=i}});this.subscriptions.push(r)}};t.\u0275fac=function(i){return new(i||t)(a(K),a(et),a(V),a(B))},t.\u0275cmp=I({type:t,selectors:[["app-deposit-by-hand"]],features:[w],decls:28,vars:2,consts:[[1,"wrapper","bg-white"],[1,"wrapper__header","header1"],[1,"wrapper__content","p-4"],[1,"login-form",3,"formGroup","ngSubmit"],["formControlName","userId","nzShowSearch","","nzPlaceHolder","Ch\u1ECDn user",1,"w-100"],[3,"nzCustomContent","nzValue","nzLabel",4,"ngFor","ngForOf"],["nzErrorTip","Please input your amount!"],["type","number","nz-input","","formControlName","amount"],["nzErrorTip","Please input your code!"],["type","number","nz-input","","formControlName","code"],["nzErrorTip","Please input your description!"],["type","text","nz-input","","formControlName","description","placeholder","N\u1ED9i dung","value","Admin c\u1ED9ng ti\u1EC1n"],[1,"btn","btn-primary"],[3,"nzCustomContent","nzValue","nzLabel"],[1,"ms-2"]],template:function(i,s){i&1&&(o(0,"div",0)(1,"div",1)(2,"h2"),m(3,"N\u1EA1p ti\u1EC1n th\u1EE7 c\xF4ng "),n()(),o(4,"div",2)(5,"form",3),M("ngSubmit",function(){return s.submit()}),o(6,"p"),m(7,"Kh\xE1ch h\xE0ng"),n(),o(8,"nz-form-item")(9,"nz-select",4),j(10,st,3,5,"nz-option",5),n()(),o(11,"p"),m(12,"S\u1ED1 ti\u1EC1n"),n(),o(13,"nz-form-item")(14,"nz-form-control",6),f(15,"input",7),n()(),o(16,"p"),m(17,"M\xE3 giao d\u1ECBch"),n(),o(18,"nz-form-item")(19,"nz-form-control",8),f(20,"input",9),n()(),o(21,"p"),m(22,"N\u1ED9i dung"),n(),o(23,"nz-form-item")(24,"nz-form-control",10),f(25,"input",11),n()(),o(26,"button",12),m(27,"Tao giao dich"),n()()()()),i&2&&(l(5),d("formGroup",s.validateForm),l(5),d("ngForOf",s.users))},dependencies:[A,q,G,H,L,$,X,v,z,Y,C,W,g,R,k]});let e=t;return e})();var at=[{path:"",component:it}],ot=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=u({type:t}),t.\u0275inj=c({imports:[N.forChild(at),N]});let e=t;return e})();var Bt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=u({type:t}),t.\u0275inj=c({imports:[ot,Z,_,J,v,z,C,g,tt,Q]});let e=t;return e})();export{Bt as a};
