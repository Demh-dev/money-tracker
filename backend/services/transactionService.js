import { pool } from '../db.js'
import { handleServiceResponse, validateType, validateCurrency, validateRawAmount, validateDate } from '../utils/util.js'
import { TYPE_SUCCESS, TYPE_CLIENT_ERROR, TYPE_SERVER_ERROR } from '../utils/constants.js'

export const getTransactionsService = async (userId) => {
  try {
    const [rows] = await pool.query(
      'CALL sp_get_transactions(?, @out_message)',
      [userId]
    )

    const [output] = await pool.query(
            `SELECT
                @out_message AS message`
    )

    const { message } = output[0]

    const transactions = rows[0]

    return handleServiceResponse(
      TYPE_SUCCESS,
      message,
      transactions
    )
  } catch (err) {
    console.error('getTransactionsService error:', err)

    return handleServiceResponse(
      TYPE_SERVER_ERROR,
      'Database error while loading transactions',
      null
    )
  }
}

export const createTransactionService = async (userId, type, currency, rawAmount, date) => {
  try {
    const typeError = validateType(type)
    if (typeError) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        typeError,
        null
      )
    }

    const currencyError = validateCurrency(currency)
    if (currencyError) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        currencyError,
        null
      )
    }

    const rawAmountError = validateRawAmount(rawAmount)
    if (rawAmountError) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        rawAmountError,
        null
      )
    }

    const dateError = validateDate(date)
    if (dateError) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        dateError,
        null
      )
    }

    const [rows] = await pool.query(
      'CALL sp_create_transaction(?, ?, ?, ?, ?, @out_success, @out_message)',
      [userId, type, currency, rawAmount, date]
    )

    const [output] = await pool.query(
            `SELECT
                @out_success AS success,
                @out_message AS message`
    )

    const { success, message } = output[0]

    const transaction = rows[0][0]

    return handleServiceResponse(
      TYPE_SUCCESS,
      message,
      transaction
    )
  } catch (err) {
    console.error('createTransactionService error:', err)

    return handleServiceResponse(
      TYPE_SERVER_ERROR,
      'Database error while creating new transaction',
      null
    )
  }
}

export const deleteTransactionService = async (id, userId) => {
  try {
    if (!id || Number.isNaN(Number(id)) || id <= 0) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        'Invalid transaction',
        null
      )
    }

    await pool.query(
      'CALL sp_delete_transaction(?, ?, @out_success, @out_message)',
      [id, userId]
    )

    const [output] = await pool.query(
            `SELECT
                @out_success AS success,
                @out_message AS message`
    )

    const { success, message } = output[0]

    if (success === 0) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        message,
        null
      )
    } else {
      return handleServiceResponse(
        TYPE_SUCCESS,
        message,
        null
      )
    }
  } catch (err) {
    console.error('deleteTransactionService error:', err)

    return handleServiceResponse(
      TYPE_SERVER_ERROR,
      'Database error while deleting a transaction',
      null
    )
  }
}
