'use strict'

const express = require('express')
const router = express.Router()

router.get('/index', (req, res) => {
  let meal = ['Fried chiken', 'pecel lele', 'Mie Ayam', 'Martabak', 'Roti Bakar']
  res.json({
    meal: meal
  })
})

module.exports = router
