import { Gender, NewPatient } from "../types";
import z from 'zod';

const newPatientSchema = z.object({
    name: z.string(),
    dateOfBirth: z.iso.date(),
    ssn: z.string(),
    gender: z.enum(Gender),
    occupation: z.string(),
    entries: z.array(z.never())
});

const toNewPatient = (object: unknown): NewPatient => {
    return newPatientSchema.parse(object);
};

export default toNewPatient