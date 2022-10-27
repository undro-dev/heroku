import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'hello' });
});

app.listen(PORT, err =>
	err ? console.log(err) : console.log(`Server started on port ${PORT}`)
);
