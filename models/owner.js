'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)

const OwnerSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  name: String,
  lastName: String,
  password: { type: String, select: true },
  photo: { type: String, default: "" },
  address: String,
  mobilePhone: Number,
  gender: {type: String, enum: ['Man','Woman']},
  status: { type: String, default: "A" },
  signUpDate: { type: Date, default: Date.now() }
})


module.exports = mongoose.model('Owner', OwnerSchema)
