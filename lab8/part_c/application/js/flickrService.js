$(document).ready(function(){
    loadImages();
});

function loadImages()
{
    var txt = document.getElementById('txt').value;
    // Create a URI for the Flickr web service API call
    var urlFlickr = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(urlFlickr,
        {
        tags: txt,
        tagmode:"all",
        format: "json"
        },
        function(data) {
        $.each(data.items, function(i,item){
            $("<img/>").attr("src", item.media.m).appendTo("#images");
            if ( i == 3 ) return false;
        });
    });
}


