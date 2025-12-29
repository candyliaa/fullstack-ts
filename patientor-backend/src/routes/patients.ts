import express, { Request, Response } from 'express';
import { NonSensitivePatient } from '../types';
import patientService from '../services/patientService';
import toNewPatient from '../utils/utils';

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
        let errorMessage = 'Something went wrong!';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;