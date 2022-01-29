import { Request, Response } from 'express'

import { LikePostService } from '@/services/LikePostService'
import { socket } from '@/socket'

export class LikePostController {
  async handle(req: Request, res: Response) {
    const { postId } = req.body

    if (!postId) {
      return res.status(400).json({ message: 'Property postId is required' })
    }

    try {
      const likePostService = new LikePostService()

      const result = await likePostService.execute({ postId })

      if (!result.success) {
        return res.status(400).json({ message: result.message })
      }

      socket.emit('post-liked', { postId })

      return res.sendStatus(204)
    } catch (error) {
      console.log(error)

      return res.status(500).json({ message: 'Unknown error' })
    }
  }
}
