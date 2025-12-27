import express, { Request, Response } from 'express';
import calculateBmi from './bmiCalculator';

const app = express();

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.get('/hello', (_req: Request, res: Response) => {
  res.send('Hello Full Stack!');
})

app.get('/bmi', (req: Request, res: Response) => {
  const height: number = Number(req.query.height);
  const weight: number = Number(req.query.weight);
  const bmi: string = calculateBmi(height, weight);
  res.send({ weight: weight, height: height, bmi: bmi })
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});