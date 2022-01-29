import { createServer } from 'http'

import { app } from '@/app'

const server = createServer(app)

const port = Number(process.env.HTTP_PORT || 3000)

server.on('listening', () => {
  console.log(`🚀 Server listening on  http://localhost:${port}`)
})

server.listen(port)
