import { createServer } from 'http'
import mongoose from 'mongoose'

import { app } from '@/app'
import { startSocketIo } from '@/socket'

const start = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || '')

    const server = createServer(app)

    const port = Number(process.env.HTTP_PORT || 3000)

    server.on('listening', () => {
      console.log(`🚀 Server listening on  http://localhost:${port}`)
    })

    startSocketIo(server)

    server.listen(port)
  } catch (error) {
    console.log(error)
    process.exit(-1)
  }
}

start()
