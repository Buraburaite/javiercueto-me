/*!
* Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For de  tails, see http://www.apache.org/licenses/LICENSE-2.0.
*/

// Modifications and additions have been made by Javier Cueto, 2017
// Hosted at javiercueto.me

var jWin = $(window);
var navbar = $('.navbar');
// collapse the navbar on scroll
function collapseNavbar() {
  if (navbar.offset().top > 50) {
    navbar.addClass("top-nav-collapse");
  } else {
    navbar.removeClass("top-nav-collapse");
  }
}
jWin.scroll(collapseNavbar);

// On document.ready...
$(function() {

  // ...collapse the navbar, if necessary...
  collapseNavbar();

  // ...turn all page-scroll anchors into smooth scrolling buttons...
  $('a.page-scroll').bind('click', function(event) {

    var targetDiv = $($(this).attr('href'));
    var navHeight = 50;
    var scrollToVal = targetDiv.offset().top +
    parseInt(targetDiv.css('padding-top'))
    - navHeight;

    $('html, body').stop().animate({
      scrollTop: scrollToVal
    }, 1200, 'easeInBack');
    event.preventDefault();
  });

  /*====
  If the contents of a non-text section (i.e. a .grey-section's non-text
  contents) is too large to fit in the window, then shrink it to fit
  ====*/
  function shrinkToFit() {

    var maxAllowableHeight = jWin.height() * 0.7;
    $('.shrink-to-fit').each(function() {
      var shrinkMe = $(this);
      var origHeight = shrinkMe.height();
      var origWidth  = shrinkMe.width();
      if (origHeight > maxAllowableHeight) {
        var shrinkScale = maxAllowableHeight / origHeight;
        shrinkMe.height(origHeight * shrinkScale);
        shrinkMe.width (origWidth  * shrinkScale);
      }
    });
  }
  // ...call shrinkToFit immediately, and when the window resizes...
  shrinkToFit();
  jWin.resize(shrinkToFit);

  // ...reveal .content-section divs as the user scrolls down to them...
  var totalDivsToReveal = $('.content-section').length;
  var revealedDivs = [];
  var approachDistance = jWin.height() * 0.4;


  // ...whenever scrolling happens...
  jWin.scroll(function() {
    // ...check if there are still unrevealed divs...
    if (totalDivsToReveal > revealedDivs.length) {
      // ...if so, then for each div...
      $('.content-section').each(function() {
        var targetDiv = $(this);
        var id = targetDiv.attr('id');
        // ...if the div has yet to be revealed...
        if (!revealedDivs.includes(id)) {
          // ...check if the page has scrolled far enough down to reveal...
          var targetDivTop = targetDiv.offset().top;
          var winBottom = jWin.scrollTop() + jWin.height();
          // ...if so, then reveal the div as you approach it...
          if (winBottom > targetDivTop + approachDistance) {
            targetDiv.animate(
              {
                opacity: 1
              },
              1500
            );
            // ...and list it as a revealed div.
            revealedDivs.push(id);
          }
        }
      });
    }
  });

});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');
});
