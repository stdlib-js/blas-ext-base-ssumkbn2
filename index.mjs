// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";function n(r,n,s){var i,a,d,o,f,m,l,u,p;if(r<=0)return 0;if(1===r||0===s)return n[0];for(d=s<0?(1-r)*s:0,i=0,a=0,o=0,p=0;p<r;p++)m=n[d],l=e(i+m),u=t(i)>=t(m)?e(e(i-l)+m):e(e(m-l)+i),i=l,l=e(o+u),f=t(o)>=t(u)?e(e(o-l)+u):e(e(u-l)+o),o=l,a=e(a+f),d+=s;return e(i+e(o+a))}function s(r,n,s,i){var a,d,o,f,m,l,u,p,j;if(r<=0)return 0;if(1===r||0===s)return n[i];for(o=i,a=0,d=0,f=0,j=0;j<r;j++)l=n[o],u=e(a+l),p=t(a)>=t(l)?e(e(a-u)+l):e(e(l-u)+a),a=u,u=e(f+p),m=t(f)>=t(p)?e(e(f-u)+p):e(e(p-u)+f),f=u,d=e(d+m),o+=s;return e(a+e(f+d))}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
