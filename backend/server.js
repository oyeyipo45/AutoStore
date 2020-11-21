import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddlerware.js';
import morgan from 'morgan';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use(express.json());

app.use(`/api/v1/products`, productRoutes);
app.use(`/api/v1/users`, userRoutes);
app.use(`/api/v1/orders`, orderRoutes);
app.use('/api/v1/upload', uploadRoutes);
app.get('/api/v1/config/paypal', (req, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontEnd/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontEnd', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.send('server is running');
	});
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(
	PORT,
	console.log(
		`app running in  ${process.env.NODE_ENV} mode  on PORT ${PORT}`.yellow.bold
	)
);
