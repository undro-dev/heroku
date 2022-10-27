import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, err =>
	err ? console.log(err) : console.log(`Server started on ${PORT}`)
);
