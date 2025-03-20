require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const cors = require('cors')
const charactersRoutes = require('./src/api/routes/characters')
const questionsRouter = require('./src/api/routes/questions')

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: 'https://project-11-hpapi-react.netlify.app',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  })
)

connectDB()

app.use('/api/v1/characters', charactersRoutes)
app.use('/api/v1/questions', questionsRouter)
app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found')
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
