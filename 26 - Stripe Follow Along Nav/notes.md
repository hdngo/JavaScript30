Mimicing Stripes's navbar where the background of each nav item dropdown transforms itself.
The dropdowns themselves are separate elements, but there is a little 'puppy div' that resizes itself based on where it is.

Our dropdowns will resize themselves to match the width and height of the content.
-the div with class 'dropdownBackground' will be the white puppy div
-it's located inside the nav
-we have an unordered list (class .cool) and list items that have dropdowns
-the important part is that the top level li's are our triggers

Most of the css is just for aesthetics, we'll be writing the important css

we cannot go from opacity 0 and display none to opacity 1 and display block in this case,
we're going to step it

animations/transitions in react/angular are done by triggering 2 separate classes when something enters or leaves, and you use css to apply them

the next piece is figuring out how big the dropdowns are and whether or not our white div can go behind them
-we make use of getBoundingClientRect() again
we also need information as to where the nav is

we also need to offset the pill to accomodate for the spacing that the navbar takes by subtracting the nav coords from the dropdown coords

sometimes we see some content while transitioning back and forth between items, and that's because of the timeout (150s) and our method of adding/removing classes, so we want do a check for classes and then run things if needed