'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PetSchema = Schema({
  owner: String,
  name: String,
  photo: String,
  breed: String,
  birthdate: String,
  gender: {type: String, enum: ['Male','Female']},
  status: { type: String, default: "A" },
  createDate: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Pet',PetSchema)
