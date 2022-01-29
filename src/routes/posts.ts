import { Router } from 'express'

import { CreatePostController } from '@/controllers/CreatePostController'
import { ListPostsController } from '@/controllers/ListPostsController'

const postsRouter = Router()

postsRouter.post('/', new CreatePostController().handle)
postsRouter.get('/', new ListPostsController().handle)

export { postsRouter }
