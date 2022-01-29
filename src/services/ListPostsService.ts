import { Post, PostModel } from '@/models/Post'

export class ListPostsService {
  async execute(): Promise<Post[]> {
    const posts = await PostModel.find({ hasExpired: false })

    return posts.map((post) => post.toJSON())
  }
}
