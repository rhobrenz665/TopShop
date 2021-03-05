import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import products from '../src/data/products';

dotenv.config();

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
