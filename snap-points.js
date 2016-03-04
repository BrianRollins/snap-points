/*
  Snap-Points.js
  Copyright 2016 by Brian Rollins (me at brianrollins.com)
  Released under a Creative Commons, Attribution 4.0 International License.
  Requires JQuery (jquery.com)

  Just add the attribute data-snap="true" to the elements you want the browser to snap to.
  You can adjust the scroll speed (scrollSpeed) in your code or override it here.

  If you don't feel like coding it into the HTML, use the snapAll() function and
  pass a string (or array of strings) in for the element(s) you want affected.

  Ex: snapAll("p") will add the data-snap="true" attribute to all <p> tags.
  Ex: snapAll(["h1", "h2", "h3", "h4", "h5", "h6"]) gets all the various header tags.


*/

var scrollSpeed = 250; //Default scroll speed.
var scrollWait = 250; //Waiting time to make sure the user is done scrolling.
$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      var cutoff = $(window).scrollTop();
      $('[data-snap="true"]').each(function() {
          if ($(this).offset().top+10 > cutoff) {
              clearTimeout($.data(this, 'scrollTimer'));
              $('html, body').animate({
                scrollTop: $(this).offset().top
              }, scrollSpeed);
              return false; // stops the iteration after the first one on screen
          }
      });
    }, scrollWait));
});

var snapAll = function(el) {
  if (typeof el === "string") {
    $(el).attr('data-snap', 'true');
  } else if (Array.isArray(el)) {
    for (var i in el) {
      $(el[i]).attr('data-snap', 'true');
    }
  }
}
