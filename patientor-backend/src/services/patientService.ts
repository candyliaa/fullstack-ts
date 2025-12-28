import patientData from '../../data/patients.ts';
import { Patient, NonSensitivePatient } from '../types.ts'

const patients: Patient[] = patientData;

const getEntries = (): NonSensitivePatient[] => {
    return patients.map(({ ssn, ...rest }) => rest);
};

const addPatient = () => {
    return null;
};

export default {
    getEntries,
    addPatient
};