import{a as r}from"./chunk-S3AX5MZX.js";import{a as p,fc as a,ia as n,pa as o}from"./chunk-6K2CLVX4.js";var h=(()=>{let e=class e{constructor(t){this.http=t}getAllUserByQuery(t){let s=t?p({},t):void 0;return this.http.get(`${r.apiUrl}/user`,{params:s})}getAllNewUser(){return this.http.get(`${r.apiUrl}/user/new-user`)}getExcelUserByQuery(t){return this.http.post(`${r.apiUrl}/user/excel-user`,t,{responseType:"blob"})}updateUser(t=0,s){return this.http.put(`${r.apiUrl}/user/${t}`,s)}activeAllUser(){return this.http.post(`${r.apiUrl}/user/active-all`,{})}};e.\u0275fac=function(s){return new(s||e)(o(a))},e.\u0275prov=n({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{h as a};
