function D3Tooltip(t){this.d3=t,this.id="d3-tooltip-"+ttCounter,this["class"]="d3-tooltip",this.$el=t.select("body").append("div").attr("class",this["class"]).attr("id",this.id).style("opacity",0).style("position","absolute").style("pointer-events","none"),ttCounter+=1}!function(){function t(t){function r(){for(;a=c<l.length&&t>h;){var n=c++,r=l[n],u=e.call(r,1);u.push(i(n)),++h,r[0].apply(null,u)}}function i(t){return function(n,e){--h,null==p&&(null!=n?(p=n,c=f=0/0,u()):(l[t]=e,--f?a||r():u()))}}function u(){null!=p?g(p):s?g(p,l):g.apply(null,[p].concat(l))}var o,a,s,l=[],c=0,h=0,f=0,p=null,g=n;return t||(t=1/0),o={defer:function(){return p||(l.push(arguments),++f,r()),o},await:function(t){return g=t,s=!1,f||u(),o},awaitAll:function(t){return g=t,s=!0,f||u(),o}}}function n(){}var e=[].slice;t.version="1.0.7","function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.queue=t}(),function(){var t={};this.tmpl=function n(e,r){var i=/\W/.test(e)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):t[e]=t[e]||n(document.getElementById(e).innerHTML);return r?i(r):i}}(),!function(){function t(t,n){if(n in t)return n;n=n.charAt(0).toUpperCase()+n.slice(1);for(var e=0,r=Kn.length;r>e;++e){var i=Kn[e]+n;if(i in t)return i}}function n(t){return Gn(t,ee),t}function e(t){return"function"==typeof t?t:function(){return Qn(t,this)}}function r(t){return"function"==typeof t?t:function(){return Zn(t,this)}}function i(t,n){function e(){this.removeAttribute(t)}function r(){this.removeAttributeNS(t.space,t.local)}function i(){this.setAttribute(t,n)}function u(){this.setAttributeNS(t.space,t.local,n)}function o(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}function a(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}return t=In.ns.qualify(t),null==n?t.local?r:e:"function"==typeof n?t.local?a:o:t.local?u:i}function u(t){return t.trim().replace(/\s+/g," ")}function o(t){return new RegExp("(?:^|\\s+)"+In.requote(t)+"(?:\\s+|$)","g")}function a(t){return(t+"").trim().split(/^|\s+/)}function s(t,n){function e(){for(var e=-1;++e<i;)t[e](this,n)}function r(){for(var e=-1,r=n.apply(this,arguments);++e<i;)t[e](this,r)}t=a(t).map(l);var i=t.length;return"function"==typeof n?r:e}function l(t){var n=o(t);return function(e,r){if(i=e.classList)return r?i.add(t):i.remove(t);var i=e.getAttribute("class")||"";r?(n.lastIndex=0,n.test(i)||e.setAttribute("class",u(i+" "+t))):e.setAttribute("class",u(i.replace(n," ")))}}function c(t,n,e){function r(){this.style.removeProperty(t)}function i(){this.style.setProperty(t,n,e)}function u(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}return null==n?r:"function"==typeof n?u:i}function h(t,n){function e(){delete this[t]}function r(){this[t]=n}function i(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}return null==n?e:"function"==typeof n?i:r}function f(t){return"function"==typeof t?t:(t=In.ns.qualify(t)).local?function(){return this.ownerDocument.createElementNS(t.space,t.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,t)}}function p(){var t=this.parentNode;t&&t.removeChild(this)}function g(t,n){for(var e in n)Object.defineProperty(t.prototype,e,{value:n[e],enumerable:!1})}function d(){this._=Object.create(null)}function v(t){return(t+="")===ue||t[0]===oe?oe+t:t}function m(t){return(t+="")[0]===oe?t.slice(1):t}function y(t){return v(t)in this._}function _(t){return(t=v(t))in this._&&delete this._[t]}function w(){var t=[];for(var n in this._)t.push(m(n));return t}function b(){var t=0;for(var n in this._)++t;return t}function x(){for(var t in this._)return!1;return!0}function A(){this._=Object.create(null)}function M(t){return{__data__:t}}function k(t){return function(){return ne(this,t)}}function N(t,n){return n>t?-1:t>n?1:t>=n?0:0/0}function S(t){return arguments.length||(t=N),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function q(){}function T(){}function C(t){function n(){for(var n,r=e,i=-1,u=r.length;++i<u;)(n=r[i].on)&&n.apply(this,arguments);return t}var e=[],r=new d;return n.on=function(n,i){var u,o=r.get(n);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,u=e.indexOf(o)).concat(e.slice(u+1)),r.remove(n)),i&&e.push(r.set(n,{on:i})),t)},n}function j(t,n,e){function r(){var n=this[o];n&&(this.removeEventListener(t,n,n.$),delete this[o])}function i(){var i=s(n,Bn(arguments));r.call(this),this.addEventListener(t,this[o]=i,i.$=e),i._=n}function u(){var n,e=new RegExp("^__on([^.]+)"+In.requote(t)+"$");for(var r in this)if(n=r.match(e)){var i=this[r];this.removeEventListener(n[1],i,i.$),delete this[r]}}var o="__on"+t,a=t.indexOf("."),s=E;a>0&&(t=t.slice(0,a));var l=ae.get(t);return l&&(t=l,s=z),a?n?i:r:n?q:u}function E(t,n){return function(e){var r=In.event;In.event=e,n[0]=this.__data__;try{t.apply(this,n)}finally{In.event=r}}}function z(t,n){var e=E(t,n);return function(t){var n=this,r=t.relatedTarget;r&&(r===n||8&r.compareDocumentPosition(n))||e.call(n,t)}}function P(t,n){for(var e=0,r=t.length;r>e;e++)for(var i,u=t[e],o=0,a=u.length;a>o;o++)(i=u[o])&&n(i,o,e);return t}function R(t){return Gn(t,se),t}function L(t){var n,e;return function(r,i,u){var o,a=t[u].update,s=a.length;for(u!=e&&(e=u,n=0),i>=n&&(n=i+1);!(o=a[n])&&++n<s;);return o}}function $(t){return t}function O(t,n,e){return function(){var r=e.apply(n,arguments);return r===n?t:r}}function D(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),X(n,e,t,r)}}function X(t,n,e,r){function i(){var t,n=s.status;if(!n&&H(s)||n>=200&&300>n||304===n){try{t=e.call(u,s)}catch(r){return void o.error.call(u,r)}o.load.call(u,t)}else o.error.call(u,s)}var u={},o=In.dispatch("beforesend","progress","load","error"),a={},s=new XMLHttpRequest,l=null;return!Wn.XDomainRequest||"withCredentials"in s||!/^(http(s)?:)?\/\//.test(t)||(s=new XDomainRequest),"onload"in s?s.onload=s.onerror=i:s.onreadystatechange=function(){s.readyState>3&&i()},s.onprogress=function(t){var n=In.event;In.event=t;try{o.progress.call(u,s)}finally{In.event=n}},u.header=function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?a[t]:(null==n?delete a[t]:a[t]=n+"",u)},u.mimeType=function(t){return arguments.length?(n=null==t?null:t+"",u):n},u.responseType=function(t){return arguments.length?(l=t,u):l},u.response=function(t){return e=t,u},["get","post"].forEach(function(t){u[t]=function(){return u.send.apply(u,[t].concat(Bn(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),s.open(e,t,!0),null==n||"accept"in a||(a.accept=n+",*/*"),s.setRequestHeader)for(var c in a)s.setRequestHeader(c,a[c]);return null!=n&&s.overrideMimeType&&s.overrideMimeType(n),null!=l&&(s.responseType=l),null!=i&&u.on("error",i).on("load",function(t){i(null,t)}),o.beforesend.call(u,s),s.send(null==r?null:r),u},u.abort=function(){return s.abort(),u},In.rebind(u,o,"on"),null==r?u:u.get(F(r))}function F(t){return 1===t.length?function(n,e){t(null==n?e:null)}:t}function H(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}function I(){return!0}function V(){var t=B(),n=U()-t;n>24?(isFinite(n)&&(clearTimeout(pe),pe=setTimeout(V,n)),fe=0):(fe=1,de(V))}function B(){var t=Date.now();for(ge=ce;ge;)t>=ge.t&&(ge.f=ge.c(t-ge.t)),ge=ge.n;return t}function U(){for(var t,n=ce,e=1/0;n;)n.f?n=t?t.n=n.n:ce=n.n:(n.t<e&&(e=n.t),n=(t=n).n);return he=t,e}function J(t){return function(){var n,e;(n=this[t])&&(e=n[n.active])&&(--n.count?(delete n[n.active],n.active+=.5):delete this[t],e.event&&e.event.interrupt.call(this,this.__data__,e.index))}}function W(t,n,e){return Gn(t,_e),t.namespace=n,t.id=e,t}function Y(){}function G(t,n,e){return this instanceof G?(this.h=+t,this.s=+n,void(this.l=+e)):arguments.length<2?t instanceof G?new G(t.h,t.s,t.l):cn(""+t,hn,G):new G(t,n,e)}function K(t,n,e){function r(t){return t>360?t-=360:0>t&&(t+=360),60>t?u+(o-u)*t/60:180>t?o:240>t?u+(o-u)*(240-t)/60:u}function i(t){return Math.round(255*r(t))}var u,o;return t=isNaN(t)?0:(t%=360)<0?t+360:t,n=isNaN(n)?0:0>n?0:n>1?1:n,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+n):e+n-e*n,u=2*e-o,new an(i(t+120),i(t),i(t-120))}function Q(t,n,e){return this instanceof Q?(this.h=+t,this.c=+n,void(this.l=+e)):arguments.length<2?t instanceof Q?new Q(t.h,t.c,t.l):t instanceof tn?en(t.l,t.a,t.b):en((t=fn((t=In.rgb(t)).r,t.g,t.b)).l,t.a,t.b):new Q(t,n,e)}function Z(t,n,e){return isNaN(t)&&(t=0),isNaN(n)&&(n=0),new tn(e,Math.cos(t*=ke)*n,Math.sin(t)*n)}function tn(t,n,e){return this instanceof tn?(this.l=+t,this.a=+n,void(this.b=+e)):arguments.length<2?t instanceof tn?new tn(t.l,t.a,t.b):t instanceof Q?Z(t.h,t.c,t.l):fn((t=an(t)).r,t.g,t.b):new tn(t,n,e)}function nn(t,n,e){var r=(t+16)/116,i=r+n/500,u=r-e/200;return i=rn(i)*Te,r=rn(r)*Ce,u=rn(u)*je,new an(on(3.2404542*i-1.5371385*r-.4985314*u),on(-.969266*i+1.8760108*r+.041556*u),on(.0556434*i-.2040259*r+1.0572252*u))}function en(t,n,e){return t>0?new Q(Math.atan2(e,n)*Ne,Math.sqrt(n*n+e*e),t):new Q(0/0,0/0,t)}function rn(t){return t>.206893034?t*t*t:(t-4/29)/7.787037}function un(t){return t>.008856?Math.pow(t,1/3):7.787037*t+4/29}function on(t){return Math.round(255*(.00304>=t?12.92*t:1.055*Math.pow(t,1/2.4)-.055))}function an(t,n,e){return this instanceof an?(this.r=~~t,this.g=~~n,void(this.b=~~e)):arguments.length<2?t instanceof an?new an(t.r,t.g,t.b):cn(""+t,an,K):new an(t,n,e)}function sn(t){return new an(t>>16,t>>8&255,255&t)}function ln(t){return 16>t?"0"+Math.max(0,t).toString(16):Math.min(255,t).toString(16)}function cn(t,n,e){var r,i,u,o=0,a=0,s=0;if(r=/([a-z]+)\((.*)\)/i.exec(t))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return n(gn(i[0]),gn(i[1]),gn(i[2]))}return(u=Pe.get(t))?n(u.r,u.g,u.b):(null==t||"#"!==t.charAt(0)||isNaN(u=parseInt(t.slice(1),16))||(4===t.length?(o=(3840&u)>>4,o=o>>4|o,a=240&u,a=a>>4|a,s=15&u,s=s<<4|s):7===t.length&&(o=(16711680&u)>>16,a=(65280&u)>>8,s=255&u)),n(o,a,s))}function hn(t,n,e){var r,i,u=Math.min(t/=255,n/=255,e/=255),o=Math.max(t,n,e),a=o-u,s=(o+u)/2;return a?(i=.5>s?a/(o+u):a/(2-o-u),r=t==o?(n-e)/a+(e>n?6:0):n==o?(e-t)/a+2:(t-n)/a+4,r*=60):(r=0/0,i=s>0&&1>s?0:r),new G(r,i,s)}function fn(t,n,e){t=pn(t),n=pn(n),e=pn(e);var r=un((.4124564*t+.3575761*n+.1804375*e)/Te),i=un((.2126729*t+.7151522*n+.072175*e)/Ce),u=un((.0193339*t+.119192*n+.9503041*e)/je);return tn(116*i-16,500*(r-i),200*(i-u))}function pn(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function gn(t){var n=parseFloat(t);return"%"===t.charAt(t.length-1)?Math.round(2.55*n):n}function dn(t,n){t=In.rgb(t),n=In.rgb(n);var e=t.r,r=t.g,i=t.b,u=n.r-e,o=n.g-r,a=n.b-i;return function(t){return"#"+ln(Math.round(e+u*t))+ln(Math.round(r+o*t))+ln(Math.round(i+a*t))}}function vn(t,n){var e,r={},i={};for(e in t)e in n?r[e]=wn(t[e],n[e]):i[e]=t[e];for(e in n)e in t||(i[e]=n[e]);return function(t){for(e in r)i[e]=r[e](t);return i}}function mn(t,n){var e,r=[],i=[],u=t.length,o=n.length,a=Math.min(t.length,n.length);for(e=0;a>e;++e)r.push(wn(t[e],n[e]));for(;u>e;++e)i[e]=t[e];for(;o>e;++e)i[e]=n[e];return function(t){for(e=0;a>e;++e)i[e]=r[e](t);return i}}function yn(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function _n(t,n){var e,r,i,u=Re.lastIndex=Le.lastIndex=0,o=-1,a=[],s=[];for(t+="",n+="";(e=Re.exec(t))&&(r=Le.exec(n));)(i=r.index)>u&&(i=n.slice(u,i),a[o]?a[o]+=i:a[++o]=i),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,s.push({i:o,x:yn(e,r)})),u=Le.lastIndex;return u<n.length&&(i=n.slice(u),a[o]?a[o]+=i:a[++o]=i),a.length<2?s[0]?(n=s[0].x,function(t){return n(t)+""}):function(){return n}:(n=s.length,function(t){for(var e,r=0;n>r;++r)a[(e=s[r]).i]=e.x(t);return a.join("")})}function wn(t,n){for(var e,r=In.interpolators.length;--r>=0&&!(e=In.interpolators[r](t,n)););return e}function bn(t){var n=[t.a,t.b],e=[t.c,t.d],r=An(n),i=xn(n,e),u=An(Mn(e,n,-i))||0;n[0]*e[1]<e[0]*n[1]&&(n[0]*=-1,n[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(n[1],n[0]):Math.atan2(-e[0],e[1]))*Ne,this.translate=[t.e,t.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Ne:0}function xn(t,n){return t[0]*n[0]+t[1]*n[1]}function An(t){var n=Math.sqrt(xn(t,t));return n&&(t[0]/=n,t[1]/=n),n}function Mn(t,n,e){return t[0]+=e*n[0],t[1]+=e*n[1],t}function kn(t,n){var e,r=[],i=[],u=In.transform(t),o=In.transform(n),a=u.translate,s=o.translate,l=u.rotate,c=o.rotate,h=u.skew,f=o.skew,p=u.scale,g=o.scale;return a[0]!=s[0]||a[1]!=s[1]?(r.push("translate(",null,",",null,")"),i.push({i:1,x:yn(a[0],s[0])},{i:3,x:yn(a[1],s[1])})):r.push(s[0]||s[1]?"translate("+s+")":""),l!=c?(l-c>180?c+=360:c-l>180&&(l+=360),i.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:yn(l,c)})):c&&r.push(r.pop()+"rotate("+c+")"),h!=f?i.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:yn(h,f)}):f&&r.push(r.pop()+"skewX("+f+")"),p[0]!=g[0]||p[1]!=g[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),i.push({i:e-4,x:yn(p[0],g[0])},{i:e-2,x:yn(p[1],g[1])})):(1!=g[0]||1!=g[1])&&r.push(r.pop()+"scale("+g+")"),e=i.length,function(t){for(var n,u=-1;++u<e;)r[(n=i[u]).i]=n.x(t);return r.join("")}}function Nn(t,n,e,r){var i=t.id,u=t.namespace;return P(t,"function"==typeof e?function(t,o,a){t[u][i].tween.set(n,r(e.call(t,t.__data__,o,a)))}:(e=r(e),function(t){t[u][i].tween.set(n,e)}))}function Sn(t){return null==t&&(t=""),function(){this.textContent=t}}function qn(t){return function(n){return 0>=n?0:n>=1?1:t(n)}}function Tn(t){return function(n){return 1-t(1-n)}}function Cn(t){return function(n){return.5*(.5>n?t(2*n):2-t(2-2*n))}}function jn(t){return t*t}function En(t){return t*t*t}function zn(t){if(0>=t)return 0;if(t>=1)return 1;var n=t*t,e=n*t;return 4*(.5>t?e:3*(t-n)+e-.75)}function Pn(t){return function(n){return Math.pow(n,t)}}function Rn(t){return 1-Math.cos(t*Me)}function Ln(t){return Math.pow(2,10*(t-1))}function $n(t){return 1-Math.sqrt(1-t*t)}function On(t,n){var e;return arguments.length<2&&(n=.45),arguments.length?e=n/Ae*Math.asin(1/t):(t=1,e=n/4),function(r){return 1+t*Math.pow(2,-10*r)*Math.sin((r-e)*Ae/n)}}function Dn(t){return t||(t=1.70158),function(n){return n*n*((t+1)*n-t)}}function Xn(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}function Fn(t){return null==t?"__transition__":"__transition_"+t+"__"}function Hn(t,n,e,r,i){var u=t[e]||(t[e]={active:0,count:0}),o=u[r];if(!o){var a=i.time;o=u[r]={tween:new d,time:a,delay:i.delay,duration:i.duration,ease:i.ease,index:n},i=null,++u.count,In.timer(function(i){function s(e){if(u.active>r)return c();var i=u[u.active];i&&(--u.count,delete u[u.active],i.event&&i.event.interrupt.call(t,t.__data__,i.index)),u.active=r,o.event&&o.event.start.call(t,t.__data__,n),o.tween.forEach(function(e,r){(r=r.call(t,t.__data__,n))&&d.push(r)}),f=o.ease,h=o.duration,In.timer(function(){return g.c=l(e||1)?I:l,1},0,a)}function l(e){if(u.active!==r)return 1;for(var i=e/h,a=f(i),s=d.length;s>0;)d[--s].call(t,a);return i>=1?(o.event&&o.event.end.call(t,t.__data__,n),c()):void 0}function c(){return--u.count?delete u[r]:delete t[e],1}var h,f,p=o.delay,g=ge,d=[];return g.t=p+a,i>=p?s(i-p):void(g.c=s)},0,a)}}var In={version:"3.5.2"},Vn=[].slice,Bn=function(t){return Vn.call(t)},Un=document,Jn=Un.documentElement,Wn=window;try{Bn(Jn.childNodes)[0].nodeType}catch(Yn){Bn=function(t){for(var n=t.length,e=new Array(n);n--;)e[n]=t[n];return e}}var Gn={}.__proto__?function(t,n){t.__proto__=n}:function(t,n){for(var e in n)t[e]=n[e]},Kn=["webkit","ms","moz","Moz","o","O"],Qn=function(t,n){return n.querySelector(t)},Zn=function(t,n){return n.querySelectorAll(t)},te=Jn.matches||Jn[t(Jn,"matchesSelector")],ne=function(t,n){return te.call(t,n)};"function"==typeof Sizzle&&(Qn=function(t,n){return Sizzle(t,n)[0]||null},Zn=Sizzle,ne=Sizzle.matchesSelector),In.selection=function(){return le};var ee=In.selection.prototype=[];ee.select=function(t){var r,i,u,o,a=[];t=e(t);for(var s=-1,l=this.length;++s<l;){a.push(r=[]),r.parentNode=(u=this[s]).parentNode;for(var c=-1,h=u.length;++c<h;)(o=u[c])?(r.push(i=t.call(o,o.__data__,c,s)),i&&"__data__"in o&&(i.__data__=o.__data__)):r.push(null)}return n(a)},ee.selectAll=function(t){var e,i,u=[];t=r(t);for(var o=-1,a=this.length;++o<a;)for(var s=this[o],l=-1,c=s.length;++l<c;)(i=s[l])&&(u.push(e=Bn(t.call(i,i.__data__,l,o))),e.parentNode=i);return n(u)};var re={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};In.ns={prefix:re,qualify:function(t){var n=t.indexOf(":"),e=t;return n>=0&&(e=t.slice(0,n),t=t.slice(n+1)),re.hasOwnProperty(e)?{space:re[e],local:t}:t}},ee.attr=function(t,n){if(arguments.length<2){if("string"==typeof t){var e=this.node();return t=In.ns.qualify(t),t.local?e.getAttributeNS(t.space,t.local):e.getAttribute(t)}for(n in t)this.each(i(n,t[n]));return this}return this.each(i(t,n))},In.requote=function(t){return t.replace(ie,"\\$&")};var ie=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;ee.classed=function(t,n){if(arguments.length<2){if("string"==typeof t){var e=this.node(),r=(t=a(t)).length,i=-1;if(n=e.classList){for(;++i<r;)if(!n.contains(t[i]))return!1}else for(n=e.getAttribute("class");++i<r;)if(!o(t[i]).test(n))return!1;return!0}for(n in t)this.each(s(n,t[n]));return this}return this.each(s(t,n))},ee.style=function(t,n,e){var r=arguments.length;if(3>r){if("string"!=typeof t){2>r&&(n="");for(e in t)this.each(c(e,t[e],n));return this}if(2>r)return Wn.getComputedStyle(this.node(),null).getPropertyValue(t);e=""}return this.each(c(t,n,e))},ee.property=function(t,n){if(arguments.length<2){if("string"==typeof t)return this.node()[t];for(n in t)this.each(h(n,t[n]));return this}return this.each(h(t,n))},ee.text=function(t){return arguments.length?this.each("function"==typeof t?function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}:null==t?function(){this.textContent=""}:function(){this.textContent=t}):this.node().textContent},ee.html=function(t){return arguments.length?this.each("function"==typeof t?function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}:null==t?function(){this.innerHTML=""}:function(){this.innerHTML=t}):this.node().innerHTML},ee.append=function(t){return t=f(t),this.select(function(){return this.appendChild(t.apply(this,arguments))})},ee.insert=function(t,n){return t=f(t),n=e(n),this.select(function(){return this.insertBefore(t.apply(this,arguments),n.apply(this,arguments)||null)})},ee.remove=function(){return this.each(p)},In.map=function(t,n){var e=new d;if(t instanceof d)t.forEach(function(t,n){e.set(t,n)});else if(Array.isArray(t)){var r,i=-1,u=t.length;if(1===arguments.length)for(;++i<u;)e.set(i,t[i]);else for(;++i<u;)e.set(n.call(t,r=t[i],i),r)}else for(var o in t)e.set(o,t[o]);return e};var ue="__proto__",oe="\x00";g(d,{has:y,get:function(t){return this._[v(t)]},set:function(t,n){return this._[v(t)]=n},remove:_,keys:w,values:function(){var t=[];for(var n in this._)t.push(this._[n]);return t},entries:function(){var t=[];for(var n in this._)t.push({key:m(n),value:this._[n]});return t},size:b,empty:x,forEach:function(t){for(var n in this._)t.call(this,m(n),this._[n])}}),In.set=function(t){var n=new A;if(t)for(var e=0,r=t.length;r>e;++e)n.add(t[e]);return n},g(A,{has:y,add:function(t){return this._[v(t+="")]=!0,t},remove:_,values:w,size:b,empty:x,forEach:function(t){for(var n in this._)t.call(this,m(n))}}),ee.data=function(t,e){function r(t,n){var r,i,u,o=t.length,a=n.length,h=Math.min(o,a),f=new Array(a),p=new Array(a),g=new Array(o);if(e){var v,m=new d,y=new Array(o);for(r=-1;++r<o;)m.has(v=e.call(i=t[r],i.__data__,r))?g[r]=i:m.set(v,i),y[r]=v;for(r=-1;++r<a;)(i=m.get(v=e.call(n,u=n[r],r)))?i!==!0&&(f[r]=i,i.__data__=u):p[r]=M(u),m.set(v,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(g[r]=t[r])}else{for(r=-1;++r<h;)i=t[r],u=n[r],i?(i.__data__=u,f[r]=i):p[r]=M(u);for(;a>r;++r)p[r]=M(n[r]);for(;o>r;++r)g[r]=t[r]}p.update=f,p.parentNode=f.parentNode=g.parentNode=t.parentNode,s.push(p),l.push(f),c.push(g)}var i,u,o=-1,a=this.length;if(!arguments.length){for(t=new Array(a=(i=this[0]).length);++o<a;)(u=i[o])&&(t[o]=u.__data__);return t}var s=R([]),l=n([]),c=n([]);if("function"==typeof t)for(;++o<a;)r(i=this[o],t.call(i,i.parentNode.__data__,o));else for(;++o<a;)r(i=this[o],t);return l.enter=function(){return s},l.exit=function(){return c},l},ee.datum=function(t){return arguments.length?this.property("__data__",t):this.property("__data__")},ee.filter=function(t){var e,r,i,u=[];"function"!=typeof t&&(t=k(t));for(var o=0,a=this.length;a>o;o++){u.push(e=[]),e.parentNode=(r=this[o]).parentNode;for(var s=0,l=r.length;l>s;s++)(i=r[s])&&t.call(i,i.__data__,s,o)&&e.push(i)}return n(u)},ee.order=function(){for(var t=-1,n=this.length;++t<n;)for(var e,r=this[t],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},In.ascending=N,ee.sort=function(t){t=S.apply(this,arguments);for(var n=-1,e=this.length;++n<e;)this[n].sort(t);return this.order()},In.dispatch=function(){for(var t=new T,n=-1,e=arguments.length;++n<e;)t[arguments[n]]=C(t);return t},T.prototype.on=function(t,n){var e=t.indexOf("."),r="";if(e>=0&&(r=t.slice(e+1),t=t.slice(0,e)),t)return arguments.length<2?this[t].on(r):this[t].on(r,n);if(2===arguments.length){if(null==n)for(t in this)this.hasOwnProperty(t)&&this[t].on(r,null);return this}},In.event=null,ee.on=function(t,n,e){var r=arguments.length;if(3>r){if("string"!=typeof t){2>r&&(n=!1);for(e in t)this.each(j(e,t[e],n));return this}if(2>r)return(r=this.node()["__on"+t])&&r._;e=!1}return this.each(j(t,n,e))};var ae=In.map({mouseenter:"mouseover",mouseleave:"mouseout"});ae.forEach(function(t){"on"+t in Un&&ae.remove(t)}),ee.each=function(t){return P(this,function(n,e,r){t.call(n,n.__data__,e,r)})},ee.call=function(t){var n=Bn(arguments);return t.apply(n[0]=this,n),this},ee.empty=function(){return!this.node()},ee.node=function(){for(var t=0,n=this.length;n>t;t++)for(var e=this[t],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},ee.size=function(){var t=0;return P(this,function(){++t}),t};var se=[];In.selection.enter=R,In.selection.enter.prototype=se,se.append=ee.append,se.empty=ee.empty,se.node=ee.node,se.call=ee.call,se.size=ee.size,se.select=function(t){for(var e,r,i,u,o,a=[],s=-1,l=this.length;++s<l;){i=(u=this[s]).update,a.push(e=[]),e.parentNode=u.parentNode;for(var c=-1,h=u.length;++c<h;)(o=u[c])?(e.push(i[c]=r=t.call(u.parentNode,o.__data__,c,s)),r.__data__=o.__data__):e.push(null)}return n(a)},se.insert=function(t,n){return arguments.length<2&&(n=L(this)),ee.insert.call(this,t,n)},In.select=function(t){var e=["string"==typeof t?Qn(t,Un):t];return e.parentNode=Jn,n([e])},In.selectAll=function(t){var e=Bn("string"==typeof t?Zn(t,Un):t);return e.parentNode=Jn,n([e])};var le=In.select(Jn);In.rebind=function(t,n){for(var e,r=1,i=arguments.length;++r<i;)t[e=arguments[r]]=O(t,n,n[e]);return t},In.xhr=D($),In.dsv=function(t,n){function e(t,e,u){arguments.length<3&&(u=e,e=null);var o=X(t,n,null==e?r:i(e),u);return o.row=function(t){return arguments.length?o.response(null==(e=t)?r:i(t)):e},o}function r(t){return e.parse(t.responseText)}function i(t){return function(n){return e.parse(n.responseText,t)}}function u(n){return n.map(o).join(t)}function o(t){return a.test(t)?'"'+t.replace(/\"/g,'""')+'"':t}var a=new RegExp('["'+t+"\n]"),s=t.charCodeAt(0);return e.parse=function(t,n){var r;return e.parseRows(t,function(t,e){if(r)return r(t,e-1);var i=new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}");r=n?function(t,e){return n(i(t),e)}:i})},e.parseRows=function(t,n){function e(){if(c>=l)return o;if(i)return i=!1,u;var n=c;if(34===t.charCodeAt(n)){for(var e=n;e++<l;)if(34===t.charCodeAt(e)){if(34!==t.charCodeAt(e+1))break;++e}c=e+2;var r=t.charCodeAt(e+1);return 13===r?(i=!0,10===t.charCodeAt(e+2)&&++c):10===r&&(i=!0),t.slice(n+1,e).replace(/""/g,'"')}for(;l>c;){var r=t.charCodeAt(c++),a=1;if(10===r)i=!0;else if(13===r)i=!0,10===t.charCodeAt(c)&&(++c,++a);else if(r!==s)continue;return t.slice(n,c-a)}return t.slice(n)}for(var r,i,u={},o={},a=[],l=t.length,c=0,h=0;(r=e())!==o;){for(var f=[];r!==u&&r!==o;)f.push(r),r=e();n&&null==(f=n(f,h++))||a.push(f)}return a},e.format=function(n){if(Array.isArray(n[0]))return e.formatRows(n);var r=new A,i=[];return n.forEach(function(t){for(var n in t)r.has(n)||i.push(r.add(n))}),[i.map(o).join(t)].concat(n.map(function(n){return i.map(function(t){return o(n[t])}).join(t)})).join("\n")},e.formatRows=function(t){return t.map(u).join("\n")},e},In.csv=In.dsv(",","text/csv"),In.xml=D(function(t){return t.responseXML});var ce,he,fe,pe,ge,de=Wn[t(Wn,"requestAnimationFrame")]||function(t){setTimeout(t,17)};In.timer=function(t,n,e){var r=arguments.length;2>r&&(n=0),3>r&&(e=Date.now());var i=e+n,u={c:t,t:i,f:!1,n:null};he?he.n=u:ce=u,he=u,fe||(pe=clearTimeout(pe),fe=1,de(V))},In.timer.flush=function(){B(),U()},ee.transition=function(t){for(var n,e,r=ve||++we,i=Fn(t),u=[],o=me||{time:Date.now(),ease:zn,delay:0,duration:250},a=-1,s=this.length;++a<s;){u.push(n=[]);for(var l=this[a],c=-1,h=l.length;++c<h;)(e=l[c])&&Hn(e,c,i,r,o),n.push(e)}return W(u,i,r)},ee.interrupt=function(t){return this.each(null==t?ye:J(Fn(t)))};var ve,me,ye=J(Fn()),_e=[],we=0;_e.call=ee.call,_e.empty=ee.empty,_e.node=ee.node,_e.size=ee.size,In.transition=function(t,n){return t&&t.transition?ve?t.transition(n):t:le.transition(t)},In.transition.prototype=_e,_e.select=function(t){var n,r,i,u=this.id,o=this.namespace,a=[];t=e(t);for(var s=-1,l=this.length;++s<l;){a.push(n=[]);for(var c=this[s],h=-1,f=c.length;++h<f;)(i=c[h])&&(r=t.call(i,i.__data__,h,s))?("__data__"in i&&(r.__data__=i.__data__),Hn(r,h,o,u,i[o][u]),n.push(r)):n.push(null)}return W(a,o,u)},_e.selectAll=function(t){var n,e,i,u,o,a=this.id,s=this.namespace,l=[];t=r(t);for(var c=-1,h=this.length;++c<h;)for(var f=this[c],p=-1,g=f.length;++p<g;)if(i=f[p]){o=i[s][a],e=t.call(i,i.__data__,p,c),l.push(n=[]);for(var d=-1,v=e.length;++d<v;)(u=e[d])&&Hn(u,d,s,a,o),n.push(u)}return W(l,s,a)},_e.filter=function(t){var n,e,r,i=[];"function"!=typeof t&&(t=k(t));for(var u=0,o=this.length;o>u;u++){i.push(n=[]);for(var e=this[u],a=0,s=e.length;s>a;a++)(r=e[a])&&t.call(r,r.__data__,a,u)&&n.push(r)}return W(i,this.namespace,this.id)},In.color=Y,Y.prototype.toString=function(){return this.rgb()+""},In.hsl=G;var be=G.prototype=new Y;be.brighter=function(t){return t=Math.pow(.7,arguments.length?t:1),new G(this.h,this.s,this.l/t)},be.darker=function(t){return t=Math.pow(.7,arguments.length?t:1),new G(this.h,this.s,t*this.l)},be.rgb=function(){return K(this.h,this.s,this.l)};var xe=Math.PI,Ae=2*xe,Me=xe/2,ke=xe/180,Ne=180/xe;In.hcl=Q;var Se=Q.prototype=new Y;Se.brighter=function(t){return new Q(this.h,this.c,Math.min(100,this.l+qe*(arguments.length?t:1)))},Se.darker=function(t){return new Q(this.h,this.c,Math.max(0,this.l-qe*(arguments.length?t:1)))},Se.rgb=function(){return Z(this.h,this.c,this.l).rgb()},In.lab=tn;var qe=18,Te=.95047,Ce=1,je=1.08883,Ee=tn.prototype=new Y;Ee.brighter=function(t){return new tn(Math.min(100,this.l+qe*(arguments.length?t:1)),this.a,this.b)},Ee.darker=function(t){return new tn(Math.max(0,this.l-qe*(arguments.length?t:1)),this.a,this.b)},Ee.rgb=function(){return nn(this.l,this.a,this.b)},In.rgb=an;var ze=an.prototype=new Y;ze.brighter=function(t){t=Math.pow(.7,arguments.length?t:1);var n=this.r,e=this.g,r=this.b,i=30;return n||e||r?(n&&i>n&&(n=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new an(Math.min(255,n/t),Math.min(255,e/t),Math.min(255,r/t))):new an(i,i,i)},ze.darker=function(t){return t=Math.pow(.7,arguments.length?t:1),new an(t*this.r,t*this.g,t*this.b)},ze.hsl=function(){return hn(this.r,this.g,this.b)},ze.toString=function(){return"#"+ln(this.r)+ln(this.g)+ln(this.b)};var Pe=In.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Pe.forEach(function(t,n){Pe.set(t,sn(n))}),In.interpolateRgb=dn,In.interpolateObject=vn,In.interpolateArray=mn,In.interpolateNumber=yn,In.interpolateString=_n;var Re=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Le=new RegExp(Re.source,"g");In.interpolate=wn,In.interpolators=[function(t,n){var e=typeof n;return("string"===e?Pe.has(n)||/^(#|rgb\(|hsl\()/.test(n)?dn:_n:n instanceof Y?dn:Array.isArray(n)?mn:"object"===e&&isNaN(n)?vn:yn)(t,n)}],In.transform=function(t){var n=Un.createElementNS(In.ns.prefix.svg,"g");return(In.transform=function(t){if(null!=t){n.setAttribute("transform",t);var e=n.transform.baseVal.consolidate()}return new bn(e?e.matrix:$e)})(t)},bn.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var $e={a:1,b:0,c:0,d:1,e:0,f:0};In.interpolateTransform=kn,_e.tween=function(t,n){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(t):P(this,null==n?function(n){n[r][e].tween.remove(t)}:function(i){i[r][e].tween.set(t,n)})},_e.attr=function(t,n){function e(){this.removeAttribute(a)
}function r(){this.removeAttributeNS(a.space,a.local)}function i(t){return null==t?e:(t+="",function(){var n,e=this.getAttribute(a);return e!==t&&(n=o(e,t),function(t){this.setAttribute(a,n(t))})})}function u(t){return null==t?r:(t+="",function(){var n,e=this.getAttributeNS(a.space,a.local);return e!==t&&(n=o(e,t),function(t){this.setAttributeNS(a.space,a.local,n(t))})})}if(arguments.length<2){for(n in t)this.attr(n,t[n]);return this}var o="transform"==t?kn:wn,a=In.ns.qualify(t);return Nn(this,"attr."+t,n,a.local?u:i)},_e.attrTween=function(t,n){function e(t,e){var r=n.call(this,t,e,this.getAttribute(i));return r&&function(t){this.setAttribute(i,r(t))}}function r(t,e){var r=n.call(this,t,e,this.getAttributeNS(i.space,i.local));return r&&function(t){this.setAttributeNS(i.space,i.local,r(t))}}var i=In.ns.qualify(t);return this.tween("attr."+t,i.local?r:e)},_e.style=function(t,n,e){function r(){this.style.removeProperty(t)}function i(n){return null==n?r:(n+="",function(){var r,i=Wn.getComputedStyle(this,null).getPropertyValue(t);return i!==n&&(r=wn(i,n),function(n){this.style.setProperty(t,r(n),e)})})}var u=arguments.length;if(3>u){if("string"!=typeof t){2>u&&(n="");for(e in t)this.style(e,t[e],n);return this}e=""}return Nn(this,"style."+t,n,i)},_e.styleTween=function(t,n,e){function r(r,i){var u=n.call(this,r,i,Wn.getComputedStyle(this,null).getPropertyValue(t));return u&&function(n){this.style.setProperty(t,u(n),e)}}return arguments.length<3&&(e=""),this.tween("style."+t,r)},_e.text=function(t){return Nn(this,"text",t,Sn)},_e.remove=function(){var t=this.namespace;return this.each("end.transition",function(){var n;this[t].count<2&&(n=this.parentNode)&&n.removeChild(this)})};var Oe=function(){return $},De=In.map({linear:Oe,poly:Pn,quad:function(){return jn},cubic:function(){return En},sin:function(){return Rn},exp:function(){return Ln},circle:function(){return $n},elastic:On,back:Dn,bounce:function(){return Xn}}),Xe=In.map({"in":$,out:Tn,"in-out":Cn,"out-in":function(t){return Cn(Tn(t))}});In.ease=function(t){var n=t.indexOf("-"),e=n>=0?t.slice(0,n):t,r=n>=0?t.slice(n+1):"in";return e=De.get(e)||Oe,r=Xe.get(r)||$,qn(r(e.apply(null,Vn.call(arguments,1))))},_e.ease=function(t){var n=this.id,e=this.namespace;return arguments.length<1?this.node()[e][n].ease:("function"!=typeof t&&(t=In.ease.apply(In,arguments)),P(this,function(r){r[e][n].ease=t}))},_e.delay=function(t){var n=this.id,e=this.namespace;return arguments.length<1?this.node()[e][n].delay:P(this,"function"==typeof t?function(r,i,u){r[e][n].delay=+t.call(r,r.__data__,i,u)}:(t=+t,function(r){r[e][n].delay=t}))},_e.duration=function(t){var n=this.id,e=this.namespace;return arguments.length<1?this.node()[e][n].duration:P(this,"function"==typeof t?function(r,i,u){r[e][n].duration=Math.max(1,t.call(r,r.__data__,i,u))}:(t=Math.max(1,t),function(r){r[e][n].duration=t}))},_e.each=function(t,n){var e=this.id,r=this.namespace;if(arguments.length<2){var i=me,u=ve;try{ve=e,P(this,function(n,i,u){me=n[r][e],t.call(n,n.__data__,i,u)})}finally{me=i,ve=u}}else P(this,function(i){var u=i[r][e];(u.event||(u.event=In.dispatch("start","end","interrupt"))).on(t,n)});return this},_e.transition=function(){for(var t,n,e,r,i=this.id,u=++we,o=this.namespace,a=[],s=0,l=this.length;l>s;s++){a.push(t=[]);for(var n=this[s],c=0,h=n.length;h>c;c++)(e=n[c])&&(r=e[o][i],Hn(e,c,o,u,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),t.push(e)}return W(a,o,u)},"function"==typeof define&&define.amd?define(In):"object"==typeof module&&module.exports&&(module.exports=In),this.d3=In}();var ttCounter=0;D3Tooltip.prototype.html=function(t){this.$el.html(t)},D3Tooltip.prototype.show=function(){this.$el.transition().duration(200).style("opacity",.9),this.$el.style("left",this.d3.event.pageX+"px").style("top",this.d3.event.pageY-28+"px")},D3Tooltip.prototype.hide=function(){this.$el.transition().duration(500).style("opacity",0)};