Starting off with a simple 'follow along' nav link that'll serve as a basis for replicating the Stripe site navigation.

Going to create a "pill" that follows you around when you hover over the nav links.

-the width the height and the translate values will be moved over as well

we use this.getBoundingClientRect();
-this gives us information about where a dom element lives on the page
--bottom, height, left, right, top, width, proto

rather than using css to transition the left and right parts of the span, we're going to use the transform property

one thing we notice after initially making the transform change is that the pill is offset (before and above) by a certain amount after scrolling down on the page
-we fix this by taking how far the user has scrolled down the page and adding it to the actual item (window.scrollY)