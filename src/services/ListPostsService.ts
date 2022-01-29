import { getExpirationTime } from '@/helpers/getExpirationTime'
import { Post, PostModel } from '@/models/Post'

export class ListPostsService {
  async execute(): Promise<Post[]> {
    const posts = await PostModel.find().sort({ createdAt: 'DESC' })

    return posts
      .map((post) => post.toJSON())
      .filter((post) => {
        const expirationTime = getExpirationTime(post)

        return expirationTime > Date.now()
      })
  }
}
