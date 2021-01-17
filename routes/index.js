'use strict'

const express = require('express')
const vetCtrl = require('../controllers/vet')
const ownerCtrl = require('../controllers/owner')
const petCtrl = require('../controllers/pet')
const productCtrl = require('../controllers/product')
const clinicHistoryCtrl = require('../controllers/clinicHistory')
const serviceCtrl = require('../controllers/service')
const promotionCtrl = require('../controllers/promotion')
const auth = require('../middlewares/auth')
const api = express.Router()

api.post('/vets/signup', vetCtrl.signUp)
api.post('/vets/signin', vetCtrl.signIn)
api.get('/vets', vetCtrl.getVets)
api.put('/vets/:vetId', vetCtrl.updateVet)
api.delete('/vets/:vetId', vetCtrl.deleteVet)

api.post('/owners/signup', ownerCtrl.signUp)
api.post('/owners/signin', ownerCtrl.signIn)
api.get('/owners', ownerCtrl.getOwners)
api.get('/owners/:ownerId', ownerCtrl.getOwner)
api.put('/owners/:ownerId', ownerCtrl.updateOwner)
api.delete('/owners/:ownerId', ownerCtrl.deleteOwner)

api.get('/pets', petCtrl.getPets)
api.get('/pets/:petId', petCtrl.getPet)
api.get('/pets/owner/:ownerId', petCtrl.getPetsByOwner)
api.post('/pets', petCtrl.savePet)
api.put('/pets/:petId', petCtrl.updatePet)
api.delete('/pets/:petId', petCtrl.deletePet)

api.get('/products', productCtrl.getProducts)
api.get('/products/:productId', productCtrl.getProduct)
api.post('/products', productCtrl.saveProduct)
api.delete('/products/:productId', auth, productCtrl.deleteProduct)
api.put('/products/:productId', auth, productCtrl.updateProduct)

api.get('/services', serviceCtrl.getServices)
api.get('/services/:serviceId', serviceCtrl.getService)
api.post('/services', auth, serviceCtrl.saveService)
api.delete('/services/:serviceId', auth, serviceCtrl.deleteService)
api.put('/services/:serviceId', auth, serviceCtrl.updateService)

api.get('/promotions', promotionCtrl.getPromotions)
api.get('/promotions/:promotionId', promotionCtrl.getPromotion)
api.post('/promotions', auth, promotionCtrl.savePromotion)
api.delete('/promotions/:promotionId', auth, promotionCtrl.deletePromotion)
api.put('/promotions/:promotionId', auth, promotionCtrl.updatePromotion)

api.get('/clinicHistories', clinicHistoryCtrl.getClinicalHistories)
api.get('/clinicHistories/:clinicHistoryId', clinicHistoryCtrl.getClinicHistory)
api.get('/clinicHistories/pet/:petId', clinicHistoryCtrl.getClinicalHistoriesByPet)
api.post('/clinicHistories', auth, clinicHistoryCtrl.saveClinicHistory)
api.delete('/clinicHistories/:clinicHistoryId', auth, clinicHistoryCtrl.deleteClinicHistory)
api.put('/clinicHistories/:clinicHistoryId', auth, clinicHistoryCtrl.updateClinicHistory)

api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: `Tienes acceso`})
})

module.exports = api
