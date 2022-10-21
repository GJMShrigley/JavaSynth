#JAVASYNTH

A JavaScript-based soundboard. Controllable via physical keyboard or on-screen elements. Easy to customize and modify with alternate sound libraries.

#HOW TO USE:

Simply download the zip and open the 'index.html' file in your browser of choice. All sound clips are included.

The soundboard can be triggered using either a physical keyboard or by clicking the on-screen keys. 

To add your own sounds replace the audio files included in the 'sounds' folder with your own wav files (make sure the filenames match.)

#HOW IT WORKS: 

This project was designed for the purposes of developing an understanding and practical application of HTML dataset attributes and Javascript keyboard events.

Each key on the physical keyboard will trigger an event when pressed. This event contains a number of properties including a two-digit key code which specifies which key was pressed.

The Index.html file contains a number of invisible audio elements matching each sound clip. These elements also possess a dataset attribute called 'data-key' that matches the key code for a selection of keyboard keys.

An event listener attached to the browser window will respond to a key being pressed by triggering a 'handleKeyDown' function that accesses the event's key code property. The function will then search for the audio clip with a matching data-key attribute and play it.

To ensure that the clip plays from the start with each key press the function sets the 'currentTime' property of the audio clip to zero before playing. This allows the sound clip to be played as rapidly as the key is pressed rather than waiting for it to complete before it can be played again.

The on-screen keyboard consists of elements with the same 'data-key' dataset attribute. Each of these elements is also monitored by an event listener that triggers when a mouse click event occurs inside the element. This event listener is connected to a 'handleMouseDown' function that takes the key code from the clicked element and plays the relevant audio clip. 

Both the 'handleKeyDown' and 'handleMouseDown' functions will also add a new 'playing' class in CSS that will change the styling of the relevant element. Another pair of event listeners monitor the key or mouse button being released and remove the 'playing' class upon being triggered.

#CREDITS:

Synth sample library courtesy of Kindobands (https://www.reddit.com/user/kindobands/)

#LINKS:

For an live example please visit my online portfolio (https://gjmshrigley.netlify.app/projects/jsynth/) 
