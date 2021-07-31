# notes-app
Node.js application developed by Andrew J. Mead in his course The Complete Node.js Developer Guide (3rd. Edition) available in Udemy

## Debugging
* Run application adding `inspect` reserved word. This will let you open the application using Chrome Developer Tools
```sh
node inspect app.js
```
* Go to <chrome://inspect> URL in Google Chrome
* Add `debugger` reserved word just before the code line you want to check to add a break point. This will stop program execution and let you check variable values.
* Typing `restart` in the console after the program has finished will launch again the debugger in Chrome
