// function loadGallery(e){
//     newMedImage=jQuery(".detail-med-src.preload img").first(),
//     jQuery(".detail-med-src.preload img").first().remove(),newMedImage.attr("src",newMedImage.attr("data-src")),
//     newMedImage.attr("data-src",null),
//     jQuery(".detail-med-src.loaded").append(newMedImage),
//     newLargeImage=jQuery(".detail-large-src.preload img").first(),
//     jQuery(".detail-large-src.preload img").first().remove(),
//     newLargeImage.attr("src",newLargeImage.attr("data-src")),
//     newLargeImage.attr("data-src",null),
//     jQuery(".detail-large-src.loaded").append(newLargeImage),
//     jQuery("#detail-large-"+e).load(function(){jQuery("#image-thumb-"+e).toggleClass("visible",!0),
//     e++,
//     jQuery(".detail-med-src.preload img").length?loadGallery(e):(jQuery(".detail-med-src.preload").each(function(){jQuery(this).remove()}),
//     jQuery(".detail-large-src.preload").each(function(){jQuery(this).remove()}))})
// }
// function checkProductInventory(e){
//     var r=new Array(3200,3201,3202,3203,3204),
//     a=new Array(3199,3072,3073,3074,3075,3076,3077,3078);
//     jQuery.ajax({url:e,type:"GET",dataType:"xml",success:function(e){
//       var t="apparelsize"===jQuery(e).find("AttributeSetName").text(),l=r,o=new Array;
//         for(jQuery(e).find("Product").each(function(){
//             var e=jQuery(this).find("OptionId").text();
//             ""!==e&&o.push(e)}),o.length||this.error(),n=0;
//             n<o.length;n++)t&&inArray(o[n],r)&&(l=a),
//             jQuery("#detail-size-select-"+o[n]).parent().find("label").toggleClass("disabled",!1),
//             jQuery("#detail-size-select-"+o[n]).prop("disabled",!1);
//             t&&jQuery("#detail-all-size li").each(function(){
//                 for(i=0;i<l.length;i++)jQuery(this).find("#detail-size-select-"+l[i]).parent().hide()})},
//                 error:function(){jQuery(".detail-display-info-section.detail-display-bag.default").hide(),
//                 jQuery("#size-selection").hide(),jQuery("#detail-sold-out").show()}})
// }

jQuery(document).click(function(){
    jQuery(".detail-description-readmore").click(function(){
    jQuery(this).hasClass("read")?(
    jQuery(this).toggleClass("read",!1),
    jQuery(".detail-description .excerpt-extended").hide(),
    jQuery(".detail-description.content").fadeIn(),
    jQuery(this).html(Translator.translate("Show Less"))):(
    jQuery(".detail-description.content").fadeOut(function(){
    jQuery(".detail-description .excerpt-extended").fadeIn()}),
    jQuery(this).toggleClass("read",!0),
    jQuery(this).html(Translator.translate("Read More")))}),
    jQuery(".thumb-link").click(function(){location.href=
    jQuery(this).find("a").attr("href")}),
    jQuery(".primary-img").elevateZoom({
        zoomWindowFadeIn:200,
        zoomWindowFadeOut:0,
        lensFadeIn:200,lensFadeOut:100,
        borderSize:0,
        cursor:"crosshair;cursor:zoom-in",
        zoomWindowWidth:445,
        zoomWindowHeight:650,
        lensColour:"rgba(255, 255, 255, 0.4)",
        lensOpacity:1,
        lensBorderSize:1,
        lensBorderColour:"#fff"}),
        
    jQuery(".primary-img").attr("src",
    jQuery("#image-thumb-1").attr("data-primary")),
    jQuery("#detail-display-icon li").hover(function(){
    jQuery("#detail-display-icon li").toggleClass("selected",!1),
    jQuery(this).toggleClass("selected",!0),
    jQuery(".primary-img").attr("src",
    jQuery(this).attr("data-primary")),
    jQuery(".primary-img").attr("attr.data-zoom-image",
    jQuery(this).attr("data-zoom")),
    jQuery(".zoomWindow").css({"background-image":"url('"+
    jQuery(".primary-img").attr("attr.data-zoom-image")+"')"})})
    });
