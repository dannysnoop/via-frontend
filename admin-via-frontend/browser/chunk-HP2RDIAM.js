import{a as e}from"./chunk-S3AX5MZX.js";import{fc as a,ia as o,pa as n}from"./chunk-6K2CLVX4.js";var l=(()=>{let t=class t{constructor(r){this.http=r}getCategoriesClient(){return this.http.get(`${e.apiUrl}/category/client`)}getDetailCategoryById(r){return this.http.get(`${e.apiUrl}/category/${r}`)}getCategories(){return this.http.get(`${e.apiUrl}/category`)}};t.\u0275fac=function(c){return new(c||t)(n(a))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{l as a};