function setTooltip(t,e){t.tooltip("hide").attr("data-original-title",e).tooltip("show")}function hideTooltip(t){setTimeout(function(){t.tooltip("hide")},1e3)}if($("#backer .Label button").click(function(){$(this).siblings("#backer .list-label-widget-content").toggle()}),$(".PopularPosts img").attr("src",function(t,e){return e.replace("w72-h72-p-k-no-nu","s1600")}),$(".recentposts img").attr("src",function(t,e){return e.replace("s72-c","s1600")}),jQuery(document).ready(function(t){t(".cd-popup-trigger").on("click",function(e){e.preventDefault(),t(".cd-popup").addClass("is-visible")}),t(".cd-popup").on("click",function(e){(t(e.target).is(".cd-popup-close")||t(e.target).is(".cd-popup"))&&(e.preventDefault(),t(this).removeClass("is-visible"))}),t(".cd-popup").on("click",function(e){(t(e.target).is(".clickbutton")||t(e.target).is(".cd-popup"))&&(e.preventDefault(),t(this).removeClass("is-visible"))}),t(document).keyup(function(e){"27"==e.which&&t(".cd-popup").removeClass("is-visible")})}),jQuery(document).ready(function(t){t(".email-popup").on("click",function(e){e.preventDefault(),t(".btn-popup").addClass("is-visible")}),t(".btn-popup").on("click",function(e){(t(e.target).is(".btn-popup-close")||t(e.target).is(".btn-popup"))&&(e.preventDefault(),t(this).removeClass("is-visible"))}),t(document).keyup(function(e){"27"==e.which&&t(".btn-popup").removeClass("is-visible")})}),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Clipboard=t()}}(function(){return function t(e,i,o){function n(s,a){if(!i[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var p=i[s]={exports:{}};e[s][0].call(p.exports,function(t){var i=e[s][1][t];return n(i||t)},p,p.exports,t,e,i,o)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(t,e){var i=t("matches-selector");e.exports=function(t,e,o){for(var n=o?t:t.parentNode;n&&n!==document;){if(i(n,e))return n;n=n.parentNode}}},{"matches-selector":5}],2:[function(t,e){var i=t("closest");e.exports=function(t,e,o,n,r){var s=function(t,e,o,n){return function(o){o.delegateTarget=i(o.target,e,!0),o.delegateTarget&&n.call(t,o)}}.apply(this,arguments);return t.addEventListener(o,s,r),{destroy:function(){t.removeEventListener(o,s,r)}}}},{closest:1}],3:[function(t,e,i){i.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},i.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||i.node(t[0]))},i.string=function(t){return"string"==typeof t||t instanceof String},i.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e){var i=t("./is"),o=t("delegate");e.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return r=t,s=e,a=n,r.addEventListener(s,a),{destroy:function(){r.removeEventListener(s,a)}};var r,s,a,l,c,p,u,h,f;if(i.nodeList(t))return l=t,c=e,p=n,Array.prototype.forEach.call(l,function(t){t.addEventListener(c,p)}),{destroy:function(){Array.prototype.forEach.call(l,function(t){t.removeEventListener(c,p)})}};if(i.string(t))return u=t,h=e,f=n,o(document.body,u,h,f);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},{"./is":3,delegate:2}],5:[function(t,e){var i=Element.prototype,o=i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=function(t,e){if(o)return o.call(t,e);for(var i=t.parentNode.querySelectorAll(e),n=0;n<i.length;++n)if(i[n]==t)return!0;return!1}},{}],6:[function(t,e){e.exports=function(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}},{}],7:[function(t,e){function i(){}i.prototype={on:function(t,e,i){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){function o(){n.off(t,o),e.apply(i,arguments)}var n=this;return o._=e,this.on(t,o,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),o=0,n=i.length;n>o;o++)i[o].fn.apply(i[o].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),o=i[t],n=[];if(o&&e)for(var r=0,s=o.length;s>r;r++)o[r].fn!==e&&o[r].fn._!==e&&n.push(o[r]);return n.length?i[t]=n:delete i[t],this}},e.exports=i},{}],8:[function(t,e,i){!function(o,n){if(void 0!==i)n(e,t("select"));else{var r={exports:{}};n(r,o.select),o.clipboardAction=r.exports}}(this,function(t,e){"use strict";var i,o=(i=e)&&i.__esModule?i:{default:i},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),s=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""},t.prototype.initSelection=function(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()},t.prototype.removeFake=function(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function(){this.selectedText=(0,o.default)(this.target),this.copyText()},t.prototype.copyText=function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)},t.prototype.handleResult=function(t){t?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function(){this.removeFake()},r(t,[{key:"action",set:function(){var t=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":n(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=s})},{select:6}],9:[function(t,e,i){!function(o,n){if(void 0!==i)n(e,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var r={exports:{}};n(r,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=r.exports}}(this,function(t,e,i,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var i="data-clipboard-"+t;return e.hasAttribute(i)?e.getAttribute(i):void 0}var s=n(e),a=n(i),l=n(o),c=function(t){function e(i,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this));return n.resolveOptions(o),n.listenClick(i),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.resolveOptions=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText},e.prototype.listenClick=function(t){var e=this;this.listener=(0,l.default)(t,"click",function(t){return e.onClick(t)})},e.prototype.onClick=function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(e),target:this.target(e),text:this.text(e),trigger:e,emitter:this})},e.prototype.defaultAction=function(t){return r("action",t)},e.prototype.defaultTarget=function(t){var e=r("target",t);return e?document.querySelector(e):void 0},e.prototype.defaultText=function(t){return r("text",t)},e.prototype.destroy=function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(a.default);t.exports=c})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)}),$(function(){new Clipboard(".copy-text")}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),function(t){"use strict";var e=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};e.VERSION="3.3.7",e.TRANSITION_DURATION=150,e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},e.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),r=n.length;r--;){var s=n[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",l="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return(e=t.extend({},this.getDefaults(),this.$element.data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},e.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},e.prototype.show=function(){var i=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!o)return;var n=this,r=this.tip(),s=this.getUID(this.type);this.setContent(),r.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&r.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,c=l.test(a);c&&(a=a.replace(l,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var p=this.getPosition(),u=r[0].offsetWidth,h=r[0].offsetHeight;if(c){var f=a,d=this.getPosition(this.$viewport);a="bottom"==a&&p.bottom+h>d.bottom?"top":"top"==a&&p.top-h<d.top?"bottom":"right"==a&&p.right+u>d.width?"left":"left"==a&&p.left-u<d.left?"right":a,r.removeClass(f).addClass(a)}var g=this.getCalculatedOffset(a,p,u,h);this.applyPlacement(g,a);var y=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",y).emulateTransitionEnd(e.TRANSITION_DURATION):y()}},e.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,r=o[0].offsetHeight,s=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top+=s,e.left+=a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,c=o[0].offsetHeight;"top"==i&&c!=r&&(e.top=e.top+r-c);var p=this.getViewportAdjustedDelta(i,e,l,c);p.left?e.left+=p.left:e.top+=p.top;var u=/top|bottom/.test(i),h=u?2*p.left-n+l:2*p.top-r+c,f=u?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(h,o[0][f],u)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(i){function o(){"in"!=n.hoverState&&r.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),i&&i()}var n=this,r=t(this.$tip),s=t.Event("hide.bs."+this.type);return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",o).emulateTransitionEnd(e.TRANSITION_DURATION):o(),this.hoverState=null,this)},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(e){var i=(e=e||this.$element)[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var r=window.SVGElement&&i instanceof window.SVGElement,s=o?{top:0,left:0}:r?null:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,l,s)},e.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},e.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,l=e.top+r-s.scroll+o;a<s.top?n.top=s.top-a:l>s.top+s.height&&(n.top=s.top+s.height-l)}else{var c=e.left-r,p=e.left+r+i;c<s.left?n.left=s.left-c:p>s.right&&(n.left=s.left+s.width-p)}return n},e.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},e.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},e.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var i=this;e&&((i=t(e.currentTarget).data("bs."+this.type))||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),r="object"==typeof i&&i;!n&&/destroy|hide/.test(i)||(n||o.data("bs.tooltip",n=new e(this,r)),"string"==typeof i&&n[i]())})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),$(".copy-text").tooltip({trigger:"click",placement:"top"});var clipboard=new Clipboard(".copy-text");clipboard.on("success",function(t){var e=$(t.trigger);setTooltip(e,"Copied"),hideTooltip(e)}),$(function(){$(".tr-caption-container,.tr-caption-container a,.separator a").css("margin-left","").css("margin-right",""),$(".tr-caption").css("text-align",""),$(".post-body img").each(function(){var t=$(this),e=document.getElementsByClassName("post-title")[0].innerHTML;t.attr("title",e),t.attr("alt",e)})});
