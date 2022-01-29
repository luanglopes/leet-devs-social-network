import { Post, PostModel } from '@/models/Post'

export type CreatePostInputDTO = {
  content: Post['content']
}

export class CreatePostService {
  async execute({ content }: CreatePostInputDTO): Promise<Post> {
    const createdAt = new Date()

    const post = await PostModel.create({
      content,
      createdAt,
      hasExpired: false,
      likesCount: 0,
    })

    return post.toJSON()
  }
}
