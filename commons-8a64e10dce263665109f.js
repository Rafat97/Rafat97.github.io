(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1Mdp":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("q1tI");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var i=r.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},r.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=r.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},r.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,r,o){return function(t,e,n,r,o){var i=(t-n)/(e-n);if(0===i)return r;if(1===i)return o;for(var a="#",s=1;s<6;s+=2){var c=parseInt(r.substr(s,2),16),u=parseInt(o.substr(s,2),16),l=Math.round((1-i)*c+i*u).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,n,s(r),s(o))}var u=function(t){function e(e){t.call(this,e);var n=e.height,r=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(r-n,r-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,r=e.h,o=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var i=Math.min(this.i,Math.max(this.o,o));i!==r&&this.setState({h:i})},e.prototype.U=function(t){var e=this.state,n=e.h,r=e.N,o=e.B,i=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-o;(!r||s<250||i&&n<=a||!i&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,i=t.className,a=t.offColor,s=t.onColor,u=t.offHandleColor,l=t.onHandleColor,h=t.checkedIcon,p=t.uncheckedIcon,f=t.checkedHandleIcon,d=t.uncheckedHandleIcon,y=t.boxShadow,m=t.activeBoxShadow,b=t.height,v=t.width,g=t.borderRadius,w=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),T=this.state,C=T.h,E=T.N,S=T.j,k={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},O={height:b,width:v,margin:Math.max(0,(this.t-b)/2),position:"relative",background:c(C,this.i,this.o,a,s),borderRadius:"number"==typeof g?g:b/2,cursor:n?"default":"pointer",WebkitTransition:E?null:"background 0.25s",MozTransition:E?null:"background 0.25s",transition:E?null:"background 0.25s"},A={height:b,width:Math.min(1.5*b,v-(this.t+b)/2+1),position:"relative",opacity:(C-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},j={height:b,width:Math.min(1.5*b,v-(this.t+b)/2+1),position:"absolute",opacity:1-(C-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},x={height:this.t,width:this.t,background:c(C,this.i,this.o,u,l),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+C+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:S?m:y,border:0,WebkitTransition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:E?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},M={height:this.t,width:this.t,opacity:Math.max(2*(1-(C-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((C-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:E?null:"opacity 0.25s",MozTransition:E?null:"opacity 0.25s",transition:E?null:"opacity 0.25s"};return r.createElement("div",{className:i,style:k},r.createElement("div",{className:"react-switch-bg",style:O,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},h&&r.createElement("div",{style:A},h),p&&r.createElement("div",{style:j},p)),r.createElement("div",{className:"react-switch-handle",style:x,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},d&&r.createElement("div",{style:M},d),f&&r.createElement("div",{style:I},f)),r.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},w,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(r.Component);u.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:i,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=u},"8+s/":function(t,e,n){"use strict";var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=t(u.map((function(t){return t.props}))),h.canUseDOM?e(c):n&&(c=n(c))}var h=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,u=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=u.indexOf(this);u.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(h,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(h,"canUseDOM",s),h}}},"8ypT":function(t,e,n){},Bl7J:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=(n("8ypT"),n("a0Fx")),a=n("ohBo"),s=n.n(a),c=function(){var t=Object(r.useContext)(i.a),e=t.theme,n=t.setTheme;return o.a.createElement("div",{className:"flex justify-between items-center pt-3 pr-10"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null,o.a.createElement(s.a,{checked:"light"!==e,onChange:function(){n("light"===e?"dark":"light")},className:"react-switch"})))};e.a=function(t){var e=t.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"h-screen bg-white font-mono dark:bg-gray-800 ",style:{margin:"0 auto"}},o.a.createElement(c,null),o.a.createElement("main",null,e)))}},ZhWT:function(t,e){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!t(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!t(c.value[1],a.get(c.value[0])))return!1;return!0}if(o&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(n&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!t(e[u[c]],a[u[c]]))return!1;return!0}return e!=e&&a!=a}(t,e)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},ohBo:function(t,e,n){t.exports=n("1Mdp")},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return yt}));n("E9XD");var r,o,i,a,s=n("17x9"),c=n.n(s),u=n("8+s/"),l=n.n(u),h=n("ZhWT"),p=n.n(h),f=n("q1tI"),d=n.n(f),y=n("YVoz"),m=n.n(y),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(t){return w[t]})),"charset"),C="cssText",E="href",S="http-equiv",k="innerHTML",O="itemprop",A="name",j="property",x="rel",M="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",D="defer",N="encodeSpecialCharacters",R="onChangeClientState",H="titleTemplate",B=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),_=[w.NOSCRIPT,w.SCRIPT,w.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},U=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},F=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Y=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},K=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(t){var e=Q(t,w.TITLE),n=Q(t,H);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Q(t,P);return e||r||void 0},$=function(t){return Q(t,R)||function(){}},V=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return z({},t,e)}),{})},J=function(t,e){return e.filter((function(t){return void 0!==t[w.BASE]})).map((function(t){return t[w.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},Z=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+W(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===e.indexOf(c)||n===x&&"canonical"===t[n].toLowerCase()||c===x&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(s)||s!==k&&s!==C&&s!==O||(n=s)}if(!n||!t[n])return!1;var u=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=m()({},r[s],o[s]);r[s]=c}return t}),[]).reverse()},Q=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},G=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){G(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:t.requestAnimationFrame||G,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,u=t.scriptTags,l=t.styleTags,h=t.title,p=t.titleAttributes;ct(w.BODY,r),ct(w.HTML,o),st(h,p);var f={baseTag:ut(w.BASE,n),linkTags:ut(w.LINK,i),metaTags:ut(w.META,a),noscriptTags:ut(w.NOSCRIPT,s),scriptTags:ut(w.SCRIPT,u),styleTags:ut(w.STYLE,l)},d={},y={};Object.keys(f).forEach((function(t){var e=f[t],n=e.newTags,r=e.oldTags;n.length&&(d[t]=n),r.length&&(y[t]=f[t].oldTags)})),e&&e(),c(t,d,y)},at=function(t){return Array.isArray(t)?t.join(""):t},st=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ct(w.TITLE,e)},ct=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),s=0;s<a.length;s++){var c=a[s],u=e[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var h=i.length-1;h>=0;h--)n.removeAttribute(i[h]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},ut=function(t,e){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===k)n.innerHTML=e.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute("data-react-helmet","true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ht=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[L[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case w.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,o=ht(n,r),[d.a.createElement(w.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=lt(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+K(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case b:case v:return{toComponent:function(){return ht(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=L[t]||t;if(n===k||n===C){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),d.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===k||t===C)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+K(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===_.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},ft=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.scriptTags,u=t.styleTags,l=t.title,h=void 0===l?"":l,p=t.titleAttributes;return{base:pt(w.BASE,e,r),bodyAttributes:pt(b,n,r),htmlAttributes:pt(v,o,r),link:pt(w.LINK,i,r),meta:pt(w.META,a,r),noscript:pt(w.NOSCRIPT,s,r),script:pt(w.SCRIPT,c,r),style:pt(w.STYLE,u,r),title:pt(w.TITLE,{title:h,titleAttributes:p},r)}},dt=l()((function(t){return{baseTag:J([E,I],t),bodyAttributes:V(b,t),defer:Q(t,D),encode:Q(t,N),htmlAttributes:V(v,t),linkTags:Z(w.LINK,[x,E],t),metaTags:Z(w.META,[A,T,S,j,O],t),noscriptTags:Z(w.NOSCRIPT,[k],t),onChangeClientState:$(t),scriptTags:Z(w.SCRIPT,[M,k],t),styleTags:Z(w.STYLE,[C],t),title:X(t),titleAttributes:V(g,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),ft)((function(){return null})),yt=(o=dt,a=i=function(t){function e(){return q(this,e),Y(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:e};case w.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return z({},r,((e={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case w.TITLE:return z({},o,((e={})[r.type]=a,e.titleAttributes=z({},i),e));case w.BODY:return z({},o,{bodyAttributes:z({},i)});case w.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((n={})[r.type]=z({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=z({},e);return Object.keys(t).forEach((function(e){var r;n=z({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return d.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[B[n]||n]=t[n],e}),e)}(F(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=F(t,["children"]),r=z({},n);return e&&(r=this.mapChildrenToProps(e,r)),d.a.createElement(o,r)},U(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(d.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=ft({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);yt.renderStatic=yt.rewind}).call(this,n("yLpj"))},vrFN:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("qhky"),a=n("Wbzz");function s(t){var e,n,r=t.description,s=t.lang,c=t.meta,u=t.title,l=Object(a.useStaticQuery)("63159454").site,h=r||l.siteMetadata.description,p=null===(e=l.siteMetadata)||void 0===e?void 0:e.title;return o.a.createElement(i.a,{htmlAttributes:{lang:s},title:u,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:h},{property:"og:title",content:u},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:h}].concat(c)})}s.defaultProps={lang:"en",meta:[],description:""},e.a=s}}]);
//# sourceMappingURL=commons-8a64e10dce263665109f.js.map