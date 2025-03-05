const Character = require('../models/characters')

const getCharacters = async (req, res, next) => {
  try {
    const characters = await Character.find()
    return res.status(200).json(characters)
  } catch (error) {
    return res.status(400).json('Error getting characters')
  }
}

const getCharactersById = async (req, res, next) => {
  try {
    const { id } = req.params
    const character = await Character.findById(id)
    return res.status(200).json(character)
  } catch (error) {
    return res.status(400).json('Error getting characters by ID')
  }
}

const getCharactersByHouse = async (req, res, next) => {
  try {
    const { house } = req.params
    const characters = await Character.find({ house })
    return res.status(200).json(characters)
  } catch (error) {
    return res.status(400).json('Error getting characters by house')
  }
}

const getCharactersByAncestry = async (req, res, next) => {
  try {
    const { ancestry } = req.params
    const characters = await Character.find({ ancestry })
    return res.status(200).json(characters)
  } catch (error) {
    return res.status(400).json('Error getting characters by ancestry')
  }
}

module.exports = {
  getCharacters,
  getCharactersById,
  getCharactersByHouse,
  getCharactersByAncestry
}
