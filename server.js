const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//const connectDB = require('./config/db')
const PORT = 3001

app.use(bodyParser.urlencoded({ extended:true }))

//Conexão com a base
//connectDB()

app.get('/', (req, res) => {
    res.send('Agora sim!')
})

app.post('/user', (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => {console.log('Server OK!')})