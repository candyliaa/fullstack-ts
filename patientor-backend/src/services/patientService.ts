import patientData from '../../data/patients.ts';
import { Patient, NonSensitivePatient, NewPatient} from '../types.ts'
import { v1 as uuid } from 'uuid';

const id = uuid();

const patients: Patient[] = patientData;

const getEntries = (): NonSensitivePatient[] => {
    return patients.map(({ ssn, ...rest }) => rest);
};

const addPatient = (entry: NewPatient): Patient => {
    const newPatient = {
        id,
        ...entry
    };

    patients.push(newPatient);
    return newPatient;
};

export default {
    getEntries,
    addPatient
};