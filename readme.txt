Snap-Points.js
Copyright 2016 by Brian Rollins (me at brianrollins.com)
Requires JQuery (jquery.com)

Just add the attribute data-snap="true" to the elements you want the browser to snap to.
You can adjust the scroll speed (scrollSpeed) in your code or override it here.

If you don't feel like coding it into the HTML, use the snapAll() function and
pass a string (or array of strings) in for the element(s) you want affected.

Ex: snapAll("p") will add the data-snap="true" attribute to all <p> tags.
Ex: snapAll(["h1", "h2", "h3", "h4", "h5", "h6"]) gets all the various header tags.
