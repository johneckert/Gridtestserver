const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000

var testData = [
    {
        name: "Penelope",
        breed: "cat",
        age: 4
    },
    {
        name: "Winston",
        breed: "cat",
        age: 4
    },
    {
        name: "Wesley",
        breed: "chihuahua",
        age: 8
    },
    {
        name: "Lucy",
        breed: "dachsund",
        age: 10
    },
    {
        name: "Masie",
        breed: "Dorkie",
        age: 6
    }
]

app.use(cors());

app.get('/', (req, res) => res.send(JSON.stringify(testData)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))