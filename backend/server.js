import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler } from './middleware/errorMiddlerware.js'
import morgan from 'morgan'




dotenv.config();

connectDb();

const app = express();

app.get('/', (req, res) => {
	res.send('server is running');
});

app.use(`/api/products`, productRoutes)

app.use(notFound)
app.use(errorHandler)
app.use(morgan('tiny'))

const PORT = process.env.PORT || 5001;

app.listen(
	PORT,
	console.log(`app running in  ${process.env.NODE_ENV} mode  on PORT ${PORT}`.yellow.bold)
);