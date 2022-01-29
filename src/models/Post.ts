import mongoose from 'mongoose'

const { model, Schema } = mongoose

export type Post = {
  content: string
  createdAt: Date
  likesCount: number
}

const schema = new Schema<Post>({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true },
  likesCount: { type: Number, required: true, default: 0 },
})

export const PostModel = model<Post>('Post', schema)
