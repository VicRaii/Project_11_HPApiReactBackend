require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const cors = require('cors')
const charactersRoutes = require('./src/api/routes/characters')

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:4173',
      'https://project-11-hp-api-react-backend.vercel.app'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })
)

connectDB()

app.use('/api/v1/characters', charactersRoutes)
app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found')
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
