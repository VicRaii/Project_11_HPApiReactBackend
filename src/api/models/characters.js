const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    alternate_names: { type: String },
    dateOfBirth: { type: String, required: true },
    ancestry: { type: String, required: true },
    actor: { type: String, required: true },
    alive: { type: String, required: true },
    house: {
      type: String,
      required: true,
      enum: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']
    }
  },
  {
    timestamps: true,
    collection: 'characters'
  }
)

const Character = mongoose.model('characters', characterSchema, 'characters')
module.exports = Character
