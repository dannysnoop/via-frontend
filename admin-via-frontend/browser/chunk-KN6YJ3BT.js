import{i as O,j as T,l as f,n as A,o as u,p as S}from"./chunk-3QVV65MX.js";import{a as F}from"./chunk-Z34JOCTT.js";import{a as D}from"./chunk-GAJDQISX.js";import{$b as x,Ba as a,Ca as y,Eb as c,Fb as M,Gb as h,Na as C,Pa as N,Ra as b,Tb as P,Ya as i,Za as n,_a as w,_b as k,aa as v,ba as m,ja as s,kb as E,rb as o,rc as z,sc as g,tb as l}from"./chunk-6K2CLVX4.js";function j(t,e){if(t&1&&(i(0,"tr")(1,"td")(2,"a",9),w(3,"i",10),o(4),n()(),i(5,"td",11),o(6),c(7,"date"),n(),i(8,"td",11),o(9),c(10,"date"),n()()),t&2){let d=e.$implicit;a(2),E("routerLink","/post-detail/",d.id,""),a(2),l(" ",d.title," "),a(2),l(" ",h(7,4,+d.createdAt*1e3,"dd-MM-YYYY HH:mm:ss "),""),a(3),l(" ",h(10,7,+d.updatedAt*1e3,"dd-MM-YYYY HH:mm:ss "),"")}}var Y=(()=>{let e=class e extends D{constructor(p){super(),this.service=p,this.$posts=[],this.listOfData=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}ngOnInit(){this.getAllPost()}getAllPost(){this.$posts=this.service.getPost()}};e.\u0275fac=function(r){return new(r||e)(y(F))},e.\u0275cmp=v({type:e,selectors:[["app-post"]],features:[C],decls:18,vars:3,consts:[[1,"wrapper","bg-white"],[1,"wrapper--header"],[1,"wrapper--body","p-3"],[1,"wrapper--body-content"],[1,"table","table-striped","table-borderless","table-vcenter","mt-5"],[1,"thead-light"],[1,"fw-medium",2,"width","33%"],[1,"d-none","d-xl-table-cell","fw-medium"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"fas","fa","fa-file-alt"],[1,"d-none","d-xl-table-cell"]],template:function(r,L){r&1&&(i(0,"div",0)(1,"div",1)(2,"h2"),o(3,"Chia s\u1EBB m\u1ED7i ng\xE0y"),n()(),i(4,"div",2)(5,"div",3)(6,"table",4)(7,"thead",5)(8,"tr")(9,"th",6),o(10,"Ti\xEAu \u0111\u1EC1"),n(),i(11,"th",7),o(12,"Ng\xE0y t\u1EA1o"),n(),i(13,"th",7),o(14,"Ng\xE0y ch\u1EC9nh s\u1EEDa g\u1EA7n nh\u1EA5t"),n()()(),i(15,"tbody"),N(16,j,11,10,"tr",8),c(17,"async"),n()()()()()),r&2&&(a(16),b("ngForOf",M(17,1,L.$posts)))},dependencies:[z,P,O,T,u,f,A,k,x],styles:[".wrapper[_ngcontent-%COMP%]{width:92%;margin:0 auto;overflow:auto}.wrapper--header[_ngcontent-%COMP%]{padding:.75rem 1.25rem;background-color:#3c90df!important;border-top-left-radius:.2rem;border-top-right-radius:.2rem}.wrapper--header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:400;line-height:1.75;color:#fff}.wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0665d0;font-size:1rem}th[_ngcontent-%COMP%]{font-size:1rem;padding:.75rem}"]});let t=e;return t})();var H=[{path:"",component:Y}],B=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=m({type:e}),e.\u0275inj=s({imports:[g.forChild(H),g]});let t=e;return t})();var re=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=m({type:e}),e.\u0275inj=s({imports:[B,S,f,u]});let t=e;return t})();export{re as a};
