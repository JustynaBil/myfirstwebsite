//carousel
$(document).ready(function(){
  $('#menu').mouseover(function(){
    $('#nav-menu').css('display','block');
  });
  $('.carousel').carousel({
    interval: 2000
  });
});

//submit
$('#btn').click(function() {
  $.ajax({
      url: "https://formspree.io/bolesja@ukr.net",  
      method: "POST",
      data: {
             name: name.value,
             email: inputEmail.value,
             message: message.value
             }, 
      dataType: "json"
  }).done(function() {
     $('#submit').html('<h1>Thanks for attention</h1>')
  });
});
