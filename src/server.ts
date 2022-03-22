
import express from "express";
import setupRoutes from './config/routes'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`)})

const app = express();

setupRoutes(app)

app.use(express.json());


app.listen(process.env.port, () => console.log( `'Server is running ${process.env.port}`));
