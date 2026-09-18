"use strict";var l=function(s,e){return function(){try{return e||s((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var k=l(function(I,y){
var r=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/math-base-special-absf/dist');function O(s,e,u,E){var a,o,m,v,n,b,i,t,f,c;if(s<=0)return 0;if(v=E,u===0)return r(s*e[v]);if(i=e[v],v+=u,a=i,a===0)for(c=1;c<s;c++){if(i=e[v],i!==0){m=!0;break}a=r(a+i),v+=u}else m=!0,c=1;for(o=0,n=0;c<s;c++)i=e[v],t=r(a+i),q(a)>=q(i)?f=r(r(a-t)+i):f=r(r(i-t)+a),a=t,t=r(n+f),q(n)>=q(f)?b=r(r(n-t)+f):b=r(r(f-t)+n),n=t,o=r(o+b),v+=u;return m?r(a+r(n+o)):a}y.exports=O
});var d=l(function(J,j){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=k();function z(s,e,u){return w(s,e,u,h(s,u))}j.exports=z
});var _=l(function(K,R){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=d(),B=k();A(x,"ndarray",B);R.exports=x
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=_(),p,g=D(C(__dirname,"./native.js"));F(g)?p=G:p=g;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
