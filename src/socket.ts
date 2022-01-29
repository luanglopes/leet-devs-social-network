import { Server } from 'http'
import { Server as SocketServer } from 'socket.io'

export let socket: SocketServer

export const startSocketIo = (server: Server) => {
  socket = new SocketServer(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      allowedHeaders: ['my-custom-header'],
      credentials: true,
    },
  })

  socket.on('connection', (client) => {
    console.log(`client ${client.id} connected`)

    client.on('disconnect', () => {
      console.log(`client ${client.id} disconnected`)
    })
  })
}
