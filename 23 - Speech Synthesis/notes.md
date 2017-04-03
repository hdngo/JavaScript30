Working with the speech synthesis api that's built into most browsers.

NTS: review this exercise because there are radial-gradient backgrounds

Going to be doing text > voice

We have a select that contains all possible voices
Have input with rates, pitch, and textarea for text, the inputs have name attributes that are important for this exercise

Rate pitch and text are going to line up with the property on the utterance (the voice)
Have stop and speak btutons

Utterance is going to contain info on the voice used, rate, etc. and are going to be set on our SpeechSynthesisUtterance();

speechSynthesis can have .speak called on it and it will try to speak (after a voice has been set on it)
we can add an eventlistener to speechSynthesis and listen to the event voiceschanged

for our exercise, we want to loop over all of the voice options and set them as options in our dropdown

create a set voice function to change the voice from the dropdown
-cannot simply change the voice to Alex because that's not a valid voice property, we need to find the actual name and corresponding SpeecSynthesisVoice object

use of toggle.bind(null, false) instead of toggle(false) so that we can pass in an argument without it running during pageload
- the first argument is false in this case, we pass in an argument of false in the context of this
- alternatively we can use an arrow function but the downside is that we still create another function
-- stopButton.addEventListener('click', () => toggle(false)); this syntax is popular in react

Filter lists to contain english languages
