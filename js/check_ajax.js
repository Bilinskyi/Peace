$(document).ready(function() {
    $('#feedback-valid-1').validate({
    rules:{
        "phone":{required:true}
        },
    messages:{
        "phone":{required:"Введите Ваш телефон"}
        },
    submitHandler: function(form){
    $(form).ajaxSubmit({
    success: function(data) {
        if (data == "true")
                    {
                        $('.close_button, .overlay').click(function() {
                        $('.modal').css('display', 'none').animate({opacity: 0, top: '0%'}, 200);
                        $('.overlay').fadeOut(400);
                        })

                            $('.overlay').show();
                            $('.modal').css('display', 'block') .animate({opacity: 1, top: '20%'}, 200);
                            $('.modal .div').text("Спасибо!");

                            $.fancybox.close();// if parent FANCY BOX
                            
                        $(':input','#feedback-valid-1')
                        .not(':button, :submit, :reset, :hidden')
                        .val('')
                        .removeAttr('checked')
                        .removeAttr('selected');
                       // переход на страницу: window.location.replace("./thanks1.html");
                    }
}  
}); 
}
});




   
});
