import express from 'express'
import { deleteUser, getAllUsers, getSingleUser, updateUser } from '../controllers/userControllers.js'
const router = express.Router()



// update User
router.put('/:id', updateUser)

// delete User
router.delete('/:id', deleteUser)

// getSingle User
router.get('/:id', getSingleUser)

// getAll User
router.get('/', getAllUsers)

export default router