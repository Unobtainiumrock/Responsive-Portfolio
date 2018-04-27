
// Break points between 979 - 767 were bugging out my gradient
// I think it also did it for 767 - 641 too. 
// this makes the container size dynamially change to fit whatever screen size.
$(document).ready(function() {
  $(window).resize(function(e) {
    var screenSize = document.body.clientWidth;

    // Upper bound
    if(screenSize > 980) {
      screenSize = 980;
      $('#mister-nav').css({
        "float": "left"
      });
    }
    // Lower bound
    if(screenSize < 640) {
      screenSize = 640;

      $('#mister-nav').css({
        "float": "left"
      });
    }

    if(screenSize > 640 && screenSize < 980) {
      $('#mister-nav').css({
        "float": "right"
      });
    }

    $('header').css({
      width: screenSize
    });
    
    $('.container').css({
      width: screenSize
    });
  })
});
