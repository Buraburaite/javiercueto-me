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
  var winBottom = jWin.scrollTop() + jWin.height() + 400;

  if (winBottom > anchorBottom) {
    triggeredDivs.push(anchor.attr('id'));
    console.log('here');
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

//Resize project images
var jCarousel = $('#myCarousel');
var jTango = $('#tango-img');

function scaleWithVWidth(jel) { jel.width ('100%').height('auto'); }
function scaleWithVHeight(jel) { jel.width('auto').height('100%'); }
function imgAspectRatio() { return jTango.width() / jTango.height(); }

//Strategy (keeping the aspect ratio the same)
//window is wide and image would fit entirely:    scaleWithVHeight
//window is wide but image would be clipped:      scaleWithVWidth
//window is tall and image would fit entirely:    scaleWithVWidth
//window is tall but image would be clipped:      scaleWithVHeight
//Note: this code /probably/ does not work with vertical videos yet
function resizeImgToFitWindow(jImg) {
  console.log('here2');
  var winWidth = jWin.width();
  var winHeight = jWin.height();
  if (winWidth >  winHeight && imgAspectRatio() * winHeight < winWidth) {
      scaleWithVHeight(jImg);
    }
  else {
    scaleWithVWidth(jImg);
  }

  shrinkBar();
}

console.log('hihihihihi');

jWin.resize(resizeImgToFitWindow(jTango));
