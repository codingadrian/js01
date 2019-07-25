# JS01 - Drum Kit

This is the first project for [#javascript30](https://javascript30.com/)

## Author
My name is [Adrian](https://github.com/codingadrian). I am a 32 y.o. Costa Rican. I am working to become a full stack developer.

## Goal

* To complete the 30 days challenge for JavaScript.
* To read about the methods, functions, and others I see while in the code-along. So that I can understand instead of just copying.
* To document in each day's README, what I did and what I learned

## Project structure:

Each day/project will have its own GitHub Page.

The directory for each day/project will be composed of:

* mainFolderDay#
  * index.html
  * images/
    * if any***
  * script/
    * the script file
  * styles/
    * the css file
  * others/
    * audios, videos and/or others


I will push through GitHub at the end of each day, and maybe several "pushes" throughout the day.

## What I did and what I have learned

* I watched the video and coded the html, it was a main div with the class of "keys" and 9 other divs contained inside, with the class of "key".

* I learned about the [data-*](https://www.w3schools.com/tags/att_global_data.asp) attributes, these are used to store "custom" data private to the page or application. I guess it means, I can set variables inside the html, like creating my own attributes to use when applying javascript.

* I used the kbd element, which defines keyboard input. Pretty much it makes it look as if it is something being typed in the terminal. This effect can also be reached with CSS.

* I used the span element, which I had to set the display to block, to be able to put the elements inside the "keys" div into flex-direction: column.

* Using the data-* attribute, I found out that each key has its own keyCode, kinda like a position within the keyboard, this can be selected when using JavaScript to attached eventListeners.

* Since I have my script in other file, I linked it at the bottom of the html to "invoke" it.

* In the CSS, first I reset the margin and padding, set the box-sizing to border-box and set a font-size and font-family.

* At the end I expect to align all my css alphabetically.

* To the main div with the class of "keys", I applied a background-image, sized it to the window. To this div I also gave the display of flex to be able to align the "drum keys" in the center of the page.

* To each "key" I gave a border, a border-radius, I aligned and justified its contents to the center, the background is done using rgba, so that it is a bit darker than the image in the background.

* Last in the CSS, I created a selector for the class of .playing, which I'll add to the DOM using JavaScript, this was mind-blowing, as I discovered the power of JS.

* The JS functions I wrote, are pretty much copied. This is what I understand:

  * First, say you are creating a function, then name the function, this had the (e) between parenthesis, because this functions where applicable upon events, in this case, when pressing a key.

  * The first variable is audio, it allows me to select elements with the audio tag, but for which a data-key matches the data-key assigned to those audio tags. The second variable, allows me to select any element with the class of key, also based on the keyCode assigned to it, being pressed.

  * If no audio is assigned to the key being pressed, then the function stops and it goes back to the beginning, which means, wait until a key with an audio file matching its keyCode is pressed.

  * I used the currentTime method on the audio variable and set it to 0, which tells the browser, at what time to start playing the audio, in this case at 0 seconds.

  * The .play() plays the audio selected with it.

  * The last part in this function add the .playing class I had created to the "key" divs, when a key is pressed.

  * The second function, is created to remove the effect of the .playing class selector. If the event has the property of "transform" then it returns, thus skipping everything that does not have the class of transform, then it removes the class of .playing.

  * The last section is a variable that selects all the divs with the class of .key, and for each it adds an eventListener for the "transitionend" then it applies the function of removeTransition when it reaches the "end"
  * The bottom is where the main eventListener sits, which is that when a key is pressed down it play a sound.