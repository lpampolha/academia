const express = require('express')
const router = express.Router()
const Users = require('../models/user')

// @route   GET /user/:email
// @desc    DETAIL user
// @access  Public
router.get('/', [], async (req, res) => {
    try {
        let user = await Users.find({})
        res.status(200).json(user)
    }catch(error){
        res.status(422).json(error)
    }
})

router.get('/:id', [], async (req, res) => {
    try {
        let user = await Users.findById(req.params.id)
        res.status(200).json(user)
    }catch(error){
        res.status(422).json(error)
    }
})

router.post('/', async (req, res) => {
    let { name, login, matricula , password, is_active, is_admin } = req.body
    
    try{
        let user = await Users.create(req.body)
    }catch (error){
        res.status(422).json(error)
    }
})

module.exports = router