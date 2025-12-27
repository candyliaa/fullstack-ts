import express, { Request, Response } from 'express';
import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.get('/hello', (_req: Request, res: Response) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req: Request, res: Response) => {
  const height: number = Number(req.query.height);
  const weight: number = Number(req.query.weight);
  const bmi: string = calculateBmi(height, weight);
  res.send({ weight: weight, height: height, bmi: bmi });
});

app.post('/exercises', (req: Request, res: Response) => {
  const { daily_exercises, target } = req.body;

  if (!Array.isArray(daily_exercises) || target === undefined) {
    return res.status(400).json({ error: 'malformatted parameters' });
  };

  if (!daily_exercises) {
    return res.status(400).json({ error: 'parameters missing' });
  };

  const target_value: number = Number(target);

  const exercises: number[] = daily_exercises.map((val => {
    const num = Number(val);
    return num;
  }));

  return res.send(calculateExercises(exercises, target_value));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});