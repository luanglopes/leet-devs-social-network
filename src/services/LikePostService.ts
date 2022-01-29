import { PostModel } from '@/models/Post'

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

    const expiration = postData.createdAt.getTime() + 60 * 1000 + postData.likesCount * (30 * 1000)
    if (expiration < Date.now()) {
      return { success: false, message: 'Post expired' }
    }

    await post.update({ $inc: { likesCount: 1 } })

    return { success: true, message: 'Liked post' }
  }
}
