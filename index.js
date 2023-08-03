const express = require('express')
const app = express()
const port = 6000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tbeben77:Hp94sGqytvFcavh5@cluster0.wlfqhq4.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('MongoDB Connected >> mongodbReact')
    })
    .catch((err) => {
        console.log(err);
    })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

