export interface Diagnosis {
    code: string,
    name: string,
    latin?: string
};

export interface Entry {
}

export interface Patient {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string,
    entries: Entry[]
};

export enum Gender {
    Other = 'other',
    Female = 'female',
    Male = 'male'
};

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = Omit<Patient, 'id'>;