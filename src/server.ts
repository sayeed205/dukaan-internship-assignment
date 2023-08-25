import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

import db from './config/db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await db.authenticate();
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
