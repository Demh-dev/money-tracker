import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config.js'
import { handleAuthorizationResponse, findUserById } from '../utils/util.js'

export const authMiddleware = async (req, res, next) => {
  try {
    // Get the token from header
    const token = req.cookies.token

    if (!token) {
      return handleAuthorizationResponse(res, 'Access denied')
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET)

    const user = await findUserById(decoded.id)

    if (!user) {
      return handleAuthorizationResponse(res, 'Access denied')
    }

    req.user = user
    next()
  } catch (error) {
    return handleAuthorizationResponse(res, 'Access denied')
  }
}
