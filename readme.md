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
