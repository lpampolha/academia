const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Ok')
    res.send()
})

router.post('/users', (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body)
})

router.get('/:id', (req, res) => {
    console.log(req.body)
    res.send(`ID: ${req.params.id}`)
})

module.exports = router