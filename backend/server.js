// server.js

const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const db = require('./db')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Routes
app.use('/auth', authRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
