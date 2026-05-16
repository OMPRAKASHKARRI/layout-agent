import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';

import chatRoute from './routes/chat.js';

const app = express();

app.use(cors());

app.use(express.json({ limit: '10mb' }));

app.use('/api/chat', chatRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});