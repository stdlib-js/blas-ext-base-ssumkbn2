"use strict";var l=function(s,e){return function(){return e||s((e={exports:{}}).exports,e),e.exports}};var k=l(function(I,y){
var r=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/math-base-special-absf/dist');function O(s,e,t,E){var a,o,m,u,n,b,i,v,f,c;if(s<=0)return 0;if(u=E,t===0)return r(s*e[u]);if(i=e[u],u+=t,a=i,a===0)for(c=1;c<s;c++){if(i=e[u],i!==0){m=!0;break}a=r(a+i),u+=t}else m=!0,c=1;for(o=0,n=0;c<s;c++)i=e[u],v=r(a+i),q(a)>=q(i)?f=r(r(a-v)+i):f=r(r(i-v)+a),a=v,v=r(n+f),q(n)>=q(f)?b=r(r(n-v)+f):b=r(r(f-v)+n),n=v,o=r(o+b),u+=t;return m?r(a+r(n+o)):a}y.exports=O
});var d=l(function(J,j){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=k();function z(s,e,t){return w(s,e,t,h(s,t))}j.exports=z
});var _=l(function(K,R){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=d(),B=k();A(x,"ndarray",B);R.exports=x
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=_(),p,g=D(C(__dirname,"./native.js"));F(g)?p=G:p=g;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
