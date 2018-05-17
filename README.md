# YannyJS

Was it Yanny or as it Laurel? The only way to really be certain is with a lightweight fast node module. 

### Installation
```npm install --save-dev yannyjs```

### How to Use
```
var yannyJS = require('yannyjs');

// If you heard Laurel:
var a = new yannyJS.Laurel();

a.isYanny(); // returns false
a.isLaurel(); // returns true


// If you heard Yanny:
var a = new yannyJS.Yanny();

a.isYanny(); // returns true
a.isLaurel(); // returns false
```

You won't find a lightweight node module that will help you with the Yanny/Laurel debacle better than this!

Feel free to fork this repo and implement as needed. 
