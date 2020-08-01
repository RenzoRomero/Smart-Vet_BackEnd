'use strict'

const express = require('express')
const ownerCtrl = require('../controllers/owner')
const petCtrl = require('../controllers/pet')
const api = express.Router()

api.get('/pet', petCtrl.getPets)
api.get('/pet/:petId', petCtrl.getPet)
api.post('/pet', petCtrl.savePet)
api.put('/pet/:petId', petCtrl.updatePet)
api.delete('/pet/:petId', petCtrl.deletePet)

api.get('/owner', ownerCtrl.getOwners)
api.get('/owner/:ownerId', ownerCtrl.getOwner)
api.put('/owner/:ownerId', ownerCtrl.updateOwner)
api.delete('/owner/:ownerId', ownerCtrl.deleteOwner)

module.exports = api
