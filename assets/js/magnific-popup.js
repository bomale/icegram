// Magnific Popup v1.0.0 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+retina
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,o,a,r,s="Close",l="BeforeClose",c="AfterClose",p="BeforeAppend",d="MarkupParse",u="Open",f="Change",m="mfp",g="."+m,v="mfp-ready",h="mfp-removing",C="mfp-prevent-close",y=function(){},w=!!window.jQuery,I=e(window),b=function(e,n){t.ev.on(m+e+g,n)},k=function(t,n,i,o){var a=document.createElement("div")
return a.className="mfp-"+t,i&&(a.innerHTML=i),o?n&&n.appendChild(a):(a=e(a),n&&a.appendTo(n)),a},S=function(n,i){t.ev.triggerHandler(m+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},T=function(n){return n===r&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),r=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new y,t.init(),e.magnificPopup.instance=t)},E=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"]
if(void 0!==e.transition)return!0
for(;t.length;)if(t.pop()+"Transition"in e)return!0
return!1}
y.prototype={constructor:y,init:function(){var n=navigator.appVersion
t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=E(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o
if(n.isObj===!1){t.items=n.items.toArray(),t.index=0
var r,s=n.items
for(o=0;o<s.length;o++)if(r=s[o],r.parsed&&(r=r.el[0]),r===n.el[0]){t.index=o
break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0
if(t.isOpen)return void t.updateItemHTML()
t.types=[],a="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+g,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+g,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading))
var l=e.magnificPopup.modules
for(o=0;o<l.length;o++){var c=l[o]
c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}S("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(b(d,function(e,t,n,i){n.close_replaceWith=T(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(T())),t.st.alignTop&&(a+=" mfp-align-top"),t.wrap.css(t.fixedContentPos?{overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}:{top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup"+g,function(e){27===e.keyCode&&t.close()}),I.on("resize"+g,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a)
var p=t.wH=I.height(),f={}
if(t.fixedContentPos&&t._hasScrollBar(p)){var m=t._getScrollbarSize()
m&&(f.marginRight=m)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden")
var h=t.st.mainClass
return t.isIE7&&(h+=" mfp-ie7"),h&&t._addClassToMFP(h),t.updateItemHTML(),S("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),i.on("focusin"+g,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(p),S(u),n},close:function(){t.isOpen&&(S(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(h),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){S(s)
var n=h+" "+v+" "
if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""}
t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup"+g+" focusin"+g),t.ev.off(g),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),t.st.showCloseBtn&&(!t.st.closeBtnInside||t.currTemplate[t.currItem.type]===!0)&&t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,S(c)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n
t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height()
t.fixedContentPos||t.wrap.css("height",t.wH),S("Resize")},updateItemHTML:function(){var n=t.items[t.index]
t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index))
var i=n.type
if(S("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var a=t.st[i]?t.st[i].markup:!1
S("FirstMarkupParse",a),a?t.currTemplate[i]=e(a):t.currTemplate[i]=!0}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder")
var r=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i])
t.appendContent(r,i),n.preloaded=!0,S(f,n),o=n.type,t.container.prepend(t.contentContainer),S("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(T()):t.content=e:t.content="",S(p),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n]
if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var a=t.types,r=0;r<a.length;r++)if(o.el.hasClass("mfp-"+a[r])){i=a[r]
break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,S("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)}
n||(n={})
var o="click.magnificPopup"
n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var a=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick
if(a||2!==n.which&&!n.ctrlKey&&!n.metaKey){var r=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn
if(r)if(e.isFunction(r)){if(!r.call(t))return!0}else if(I.width()<r)return!0
n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),!i&&"loading"===e&&(i=t.st.tLoading)
var o={status:e,text:i}
S("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(C)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick
if(i&&o)return!0
if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0
if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0
return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o
i.data&&(n=e.extend(i.data,n)),S(d,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0
if(o=e.split("_"),o.length>1){var i=t.find(g+"-"+o[0])
if(i.length>0){var a=o[1]
"replaceWith"===a?i[0]!==n[0]&&i.replaceWith(n):"img"===a?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(g+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div")
e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:y.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_()
var i=e(this)
if("string"==typeof n)if("open"===n){var o,a=w?i.data("magnificPopup"):i[0].magnificPopup,r=parseInt(arguments[1],10)||0
a.items?o=a.items[r]:(o=i,a.delegate&&(o=o.find(a.delegate)),o=o.eq(r)),t._openClick({mfpEl:o},i,a)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1))
else n=e.extend(!0,{},n),w?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n)
return i}
var P,O,x,z="inline",M=function(){x&&(O.after(x.addClass(P)).detach(),x=null)}
e.magnificPopup.registerModule(z,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(z),b(s+"."+z,function(){M()})},getInline:function(n,i){if(M(),n.src){var o=t.st.inline,a=e(n.src)
if(a.length){var r=a[0].parentNode
r&&r.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),x=a.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),a=e("<div>")
return n.inlineElement=a,a}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}})
var B,H=function(n){if(n.data&&void 0!==n.data.title)return n.data.title
var i=t.st.image.titleSrc
if(i){if(e.isFunction(i))return i.call(t,n)
if(n.el)return n.el.attr(i)||""}return""}
e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image"
t.types.push("image"),b(u+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),b(s+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),I.off("resize"+g)}),b("Resize"+i,t.resizeImage),t.isLowIE&&b("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem
if(e&&e.img&&t.st.image.verticalFit){var n=0
t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,B&&clearInterval(B),e.isCheckingImgSize=!1,S("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(a){B&&clearInterval(B),B=setInterval(function(){return i.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval(B),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},a)}
o(1)},getImage:function(n,i){var o=0,a=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,S("ImageLoadComplete")):(o++,200>o?setTimeout(a,100):r()))},r=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img")
if(l.length){var c=document.createElement("img")
c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:H(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(B&&clearInterval(B),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}})
var F,A=function(){return void 0===F&&(F=void 0!==document.createElement("p").style.MozTransform),F}
e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom"
if(n.enabled&&t.supportsTransition){var o,a,r=n.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition"
return o["-webkit-"+a]=o["-moz-"+a]=o["-o-"+a]=o[a]=i,t.css(o),t},p=function(){t.content.css("visibility","visible")}
b("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void p()
a=c(e),a.css(t._getOffset()),t.wrap.append(a),o=setTimeout(function(){a.css(t._getOffset(!0)),o=setTimeout(function(){p(),setTimeout(function(){a.remove(),e=a=null,S("ZoomAnimationEnded")},16)},r)},16)}}),b(l+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=r,!e){if(e=t._getItemToZoom(),!e)return
a=c(e)}a.css(t._getOffset(!0)),t.wrap.append(a),t.content.css("visibility","hidden"),setTimeout(function(){a.css(t._getOffset())},16)}}),b(s+i,function(){t._allowZoom()&&(p(),a&&a.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i
i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)
var o=i.offset(),a=parseInt(i.css("padding-top"),10),r=parseInt(i.css("padding-bottom"),10)
o.top-=e(window).scrollTop()-a
var s={width:i.width(),height:(w?i.innerHeight():i[0].offsetHeight)-r-a}
return A()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}})
var L="retina"
e.magnificPopup.registerModule(L,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio
n=isNaN(n)?n():n,n>1&&(b("ImageHasSize."+L,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),b("ElementParse."+L,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),_()})
