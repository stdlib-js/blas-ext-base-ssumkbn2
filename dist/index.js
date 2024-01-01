"use strict";var k=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var j=k(function(G,y){
var a=require('@stdlib/number-float64-base-to-float32/dist'),m=require('@stdlib/math-base-special-abs/dist');function d(t,n,l){var c,v,f,s,u,q,e,r,o;if(t<=0)return 0;if(t===1||l===0)return n[0];for(l<0?f=(1-t)*l:f=0,c=0,v=0,s=0,o=0;o<t;o++)q=n[f],e=a(c+q),m(c)>=m(q)?r=a(a(c-e)+q):r=a(a(q-e)+c),c=e,e=a(s+r),m(s)>=m(r)?u=a(a(s-e)+r):u=a(a(r-e)+s),s=e,v=a(v+u),f+=l;return a(c+a(s+v))}y.exports=d
});var R=k(function(H,F){
var i=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/math-base-special-abs/dist');function g(t,n,l,c){var v,f,s,u,q,e,r,o,p;if(t<=0)return 0;if(t===1||l===0)return n[c];for(s=c,v=0,f=0,u=0,p=0;p<t;p++)e=n[s],r=i(v+e),b(v)>=b(e)?o=i(i(v-r)+e):o=i(i(e-r)+v),v=r,r=i(u+o),b(u)>=b(o)?q=i(i(u-r)+o):q=i(i(o-r)+u),u=r,f=i(f+q),s+=l;return i(v+i(u+f))}F.exports=g
});var E=k(function(I,_){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=j(),w=R();h(T,"ndarray",w);_.exports=T
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=E(),x,O=A(z(__dirname,"./native.js"));B(O)?x=C:x=O;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
