import { getExpirationTime } from '@/helpers/getExpirationTime'
import { PostModel } from '@/models/Post'
import { socket } from '@/socket'

export type LikePostInputDTO = {
  postId: string
}

export type LikePostOutputDTO = {
  success: boolean
  message: string
}

export class LikePostService {
  async execute({ postId }: LikePostInputDTO): Promise<LikePostOutputDTO> {
    const post = await PostModel.findById(postId)

    if (!post) {
      return { success: false, message: 'Post not found' }
    }

    const postData = post.toJSON()

    const expiration = getExpirationTime(postData)
    if (expiration < Date.now()) {
      socket.emit('post-expired', { postId })

      return { success: false, message: 'Post expired' }
    }

    await post.update({ $inc: { likesCount: 1 } })

    return { success: true, message: 'Liked post' }
  }
}
