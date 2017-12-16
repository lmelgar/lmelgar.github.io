var hora_local = new Date();
console.log(hora_local);
var hours = hora_local.getHours()
console.log(hours);

$(document).ready(main);
function main() {
  if(hours >= 0 && hours < 5) {
    $('#welcome').html('Good night!');
  } if(hours >= 5 && hours < 12) {
    $('#welcome').html('Good morning!');
  } if(hours >= 12 && hours < 15) {
    $('#welcome').html('Good afternoon!');
  } if(hours >= 15 && hours < 24) {
    $('#welcome').html('Good evening!');
  }

  $('#lnkMail').hover(function(){
  	var newHref = $(this).attr('href').replace('spam', 'com');

  	$(this).attr('href', newHref);
    console.log(newHref);
  });

};
