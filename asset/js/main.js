(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        $('.video-play-btn').magnificPopup();
        $(".count").counterUp({
        	delay: 10,
        	time: 2000
        });
        $('select').niceSelect();
        $('#map')
              .gmap3({
                center:[22.795495,89.4164288],
                zoom:10,
                scrollwheel:false,
                mapTypeId: "shadeOfGrey", // to select it directly
                mapTypeControlOptions: {
                  mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                }
              })
              .marker({
                position: [22.8067491,89.4148064],
                icon: 'http://maps.google.com/mapfiles/marker_green.png'
              })
              .styledmaptype(
                "shadeOfGrey",
                [
                  {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#8D7A55"},{"lightness":40}]},
                  {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#fff"},{"lightness":16}]},
                  {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                  {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
                  {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
                  {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
                  {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
                  {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#EDEDED"},{"lightness":17}]},
                  {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#EDEDED"},{"lightness":29},{"weight":0.2}]},
                  {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#EDEDED"},{"lightness":18}]},
                  {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#EDEDED"},{"lightness":16}]},
                  {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#EDEDED"},{"lightness":19}]},
                  {"featureType":"water","elementType":"geometry","stylers":[{"color":"#C8D7D4"},{"lightness":17}]}
                ],
                {name: "Shades of Grey"}
              );
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));