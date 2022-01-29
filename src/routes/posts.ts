import { Router } from 'express'

import { CreatePostController } from '@/controllers/CreatePostController'

const postsRouter = Router()

postsRouter.post('/', new CreatePostController().handle)

export { postsRouter }
