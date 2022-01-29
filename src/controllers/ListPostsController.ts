import { Request, Response } from 'express'

import { ListPostsService } from '@/services/ListPostsService'

export class ListPostsController {
  async handle(req: Request, res: Response) {
    try {
      const listPostsService = new ListPostsService()

      const posts = await listPostsService.execute()

      return res.json(posts)
    } catch (error) {
      console.log(error)

      return res.status(500).json({ message: 'Unknown error' })
    }
  }
}
