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
    points: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'Questions'
  }
)

const Questions = mongoose.model('Questions', QuestionSchema, 'Questions')

module.exports = Questions
