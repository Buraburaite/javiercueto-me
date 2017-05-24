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

function revealDiv(anchor, triggeredDivs) {
  var anchorBottom = anchor.offset().top + anchor.outerHeight();
  var winBottom = jWin.scrollTop() + jWin.height();

  if (winBottom > anchorBottom) {
    triggeredDivs.push(anchor.attr('id'));
    anchor.animate(
      {
        opacity: 1
      },
      1500
    );
  }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1200, 'easeInBack');
    event.preventDefault();
  });

  var triggeredDivs = [];
  //For animated divs
  jWin.scroll(function() {
    $('.content-section').each(function() {
      var anchor = $(this);
      var id = anchor.attr('id');
      if (!triggeredDivs.includes(id)) {
        revealDiv(anchor, triggeredDivs);
      }
    });
  });


});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $(".navbar-collapse").collapse('hide');
});
