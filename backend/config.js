import { config } from 'dotenv'

config()

const requiredEnvVars = [
  'NODE_ENV',
  'DB_USER',
  'DB_PASSWORD',
  'DB_HOST',
  'DB_PORT',
  'DB_DATABASE',
  'PORT',
  'JWT_SECRET',
  'JWT_EXPIRES_IN'
]

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Error: Missing required environment variable ${envVar}`)
  }
})

export const NODE_ENV = process.env.NODE_ENV
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_HOST = process.env.DB_HOST

export const DB_PORT = Number(process.env.DB_PORT)

export const DB_DATABASE = process.env.DB_DATABASE

export const DB_CONNECTION_LIMIT = Number(process.env.DB_CONNECTION_LIMIT)

export const PORT = Number(process.env.PORT)

export const API_PREFIX = process.env.API_PREFIX

export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN
export const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS)

export const CORS_ORIGIN = process.env.CORS_ORIGIN
