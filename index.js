const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const courses = [
    {id: 1, name: "Course 1"},
    {id: 2, name: "Course 2"},
    {id: 3, name: "Course 3"}
]
const error = [
    {id: 1, status: 404, message: "404: page not found"},
    {id: 2, status: 500, message: "500: Server error!"},
    {id: 3, status: 503, message: "503 Error"},

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