const express = require('express')
const Questions = require('../models/questions')

const getQuestions = async (req, res, next) => {
  try {
    const questions = await Questions.find()
    res.status(200).json(questions)
  } catch (error) {
    res.status(500).json({ error: 'Error getting questions' })
  }
}

module.exports = { getQuestions }

//! /QUESTIONS SIGUE FALLANDO AL DESPLEGARSE
