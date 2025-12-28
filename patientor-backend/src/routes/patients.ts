import express, { Request, Response } from 'express';
import { NonSensitivePatient } from '../types';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req: Request, res: Response<NonSensitivePatient[]>) => {
    res.send(patientService.getEntries());
});

export default router;