const router = require('express').Router()
const { Pet } = require('../models')

// GET all users
router.get('/pets', (req, res) => {
  Pet.findAll()
    .then(users => res.json(pets))
    .catch(err => console.log(err))
})

// GET one user
router.get('/pets/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then(pet => res.json(pet))
    .catch(err => console.log(err))
})

// POST one user
router.post('/pets', (req, res) => {
  User.create(req.body)
    .then(pet=> res.json(pet))
    .catch(err => console.log(err))
})

// PUT one user
router.put('/pets/:id', (req, res) => {
  Pet.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one user
router.delete('/pets/:id', (req, res) => {
  Pet.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


module.exports = router