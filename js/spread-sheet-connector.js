$(document).ready(function(){

    var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzj6vQVk34syCXH8XjrJbN4Gy2dW-xACAI-SFSKTpmCPuT2gMM/exec'
    
    $('#btn_click').on('click', function() { window.location = 'outra.html'; });

    $('#submit-form').on('click', function(e) {
        e.preventDefault();
        console.log($form.serializeObject());
        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject(), 
            success: function(result){
            console.log(result);
            $('#resultado').html(JSON.stringify(result));
            }
        });
        
    }) 
 });
