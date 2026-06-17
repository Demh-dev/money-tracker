import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { API_PREFIX, CORS_ORIGIN } from './config.js'

import authRoutes from './routes/authRoutes.js'
import transactionRoutes from './routes/transactionRoutes.js'

const app = express()

// Middleware
app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use(`${API_PREFIX}/auth`, authRoutes)
app.use(`${API_PREFIX}/transactions`, transactionRoutes)

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'MoneyTracker API is running!' })
})

export default app
