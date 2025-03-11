const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    point: {
      type: Number,
      required: true
    },
    img: {
      type: String
    },
    createdAt: {
      type: Date,
      default: new Date()
    }
  },
  {
    timestamps: true,
    collection: 'Questions'
  }
)

const Questions = mongoose.model('Questions', QuestionSchema, 'Questions')

module.exports = Questions
