Need to see how far a user has scrolled down a page, after which we trigger the nav effects

helpful to add a class to the body in order to still be able to target other elements on the page

when you make an element fixed, it no longer takes up space on the document and instead 'floats on top of the browser' and you recreate a reflow on the page, so it gives up space for the rest of the elements to move up/in

-so we need to offset the document to accomodate

for the logo, we set the max width to a value bigger than it'll ever be
-we transition the logo max-width because you can't transition width

takeaway: take care of the space removed from setting an element to fixed positioning