var hora_local = new Date();
console.log(hora_local);
var hours = hora_local.getHours()
console.log(hours);

$(document).ready(main);
function main() {
    if(hours >= 5 && hours < 12) {
    $('#welcome').html('Good morning!');
  } if(hours >= 12 && hours < 16) {
    $('#welcome').html('Good afternoon!');
  } if(hours >= 16 && hours < 24 || hours >= 0 && hours < 5) {
    $('#welcome').html('Good evening!');
  }

  $('#lnkMail').hover(function(){
  	var newHref = $(this).attr('href').replace('spam', 'com');

  	$(this).attr('href', newHref);
    console.log(newHref);
  });

  var elementScroll = $('#scroll');

  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    elementScroll.css({
        'opacity' : 1 - st/500
    });
});

};
