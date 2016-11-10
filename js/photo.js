$(document).ready(function(){
   $(".button-collapse").sideNav();
//bouton nav javascript
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
//bouton nav php
$("a#navPhp").click(function(){
  console.log('cou');
$.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags=php&format=json&jsoncallback=?',
{
 tags: $("a#navPhp").text(),
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
//bouton nav angular
$("a#navAngular").click(function(){
  console.log('cou');
$.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags=php&format=json&jsoncallback=?',
{
 tags: $("a#navAngular").text(),
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
//bouton nav html
$("a#navHtml").click(function(){
  console.log('cou');
$.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags=html&format=json&jsoncallback=?',
{
 tags: $("a#navHtml").text(),
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
//bouton nav css
$("a#navCss").click(function(){
  console.log('cou');
$.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags=css&format=json&jsoncallback=?',
{
 tags: $("a#navCss").text(),
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

//Quand je saisis un texte, cela s'ajoute un bouton “actif” au Menu des Bouttons et quand je clique sur ce bouton cela me charges sur Flickr les images en conséquent
var saisi = $('input.saisi').val();
var search = $('span.search').val();
search == saisi;
if (saisi){

  $('a#navPlus').toggle()
}

//5/ Afficher les tags saisies du formulaire avec des Chips de Materializecss sous le champs input Tags
$('.chips').on('chip.add', function(e, chip){
    // you have the added chip here
  });






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
