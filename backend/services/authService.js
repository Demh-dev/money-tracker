import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { pool } from '../db.js'
import { JWT_SECRET, JWT_EXPIRES_IN, BCRYPT_ROUNDS } from '../config.js'
import { handleServiceResponse, validateUsername, validateEmail, validatePassword } from '../utils/util.js'
import { TYPE_SUCCESS, TYPE_CLIENT_ERROR, TYPE_SERVER_ERROR } from '../utils/constants.js'

export const registerUserService = async (username, email, password) => {
  try {
    // Validations
    const usernameError = validateUsername(username)
    if (usernameError) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        usernameError,
        null
      )
    }
    const emailError = validateEmail(email)
    if (emailError) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        emailError,
        null
      )
    }
    const passwordError = validatePassword(password)
    if (passwordError) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        passwordError,
        null
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS)

    // Check if user already exists
    await pool.query(
      'CALL sp_register_user(?, ?, @out_success, @out_message)',
      [username, email, hashedPassword]
    )

    const [output] = await pool.query(
            `SELECT
                @out_success AS success,
                @out_message AS message,`
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
        message
      )
    }
  } catch (err) {
    console.error('registerUserService error:', err)

    return handleServiceResponse(
      TYPE_SERVER_ERROR,
      'Database error during registration',
      null
    )
  }
}

export const loginUserService = async (username, password) => {
  try {
    // Validations
    const usernameError = validateUsername(username)
    if (usernameError) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        usernameError,
        null
      )
    }
    const passwordError = validatePassword(password)
    if (passwordError) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        passwordError,
        null
      )
    }

    // Find user
    await pool.query(
      'CALL sp_login_user(?, @out_success, @out_message, @out_user_id, @out_username, @out_email, @out_password_hash)',
      [username]
    )

    const [output] = await pool.query(
            `SELECT
                @out_success AS success,
                @out_message AS message,
                @out_user_id AS userId,
                @out_username AS dbUsername,
                @out_email AS email,
                @out_password_hash AS hashPassword`
    )

    const { success, message, userId, dbUsername, email, hashPassword } = output[0]

    if (success === 0) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        message,
        null
      )
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, hashPassword)

    if (!isPasswordValid) {
      return handleServiceResponse(
        TYPE_CLIENT_ERROR,
        'Invalid username or password',
        null
      )
    }

    // Create JWT token
    const token = jwt.sign(
      { id: userId, username: dbUsername },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    if (success === 1) {
      return handleServiceResponse(
        TYPE_SUCCESS,
        message,
        {
          token,
          user: {
            id: userId,
            username: dbUsername,
            email
          }
        }
      )
    }
  } catch (err) {
    console.error('loginUserService error:', err)

    return handleServiceResponse(
      TYPE_SERVER_ERROR,
      'Database error during login',
      null
    )
  }
}
