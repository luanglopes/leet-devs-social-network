import { Router } from 'express'

import { CreatePostController } from '@/controllers/CreatePostController'
import { LikePostController } from '@/controllers/LikePostController'
import { ListPostsController } from '@/controllers/ListPostsController'

const postsRouter = Router()

postsRouter.post('/', new CreatePostController().handle)
postsRouter.get('/', new ListPostsController().handle)
postsRouter.post('/like', new LikePostController().handle)

export { postsRouter }
