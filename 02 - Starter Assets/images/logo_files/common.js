(function($){function getBroswer(){var sys={};var ua=navigator.userAgent.toLowerCase();var s;(s=ua.match(/edge\/([\d.]+)/))?sys.edge=s[1]:(s=ua.match(/rv:([\d.]+)\) like gecko/))?sys.ie=s[1]:(s=ua.match(/msie ([\d.]+)/))?sys.ie=s[1]:(s=ua.match(/firefox\/([\d.]+)/))?sys.firefox=s[1]:(s=ua.match(/chrome\/([\d.]+)/))?sys.chrome=s[1]:(s=navigator.vendor.toLowerCase().match(/chrome\/([\d.]+)/))?sys.chrome=s[1]:(s=ua.match(/opera.([\d.]+)/))?sys.opera=s[1]:(s=ua.match(/version\/([\d.]+).*safari/))?sys.safari=s[1]:0;if(sys.edge)return{broswer:"Edge",version:sys.edge};if(sys.ie)return{broswer:"IE",version:sys.ie};if(sys.firefox)return{broswer:"Firefox",version:sys.firefox};if(sys.chrome)return{broswer:"Chrome",version:sys.chrome};if(sys.opera)return{broswer:"Opera",version:sys.opera};if(sys.safari)return{broswer:"Safari",version:sys.safari};return{broswer:"",version:"0"};}
var u=navigator.userAgent;var isAndroid=u.indexOf('Android')>-1||u.indexOf('Adr')>-1;var isiOS=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);var isSafari=getBroswer().broswer=="Safari";if(isAndroid){$(".mobile_ad_ban.android").show();$(".menu_bg").hide();$(".mobile_app_android").show();$(".mobile_app_ios").hide();}
else if(isiOS){if(isSafari){$(".mobile_ad_ban.ios").hide();if(window.location.href.indexOf('apps/logo')!=-1)
$(".menu_bg").hide();else
$(".menu_bg").show();}else
{$(".mobile_ad_ban.ios").show();$(".menu_bg").hide();}
$(".mobile_app_ios").show();$(".mobile_app_android").hide();}
var languageBox=".language_box"
$(languageBox+" .language").click(function(){$(languageBox+" .lang_list").toggle();$(this).toggleClass('active');return false;});$(languageBox+" .lang_list li").click(function(){$(languageBox+" .language>span").html($(this).find("a").html());$(languageBox+" .lang_list").hide();$(languageBox+" .language").removeClass('active');});$("body").click(function(){$(languageBox+" .lang_list").hide();$(languageBox+" .language").removeClass('active');});var head=$(".u-collapse").find("h3");$(head).each(function(index,value){$(value).append("<img src='/images/misc/faq-arrow.svg' class='u-collapse-img' data-alt='"+index+"'/>");});$(".u-collapse h3").click(function(){var index=$(this).find("img").attr("data-alt");var divItem=$(".u-collapse > div").eq(index);var $imgItem=$(this).find("img");if($imgItem.hasClass('active')){$imgItem.removeClass('active');$imgItem.css("display","none");$(this).css({"color":"#404040"});$imgItem.animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(144deg)");$(this).animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(108deg)");$(this).animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(72deg)");$(this).animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(36deg)");$(this).animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(0deg)");})})})})});}else{$(this).css({"color":"#4FC5B2"});$imgItem.css("display","block");$imgItem.addClass('active');$imgItem.animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(36deg)");$(this).animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(72deg)");$(this).animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(108deg)");$(this).animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(144deg)");$(this).animate({lineHeight:"1em"},20,function(){$(this).css("transform","rotateZ(180deg)");})})})})});}
setTimeout(function(){divItem.slideToggle(200);}.bind(this),100)});$(document).ready(function(){$('#video_play a').on('click',function(e){e.preventDefault();var u=$(this).attr('data-href');if($(window).width()>800){$('#mPlayer div').html('<iframe width="853" height="480" src="'+u+'" frameborder="0" allowfullscreen></iframe>');$('#mPlayer').fadeIn(500);}else{window.location.href=u;}});$('#mPlayer').on('click',function(e){$('#mPlayer').fadeOut(500);$('#mPlayer div').empty();});$(".promo_ctn_close").click(function(){$(".web_promo_bg").slideUp(200);window.localStorage.setItem("show_promo",true);});});$(".search_icon").on("click",function(e){var keyword=$("#searchInput").val();keywordToApp(keyword,"search");});$(".search_box").keydown(function(e){if(e.keyCode==13){var keyword=$("#searchInput").val();keywordToApp(keyword,"search");}})
$(".rcm_tag li").click(function(e){var index=$(e.target).index();if(index!=0){var keyword=$(e.target).html();keywordToApp(keyword,"tagClick");}});function keywordToApp(keyword,type){if(!keyword){return;}
keyword=stripscript(keyword);var newKeyword=keyword.trim().replace(/\s+/g,"-").toLowerCase();var base=new Base64();window.open("https://www.designevo.com/"+currentLanguageHref()+"apps/logo/?keyword="+base.encode(newKeyword),"_blank");if(type=="tagClick"){ga('send','event','tag_search','click',keyword,1);}else{ga('send','event','web_search','click','search_icon',1);}}
function stripscript(s){var pattern=new RegExp("[`~!@#$^&*%()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
var rs="";for(var i=0;i<s.length;i++){rs=rs+s.substr(i,1).replace(pattern,'');}
return rs;}
function currentLanguageHref(){var url=document.location.href;var tag='';if(url.indexOf('/cn/')!=-1)
tag='cn/';else if(url.indexOf('/tw/')!=-1)
tag='tw/';else if(url.indexOf('/de/')!=-1)
tag='de/';else if(url.indexOf('/es/')!=-1)
tag='es/';else if(url.indexOf('/fr/')!=-1)
tag='fr/';else if(url.indexOf('/pt/')!=-1)
tag='pt/';else if(url.indexOf('/jp/')!=-1)
tag='jp/';return tag;}
function Base64(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@/=";this.encode=function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=_utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+
_keyStr.charAt(enc1)+_keyStr.charAt(enc2)+
_keyStr.charAt(enc3)+_keyStr.charAt(enc4);}
return output;}
this.decode=function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=_keyStr.indexOf(input.charAt(i++));enc2=_keyStr.indexOf(input.charAt(i++));enc3=_keyStr.indexOf(input.charAt(i++));enc4=_keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}}
output=_utf8_decode(output);return output;}
_utf8_encode=function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;}
_utf8_decode=function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
$("document").ready(function(){if(localStorage.getItem("cookie_privacy_shown")!=="true"){$("<div id=\"cookie_privacy\" style=\"position: fixed;bottom: 0;width: 100%;height: 54px;background: rgba(0,0,0, 0.7);\"><p style=\"padding-left: 40px;font-size: 16px;line-height: 54px;font-weight: 500;color: #fff;\">We use cookies to ensure that you get the best experience on our website. By using this website, you consent to the use of cookies. <a onmouseenter=\"this.style.color='#26B7A0';\" onmouseleave=\"this.style.color='#4FC5B2';\" href=\"/cookie_policy.html\" style=\"color: #4FC5B2;text-decoration: underline !important;cursor: pointer;\">Learn more</a><button style=\"float: right;margin-top: 9px;margin-right: 75px;width: 100px;height: 34px;line-height: 34px;font-size: 16px;font-weight: 500;color: #fff;background: #4FC5B2;border: none;border-radius: 2px;\" onmouseenter=\"this.style.background='#00baa9';\" onmouseleave=\"this.style.background='#4FC5B2';\" onclick=\"jQuery('#cookie_privacy').hide(); localStorage.setItem('cookie_privacy_shown', true)\">Got It</button></p></div>").appendTo("body");}});})(jQuery)