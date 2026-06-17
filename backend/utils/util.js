import { TYPE_SUCCESS, TYPE_CLIENT_ERROR, TYPE_SERVER_ERROR } from './constants.js'
import { response } from '../middlewares/response.js'
import { pool } from '../db.js'

export const handleServiceResponse = (typeResult, message, result = null) => {
  try {
    if (typeResult === TYPE_SUCCESS) {
      return {
        status: 200,
        response: response(TYPE_SUCCESS, message, result)
      }
    } else if (typeResult === TYPE_CLIENT_ERROR) {
      return {
        status: 400,
        response: response(TYPE_CLIENT_ERROR, message, null)
      }
    } else {
      return {
        status: 500,
        response: response(TYPE_SERVER_ERROR, message, result)
      }
    }
  } catch (err) {
    console.error('handleServiceResponse', err)
    return {
      status: 500,
      response: response(TYPE_SERVER_ERROR, 'Internal server error', null)
    }
  }
}

export const handleCatchController = (res, errorMessage, err) => {
  try {
    console.error(err)

    return res.status(500).json(
      response(
        TYPE_SERVER_ERROR,
        errorMessage,
        null
      )
    )
  } catch (error) {
    console.log('handleCatchController error:', error)

    return res.status(500).json(
      response(
        TYPE_SERVER_ERROR,
        'Internal server error',
        null
      )
    )
  }
}

export const isNull = (value) => {
  if (value === '' || value == null || (Array.isArray(value) && value.length === 0)) {
    return null
  }

  if (value === 'undefined') {
    return null
  }

  return value
}

export const handleAuthorizationResponse = (res, message) => {
  try {
    return res.status(401).json(
      response(
        TYPE_CLIENT_ERROR,
        message,
        null
      )
    )
  } catch (error) {
    console.log('handleAuthorizationResponse error:', error)

    return res.status(500).json(
      response(
        TYPE_SERVER_ERROR,
        'Internal server error',
        null
      )
    )
  }
}

export const findUserById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM users WHERE id = ?',
    [id]
  )

  return rows[0]
}

export const validateUsername = (value) => {
  if (value == null || value === '') return 'Username is required'

  const trimmedValue = value.trim()

  if (/\s/.test(trimmedValue)) return 'Username cannot contain spaces'
  if (trimmedValue.length < 6) return 'Username must be at least 6 characters long'
  if (!/[a-zA-Z]/.test(trimmedValue)) return 'Username must contain at least one letter'
  if (!/[0-9]/.test(trimmedValue)) return 'Username must contain at least one number'

  return null
}

export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/ // Simple email regex for basic validation, it covers 95% of real-world email formats

  if (value == null || value === '') return 'Email is required'

  const trimmedValue = value.trim()

  if (!emailRegex.test(trimmedValue)) return 'Invalid email format'

  return null
}

export const validatePassword = (value) => {
  if (value == null || value === '') return 'Password is required'

  if (/\s/.test(value)) return 'Password cannot contain spaces'

  const trimmedValue = value.trim()

  if (trimmedValue.length < 8) return 'Password must be at least 8 characters long'
  if (!/[a-zA-Z]/.test(trimmedValue)) return 'Password must contain at least one letter'
  if (!/[0-9]/.test(trimmedValue)) return 'Password must contain at least one number'
  if (!/[!@#$^&*]/.test(trimmedValue)) return 'Password must contain at least one symbol'

  return null
}

export const validateType = (value) => {
  if (value == null || value === '') return 'Type is required'
  if (typeof value !== 'string') return 'Type must be a string'

  if (/\s/.test(value)) return 'Type cannot contain spaces'

  const trimmedValue = value.trim().toLowerCase()

  if (trimmedValue !== 'income' && trimmedValue !== 'expense') return 'Invalid type'

  return null
}

export const validateCurrency = (value) => {
  if (value == null || value === '') return 'Currency is required'
  if (typeof value !== 'string') return 'Currency must be a string'

  if (/\s/.test(value)) return 'Currency cannot contain spaces'

  const trimmedValue = value.trim().toUpperCase()

  if (trimmedValue !== 'LPS') return 'Invalid currency'

  return null
}

export const validateRawAmount = (value) => {
  if (value == null || value === '') return 'Amount is required'

  const stringValue = String(value)

  if (/\s/.test(stringValue)) return 'Amount cannot contain spaces'

  // Validate format (positive numbers with up to 2 decimals)
  if (!/^\d+(\.\d{1,2})?$/.test(stringValue)) {
    return 'Amount must be a positive number with up to two decimal places'
  }

  // Convert to number for range validation
  const numValue = parseFloat(stringValue)

  // Validate it's a positive amount
  if (numValue <= 0) {
    return 'Amount must be greater than zero'
  }

  // Validate maximum (e.g., 1 million)
  if (numValue > 1000000) {
    return 'Amount is too large'
  }

  return null
}

export const validateDate = (value) => {
  if (value == null || value === '') return 'Date is required'
  if (typeof value !== 'string') return 'Date must be a string'

  if (/\s/.test(value)) return 'Date cannot contain spaces'

  const trimmedValue = value.trim()

  if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(trimmedValue)) return 'Invalid date format'

  const dateObj = new Date(trimmedValue)

  const minDate = new Date('1900-01-01')
  if (dateObj < minDate) {
    return 'Date cannot be before 1900'
  }

  return null
}
