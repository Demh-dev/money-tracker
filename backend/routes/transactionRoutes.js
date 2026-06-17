import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import {
  getTransactions,
  createTransaction,
  deleteTransaction
} from '../controllers/transactionController.js'

const router = express.Router()

router.get('/GetTransactions', authMiddleware, getTransactions)
router.post('/CreateTransaction', authMiddleware, createTransaction)
router.delete('/DeleteTransaction', authMiddleware, deleteTransaction)

export default router
