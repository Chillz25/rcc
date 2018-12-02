//Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');
//lightbox
baguetteBox.run('.compact-gallery', { animation: 'slideIn'});

//submit-form
$(document).ready(function(){
 $('#submit').click(function(){
      var firstname = $('#firstname').val();
      var lastname = $('#lastname').val();
      var cpNum = $('#cpNum').val();
      var email = $('#email').val();
      var message = $('#message').val();
      if(firstname == '' || lastname == '' || cpNum == '' || email == '' || message == '')
      {
           $('#error_message').html("All Fields are required");
      }

      else
      {
           $('#error_message').html('');
           $.ajax({
                url:"addInquiry.php",
                method:"POST",
                data:{firstname:firstname, lastname:lastname, cpNum:cpNum, email:email, message:message},
                success:function(data){
                     $("form").trigger("reset");
                     $('#success_message').fadeIn().html(data);
                     setTimeout(function(){
                          $('#success_message').fadeOut("Slow");
                     }, 2000);
                }
           });
       }
    });
 });
