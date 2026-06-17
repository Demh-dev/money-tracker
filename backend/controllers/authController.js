import { registerUserService, loginUserService } from '../services/authService.js'
import { handleServiceResponse, handleCatchController, isNull } from '../utils/util.js'
import { NODE_ENV } from '../config.js'

// Register new user
export const register = async (req, res) => {
  try {
    const username = isNull(req.body.username)
    const email = isNull(req.body.email)
    const password = isNull(req.body.password)

    const result = await registerUserService(
      username,
      email,
      password
    )

    return res.status(result?.status).json(result?.response)
  } catch (err) {
    return handleCatchController(
      res,
      'Server error during registration',
      err
    )
  }
}

// Login user
export const login = async (req, res) => {
  try {
    const username = isNull(req.body.username)
    const password = isNull(req.body.password)

    const result = await loginUserService(username, password)

    if (result?.response?.result?.token) {
      const { token, user } = result.response.result

      res.cookie('token', token, {
        httpOnly: true, // Only the server can read the cookie, JS cannot access this cookie
        secure: NODE_ENV === 'production', // Only send cookies over HTTPS, if NODE_ENV === 'developer' only send cookies over HTTP
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000
      })

      return res.status(result.status).json({
        ...result.response,
        result: { user }
      })
    }

    return res.status(result?.status).json(result?.response)
  } catch (err) {
    return handleCatchController(
      res,
      'Server error during login',
      err
    )
  }
}

export const getMe = async (req, res) => {
  try {
    const username = isNull(req.user.username)

    const result = handleServiceResponse(0, 'Success', username)

    return res.status(result?.status).json(result?.response)
  } catch (err) {
    return handleCatchController(
      res,
      'Server error during getMe',
      err
    )
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie('token')
    const result = handleServiceResponse(0, 'Logout', null)
    return res.status(result?.status).json(result?.response)
  } catch (err) {
    return handleCatchController(
      res,
      'Server error during logout',
      err
    )
  }
}
