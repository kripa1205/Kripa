// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import connectDB from './utils/connectDB.js';
// import productRoutes from './routes/productRoutes.js'
// import userRoutes from './routes/userRoutes.js';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json()); // to read JSON from req.body

// connectDB();

// // Routes
// app.use('/api/products', productRoutes);
// app.use('/api/users', userRoutes);

// // Home route
// app.get('/', (req, res) => {
//   res.send('Server is running...');
//   });

//   app.listen(PORT, () => {
//     console.log(`Server is live at http://localhost:${PORT}`);
//     });

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/connectDB.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});