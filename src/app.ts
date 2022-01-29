import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import { postsRouter } from '@/routes/posts'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/posts', postsRouter)

export { app }
