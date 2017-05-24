/*!
* Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For details, see http://www.apache.org/licenses/LICENSE-2.0.
*/

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
}

var jWin = $(window);
jWin.scroll(collapseNavbar);
$(document).ready(collapseNavbar);


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  // Make a.page-scroll elements into smooth scrolling buttons
  $('a.page-scroll').bind('click', function(event) {

    var targetDiv = $($(this).attr('href'));
    var scrollToVal = (targetDiv.offset().top +
    parseInt(targetDiv.css('padding-top')) -
    $('nav').outerHeight());

    $('html, body').stop().animate({
      scrollTop: scrollToVal
    }, 1200, 'easeInBack');
    event.preventDefault();
  });

  // Reveal .content-section divs as you scroll down to them
  var totalDivsToReveal = $('.content-section').length;
  var revealedDivs = [];

  // Whenever scrolling happens...
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
          // ...if so, then reveal the div...
          if (winBottom > targetDivTop + 400) {
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
