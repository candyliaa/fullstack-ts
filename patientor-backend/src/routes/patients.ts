import express, { Request, Response } from 'express';
import { NonSensitivePatient } from '../types';
import patientService from '../services/patientService';
import toNewPatient from '../utils/utils';
import z from 'zod';

const router = express.Router();

router.get('/', (_req: Request, res: Response<NonSensitivePatient[]>) => {
    res.send(patientService.getEntries());
});

router.post('/', (req: Request, res: Response) => {
    try {
        const newPatient = toNewPatient(req.body);

        const addedPatient = patientService.addPatient(newPatient);
        res.json(addedPatient);

    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            res.status(400).send({ error: error.issues });
        } else {
            res.status(400).send({ error: 'unknown error' });
        }
    }
});

export default router;