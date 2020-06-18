# JSON

https://www.json.org/json-en.html

## npm

https://www.npmjs.com/

## Creating a package.json file

https://docs.npmjs.com/creating-a-package-json-file  

## Recipe App

HTML, CSS and JavaScript with built-in Sass support.

### Setup

1. Clone the [today's repo](https://github.com/FBw-26/live-coding/tree/master/may/04-05) to your machine;

2. Install the dependencies;  
    ```
    npm install
    ```

3. Run live-server.
    ```
    npm start
    ```

### Project Structure

```
Project
|   README.md
|   package.json
|   package-lock.json
└───src
|   |   index.html
|   └───styles
|   └───scss
|   |   └───style.scss
|   └───scripts
|       |   data.js
|       └───index.js
|   └───images
```

# HTML

## script > type > module

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type

# Javascript 

## defer

https://javascript.info/script-async-defer#defer

## export

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

## import

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

## JSON.stringify()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

## Parse 

https://developer.mozilla.org/en-US/docs/Glossary/Parse

## JSON.parse()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

# Exercise

## JSON

Description:

* Today’s assignment is to use [JSON](https://www.json.org/json-en.html) in your movie app from [last week](https://github.com/marcelosperalta/dci/tree/master/200430#exercise).

Notes:

* remember you need to use [module](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type) script;
* write [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) _index.html_ file;
* [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) your object;
* [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) that object into your _index.js_.