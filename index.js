const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minji:minji@boilerplate.bbci3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/',(req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))