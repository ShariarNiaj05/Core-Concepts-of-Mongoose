import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
// const port = process.env.PORT;

//             parser

app.use(express.json());
app.use(cors());

const getControllerNamedA = (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
};

app.get('/', getControllerNamedA);

export default app;
