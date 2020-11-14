import express from 'express';
const router = express.Router();
import {addOrderItems , getOrderById
} from '../controllers/orderController.js';
import { protect } from './../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById)
// router.post('/login', authUser);
// router
// 	.route('/profile')
// 	.get(protect, getUserProfile)
// 	.put(protect, updateUserProfile);

export default router;
