going to experiment with an input to control video speed

lowest is 0.4x, highest is 4x

visual part first
-take speed add event listener 
-use y value for manipulation since its a vertical bar
-use math to retrieve the y value and divide it by the total height of the bar to obtain a percentage used to determine the speed

video.playbackRate is set to 1 by default