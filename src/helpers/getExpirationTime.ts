import { Post } from '@/models/Post'

export const getExpirationTime = (post: Post) => {
  return post.createdAt.getTime() + 60 * 1000 + post.likesCount * (30 * 1000)
}
