import express from 'express'
import { register, login, getMe, logout } from '../controllers/authController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/RegisterUser', register)
router.post('/Login', login)
router.get('/Me', authMiddleware, getMe)
router.post('/Logout', logout)

export default router
