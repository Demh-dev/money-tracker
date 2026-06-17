import { getTransactionsService, createTransactionService, deleteTransactionService } from '../services/transactionService.js'
import { handleCatchController, isNull } from '../utils/util.js'

export const getTransactions = async (req, res) => {
  try {
    const userId = isNull(req.user.id)

    const result = await getTransactionsService(userId)

    return res.status(result?.status).json(result?.response)
  } catch (err) {
    return handleCatchController(
      res,
      'Server error while loading transactions',
      err
    )
  }
}

export const createTransaction = async (req, res) => {
  try {
    const userId = isNull(req.user.id)

    const type = isNull(req.body.type)
    const currency = isNull(req.body.currency)
    const rawAmount = isNull(req.body.rawAmount)
    const date = isNull(req.body.date)

    const result = await createTransactionService(
      userId,
      type,
      currency,
      rawAmount,
      date
    )

    return res.status(result?.status).json(result?.response)
  } catch (err) {
    return handleCatchController(
      res,
      'Server error while creating new transaction',
      err
    )
  }
}

export const deleteTransaction = async (req, res) => {
  try {
    const id = isNull(req.body.id)
    const userId = isNull(req.user.id)

    const result = await deleteTransactionService(
      id,
      userId
    )

    return res.status(result?.status).json(result?.response)
  } catch (err) {
    return handleCatchController(
      res,
      'Server error while deleting a transaction',
      err
    )
  }
}
