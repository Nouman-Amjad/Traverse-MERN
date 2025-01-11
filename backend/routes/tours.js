import express from 'express'
import {createTour, deleteTour, getAllTours, getFeaturedTour, getSingleTour, getTourCount, getTourbySearch, updateTour} from './../controllers/tourControllers.js';

const router = express.Router()

// create new tour
router.post('/', createTour)

// update tour
router.put('/:id', updateTour)

// delete tour
router.delete('/:id', deleteTour)

// getSingle tour
router.get('/:id', getSingleTour)

// getAll tour
router.get('/', getAllTours)

// get Tour by Search
router.get('/search/getTourbySearch', getTourbySearch)

// Featured Tour
router.get('/search/getFeaturedTour', getFeaturedTour)

// Tour Count
router.get('/search/getTourCount', getTourCount)



export default router; 