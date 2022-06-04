# Create API using ExpressJS

1. create directory `any directory name
2. go to that directory using `cd` command
3. run the command `npm i express` to create your express api
4. create new file for your API touch index.js or whatever
5. Once created build the code below
    ```
    const express = require("express");
    const res = require("express/lib/response");

    const app = express();
    
    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.get('/api/course', (req, res) => {
        res.send([1,2,3]);
    });

    app.listen(3001, () => console.log('Listening on port 3001...'))
    ```
6. try to run your newly built API by running 
    ```
    node index.js
    ```

# Running nodemon
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

install nodemon

``` 
npm i nodemon
```
npm is deprecated
```
npm install request
```
The most powerful schema description language and data validator for JavaScript.

```
npm install joi
```

Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.
```
npm i axios
```

