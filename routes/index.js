'use strict'

const express = require('express')
const petCtrl = require('../controllers/pet')
const api = express.Router()

api.get('/pet', petCtrl.getPets)
api.get('/pet/:petId', petCtrl.getPet)
api.post('/pet', petCtrl.savePet)
api.put('/pet/:petId', petCtrl.updatePet)
api.delete('/pet/:petId', petCtrl.deletePet)

module.exports = api
