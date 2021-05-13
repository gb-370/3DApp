$(document).ready(function(){
    loadImages();
});

function loadImages()
{
    var txt = "Sprite Bottle";
    // Create a URI for the Flickr web service API call
    var urlFlickr = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(urlFlickr,
        {
        tags: txt,
        tagmode:"all",
        format: "json"
        },
        function(data) {
            var images = "";

            $.each(data.items, function(i,item){
                images += "<img class='card-img-top img-thumbnail' src='" + item.media.m + "'/>";
                if ( i == 3 ){
                    document.getElementById("gallery1").innerHTML = images;
                    return false;
                } 
            });
    });
}


