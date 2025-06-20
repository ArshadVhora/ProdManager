import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ProductRoutes from './routes/productroute.js';
import AuthRoutes from './routes/authroutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config(); // Load env variables

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', ProductRoutes);
app.use('/api/auth', AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
