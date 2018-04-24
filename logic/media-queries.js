
// Break points between 979 - 767 were bugging out my gradient
// I think it also did it for 767 - 641 too. 
// this makes the container size dynamially change to fit whatever screen size.
$(document).ready(function() {
  $(window).resize(function(e) {
    var screenSize = document.body.clientWidth > 980? 980 : document.body.clientWidth;
    $('.container').css({
      width: screenSize
    });
  })
});
