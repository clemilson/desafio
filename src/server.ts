
import express from "express";
import setupRoutes from './config/routes'
import * as dotenv from 'dotenv'
import path from 'path'
import { errorCustomHandler } from "./middlewares/errorCustomHandler";

dotenv.config({ path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`)})

const app = express();

setupRoutes(app)

app.use(express.json())

app.use((req, res) => res.status(404).json({ msg: 'Rota não encontrada' }).end())

app.use(errorCustomHandler)



app.listen(process.env.port, () => console.log( `'Server is running ${process.env.port}`));
