﻿/*! Nhipsong24h.net */
var Script=void jQuery(".nav-menu2 .sub-menu > a").click(function(){var o=jQuery(".sub-menu.open",$(".nav-menu2"));o.removeClass("open"),jQuery(".dropdown").addClass("open"),jQuery(".dropdown",o).removeClass("open"),jQuery(".sub",o).slideUp(300);var n=jQuery(this).next();n.is(":visible")?(jQuery(".dropdown",jQuery(this)).removeClass("open"),jQuery(this).parent().removeClass("open"),n.slideUp(300)):(jQuery(".dropdown",jQuery(this)).addClass("open"),jQuery(this).parent().addClass("open"),n.slideDown(300));var s=$(this).offset();diff=300-s.top,diff>0?$(".nav-menu2").scrollTo("-="+Math.abs(diff),500):$(".nav-menu2").scrollTo("+="+Math.abs(diff),500)});$(window).scroll(function(){$(window).scrollTop()>125?($("#main_menu").css("position","fixed"),$("#top-banner").css("margin-top","45px")):($("#main_menu").css("position","relative"),$("#top-banner").css("margin-top","0px"))}),$(document).ready(function(){$("#info2").click(function(){$("#nav-menu1").toggleClass("shows")}),$(".toggleMenu").click(function(){$(".dropdowns,.darkshadow").toggleClass("shows")}),$(".darkshadow").click(function(){$(".dropdowns,.darkshadow").removeClass("shows")}),$(".showsearch,#showsearch2").click(function(){$("#search-box").toggleClass("shows")}),$(".recentposts img").attr("src",function(o,n){return n.replace("s72-c","s1600")}),$(".PopularPosts img").attr("src",function(o,n){return n.replace("w72-h72-p-k-no-nu","s1600")});var o=new Array("Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"),n=new Array("1","2","3","4","5","6","7","8","9","10","11","12"),s=new Date,e=o[s.getDay()]+", "+s.getDate()+"/"+n[s.getMonth()]+"/"+s.getFullYear()+" "+s.getHours()+":"+s.getMinutes()+" GMT+7";$(".tm").html(e)});var body=$("html, body");$("#to_top").click(function(o){o.preventDefault(),body.animate({scrollTop:0},600,"swing")}),$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href"),"0"!=$(window).scrollTop()&&$(this).fadeIn("slow");var o=$(this);$(window).scroll(function(){"0"==$(window).scrollTop()?$(o).fadeOut("slow"):$(o).fadeIn("slow")}),$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}}),$(function(){$(".MD-StoTop").scrollToTop()});
!function(i){var e="https://1.bp.blogspot.com/-KV2XR964ylU/VmPf26HwlsI/AAAAAAAAASI/7l-4hZ1NV7o/s000/ajax-loader.gif",a="",o=null,n="div.blog-posts",d=!1,t=(i(window),i(document),/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);function p(){d||(d=!0,a?(o.find("a").hide(),o.find("img").show(),i.ajax(a,{dataType:"html"}).done(function(e){var p=i("<div></div>").append(e.replace(t,"")),r=p.find("a.blog-pager-older-link");r?a=r.attr("href"):(a="",o.hide());var s,l=p.find(n).children(".post");i(n).append(l),window._gaq&&window._gaq.push(["_trackPageview",a]),window.gapi&&window.gapi.plusone&&window.gapi.plusone.go&&window.gapi.plusone.go(),window.disqus_shortname&&(s=window.disqus_shortname,i.getScript("http://"+s+".disqus.com/blogger_index.js")),window.FB&&window.FB.XFBML&&window.FB.XFBML.parse&&window.FB.XFBML.parse(),o.find("img").hide(),o.find("a").show(),d=!1})):o.hide())}i(document).ready(function(){if("item"!=_WidgetManager._GetAllData().blog.pageType&&(a=i("a.blog-pager-older-link").attr("href"))){var n=i('<a class="loadpost" href="javascript:;" title="Bấm để xem thêm">xem thêm</a>');n.click(p);var d=i('<img src="'+e+'" style="display: none;">');(o=i('<div style="text-align:center;clear:both;"></div>')).append(n),o.append(d),o.insertBefore(i("#blog-pager")),i("#blog-pager").hide()}})}(jQuery);
$(function(){$(".tr-caption-container,.tr-caption-container a,.separator a").css("margin-left","").css("margin-right",""),$(".tr-caption").css("text-align",""),$(".post-body img").each(function(){var t=$(this),a=document.getElementsByClassName("post-title")[0].innerHTML;t.attr("title",a),t.attr("alt",a)})});
(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(b){a.extend(c,b)}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear")}else{if(e++>c.failurelimit){return false}}});var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){var b=this;if(undefined==a(b).attr("original")){a(b).attr("original",a(b).attr("src"))}if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr("src",c.placeholder)}else{a(b).removeAttr("src")}b.loaded=false}else{b.loaded=true}a(b).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true}).attr("src",a(b).attr("original"))}});if("scroll"!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger("appear")}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop()}else{var d=a(c.container).offset().top+a(c.container).height()}return d<=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft()}else{var d=a(c.container).offset().left+a(c.container).width()}return d<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop()}else{var d=a(c.container).offset().top}return d>=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft()}else{var d=a(c.container).offset().left}return d>=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container:window})"})})(jQuery);$(function(){$(".post img").lazyload({placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",effect:"fadeIn",threshold:"0"})})
