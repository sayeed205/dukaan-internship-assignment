import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
dotenv.config();

import db from './config/db';
import { errorHandler } from './middleware';
import {
    chatbotRouter,
    conversationRouter,
    endUserRouter,
    userRouter,
} from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(userRouter); // user router
app.use(chatbotRouter); // chatbot router
app.use(endUserRouter); // end-user router
app.use(conversationRouter); // conversation router

const PORT = process.env.PORT || 5000;

app.use(errorHandler);

app.listen(PORT, async () => {
    await db.authenticate();
    await db.sync();
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
