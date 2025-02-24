"use strict";var l=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var b=l(function(G,y){
var r=require('@stdlib/number-float64-base-to-float32/dist'),f=require('@stdlib/math-base-special-absf/dist');function F(a,e,v,E){var s,o,c,u,q,n,i,t,m;if(a<=0)return 0;if(c=E,v===0)return r(a*e[c]);for(s=0,o=0,u=0,m=0;m<a;m++)n=e[c],i=r(s+n),f(s)>=f(n)?t=r(r(s-i)+n):t=r(r(n-i)+s),s=i,i=r(u+t),f(u)>=f(t)?q=r(r(u-i)+t):q=r(r(t-i)+u),u=i,o=r(o+q),c+=v;return r(s+r(u+o))}y.exports=F
});var k=l(function(H,d){
var O=require('@stdlib/strided-base-stride2offset/dist'),T=b();function g(a,e,v){return T(a,e,v,O(a,v))}d.exports=g
});var R=l(function(I,j){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=k(),w=b();h(x,"ndarray",w);j.exports=x
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=R(),p,_=A(z(__dirname,"./native.js"));B(_)?p=C:p=_;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
