$(document).ready(function(){
   $(".button-collapse").sideNav();
   $("a#navJavascript").click(function(){
     console.log('cou');
  $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags=javascript&format=json&jsoncallback=?',
  {
    tags: $("a#navJavascript").text(),
    tagmode:"any",
    format:"json"
  },
    function(data){
      $.each(data.items, function(i,item){
        $("<img/>").attr("src", item.media.m).prependTo("#photos");
        if (i == 10)return false;

      });

  });



});
      //jquery : boucle sur datas each()
      //append()
      //thumbnailUrl()






    /*  var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

      		var photoSelection = $(this).text();

      		var flickrOptions = {
      			tags: photoSelection,
      			format: "json"
      		};

      		function displayPhotos(data){

      			var photoHTML = '<ul>'

      			$.each( data.items, function(i, photo){
      				photoHTML += '<li class="grid-25 tablet-grid-50">';
      				photoHTML += '<a href="' + photo.link + '" class="image">';
      				photoHTML += '<img src="' + photo.media.m + '"></a></li>'
      			});

      			photoHTML += '</ul>';

      			$('#photos').html(photoHTML);
      		}

      		$.getJSON(flickrAPI, flickrOptions, displayPhotos);

      	}); //end click



  });


//$('a#nav').click(function(){





//});*/








});//fermeture jquery
