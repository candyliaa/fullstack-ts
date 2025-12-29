export interface Diagnosis {
    code: string,
    name: string,
    latin?: string
};

export interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string
};

export enum Gender {
    Other = 'other',
    Female = 'female',
    Male = 'male'
};

export type NonSensitivePatient = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;