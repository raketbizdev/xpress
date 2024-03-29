const express = require("express");
const res = require("express/lib/response");
const Joi = require("joi");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const courses = [
    {id: 1, name: "Course 1"},
    {id: 2, name: "Course 2"},
    {id: 3, name: "Course 3"}
]
app.get('/api/courses', (req, res) => {
    res.send(courses);
});
// params with dynamic value
app.get('/api/courses/:id', (req, res) => {
    

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send({type: "error", status: 404, message: "The id of the course you are looking for was not found or missing."});
    res.send(course);



});

// To use post jason you need to enable json
// app.use(express.json());

app.post('/api/courses', (req, res) => {

    // Use Joi validation
    const schema = Joi.object(
        {name: Joi.string().min(3).required()}
    )
    const result = schema.validate(req.body);


    if (result.error) {
        // Bad request status 400
        res.status(400).send({type: "error", status: 404, message: result.error.details[0].message});
        return;
    }


    const course =  {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);

});

// params with dynamic value
// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.params);
// });


app.get('/api/posts/:year/:month', (req, res) => {
    // You can add as many params in one api resource
    res.send(req.params);
});


app.get('/api/pages/:year/:month', (req, res) => {
    // you can also use query params
    res.send(req.query);
});

// PORT
const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}...`))