import express from 'express'
import { createBooking, getAllBookings, getBooking } from '../controllers/bookingController.js'

const router = express.Router()

router.post('/', createBooking)
router.get('/:id', getBooking)
router.get('/', getAllBookings)

export default router