//carousel
$(document).ready(function(){
  $('#menu').mouseover(function(){
    $('#nav-menu').css('display','block');
  });
  $('.carousel').carousel({
    interval: 5000
  });
});

//submit
$('#btn').click(function() {
  $.ajax({
      url: "https://formspree.io/bilyachjustina@gmail.com",  
      method: "POST",
      data: {
             name: name.value,
             email: inputEmail.value,
             message: message.value
             }, 
      dataType: "json"
  }).done(function() {
     $('#submit').html('<h1>Thanks for attention</h1>')
  } );
});
