const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false}) // returns a promise
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err => {
            console.error(`Oh NO!!!`, err); // error for camera access denied
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width, height);
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height); //drawImage works by passing it an image or video element. we start from top left and the width and height
        
        // filters
        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        // the array of numbers for data.. contain rgba values in an r-g-b-a sequence
        // mess with them
        // pixels = redEffect(pixels);

        pixels = rgbSplit(pixels);
        ctx.globalAlpha = 0.1; //puts another image on top with 10% transparency "ghosting"

        // pixels = greenScreen(pixels);

        // put them back
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // played the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    console.log(data); // returns base64 (text based representation of the image taken)
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome'); // names the image 'handsome'
    // link.textContent = 'Download Image';
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firstChild); //similar to jQuery prepend
}

// function redEffect(pixels) {
//     for(let i = 0; i < pixels.data.length; i+=4 ) {
//         pixels.data[i + 0] = pixels.data[i + 0] + 200; // red
//         pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
//         pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue
//     } // we're not using .forEach because this is a special type of array in js
//     return pixels;
// }

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4 ) {
        pixels.data[i - 150] = pixels.data[i + 0]; // red
        pixels.data[i + 100] = pixels.data[i + 1]; // green
        pixels.data[i - 550] = pixels.data[i + 2]; //blue
    }
    return pixels;    
}

// function greenScreen(pixels) {
//   const levels = {};

// //   console.log(levels);

//   document.querySelectorAll('.rgb input').forEach((input) => {
//     levels[input.name] = input.value;
//   });

//   for (i = 0; i < pixels.data.length; i = i + 4) {
//     red = pixels.data[i + 0];
//     green = pixels.data[i + 1];
//     blue = pixels.data[i + 2];
//     alpha = pixels.data[i + 3];

//     if (red >= levels.rmin
//       && green >= levels.gmin
//       && blue >= levels.bmin
//       && red <= levels.rmax
//       && green <= levels.gmax
//       && blue <= levels.bmax) {
//       // take it out!
//       pixels.data[i + 3] = 0;
//     }
//   }

//   return pixels;
// }
getVideo();

video.addEventListener('canplay', paintToCanvas); // once the video is played, it'll emit an even called canplay
