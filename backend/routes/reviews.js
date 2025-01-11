import express from 'express'
import { createReview } from '../controllers/reviewControllers.js'

const router = express.Router()

router.post('/:tourId', createReview)

export default router