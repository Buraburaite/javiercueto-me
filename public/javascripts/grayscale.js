/*!
* Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For de  tails, see http://www.apache.org/licenses/LICENSE-2.0.
*/

// Modifications and additions have been made by Javier Cueto, 2017
// Hosted at javiercueto.me

const jWin = $(window);
const navbar = $('.navbar');

// Conditionally collapse the navbar
const collapseNavbar = () => {
  const top = navbar.offset().top;
  const threshold = 80;
  if (!navbar.hasClass('top-nav-collapse')) {
    if (top > threshold) {
      navbar.addClass("top-nav-collapse");
    }
  }
  else if (top < threshold) {
    navbar.removeClass("top-nav-collapse");
  }
};

/*====
If the contents of a non-text section (i.e. a .grey-section's non-text
contents) is too large to fit in the window, then shrink it to fit
====*/
const shrinkToFit = () => {

  const maxAllowableHeight = jWin.height() * 0.7;
  $('.shrink-to-fit').each(function() {
    const shrinkMe = $(this);
    const origHeight = shrinkMe.height();
    if (origHeight > maxAllowableHeight) {
      console.log('shrinking');
      const shrinkScale = maxAllowableHeight / origHeight;
      shrinkMe.height(origHeight * shrinkScale);
    }
  });
};

// This has to do with revealing divs as you scroll
const totalDivsToReveal = $('.content-section').length;
const revealedDivs = [];
const approachDistance = jWin.height() * 0.4;

const checkReveal = () => {
  // ...check if there are still unrevealed divs...
  if (totalDivsToReveal > revealedDivs.length) {
    // ...if so, then for each div...
    $('.content-section').each(function() {
      const targetDiv = $(this);
      const id = targetDiv.attr('id');
      // ...if the div has yet to be revealed...
      if (!revealedDivs.includes(id)) {
        // ...check if the page has scrolled far enough down to reveal...
        const targetDivTop = targetDiv.offset().top;
        const winBottom = jWin.scrollTop() + jWin.height();
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
};

// On document.ready...
$(() => {

  // ...call shrinkToFit immediately...
  // shrinkToFit();

  // ...have shrinkToFit happen on window resize as well...
  // jWin.resize(shrinkToFit);

  // ...collapse the navbar, if necessary...
  collapseNavbar();

  // ...turn all page-scroll anchors into smooth scrolling buttons...
  $('a.page-scroll').bind('click', function(e) {

    const targetDiv = $($(this).attr('href'));
    const navHeight = 50;
    const scrollToVal = targetDiv.offset().top +
    parseInt(targetDiv.css('padding-top')) - navHeight;

    $('html, body').stop().animate({
      scrollTop: scrollToVal
    }, 1200, 'easeInBack');
    e.preventDefault();
  });

});

// Throttled scroll events
let fire = true;
jWin.on('scroll', () => {
  if (fire) {
    fire = false;
    collapseNavbar();
    checkReveal();
    setTimeout(() => fire = true, 50);
  }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(() => {
  $(".navbar-collapse").collapse('hide');
});
