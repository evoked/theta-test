const express = require('express')
const cors = require('cors')
const orderRoute = require('./routes/orderRoute')

const app = express()

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.listen((3001), () => {
    console.log('server is running')
})

app.use('/order/', orderRoute)