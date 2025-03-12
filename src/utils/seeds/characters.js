require('dotenv').config()
const mongoose = require('mongoose')
const Character = require('../../api/models/characters')
const characters = require('../../api/data/charactersData')

const launchSeed = async () => {
  try {
    console.log('Connecting to MongoDB...')
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to MongoDB')

    await Character.collection.drop()
    console.log('Characters collection dropped')

    await Character.insertMany(characters)
    console.log('Characters inserted')

    await mongoose.disconnect()
    console.log('Disconnected from database')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

launchSeed()
