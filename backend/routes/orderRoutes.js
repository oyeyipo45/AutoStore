import express from 'express';
const router = express.Router();
import {addOrderItems
} from '../controllers/orderController.js';
import { protect } from './../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
// router.post('/login', authUser);
// router
// 	.route('/profile')
// 	.get(protect, getUserProfile)
// 	.put(protect, updateUserProfile);

export default router;
