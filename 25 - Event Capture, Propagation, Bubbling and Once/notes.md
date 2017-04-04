Lesson about addEventListener

Three divs - nested - and we want to go over event capture, propagation, bubbling and once.

by clicking on the inner div (three) we're also technically clicking on the second, and first and so forth
-this explains the concept of bubbling in the sense that it ripples out
-it bubbles up the dom and triggers clicks on the other elements as well

how does this work in javascript exactly?
in modern browsers, the browser does a capture - when you click on the element it ripples down
-it goes from the top down and captures all the event, and then bubbles up 

by passing in a 3rd option where we set capture: true - this makes it so that logText isn't ran during the pupple up but on the capture down
-you will run the function on the way down rather than on the way up
-by default capture is set to false

e.stopPropagration();
- stops the bubbling

Once: new in the browser
-setting once: true makes it so that it listens for a click and then unbinds itself
-similar to div.removeEventListener('click', logText..)...
-makes it so that the event is only fired off once

