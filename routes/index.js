'use strict'

const express = require('express')
const ownerCtrl = require('../controllers/owner')
const petCtrl = require('../controllers/pet')
const clinicHistoryCtrl = require('../controllers/clinicHistory')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/pet', petCtrl.getPets)
api.get('/pet/:petId', petCtrl.getPet)
api.get('/pet/owner/:ownerId', petCtrl.getPetsByOwner)
api.post('/pet', petCtrl.savePet)
api.put('/pet/:petId', petCtrl.updatePet)
api.delete('/pet/:petId', petCtrl.deletePet)

api.post('/owner/signup', ownerCtrl.signUp)
api.post('/owner/signin', ownerCtrl.signIn)

api.get('/owner', ownerCtrl.getOwners)
api.get('/owner/:ownerId', ownerCtrl.getOwner)
api.put('/owner/:ownerId', ownerCtrl.updateOwner)
api.delete('/owner/:ownerId', ownerCtrl.deleteOwner)

api.get('/clinicHistory', clinicHistoryCtrl.getClinicalHistories)
api.get('/clinicHistory/:clinicHistoryId', clinicHistoryCtrl.getClinicHistory)
api.get('/clinicHistory/pet/:petId', clinicHistoryCtrl.getClinicalHistoriesByPet)
api.post('/clinicHistory', auth, clinicHistoryCtrl.saveClinicHistory)
api.delete('/clinicHistory/:clinicHistoryId', auth, clinicHistoryCtrl.deleteClinicHistory)
api.put('/clinicHistory/:clinicHistoryId', auth, clinicHistoryCtrl.updateClinicHistory)


module.exports = api
