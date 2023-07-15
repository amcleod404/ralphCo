import express from 'express'
import { authUser,
    registerUser,
    logOutUser,
    getUserProfile,
    UpdateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/logout', logOutUser)
router.post('/auth', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, UpdateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserByID).put(protect, admin, updateUser)

export default router;
