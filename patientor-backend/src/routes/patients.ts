import express, { Request, Response } from 'express';
import { NonSensitivePatient } from '../types';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req: Request, res: Response<NonSensitivePatient[]>) => {
    res.send(patientService.getEntries());
});

router.post('/', (req: Request, res: Response) => {
    const { name, dateOfBirth, ssn, gender, occupation } = req.body;
    const addedPatient = patientService.addPatient({
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation,
    });
    res.json(addedPatient);
});

export default router;