﻿$(document).ready(function(){$(".apps").each(function(){var d=$(this);$(".drop",d).click(function(n){return n.preventDefault(),$div=$(".gb_fa",d),$div.toggle(),$(".gb_fa").not($div).hide(),!1})}),$("html,.drops,.dropsss,.dropss,.tt_tg,.dropdown-link,.dropdwn").click(function(){$(".gb_fa").hide()}),$(".au").each(function(){var d=$(this);$(".dropss",d).click(function(n){return n.preventDefault(),$div=$(".au-menu",d),$div.toggle(),$(".au-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropsss,.tt_tg,.dropdown-link,.dropdwn").click(function(){$(".au-menu").hide()}),$(".tb").each(function(){var d=$(this);$(".dropsss",d).click(function(n){return n.preventDefault(),$div=$(".tb-menu",d),$div.toggle(),$(".tb-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.tt_tg,.dropdown-link,.dropdwn").click(function(){$(".tb-menu").hide()}),$("html").click(function(){$(".tg-menu").hide()}),$(".tg").each(function(){var d=$(this);$(".tt_tg",d).click(function(n){return n.preventDefault(),$div=$(".tg-menu",d),$div.toggle(),$(".tg-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.dropsss,.dropdown-link,.dropdwn").click(function(){$(".tg-menu").hide()}),$(".dropdown").each(function(){var d=$(this);$(".dropdown-link",d).click(function(n){return n.preventDefault(),$div=$(".dropdown-container",d),$div.toggle(),$(".dropdown-container").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdwn").click(function(){$(".dropdown-container").hide()}),$(".dd").each(function(){var d=$(this);$(".drops",d).click(function(n){return n.preventDefault(),$div=$(".dd-menu",d),$div.toggle(),$(".dd-menu").not($div).hide(),!1})}),$("html,.drop,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn").click(function(){$(".dd-menu").hide()}),$(".dds").each(function(){var d=$(this);$(".dropdwn",d).click(function(n){return n.preventDefault(),$div=$(".dds-menu",d),$div.toggle(),$(".dds-menu").not($div).hide(),!1})}),$("html,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link").click(function(){$(".dds-menu").hide()})
$('#backer .Label button').click(function(){$(this).siblings("#backer .list-label-widget-content").toggle();$('#Header1,.top,.peekar,.main-wrapper,.sidebar-wrapper,.drop,.drops,.dropss,.dropsss,.tt_tg,.dropdown-link,.dropdwn,#footer').click(function(){$("#backer .list-label-widget-content").hide()})})});$('.PopularPosts img').attr('src',function(i,src){return src.replace('w72-h72-p-k-no-nu','s1600')})
$('.recentposts img,#recent-posts img').attr('src',function(i,src){return src.replace('s72-c','s1600')})
$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href"),"0"!=$(window).scrollTop()&&$(this).fadeIn("slow");var o=$(this);$(window).scroll(function(){"0"==$(window).scrollTop()?$(o).fadeOut("slow"):$(o).fadeIn("slow")}),$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}}),$(function(){$(".MD-StoTop").scrollToTop()});jQuery(document).ready(function(e){e(".cd-popup-trigger").on("click",function(i){i.preventDefault(),e(".cd-popup").addClass("is-visible")}),e(".cd-popup").on("click",function(i){(e(i.target).is(".cd-popup-close")||e(i.target).is(".cd-popup"))&&(i.preventDefault(),e(this).removeClass("is-visible"))}),e(".cd-popup").on("click",function(i){(e(i.target).is(".clickbutton")||e(i.target).is(".cd-popup"))&&(i.preventDefault(),e(this).removeClass("is-visible"))}),e(document).keyup(function(i){"27"==i.which&&e(".cd-popup").removeClass("is-visible")})});jQuery(document).ready(function(e){e(".email-popup").on("click",function(p){p.preventDefault(),e(".btn-popup").addClass("is-visible")}),e(".btn-popup").on("click",function(p){(e(p.target).is(".btn-popup-close")||e(p.target).is(".btn-popup"))&&(p.preventDefault(),e(this).removeClass("is-visible"))}),e(document).keyup(function(p){"27"==p.which&&e(".btn-popup").removeClass("is-visible")})});!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(t){function e(){var e=n.settings;if(e.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var o=i(this);return isNaN(o.datetime)||(0===e.cutoff||Math.abs(r(o.datetime))<e.cutoff?t(this).text(a(o.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function i(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:n.datetime(e)});var i=t.trim(e.text());n.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(i.length>0)||n.isTime(e)&&e.attr("title")||e.attr("title",i)}return e.data("timeago")}function a(t){return n.inWords(r(t))}function r(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return a(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var n=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"",suffixFromNow:"vừa đăng",inPast:"bất kỳ lúc nào",seconds:"ít hơn một phút",minute:"1 phút trước",minutes:"%d phút trước",hour:"1 giờ trước",hours:"%d giờ trước",day:"Hôm qua",days:"%d ngày trước",month:"1 tháng trước",months:"%d tháng trước",year:"1 năm trước",years:"%d năm trước",wordSeparator:" ",numbers:[]}},inWords:function(e){function i(i,r){var n=t.isFunction(i)?i(r,e):i,o=a.numbers&&a.numbers[r]||r;return n.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var a=this.settings.strings,r=a.prefixAgo,n=a.suffixAgo;if(this.settings.allowFuture&&0>e&&(r=a.prefixFromNow,n=a.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var o=Math.abs(e)/1e3,s=o/60,u=s/60,m=u/24,l=m/365,d=45>o&&i(a.seconds,Math.round(o))||90>o&&i(a.minute,1)||45>s&&i(a.minutes,Math.round(s))||90>s&&i(a.hour,1)||24>u&&i(a.hours,Math.round(u))||42>u&&i(a.day,1)||30>m&&i(a.days,Math.round(m))||45>m&&i(a.month,1)||365>m&&i(a.months,Math.round(m/30))||1.5>l&&i(a.year,1)||i(a.years,Math.round(l)),c=a.wordSeparator||"";return void 0===a.wordSeparator&&(c=" "),t.trim([r,d,n].join(c))},parse:function(e){var i=t.trim(e);return i=i.replace(/\.\d+/,""),i=i.replace(/-/,"/").replace(/-/,"/"),i=i.replace(/T/," ").replace(/Z/," UTC"),i=i.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),i=i.replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(e){var i=n.isTime(e)?t(e).attr("datetime"):t(e).attr("title");return n.parse(i)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var o={init:function(){o.dispose.call(this);var i=t.proxy(e,this);i();var a=n.settings;a.refreshMillis>0&&(this._timeagoInterval=setInterval(i,a.refreshMillis))},update:function(i){var a=i instanceof Date?i:n.parse(i);t(this).data("timeago",{datetime:a}),n.settings.localeTitle&&t(this).attr("title",a.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:n.parse(n.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var i=t?o[t]:o.init;if(!i)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){i.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),jQuery(document).ready(function(t){t("abbr.timeago").timeago()})
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t;return function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return i(n?n:e)},u,u.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e){var n=t("matches-selector");e.exports=function(t,e,o){for(var i=o?t:t.parentNode;i&&i!==document;){if(n(i,e))return i;i=i.parentNode}}},{"matches-selector":5}],2:[function(t,e){function n(t,e,n,i,r){var a=o.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function o(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var i=t("closest");e.exports=n},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e){function n(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!a.string(e))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(t))return o(t,e,n);if(a.nodeList(t))return i(t,e,n);if(a.string(t))return r(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function r(t,e,n){return c(document.body,t,e,n)}var a=t("./is"),c=t("delegate");e.exports=n},{"./is":3,delegate:2}],5:[function(t,e){function n(t,e){if(i)return i.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var o=Element.prototype,i=o.matchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;e.exports=n},{}],6:[function(t,e){function n(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=n},{}],7:[function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;i>o;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;a>r;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=n},{}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""},t.prototype.initSelection=function(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i["default"])(this.fakeElem),this.copyText()},t.prototype.removeFake=function(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function(){this.selectedText=(0,i["default"])(this.target),this.copyText()},t.prototype.copyText=function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)},t.prototype.handleResult=function(t){t?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function(){this.removeFake()},a(t,[{key:"action",set:function(){var t=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=c})},{select:6}],9:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;return e.hasAttribute(n)?e.getAttribute(n):void 0}var l=i(e),u=i(n),f=i(o),d=function(t){function e(n,o){r(this,e);var i=a(this,t.call(this));return i.resolveOptions(o),i.listenClick(n),i}return c(e,t),e.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText},e.prototype.listenClick=function(t){var e=this;this.listener=(0,f["default"])(t,"click",function(t){return e.onClick(t)})},e.prototype.onClick=function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l["default"]({action:this.action(e),target:this.target(e),text:this.text(e),trigger:e,emitter:this})},e.prototype.defaultAction=function(t){return s("action",t)},e.prototype.defaultTarget=function(t){var e=s("target",t);return e?document.querySelector(e):void 0},e.prototype.defaultText=function(t){return s("text",t)},e.prototype.destroy=function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(u["default"]);t.exports=d})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)}),$(function(){new Clipboard(".copy-text")});
function copyTextToClipboard(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy"),alert("Đã sao chép liên kết!")}catch(o){alert("Không thể sao chép liên kết!")}document.body.removeChild(t)}function CopyLink(){copyTextToClipboard(location.href)}
function setTooltip(t,e){t.tooltip("hide").attr("data-original-title",e).tooltip("show")}function hideTooltip(t){setTimeout(function(){t.tooltip("hide")},1e3)}if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var l="hover"==r?"mouseenter":"focusin",a="hover"==r?"mouseleave":"focusout";this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var l="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,p=a.test(l);p&&(l=l.replace(a,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(l).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),c=s[0].offsetWidth,u=s[0].offsetHeight;if(p){var f=l,d=this.getPosition(this.$viewport);l="bottom"==l&&h.bottom+u>d.bottom?"top":"top"==l&&h.top-u<d.top?"bottom":"right"==l&&h.right+c>d.width?"left":"left"==l&&h.left-c<d.left?"right":l,s.removeClass(f).addClass(l)}var v=this.getCalculatedOffset(l,h,c,u);this.applyPlacement(v,l);var g=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(i.TRANSITION_DURATION):g()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),l=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(l)&&(l=0),e.top+=r,e.left+=l,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var a=o[0].offsetWidth,p=o[0].offsetHeight;"top"==i&&p!=s&&(e.top=e.top+s-p);var h=this.getViewportAdjustedDelta(i,e,a,p);h.left?e.left+=h.left:e.top+=h.top;var c=/top|bottom/.test(i),u=c?2*h.left-n+a:2*h.top-s+p,f=c?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(u,o[0][f],c)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&i instanceof window.SVGElement,r=o?{top:0,left:0}:s?null:e.offset(),l={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,l,a,r)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var l=e.top-s-r.scroll,a=e.top+s-r.scroll+o;l<r.top?n.top=r.top-l:a>r.top+r.height&&(n.top=r.top+r.height-a)}else{var p=e.left-s,h=e.left+s+i;p<r.left?n.left=r.left-p:h>r.right&&(n.left=r.left+r.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),$(".copy-text").tooltip({trigger:"click",placement:"top"});var clipboard=new Clipboard(".copy-text");clipboard.on("success",function(t){var e=$(t.trigger);setTooltip(e,"Copied"),hideTooltip(e)});
$(function(){$(".tr-caption-container,.tr-caption-container a,.separator a").css("margin-left","").css("margin-right",""),$(".tr-caption").css("text-align",""),$(".post-body img").each(function(){var t=$(this),a=document.getElementsByClassName("post-title")[0].innerHTML;t.attr("title",a),t.attr("alt",a)})});
$('#sendBtn').click(function(){FB.ui({method:'send',display:'popup',mobile_iframe:!0,link:location.href,},function(response){})});$('#shareBtn').click(function(){FB.ui({method:'share',display:'popup',mobile_iframe:!0,href:location.href,},function(response){})});$('#feedBtn').click(function(){FB.ui({method:'feed',display:'popup',mobile_iframe:!0,link:location.href,},function(response){})})
jQuery.getScript('//cdn.firebase.com/js/client/2.3.2/firebase.js').done(function() {
  $.each($("a[name]"),function(e,o){var t=$(o).parent().find("#postviews"),n=new Firebase("https://kcb111-cdc3e.firebaseio.com/pages/id/"+$(o).attr("name"));n.once("value",function(e){var a=e.val(),s=!1;null==a&&(a={},a.value=0,a.url=window.location.href,a.id=$(o).attr("name"),s=!0),t.text(a.value),a.value++,"/"!=window.location.pathname&&(s?n.set(a):n.child("value").set(a.value))})});});