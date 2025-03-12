require('dotenv').config()
const mongoose = require('mongoose')
const Questions = require('../../api/models/questions')
const questions = require('../../api/data/quizQuestions')

const launchSeed = async () => {
  try {
    console.log('Connecting to MongoDB...')
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to MongoDB')

    await Questions.collection.drop()
    console.log('Characters collection dropped')

    await Questions.insertMany(questions)
    console.log('Characters inserted')

    await mongoose.disconnect()
    console.log('Disconnected from database')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

launchSeed()
