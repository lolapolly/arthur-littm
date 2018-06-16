!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.ProgressBar=t()}}(function(){var t;return function t(e,n,i){function r(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return r(n||t)},c,c.exports,t,e,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,n,i){(function(){var e=this||Function("return this")(),r=function(){"use strict";function r(){}function o(t,e){var n;for(n in t)Object.hasOwnProperty.call(t,n)&&e(n)}function s(t,e){return o(e,function(n){t[n]=e[n]}),t}function a(t,e){o(e,function(n){"undefined"==typeof t[n]&&(t[n]=e[n])})}function u(t,e,n,i,r,o,s){var a,u,c,p=o>t?0:(t-o)/r;for(a in e)e.hasOwnProperty(a)&&(u=s[a],c="function"==typeof u?u:d[u],e[a]=h(n[a],i[a],c,p));return e}function h(t,e,n,i){return t+(e-t)*n(i)}function c(t,e){var n=f.prototype.filter,i=t._filterArgs;o(n,function(r){"undefined"!=typeof n[r][e]&&n[r][e].apply(t,i)})}function p(t,e,n,i,r,o,s,a,h,p,l){S=e+n+i,x=Math.min(l||v(),S),b=x>=S,C=i-(S-x),t.isPlaying()&&(b?(h(s,t._attachment,C),t.stop(!0)):(t._scheduleId=p(t._timeoutHandler,w),c(t,"beforeTween"),e+n>x?u(1,r,o,s,1,1,a):u(x,r,o,s,i,e+n,a),c(t,"afterTween"),h(r,t._attachment,C)))}function l(t,e){var n={},i=typeof e;return"string"===i||"function"===i?o(t,function(t){n[t]=e}):o(t,function(t){n[t]||(n[t]=e[t]||g)}),n}function f(t,e){this._currentState=t||{},this._configured=!1,this._scheduleFunction=_,void 0!==e&&this.setConfig(e)}var d,_,g="linear",y=500,w=1e3/60,m=Date.now?Date.now:function(){return+new Date},v="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:m;_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var S,x,b,C;return f.prototype.tween=function(t){return this._isTweening?this:(void 0===t&&this._configured||this.setConfig(t),this._timestamp=v(),this._start(this.get(),this._attachment),this.resume())},f.prototype.setConfig=function(t){t=t||{},this._configured=!0,this._attachment=t.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=t.delay||0,this._start=t.start||r,this._step=t.step||r,this._finish=t.finish||r,this._duration=t.duration||y,this._currentState=s({},t.from)||this.get(),this._originalState=this.get(),this._targetState=s({},t.to)||this.get();var e=this;this._timeoutHandler=function(){p(e,e._timestamp,e._delay,e._duration,e._currentState,e._originalState,e._targetState,e._easing,e._step,e._scheduleFunction)};var n=this._currentState,i=this._targetState;return a(i,n),this._easing=l(n,t.easing||g),this._filterArgs=[n,this._originalState,i,this._easing],c(this,"tweenCreated"),this},f.prototype.get=function(){return s({},this._currentState)},f.prototype.set=function(t){this._currentState=t},f.prototype.pause=function(){return this._pausedAtTime=v(),this._isPaused=!0,this},f.prototype.resume=function(){return this._isPaused&&(this._timestamp+=v()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},f.prototype.seek=function(t){t=Math.max(t,0);var e=v();return this._timestamp+t===0?this:(this._timestamp=e-t,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,p(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,e),this.pause()),this)},f.prototype.stop=function(t){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=r,(e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.oCancelAnimationFrame||e.msCancelAnimationFrame||e.mozCancelRequestAnimationFrame||e.clearTimeout)(this._scheduleId),t&&(c(this,"beforeTween"),u(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),c(this,"afterTween"),c(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},f.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},f.prototype.setScheduleFunction=function(t){this._scheduleFunction=t},f.prototype.dispose=function(){var t;for(t in this)this.hasOwnProperty(t)&&delete this[t]},f.prototype.filter={},f.prototype.formula={linear:function(t){return t}},d=f.prototype.formula,s(f,{now:v,each:o,tweenProps:u,tweenProp:h,applyFilter:c,shallowCopy:s,defaults:a,composeEasingObject:l}),"function"==typeof SHIFTY_DEBUG_NOW&&(e.timeoutHandler=p),"object"==typeof i?n.exports=f:"function"==typeof t&&t.amd?t(function(){return f}):"undefined"==typeof e.Tweenable&&(e.Tweenable=f),f}();!function(){r.shallowCopy(r.prototype.formula,{easeInQuad:function(t){return Math.pow(t,2)},easeOutQuad:function(t){return-(Math.pow(t-1,2)-1)},easeInOutQuad:function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},easeInCubic:function(t){return Math.pow(t,3)},easeOutCubic:function(t){return Math.pow(t-1,3)+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},easeInQuart:function(t){return Math.pow(t,4)},easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeInQuint:function(t){return Math.pow(t,5)},easeOutQuint:function(t){return Math.pow(t-1,5)+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-Math.pow(t-1,2))},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeOutBounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},elastic:function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},swingFromTo:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},swingFrom:function(t){var e=1.70158;return t*t*((e+1)*t-e)},swingTo:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},bounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bouncePast:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?2-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},easeFromTo:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeFrom:function(t){return Math.pow(t,4)},easeTo:function(t){return Math.pow(t,.25)}})}(),function(){function t(t,e,n,i,r,o){function s(t){return((f*t+d)*t+_)*t}function a(t){return((g*t+y)*t+w)*t}function u(t){return(3*f*t+2*d)*t+_}function h(t){return 1/(200*t)}function c(t,e){return a(l(t,e))}function p(t){return t>=0?t:0-t}function l(t,e){var n,i,r,o,a,h;for(r=t,h=0;8>h;h++){if(o=s(r)-t,p(o)<e)return r;if(a=u(r),p(a)<1e-6)break;r-=o/a}if(n=0,i=1,r=t,n>r)return n;if(r>i)return i;for(;i>n;){if(o=s(r),p(o-t)<e)return r;t>o?n=r:i=r,r=.5*(i-n)+n}return r}var f=0,d=0,_=0,g=0,y=0,w=0;return _=3*e,d=3*(i-e)-_,f=1-_-d,w=3*n,y=3*(r-n)-w,g=1-w-y,c(t,h(o))}function e(e,n,i,r){return function(o){return t(o,e,n,i,r,1)}}r.setBezierFunction=function(t,n,i,o,s){var a=e(n,i,o,s);return a.displayName=t,a.x1=n,a.y1=i,a.x2=o,a.y2=s,r.prototype.formula[t]=a},r.unsetBezierFunction=function(t){delete r.prototype.formula[t]}}(),function(){function t(t,e,n,i,o,s){return r.tweenProps(i,e,t,n,1,s,o)}var e=new r;e._filterArgs=[],r.interpolate=function(n,i,o,s,a){var u=r.shallowCopy({},n),h=a||0,c=r.composeEasingObject(n,s||"linear");e.set({});var p=e._filterArgs;p.length=0,p[0]=u,p[1]=n,p[2]=i,p[3]=c,r.applyFilter(e,"tweenCreated"),r.applyFilter(e,"beforeTween");var l=t(n,u,i,o,c,h);return r.applyFilter(e,"afterTween"),l}}(),function(t){function e(t,e){var n,i=[],r=t.length;for(n=0;r>n;n++)i.push("_"+e+"_"+n);return i}function n(t){var e=t.match(S);return e?(1===e.length||t[0].match(v))&&e.unshift(""):e=["",""],e.join(O)}function i(e){t.each(e,function(t){var n=e[t];"string"==typeof n&&n.match(T)&&(e[t]=r(n))})}function r(t){return u(T,t,o)}function o(t){var e=s(t);return"rgb("+e[0]+","+e[1]+","+e[2]+")"}function s(t){return t=t.replace(/#/,""),3===t.length&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),P[0]=a(t.substr(0,2)),P[1]=a(t.substr(2,2)),P[2]=a(t.substr(4,2)),P}function a(t){return parseInt(t,16)}function u(t,e,n){var i=e.match(t),r=e.replace(t,O);if(i)for(var o,s=i.length,a=0;s>a;a++)o=i.shift(),r=r.replace(O,n(o));return r}function h(t){return u(b,t,c)}function c(t){for(var e=t.match(x),n=e.length,i=t.match(C)[0],r=0;n>r;r++)i+=parseInt(e[r],10)+",";return i=i.slice(0,-1)+")"}function p(i){var r={};return t.each(i,function(t){var o=i[t];if("string"==typeof o){var s=y(o);r[t]={formatString:n(o),chunkNames:e(s,t)}}}),r}function l(e,n){t.each(n,function(t){for(var i=e[t],r=y(i),o=r.length,s=0;o>s;s++)e[n[t].chunkNames[s]]=+r[s];delete e[t]})}function f(e,n){t.each(n,function(t){var i=e[t],r=d(e,n[t].chunkNames),o=_(r,n[t].chunkNames);i=g(n[t].formatString,o),e[t]=h(i)})}function d(t,e){for(var n,i={},r=e.length,o=0;r>o;o++)n=e[o],i[n]=t[n],delete t[n];return i}function _(t,e){M.length=0;for(var n=e.length,i=0;n>i;i++)M.push(t[e[i]]);return M}function g(t,e){for(var n=t,i=e.length,r=0;i>r;r++)n=n.replace(O,+e[r].toFixed(4));return n}function y(t){return t.match(x)}function w(e,n){t.each(n,function(t){var i,r=n[t],o=r.chunkNames,s=o.length,a=e[t];if("string"==typeof a){var u=a.split(" "),h=u[u.length-1];for(i=0;s>i;i++)e[o[i]]=u[i]||h}else for(i=0;s>i;i++)e[o[i]]=a;delete e[t]})}function m(e,n){t.each(n,function(t){var i=n[t],r=i.chunkNames,o=r.length,s=e[r[0]];if("string"==typeof s){for(var a="",u=0;o>u;u++)a+=" "+e[r[u]],delete e[r[u]];e[t]=a.substr(1)}else e[t]=s})}var v=/(\d|\-|\.)/,S=/([^\-0-9\.]+)/g,x=/[0-9.\-]+/g,b=new RegExp("rgb\\("+x.source+/,\s*/.source+x.source+/,\s*/.source+x.source+"\\)","g"),C=/^.*\(/,T=/#([0-9]|[a-f]){3,6}/gi,O="VAL",P=[],M=[];t.prototype.filter.token={tweenCreated:function(t,e,n){i(t),i(e),i(n),this._tokenData=p(t)},beforeTween:function(t,e,n,i){w(i,this._tokenData),l(t,this._tokenData),l(e,this._tokenData),l(n,this._tokenData)},afterTween:function(t,e,n,i){f(t,this._tokenData),f(e,this._tokenData),f(n,this._tokenData),m(i,this._tokenData)}}}(r)}).call(null)},{}],2:[function(t,e){var n=t("./shape"),i=t("./utils"),r=function(){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,n.apply(this,arguments)};r.prototype=new n,r.prototype.constructor=r,r.prototype._pathString=function(t){var e=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(e=t.trailWidth);var n=50-e/2;return i.render(this._pathTemplate,{radius:n,"2radius":2*n})},r.prototype._trailString=function(t){return this._pathString(t)},e.exports=r},{"./shape":7,"./utils":8}],3:[function(t,e){var n=t("./shape"),i=t("./utils"),r=function(){this._pathTemplate="M 0,{center} L 100,{center}",n.apply(this,arguments)};r.prototype=new n,r.prototype.constructor=r,r.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none")},r.prototype._pathString=function(t){return i.render(this._pathTemplate,{center:t.strokeWidth/2})},r.prototype._trailString=function(t){return this._pathString(t)},e.exports=r},{"./shape":7,"./utils":8}],4:[function(t,e){e.exports={Line:t("./line"),Circle:t("./circle"),SemiCircle:t("./semicircle"),Path:t("./path"),Shape:t("./shape"),utils:t("./utils")}},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./utils":8}],5:[function(t,e){var n=t("shifty"),i=t("./utils"),r={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},o=function t(e,n){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");n=i.extend({duration:800,easing:"linear",from:{},to:{},step:function(){}},n);var r;r=i.isString(e)?document.querySelector(e):e,this.path=r,this._opts=n,this._tweenable=null;var o=this.path.getTotalLength();this.path.style.strokeDasharray=o+" "+o,this.set(0)};o.prototype.value=function(){var t=this._getComputedDashOffset(),e=this.path.getTotalLength(),n=1-t/e;return parseFloat(n.toFixed(6),10)},o.prototype.set=function(t){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(t);var e=this._opts.step;if(i.isFunction(e)){var n=this._easing(this._opts.easing);e(this._calculateTo(t,n),this._opts.shape||this,this._opts.attachment)}},o.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},o.prototype.animate=function(t,e,r){e=e||{},i.isFunction(e)&&(r=e,e={});var o=i.extend({},e),s=i.extend({},this._opts);e=i.extend(s,e);var a=this._easing(e.easing),u=this._resolveFromAndTo(t,a,o);this.stop(),this.path.getBoundingClientRect();var h=this._getComputedDashOffset(),c=this._progressToOffset(t),p=this;this._tweenable=new n,this._tweenable.tween({from:i.extend({offset:h},u.from),to:i.extend({offset:c},u.to),duration:e.duration,easing:a,step:function(t){p.path.style.strokeDashoffset=t.offset;var n=e.shape||p;e.step(t,n,e.attachment)},finish:function(){i.isFunction(r)&&r()}})},o.prototype._getComputedDashOffset=function(){var t=window.getComputedStyle(this.path,null);return parseFloat(t.getPropertyValue("stroke-dashoffset"),10)},o.prototype._progressToOffset=function(t){var e=this.path.getTotalLength();return e-t*e},o.prototype._resolveFromAndTo=function(t,e,n){return n.from&&n.to?{from:n.from,to:n.to}:{from:this._calculateFrom(e),to:this._calculateTo(t,e)}},o.prototype._calculateFrom=function(t){return n.interpolate(this._opts.from,this._opts.to,this.value(),t)},o.prototype._calculateTo=function(t,e){return n.interpolate(this._opts.from,this._opts.to,t,e)},o.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(),this._tweenable=null)},o.prototype._easing=function(t){return r.hasOwnProperty(t)?r[t]:t},e.exports=o},{"./utils":8,shifty:1}],6:[function(t,e){var n=t("./shape"),i=t("./circle"),r=t("./utils"),o=function(){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,n.apply(this,arguments)};o.prototype=new n,o.prototype.constructor=o,o.prototype._initializeSvg=function(t){t.setAttribute("viewBox","0 0 100 50")},o.prototype._initializeTextContainer=function(t,e,n){t.text.style&&(n.style.top="auto",n.style.bottom="0",t.text.alignToBottom?r.setStyle(n,"transform","translate(-50%, 0)"):r.setStyle(n,"transform","translate(-50%, 50%)"))},o.prototype._pathString=i.prototype._pathString,o.prototype._trailString=i.prototype._trailString,e.exports=o},{"./circle":2,"./shape":7,"./utils":8}],7:[function(t,e){var n=t("./path"),i=t("./utils"),r="Object is destroyed",o=function t(e,r){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=i.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},r,!0),i.isObject(r)&&void 0!==r.svgStyle&&(this._opts.svgStyle=r.svgStyle),i.isObject(r)&&i.isObject(r.text)&&void 0!==r.text.style&&(this._opts.text.style=r.text.style);var o,s=this._createSvgView(this._opts);if(!(o=i.isString(e)?document.querySelector(e):e))throw new Error("Container does not exist: "+e);this._container=o,this._container.appendChild(s.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&i.setStyles(s.svg,this._opts.svgStyle),this.svg=s.svg,this.path=s.path,this.trail=s.trail,this.text=null;var a=i.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new n(s.path,a),i.isObject(this._opts.text)&&null!==this._opts.text.value&&this.setText(this._opts.text.value)}};o.prototype.animate=function(t,e,n){if(null===this._progressPath)throw new Error(r);this._progressPath.animate(t,e,n)},o.prototype.stop=function(){if(null===this._progressPath)throw new Error(r);void 0!==this._progressPath&&this._progressPath.stop()},o.prototype.destroy=function(){if(null===this._progressPath)throw new Error(r);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},o.prototype.set=function(t){if(null===this._progressPath)throw new Error(r);this._progressPath.set(t)},o.prototype.value=function(){if(null===this._progressPath)throw new Error(r);return void 0===this._progressPath?0:this._progressPath.value()},o.prototype.setText=function(t){if(null===this._progressPath)throw new Error(r);null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),i.isObject(t)?(i.removeChildren(this.text),this.text.appendChild(t)):this.text.innerHTML=t},o.prototype._createSvgView=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(e,t);var n=null;(t.trailColor||t.trailWidth)&&(n=this._createTrail(t),e.appendChild(n));var i=this._createPath(t);return e.appendChild(i),{svg:e,path:i,trail:n}},o.prototype._initializeSvg=function(t){t.setAttribute("viewBox","0 0 100 100")},o.prototype._createPath=function(t){var e=this._pathString(t);return this._createPathElement(e,t)},o.prototype._createTrail=function(t){var e=this._trailString(t),n=i.extend({},t);return n.trailColor||(n.trailColor="#eee"),n.trailWidth||(n.trailWidth=n.strokeWidth),n.color=n.trailColor,n.strokeWidth=n.trailWidth,n.fill=null,this._createPathElement(e,n)},o.prototype._createPathElement=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",t),n.setAttribute("stroke",e.color),n.setAttribute("stroke-width",e.strokeWidth),e.fill?n.setAttribute("fill",e.fill):n.setAttribute("fill-opacity","0"),n},o.prototype._createTextContainer=function(t,e){var n=document.createElement("div");n.className=t.text.className;var r=t.text.style;return r&&(t.text.autoStyleContainer&&(e.style.position="relative"),i.setStyles(n,r),r.color||(n.style.color=t.color)),this._initializeTextContainer(t,e,n),n},o.prototype._initializeTextContainer=function(){},o.prototype._pathString=function(){throw new Error("Override this function for each progress bar")},o.prototype._trailString=function(){throw new Error("Override this function for each progress bar")},o.prototype._warnContainerAspectRatio=function(t){if(this.containerAspectRatio){var e=window.getComputedStyle(t,null),n=parseFloat(e.getPropertyValue("width"),10),r=parseFloat(e.getPropertyValue("height"),10);i.floatEquals(this.containerAspectRatio,n/r)||(console.warn("Incorrect aspect ratio of container","#"+t.id,"detected:",e.getPropertyValue("width")+"(width)","/",e.getPropertyValue("height")+"(height)","=",n/r),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},e.exports=o},{"./path":5,"./utils":8}],8:[function(t,e){function n(t,e,i){t=t||{},e=e||{},i=i||!1;for(var r in e)if(e.hasOwnProperty(r)){var o=t[r],s=e[r];i&&c(o)&&c(s)?t[r]=n(o,s,i):t[r]=s}return t}function i(t,e){var n=t;for(var i in e)if(e.hasOwnProperty(i)){var r=e[i],o="\\{"+i+"\\}",s=new RegExp(o,"g");n=n.replace(s,r)}return n}function r(t,e,n){for(var i=t.style,r=0;r<d.length;++r){i[d[r]+s(e)]=n}i[e]=n}function o(t,e){p(e,function(e,n){null!==e&&void 0!==e&&(c(e)&&!0===e.prefix?r(t,n,e.value):t.style[n]=e)})}function s(t){return t.charAt(0).toUpperCase()+t.slice(1)}function a(t){return"string"==typeof t||t instanceof String}function u(t){return"function"==typeof t}function h(t){return"[object Array]"===Object.prototype.toString.call(t)}function c(t){return!h(t)&&("object"==typeof t&&!!t)}function p(t,e){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e(i,n)}}function l(t,e){return Math.abs(t-e)<_}function f(t){for(;t.firstChild;)t.removeChild(t.firstChild)}var d="Webkit Moz O ms".split(" "),_=.001;e.exports={extend:n,render:i,setStyle:r,setStyles:o,capitalize:s,isString:a,isFunction:u,isObject:c,forEachObject:p,floatEquals:l,removeChildren:f}},{}]},{},[4])(4)});