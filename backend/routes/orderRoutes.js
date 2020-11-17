import express from 'express';
const router = express.Router();
import {addOrderItems , getOrderById, updateOrderToPaid
} from '../controllers/orderController.js';
import { protect } from './../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
// router.post('/login', authUser);
// router
// 	.route('/profile')
// 	.get(protect, getUserProfile)
// 	.put(protect, updateUserProfile);

export default router;
