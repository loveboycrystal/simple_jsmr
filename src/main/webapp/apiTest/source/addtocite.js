var bdAddToCiteBase=bdAddToCiteBase||{};(function(a){a.version="1.5.2.2";a.guid="$BAIDU$";a.$$=window[a.guid]=window[a.guid]||{global:{}};a.dom=a.dom||{};a.dom.g=function(b){if(!b){return null}if("string"==typeof b||b instanceof String){return document.getElementById(b)}else{if(b.nodeName&&(b.nodeType==1||b.nodeType==9)){return b}}return null};a.g=a.G=a.dom.g;a.dom._styleFixer=a.dom._styleFixer||{};a.dom._styleFilter=a.dom._styleFilter||[];a.dom._styleFilter.filter=function(g,j,i){for(var h=0,k=a.dom._styleFilter,l;l=k[h];h++){if(l=l[i]){j=l(g,j)}}return j};a.string=a.string||{};a.string.toCamelCase=function(b){if(b.indexOf("-")<0&&b.indexOf("_")<0){return b}return b.replace(/[-_][^-_]/g,function(c){return c.charAt(1).toUpperCase()})};a.dom.setStyle=function(j,f,i){var h=a.dom,g;j=h.g(j);f=a.string.toCamelCase(f);if(g=h._styleFilter){i=g.filter(f,i,"set")}g=h._styleFixer[f];(g&&g.set)?g.set(j,i,f):(j.style[g||f]=i);return j};a.setStyle=a.dom.setStyle;a.dom.setStyles=function(d,f){d=a.dom.g(d);for(var e in f){a.dom.setStyle(d,e,f[e])}return d};a.setStyles=a.dom.setStyles;(function(){var b=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)","g");a.string.trim=function(c){return String(c).replace(b,"")}})();a.trim=a.string.trim;a.string.escapeReg=function(b){return String(b).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])","g"),"\\\x241")};a.dom.q=function(k,n,q){var i=[],o=a.string.trim,l,m,r,p;if(!(k=o(k))){return i}if("undefined"==typeof n){n=document}else{n=a.dom.g(n);if(!n){return i}}q&&(q=o(q).toUpperCase());if(n.getElementsByClassName){r=n.getElementsByClassName(k);l=r.length;for(m=0;m<l;m++){p=r[m];if(q&&p.tagName!=q){continue}i[i.length]=p}}else{k=new RegExp("(^|\\s)"+a.string.escapeReg(k)+"(\\s|\x24)");r=q?n.getElementsByTagName(q):(n.all||n.getElementsByTagName("*"));l=r.length;for(m=0;m<l;m++){p=r[m];k.test(p.className)&&(i[i.length]=p)}}return i};a.q=a.Q=a.dom.q;a.browser=a.browser||{};a.browser.opera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp["\x246"]||RegExp["\x242"]):undefined;a.dom.insertHTML=function(i,g,j){i=a.dom.g(i);var f,h;if(i.insertAdjacentHTML&&!a.browser.opera){i.insertAdjacentHTML(g,j)}else{f=i.ownerDocument.createRange();g=g.toUpperCase();if(g=="AFTERBEGIN"||g=="BEFOREEND"){f.selectNodeContents(i);f.collapse(g=="AFTERBEGIN")}else{h=g=="BEFOREBEGIN";f[h?"setStartBefore":"setEndAfter"](i);f.collapse(h)}f.insertNode(f.createContextualFragment(j))}return i};a.insertHTML=a.dom.insertHTML;a.browser.ie=a.ie=/msie (\d+\.\d+)/i.test(navigator.userAgent)?(document.documentMode||+RegExp["\x241"]):undefined;a.string.format=function(h,f){h=String(h);var e=Array.prototype.slice.call(arguments,1),g=Object.prototype.toString;if(e.length){e=e.length==1?(f!==null&&(/\[object Array\]|\[object Object\]/.test(g.call(f)))?f:e):e;return h.replace(/#\{(.+?)\}/g,function(d,b){var c=e[b];if("[object Function]"==g.call(c)){c=c(b)}return("undefined"==typeof c?"":c)})}return h};a.format=a.string.format;a.array=a.array||{};a.each=a.array.forEach=a.array.each=function(j,l,h){var m,k,n,i=j.length;if("function"==typeof l){for(n=0;n<i;n++){k=j[n];m=l.call(h||j,k,n);if(m===false){break}}}return j};a.lang=a.lang||{};a.lang.isString=function(b){return"[object String]"==Object.prototype.toString.call(b)};a.isString=a.lang.isString;a.dom._g=function(b){if(a.lang.isString(b)){return document.getElementById(b)}return b};a._g=a.dom._g;a.dom.remove=function(d){d=a.dom._g(d);var c=d.parentNode;c&&c.removeChild(d)};a.page=a.page||{};a.page.loadCssFile=function(c){var d=document.createElement("link");d.setAttribute("rel","stylesheet");d.setAttribute("type","text/css");d.setAttribute("href",c);document.getElementsByTagName("head")[0].appendChild(d)};a.event=a.event||{};a.event._listeners=a.event._listeners||[];a.event.on=function(i,n,l){n=n.replace(/^on/i,"");i=a.dom._g(i);var m=function(b){l.call(i,b)},j=a.event._listeners,o=a.event._eventFilter,k,p=n;n=n.toLowerCase();if(o&&o[n]){k=o[n](i,n,m);p=k.type;m=k.listener}if(i.addEventListener){i.addEventListener(p,m,false)}else{if(i.attachEvent){i.attachEvent("on"+p,m)}}j[j.length]=[i,n,l,m,p];return i};a.on=a.event.on;a.event.un=function(p,m,q){p=a.dom._g(p);m=m.replace(/^on/i,"").toLowerCase();var j=a.event._listeners,o=j.length,n=!q,k,l,r;while(o--){k=j[o];if(k[1]===m&&k[0]===p&&(n||k[2]===q)){l=k[4];r=k[3];if(p.removeEventListener){p.removeEventListener(l,r,false)}else{if(p.detachEvent){p.detachEvent("on"+l,r)}}j.splice(o,1)}}return p};a.un=a.event.un;a.dom.getDocument=function(b){b=a.dom.g(b);return b.nodeType==9?b:b.ownerDocument||b.document};a.dom.getComputedStyle=function(e,f){e=a.dom._g(e);var g=a.dom.getDocument(e),h;if(g.defaultView&&g.defaultView.getComputedStyle){h=g.defaultView.getComputedStyle(e,null);if(h){return h[f]||h.getPropertyValue(f)}}return""};a.dom.getStyle=function(j,f){var h=a.dom;j=h.g(j);f=a.string.toCamelCase(f);var i=j.style[f]||(j.currentStyle?j.currentStyle[f]:"")||h.getComputedStyle(j,f);if(!i||i=="auto"){var g=h._styleFixer[f];if(g){i=g.get?g.get(j,f,i):a.dom.getStyle(j,g)}}if(g=h._styleFilter){i=g.filter(f,i,"get")}return i};a.getStyle=a.dom.getStyle;a.browser.isWebkit=/webkit/i.test(navigator.userAgent);a.browser.isGecko=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent);a.browser.isStrict=document.compatMode=="CSS1Compat";a.dom.getPosition=function(x){x=a.dom.g(x);var o=a.dom.getDocument(x),u=a.browser,r=a.dom.getStyle,v=u.isGecko>0&&o.getBoxObjectFor&&r(x,"position")=="absolute"&&(x.style.top===""||x.style.left===""),q={left:0,top:0},s=(u.ie&&!u.isStrict)?o.body:o.documentElement,n,w;if(x==s){return q}if(x.getBoundingClientRect){w=x.getBoundingClientRect();q.left=Math.floor(w.left)+Math.max(o.documentElement.scrollLeft,o.body.scrollLeft);q.top=Math.floor(w.top)+Math.max(o.documentElement.scrollTop,o.body.scrollTop);q.left-=o.documentElement.clientLeft;q.top-=o.documentElement.clientTop;var p=o.body,m=parseInt(r(p,"borderLeftWidth")),t=parseInt(r(p,"borderTopWidth"));if(u.ie&&!u.isStrict){q.left-=isNaN(m)?2:m;q.top-=isNaN(t)?2:t}}else{n=x;do{q.left+=n.offsetLeft;q.top+=n.offsetTop;if(u.isWebkit>0&&r(n,"position")=="fixed"){q.left+=o.body.scrollLeft;q.top+=o.body.scrollTop;break}n=n.offsetParent}while(n&&n!=x);if(u.opera>0||(u.isWebkit>0&&r(x,"position")=="absolute")){q.top-=o.body.offsetTop}n=x.offsetParent;while(n&&n!=o.body){q.left-=n.scrollLeft;if(!u.opera||n.tagName!="TR"){q.top-=n.scrollTop}n=n.offsetParent}}return q};a.url=a.url||{};a.url.escapeSymbol=function(b){return String(b).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g,function(c){return"%"+(256+c.charCodeAt()).toString(16).substring(1).toUpperCase()})};a.object=a.object||{};a.object.each=function(h,j){var f,g,i;if("function"==typeof j){for(g in h){if(h.hasOwnProperty(g)){i=h[g];f=j.call(h,i,g);if(f===false){break}}}}return h};a.lang.isArray=function(b){return"[object Array]"==Object.prototype.toString.call(b)};a.url.jsonToQuery=function(j,h){var g=[],i,f=h||function(b){return a.url.escapeSymbol(b)};a.object.each(j,function(b,c){if(a.lang.isArray(b)){i=b.length;while(i--){g.push(c+"="+f(b[i],c))}}else{g.push(c+"="+f(b,c))}});return g.join("&")}})(bdAddToCiteBase);var bdShare=bdShare||{},base=bdAddToCiteBase;bdShare._LogPool=bdShare._LogPool||[];base.setTopFixed=(function(){var a=null,c=0;function b(){base.setStyle(a,"top",(document.documentElement.scrollTop+c)+"px")}return function(e,g){a=e;c=g.top;if(base.browser.ie<=6){var f={position:"absolute",zIndex:"9999"};for(var d in g){f[d]=g[d]+"px"}f.top=(document.documentElement.scrollTop+g.top)+"px";base.setStyles(e,f);base.un(window,"scroll",b);base.on(window,"scroll",b)}else{var f={position:"fixed",zIndex:"9999"};for(var d in g){f[d]=g[d]+"px"}base.setStyles(e,f)}}})();bdShare.anti={timespan:(function(){var b=new Date().getTime(),a=new Date().getTime();return{init:function(){a=new Date().getTime()+1000},getValue:function(){return b.toString(32)+a.toString(32)+new Date().getTime().toString(32)}}})(),sloc:(function(){var c=null,f=0,e={x:0,y:0},b={x:0,y:0},a=-1;function g(h){if(h.pageX||h.pageY){return{x:h.pageX,y:h.pageY}}if(document.documentElement&&document.documentElement.scrollTop){return{x:h.clientX+document.documentElement.scrollLeft-document.documentElement.clientLeft,y:h.clientY+document.documentElement.scrollTop-document.documentElement.clientTop}}else{if(document.body){return{x:h.clientX+document.body.scrollLeft-document.body.clientLeft,y:h.clientY+document.body.scrollTop-document.body.clientTop}}}}function d(h){h=h||window.event;e=g(h);if(e.x>0&&e.y>0){base.un(document,"mousemove",d)}}return{init:function(i,h){base.un(document,"mousemove",d);base.un(i,"mouseover");base.un(i,"mouseout");c=i;f=h;base.on(document,"mousemove",d);base.on(i,"mouseover",function(m){m=m||window.event;var l=m.target||m.srcElement,k=base.dom.getPosition(l),j=g(m);b.x=j.x-k.left;b.y=j.y-k.top;a=new Date().getTime()});base.on(i,"mouseout",function(j){a=-1})},getValue:function(q,r){r=r||window.event;var v=f,i=Math.floor(e.x),z=Math.floor(e.y),o=v>0?1:0,u=Math.floor(b.x),s=Math.floor(b.y),j=base.dom.getPosition(q),l=g(r),m=Math.floor(l.x-j.left),k=Math.floor(l.y-j.top),x=Math.floor(q.offsetWidth),p=Math.floor(q.offsetHeight),n=v,y=new Date().getTime()-a;return[i,z,o,u,s,m,k,x,p,n,y].join(".")}}})(),getLinkId:(function(){var a=(+new Date).toString(36);return function(){var f="0123456789abcdefghijklmnopqrstuvwxyz",g=3,b=f.length,d="";for(var c=1;c<=g;c++){var e=Math.floor(b*Math.random());d=d+f.charAt(e)}return a+d}})()};bdShare.log={request:(function(){var b=[];return function(a){var e="bdsharelog__"+(new Date()).getTime(),d=b[e]=new Image();d.onload=(d.onerror=function(){b[e]=null});d.src=a;d=null}})(),send:function(c,a){var b=(a=="load"?"http://nsclick.baidu.com/v.gif?pid=307&":"http://s.share.baidu.com/commit?");bdShare.log.request(b+(base.isString(c)?c:base.url.jsonToQuery(c)))}};bdShare.AddToCite=(function(){var b="bdaddtocitebtn",e={},i="http://bdimg.share.baidu.com",g="http://s.share.baidu.com?",h="click=1&to=bdhome&url=#{url}&title=#{title}&uid=#{uid}&type=text&pic=&key=&sign=on&desc=&comment=&searchPic=&relatedUid=&l=#{l}&linkid=#{linkid}&sloc=#{sloc}&apiType=#{apiType}&buttonType=#{buttonType}&_t=#{_t}";function a(k){return base.format("<div class='#{cls} #{cls}-slide'><img src='#{domain}/static/images/addtocite/slide_#{color}_#{pos}.png' alt='添加到百度首页' /></div>",{cls:b,domain:i,color:k.color,pos:k.pos})}function c(l,k){l=base.g(l);if(k.type=="slide"){l.className=base.format("#{cls} #{cls}-slide #{cls}-slide-#{color}",{cls:b,color:k.color});var m={top:k.top*1};m[e.pos]=0;base.setTopFixed(l,m)}else{l.className=base.format("#{cls} #{cls}-#{size}",{cls:b,size:k.size})}l=null}function f(l,k){base.on(l,"click",function(o){var n={url:encodeURIComponent(window.location.href),title:encodeURIComponent(document.title),uid:e.uid||"",l:bdShare.anti.timespan.getValue(),linkid:bdShare.anti.getLinkId(),sloc:bdShare.anti.sloc.getValue(l,o),apiType:2,buttonType:k.type=="slide"?"2":"1",_t:new Date().getTime()},m=base.format(h,n);setTimeout(function(){bdShare.log.send(m,"click")},1500);window.open(g+m)})}function j(m){e=m||{};var l=(m.type=="slide");if(l){base.insertHTML(document.body,"beforeEnd",a(m))}var k=base.q(b);base.array.each(k,function(n){c(n,m);f(n,m);bdShare.anti.sloc.init(n,l?1:0)});bdShare.anti.timespan.init();if(!(new RegExp("([http|https]://[a-zA-Z0-9_.]+.baidu.com)","ig")).test(window.location.href)){bdShare._LogPool.push({key:"addto",api:{uid:e.uid||"",linkid:bdShare.anti.getLinkId(),type:(e.type=="slide"?"2":"1"),size:e.size,loadTime:(bdShare.addtociteStartTime?new Date().getTime()-bdShare.addtociteStartTime:"")}})}}function d(m){e=m||{};var k=base.q(b),l=(m.type=="slide");base.array.each(k,function(n){if(l){base.dom.remove(n)}else{c(n,m)}});if(l){j(m)}bdShare.anti.timespan.init()}return{init:j,refresh:d}})();(function(){base.page.loadCssFile("http://bdimg.share.baidu.com/static/css/addtocite.css?cdnversion=20121012");var a=(typeof bdShare_config_addtocite!="undefined"?bdShare_config_addtocite:{type:"button",size:"small",uid:""});bdShare.AddToCite.init(a)})();