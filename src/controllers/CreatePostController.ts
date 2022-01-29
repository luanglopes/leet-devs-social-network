import { Request, Response } from 'express'

import { CreatePostService } from '@/services/CreatePostService'
import { socket } from '@/socket'

export class CreatePostController {
  async handle(req: Request, res: Response) {
    const { body } = req

    if (!body.content) {
      return res.status(400).json({ message: 'Property contente is required' })
    }

    try {
      const createPostService = new CreatePostService()

      const newPost = await createPostService.execute({ content: body.content })

      socket.emit('post-created', newPost)

      return res.status(201).json(newPost)
    } catch (error) {
      console.log(error)

      return res.status(500).json({ message: 'Unknown error' })
    }
  }
}
