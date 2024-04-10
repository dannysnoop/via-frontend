import{a as P}from"./chunk-BK4Q7J75.js";import{a as O}from"./chunk-BD3QEUHX.js";import{a as y}from"./chunk-XMKJW5PY.js";import{a as k}from"./chunk-JPO57VLI.js";import{a as M}from"./chunk-GAJDQISX.js";import{K as A}from"./chunk-UR2TO4CR.js";import{Aa as _,Ba as a,Ca as E,Na as w,Ra as d,Ya as n,Za as i,_a as l,aa as C,ba as u,h as s,ja as m,lb as x,rb as e,sb as b,sc as f,tb as g,ub as v,w as h}from"./chunk-6K2CLVX4.js";var B=(()=>{let t=class t extends M{constructor(c,r){super(),this.service=c,this.userService=r,this.config=new P,this.secretCode=""}ngOnInit(){return s(this,null,function*(){this.config=yield h(this.service.getConfig()),this.userService.genSecretCode().subscribe({next:c=>{this.secretCode=c.message}})})}};t.\u0275fac=function(r){return new(r||t)(E(k),E(O))},t.\u0275cmp=C({type:t,selectors:[["app-deposit"]],features:[w],decls:45,vars:9,consts:[[1,"wrapper"],[1,"wrapper__info"],[1,"wrapper__content","row","mt-4"],[1,"wrapper__content--left","ms-3","col-md-4","col-sm-12"],[1,"wrapper__content--left-bank"],[2,"font-weight","700","font-size","17px"],[1,"wrapper__content--left-owner"],[1,"name","ps-2"],[1,"wrapper__content--left-accountNumber"],[1,"name","d-flex","align-items-center","ps-2"],["nz-icon","","nzType","copy","nzTheme","outline",2,"cursor","pointer","margin-left","5px",3,"cdkCopyToClipboard"],[1,"wrapper__content--left-content"],[1,"d-flex","align-items-center","ps-2"],["nz-icon","","nzType","copy","nzTheme","outline",1,"m-lg-1",2,"cursor","pointer",3,"cdkCopyToClipboard"],[1,"wrapper__content--left-alert"],[1,"wrapper__content--right","col-md-7","col-sm-12"],["alt","",3,"src"]],template:function(r,p){r&1&&(n(0,"div",0)(1,"div",1)(2,"p"),e(3,"- Qu\xFD kh\xE1ch ghi \u0111\xFAng th\xF4ng tin n\u1EA1p ti\u1EC1n th\xEC t\xE0i kho\u1EA3n s\u1EBD \u0111\u01B0\u1EE3c c\u1ED9ng t\u1EF1 \u0111\u1ED9ng sau khi giao d\u1ECBch th\xE0nh c\xF4ng."),i(),n(4,"p"),e(5,"- Khuy\u1EBFn c\xE1o n\u1EA1p qua bank, v\xEC n\u1EA1p Momo \u0111\xF4i l\xFAc giao d\u1ECBch b\u1ECB delay. N\u1EA1p bank th\xEC 3s - 3p ti\u1EC1n l\xEAn. "),i(),n(6,"p"),e(7),i()(),n(8,"div",2)(9,"div",3)(10,"h3"),e(11,"TH\xD4NG TIN N\u1EA0P TI\u1EC0N "),i(),n(12,"div",4)(13,"p"),e(14," Ng\xE2n h\xE0ng: "),n(15,"span",5),e(16,"CAKE VP Bank"),i()()(),n(17,"div",6)(18,"p"),e(19,"Ch\u1EE7 t\xE0i kho\u1EA3n:"),i(),n(20,"p",7),e(21),i()(),n(22,"div",8)(23,"p"),e(24,"S\u1ED1 t\xE0i kho\u1EA3n:"),i(),n(25,"p",9),e(26),l(27,"span",10),i()(),n(28,"div",11)(29,"p"),e(30,"N\u1ED9i dung chuy\u1EC3n kho\u1EA3n: "),i(),n(31,"p",12),e(32),l(33,"span",13),i()(),n(34,"div",14),e(35," H\u1EC7 th\u1ED1ng s\u1EBD t\u1EF1 \u0111\u1ED9ng c\u1ED9ng ti\u1EC1n v\xE0o t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n sau kho\u1EA3ng 1-5 ph\xFAt. N\u1EBFu qu\xE1 2 ti\u1EBFng ti\u1EC1n ch\u01B0a \u0111\u01B0\u1EE3c c\u1ED9ng vui l\xF2ng li\xEAn h\u1EC7 admin \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3. "),i()(),n(36,"div",15)(37,"h3"),e(38,"Qu\xE9t m\xE3 QR \u0111\u1EC3 thanh to\xE1n "),i(),n(39,"h6"),e(40," S\u1EED d\u1EE5ng "),n(41,"strong"),e(42,"App Internet Banking"),i(),e(43," App Internet Banking ho\u1EB7c \u1EE9ng d\u1EE5ng camera h\u1ED7 tr\u1EE3 QR code \u0111\u1EC3 qu\xE9t m\xE3 "),i(),l(44,"img",16),i()()()),r&2&&(a(7),g("- N\u1EBFu qu\xFD kh\xE1ch mu\u1ED1n n\u1EA1p b\u1EB1ng ph\u01B0\u01A1ng th\u1EE9c kh\xE1c, ho\u1EB7c c\u1EA7n h\u1ED7 tr\u1EE3 vui l\xF2ng li\xEAn h\u1EC7 Phone/Zalo : ",p.config.zaloSupportPhoneNumber," "),a(14),b(p.config.ACB_AccountName),a(5),g("",p.config.ACB_AccountNumber," "),a(),d("cdkCopyToClipboard",p.config.ACB_AccountNumber),a(5),v("",p.secretCode," ",p.config.SyntaxTransfer," "),a(),x("cdkCopyToClipboard","",p.secretCode," ",p.config.SyntaxTransfer,""),a(11),d("src",p.config.linkImageBank,_))},dependencies:[y,A],styles:[".wrapper[_ngcontent-%COMP%]{width:92%;margin:0 auto;background:transparent;overflow:auto;height:100%}.wrapper__info[_ngcontent-%COMP%]{padding:10px;background-color:#dafff9;color:#000}.wrapper__content[_ngcontent-%COMP%]{background:#fff;padding:5px;width:750px}.wrapper__content--left[_ngcontent-%COMP%]{border-radius:10px;padding:15px;background:linear-gradient(134deg,#04a468,#0d788c)}.wrapper__content--left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:20px;font-weight:700;margin-bottom:1.375rem}.wrapper__content--left-bank[_ngcontent-%COMP%], .wrapper__content--left-owner[_ngcontent-%COMP%], .wrapper__content--left-accountNumber[_ngcontent-%COMP%], .wrapper__content--left-content[_ngcontent-%COMP%], .wrapper__content--left-alert[_ngcontent-%COMP%]{color:#fff;margin-bottom:1.375rem}.wrapper__content--left-bank[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px dotted #fff}.wrapper__content--left-owner[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .wrapper__content--left-accountNumber[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{border-bottom:1px dotted #fff;font-weight:700}.wrapper__content--left-alert[_ngcontent-%COMP%]{font-weight:700}.wrapper__content--right[_ngcontent-%COMP%]{padding:30px}.wrapper__content--right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;color:#111036;text-align:center;font-weight:700;margin-bottom:1.375rem}.wrapper__content--right[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:15px;margin:10px 0 5px;color:#04a468;font-weight:500;line-height:25px}.wrapper__content--right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90%}@media only screen and (max-width: 510px){.wrapper__content--right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%}}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}"]});let o=t;return o})();var N=[{path:"",component:B}],D=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({imports:[f.forChild(N),f]});let o=t;return o})();var J=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=u({type:t}),t.\u0275inj=m({imports:[D]});let o=t;return o})();export{J as a};
