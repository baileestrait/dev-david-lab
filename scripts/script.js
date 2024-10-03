$(document).ready(function(){
  
  $('#reset').on('click', function(){
    
    $("#bluefairy").css( 'top', '0px').css('left', '0px');
   
  })
  
  $("img").draggable( {
      stop: function() {
        
        if ( $("img").position().left > 300)
          {

            $("body").append("<h2>THE FAIRY ESCAPED!</h2> ") 
          }
      }
  });  
 

});