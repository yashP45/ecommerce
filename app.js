const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoute')
app.use(express.json({ limit: '10kb' }));



app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRoutes);
module.exports = app;
