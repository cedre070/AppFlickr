$(document).ready(function(){
   $("a.button-collapse").sideNav();

   $("a.waves-effect").hover(function(){
     $(this).addClass('animated pulse');
   },
   function(){
   $( this ).removeClass('animated pulse');
   });


$("a.waves-effect").click(function(){
  $("#photos").empty();
});

//bouton nav
   $("a.waves-effect").click(function(){


  $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
  {
    tags: $(this).text(),
    tagmode:"any",
    format:"json"
  },

    function(data){
      $.each(data.items, function(i,item){
        $("<img/>").attr("src", item.media.m).prependTo("#photos");
        if (i == 9)return false;

      });
  });
});//fermeture click


//Quand je saisis un texte, cela s'ajoute un bouton “actif” au Menu des Bouttons et quand je clique sur ce bouton cela me charges sur Flickr les images en conséquent


$('button.btn').click(function() {
  console.log('coucou');
  var saisi = $('input.saisi').val();
console.log(saisi);
            $('<a>',{
              class: "waves-effect waves-light btn plus",
              text: saisi,
            }).appendTo('div#navBouton');



            $("a.waves-effect").click(function(){
              $("#photos").empty();
            });
            $("a.waves-effect").click(function(){


            $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
            {
             tags: $(this).text(),
             tagmode:"any",
             format:"json"
            },
             function(data){
               $.each(data.items, function(i,item){
                 $("<img/>").attr("src", item.media.m).prependTo("#photos");
                 if (i == 9)return false;


                });
              });
            });

            $('a.button-collapse').sideNav('hide');
            $('input.saisi').val("");
            $('li#tags').after('<div class="chip tag">' + saisi + '<i class="close material-icons">close</i>' + '</div>'+','+' ');
            console.log(dfgb);
            sessionStorage.setItem("$('.chip')","saisi");
            var saisi = sessionStorage.getItem("saisi");
            console.log(saisi);

    });//fin click


//5/ Afficher les tags saisies du formulaire avec des Chips de Materializecss sous le champs input Tags













});//fermeture jquery
