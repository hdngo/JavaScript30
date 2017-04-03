Making a photobooth with JavaScript

video being piped into a canvas element
we'll be able to download our photos and apply filters as well

we need to open up a server. because of security restrictions with getting a users webcam, it must be tied to a secure origin - a website that is https or localhost
-a package.json is included (browser-sync) which allows live reloading
-use npm install and npm start to run the script in the package.json 

we have a canvas, a video, and a strip
-the video will come off the webcam thats piped into the video element, then in intervals, we send snapshots of the video and put it into the canvas so we can manipulate and change it
-the strip is where all of the images will go

Get video function: 
navigator.mediaDevices.getUserMedia({ video: true, audio: false})
- returns a promise

in order for our video to work, we need to set the video.src to a url
-localMedia Stream needs to be converted into a URL via window.URL.createObjectURL()
-remember to set a catch in case the user denies camera access


filters work by getting the pixels out of the canvas, then messing with the rgb values and putting them back in
-remember you can use debugger in javascript
-remember we need to use 'let pixels' instead of 'const pixels' because we need to manipulate them


green screen:
'give me all the values of this rgb value and take them out'
i.e. find a range of special greens and take them out
-starts with some blank levels
-selects all the range inputs

-for every single pixel figure our what the rgb values are, if the rgb values are between the min/max values, we take it out because the 4th pixel is the alpha  which we set to 0 to take it out