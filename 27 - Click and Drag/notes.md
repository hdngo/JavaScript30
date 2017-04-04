Experimenting with click and drag!

Starting:
-we have our style.css
--uses rotateY and perspective
-basic divs

when we first click down we're going to add a class of active and figure out where we clicked,
then when we move the mouse to the left or right, we figure out how much to scroll the div
-combination of mouseup,down, leave, move

we're going to need a couple of variables and use let because they need to be updated

note: have to prefix the cursor: cursor: -webkit-grabbing

until we mouseup or unclick, we need to know where the initial click down was (hence the startX)
-console.log(e.pageX)
-if there were margins that'd offset things, so we need to subtract the offsetLeft of the element to know where inside the element we clicked
-we also need to log the scroll at the time of click and figure out where the initial scroll was when we started it
--we use e.preventDefault() to prevent text from being selected

we want to know where the cursor is when we move it horizontally too

consider using multiplication to change the amount of scrolling done (multiply the walk by an arbitrary number)