import mongoose from 'mongoose'

const { model, Schema } = mongoose

export type Post = {
  content: string
  createdAt: Date
  likesCount: number
  hasExpired: boolean
}

const schema = new Schema<Post>({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true },
  likesCount: { type: Number, required: true, default: 0 },
  hasExpired: { type: Boolean, required: true, default: false },
})

export const PostModel = model<Post>('Post', schema)
