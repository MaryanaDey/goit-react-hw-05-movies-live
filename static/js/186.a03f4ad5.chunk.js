"use strict";(self.webpackChunkgoit_react_hw_05_movies_live=self.webpackChunkgoit_react_hw_05_movies_live||[]).push([[186],{186:function(n,t,r){r.r(t),r.d(t,{default:function(){return s}});var e=r(152),c=r(791),u=r(871),a=r(40),i=r(85),o=r(184);function s(){var n=(0,u.UO)().movieId,t=(0,c.useState)([]),r=(0,e.Z)(t,2),s=r[0],p=r[1];return(0,c.useEffect)((function(){(0,a.Jh)(n).then((function(n){p(n.results)}))}),[n]),(0,o.jsxs)("article",{children:[(0,o.jsx)(i.DK,{children:"Reviews"}),0!==s.length?(0,o.jsx)("ul",{children:s.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:["Author: ",r]}),(0,o.jsx)("p",{children:e})]},t)}))}):(0,o.jsx)("p",{children:"Reviews not found!"})]})}},40:function(n,t,r){r.d(t,{kI:function(){return p},Pg:function(){return h},Pt:function(){return v},IQ:function(){return w},Jh:function(){return m}});var e=r(861),c=r(757),u=r.n(c),a="?api_key=b7df999202e1c3618d01db23ce0076f0",i="https://api.themoviedb.org/3";function o(n){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t);case 3:return r=n.sent,n.next=6,r.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"/trending/movie/day").concat(a),n.abrupt("return",o(t));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/movie/").concat(t).concat(a,"&language=en-US"),n.abrupt("return",o(r));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/search/movie").concat(a,"&query=").concat(t,"&language=en-US&page=1"),n.abrupt("return",o(r));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/movie/").concat(t,"/credits").concat(a,"&language=en-US"),n.abrupt("return",o(r));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(i,"/movie/").concat(t,"/reviews").concat(a,"&language=en-US&page=1"),n.abrupt("return",o(r));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.a03f4ad5.chunk.js.map