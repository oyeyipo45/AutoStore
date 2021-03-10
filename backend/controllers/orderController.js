import Order from '../models/orderModel.js';
import asyncHandler from 'express-async-handler';

// @desc     	Create New Order
// @route    	POST /api/v1/orders
// @access   	Private
const addOrderItems = asyncHandler(async (req, res) => {
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		taxPrice,
		shippingPrice,
		totalPrice,
	} = req.body;

	if (orderItems && orderItems.length === 0) {
		throw new Error('No order items');
	} else {
		const order = new Order({
			orderItems,
			user: req.user._id,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
		});

		const createdOrder = await order.save();
		res.status(201).json(createdOrder);
	}
});

// @desc     	Get Order ID
// @route    	GET /api/v1/orders/:id
// @access   	Private
const getOrderById = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id).populate(
		'user',
		'name email'
	);

	if (order) {
		res.json(order);
	} else {
		res.status(404);
		throw new Error('Order not Found');
	}
});

// @desc    	 Update order To Paid
// @route   	 PUT /api/v1/orders/:id/pay
// @access  	 Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);

	if (order) {
		order.isPaid = true;
		order.paidAt = Date.now();
		order.paymentResult = {
			id: req.body.id,
			status: req.body.status,
			update_time: req.body.update_time,
			email_address: req.body.payer.email_address,
		};

		const updatedOrder = await order.save();

		res.json(updatedOrder);
	} else {
		res.status(404);
		throw new Error('Order not Found');
	}
});

// @desc    	 Get logged In user orders
// @route   	 GET /api/v1/orders/myorders
// @access  	 Private
const getMyOrders = asyncHandler(async (req, res) => {
	const orders = await Order.find({ user: req.user._id });
	res.json(orders);
});

// @desc    	 Get all orders
// @route   	 GET /api/v1/orders/
// @access  	 Private
const getOrders = asyncHandler(async (req, res) => {
	const orders = await Order.find({}).populate('user', 'id name');
	res.json(orders);
});



// @desc    	 Update order To Delivered
// @route   	 PUT /api/v1/orders/:id/deliver
// @access  	 Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);

	if (order) {
		order.isDelivered = true;
		order.deliveredAt = Date.now();

		const updatedOrder = await order.save();

		res.json(updatedOrder);
	} else {
		res.status(404);
		throw new Error('Order not Found');
	}
});

export {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	getMyOrders,
	getOrders,
	updateOrderToDelivered,
};
