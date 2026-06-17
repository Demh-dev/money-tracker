import app from './app.js'

import { pool } from './db.js'

import { PORT } from './config.js'

const startServer = async () => {
  try {
    const connection = await pool.getConnection()

    console.log('Database connected successfully')

    connection.release()

    app.listen(PORT, '0.0.0.0', () => {
      console.log(
                `Server running on http://localhost:${PORT}`
      )
    })
  } catch (error) {
    console.error('Failed to connect to database:', error)

    process.exit(1)
  }
}

startServer()
