import{a as S}from"./chunk-WMCVFNDX.js";import{a as ot,b as nt,c as N,e as v}from"./chunk-QYNFAZMW.js";import{a as H}from"./chunk-SWGVYQEU.js";import{a as pt}from"./chunk-YGDEXIGW.js";import{c as E,d as y,p as at}from"./chunk-3QVV65MX.js";import{a as U}from"./chunk-AKB5CDRF.js";import{a as st,b as mt}from"./chunk-2LHNZLNA.js";import{d as J}from"./chunk-UYMFFECA.js";import{d as K,e as c,g as W,h as X,k as Y,l as Z,n as Q,o as tt,p as et,q as it,r as rt}from"./chunk-U2BK7JJZ.js";import{a as L}from"./chunk-GAJDQISX.js";import{a as b}from"./chunk-RMJNHSUB.js";import{Aa as j,Ba as d,Ca as u,Na as V,Pa as k,Ra as C,Tb as B,Ya as r,Za as n,_a as p,a as _,aa as T,ba as g,fb as x,fc as G,h as F,ia as O,ja as z,kb as R,oc as $,pa as A,rb as m,sb as q,sc as I,w as M}from"./chunk-6K2CLVX4.js";var f=class{constructor(){this.id=0,this.title="",this.description="",this.subDescription="",this.orderNumber=0,this.category={title:"",id:0},this.price=0,this.isShow=!0,this.createdAt="",this.updatedAt=" ",this.productDetails=0}};var ct=(()=>{let t=class t{constructor(e){this.http=e}getDetailProduct(e=0){return this.http.get(`${b.apiUrl}/product/${e}`)}saveProduct(e=0,i){return e==0?this.http.post(`${b.apiUrl}/product`,i):this.http.put(`${b.apiUrl}/product/${e}`,i)}};t.\u0275fac=function(i){return new(i||t)(A(G))},t.\u0275prov=O({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();function zt(o,t){if(o&1&&(r(0,"nz-option",20),p(1,"img",21),r(2,"span",22),m(3),n()()),o&2){let h=t.$implicit;C("nzCustomContent",!0)("nzValue",h.id)("nzLabel",h.title),d(),R("src","../../../assets/images/",h.icon,"",j),d(2),q(h.title)}}var ut=(()=>{let t=class t extends L{constructor(e,i,s,a,l){super(),this.fb=e,this.service=i,this.route=s,this.categoryService=a,this.toast=l,this.productId=0,this.product=new f,this.dataReset=new f,this.categories=[],this.validateForm=this.fb.group({title:["",[c.required]],description:["",[c.required]],subDescription:["",[c.required]],price:[0,[c.required]],categoryId:[0,[c.required]],isShow:[!0,[c.required]],orderNumber:[0,[c.required]]})}ngOnInit(){return F(this,null,function*(){this.getCategory(),yield this.getDetailProduct()})}getDetailProduct(){return F(this,null,function*(){let e=yield M(this.route.params);if(this.productId=e.id,this.productId!=0){let i=this.service.getDetailProduct(e.id).subscribe({next:s=>{this.product=s,this.dataReset=_({},s);let{title:a,price:l,category:P,isShow:w,subDescription:dt,description:ft,orderNumber:ht}=s;this.validateForm.setValue({title:a,categoryId:this.product.category.id,price:l,isShow:w,orderNumber:ht,subDescription:dt,description:ft})}});this.subscriptions.push(i)}})}getCategory(){this.categoryService.getCategoriesClient().subscribe({next:e=>{this.categories=e.data}})}sumbit(){let e=this.validateForm.value,i=this.service.saveProduct(this.productId,e).subscribe({next:s=>{this.toast.success("Th\xE0nh c\xF4ng")},error:s=>{let{error:a}=s;this.toast.success(a.message)}});this.subscriptions.push(i)}reset(){let{title:e,price:i,category:s,isShow:a,subDescription:l,description:P,orderNumber:w}=this.dataReset;this.validateForm.setValue({title:e,categoryId:this.product.category.id,price:i,isShow:a,orderNumber:w,subDescription:l,description:P})}};t.\u0275fac=function(i){return new(i||t)(u(et),u(ct),u($),u(U),u(H))},t.\u0275cmp=T({type:t,selectors:[["app-edit-product"]],features:[V],decls:47,vars:2,consts:[[1,"wrapper"],[1,"wrapper__header"],[1,"wrapper__content","p-3"],[1,"login-form",3,"formGroup"],["nzErrorTip","Please input your title!"],["type","text","nz-input","","formControlName","title"],["nzErrorTip","Please input your description!"],["type","text","nz-input","","formControlName","description"],["nzErrorTip","Please input your subDescription!"],["rows","4","nz-input","","formControlName","subDescription"],["nzErrorTip","Please input your price"],["type","number","nz-input","","formControlName","price"],["formControlName","categoryId","nzShowSearch","","nzPlaceHolder",""],[3,"nzCustomContent","nzValue","nzLabel",4,"ngFor","ngForOf"],["nzErrorTip","Please input your username!"],["formControlName","isShow"],["type","number","nz-input","","formControlName","orderNumber"],[1,"buttons"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger","ms-2",3,"click"],[3,"nzCustomContent","nzValue","nzLabel"],["height","25","width","25",3,"src"],[1,"ms-2"]],template:function(i,s){i&1&&(r(0,"div",0)(1,"div",1)(2,"h2"),m(3," Edit th\u1EC3 lo\u1EA1i "),n()(),r(4,"div",2)(5,"form",3)(6,"p"),m(7,"T\xEAn s\u1EA3n ph\u1EA9m"),n(),r(8,"nz-form-item")(9,"nz-form-control",4),p(10,"input",5),n()(),r(11,"p"),m(12,"M\xF4 t\u1EA3 ng\u1EAFn"),n(),r(13,"nz-form-item")(14,"nz-form-control",6),p(15,"input",7),n()(),r(16,"p"),m(17,"M\xF4 t\u1EA3 chi ti\u1EBFt"),n(),r(18,"nz-form-item")(19,"nz-form-control",8),p(20,"textarea",9),n()(),r(21,"p"),m(22,"Gi\xE1"),n(),r(23,"nz-form-item")(24,"nz-form-control",10),p(25,"input",11),n()(),r(26,"p"),m(27,"Ch\u1ECDn lo\u1EA1i"),n(),r(28,"nz-form-item")(29,"nz-select",12),k(30,zt,4,5,"nz-option",13),n()(),r(31,"p"),m(32,"Hi\u1EC3n th\u1ECB"),n(),r(33,"nz-form-item")(34,"nz-form-control",14),p(35,"nz-switch",15),m(36," ` "),n()(),r(37,"p"),m(38,"Th\u1EE9 t\u1EF1"),n(),r(39,"nz-form-item")(40,"nz-form-control",14),p(41,"input",16),n()()(),r(42,"div",17)(43,"button",18),x("click",function(){return s.sumbit()}),m(44,"L\u01B0u thay \u0111\u1ED5i"),n(),r(45,"button",19),x("click",function(){return s.reset()}),m(46,"Reset"),n()()()()),i&2&&(d(5),C("formGroup",s.validateForm),d(25),C("ngForOf",s.categories))},dependencies:[B,Y,K,Z,W,X,Q,tt,nt,v,N,st,ot,y,E,S],styles:[".wrapper[_ngcontent-%COMP%]{background:#fff}.wrapper__header[_ngcontent-%COMP%]{padding:.75rem 1.25rem;background:#d262e3 linear-gradient(135deg,#d262e3 0,#0665d0);border-top-left-radius:.2rem;border-top-right-radius:.2rem}.wrapper__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:400;line-height:1.75;color:#fff}.wrapper__content[_ngcontent-%COMP%]{width:60%}nz-select[_ngcontent-%COMP%]{width:200px}p[_ngcontent-%COMP%]{font-size:14px!important}"]});let o=t;return o})();var Ct=[{path:"",component:ut}],lt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=z({imports:[I.forChild(Ct),I]});let o=t;return o})();var ie=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=z({imports:[lt,at,pt,it,rt,v,N,mt,y,E,J,S]});let o=t;return o})();export{ie as a};
