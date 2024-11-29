$(document).ready(function () {

    var table = $('#table-afiliado').DataTable({
      "order": [[0, "desc"]] // A primeira coluna (0) será ordenada de forma descendente
    });
  });
  function anima_to_numero(numero1) {
     

     
    var targetNumber = numero1;
    var target = $("[data-number='" + targetNumber + "']");
    // console.log(target.position().left);
    $('.window').animate({
        right: target.position().left - $('.pointer').position().left     + ($('.pointer').width() ) 
    }, 8000);//- (96*4.1) + 40
    
         
    
    $('.window').animate({
        right: target.position().left - $('.pointer').position().left  + ($('.pointer').width()+20 ) 
    }, 1000);
    //- (96*4.1) + 60
        
        
    var targetNumber = 99;
    var target = $("[data-number='" + targetNumber + "']");
    $('.window').animate({
      right:  target.position().left - $('.pointer').position().left  + ($('.pointer').width()) 
    }, 1000);
}


var girarDiv = document.getElementById('girar');
girarDiv.addEventListener('click', function() {
  var numeroGerado = Math.floor(Math.random() * 14) + 1;
  anima_to_numero(numeroGerado);
});