const {
  getCharacters,
  getCharactersById,
  getCharactersByHouse,
  getCharactersByAncestry
} = require('../controllers/characters')

const charactersRoutes = require('express').Router()

charactersRoutes.get('/', getCharacters)
charactersRoutes.get('/:id', getCharactersById)
charactersRoutes.get('/house/:house', getCharactersByHouse)
charactersRoutes.get('/ancestry/:ancestry', getCharactersByAncestry)

module.exports = charactersRoutes
