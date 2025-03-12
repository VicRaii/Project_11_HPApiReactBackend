const { getQuestions } = require('../controllers/questions')
const questionsRouter = require('express').Router()

questionsRouter.get('/', getQuestions)

module.exports = questionsRouter
