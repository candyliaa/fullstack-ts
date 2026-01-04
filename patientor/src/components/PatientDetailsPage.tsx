import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import patientService from "../services/patients";
import { Patient } from "../types";
import { Typography } from "@mui/material";

const PatientDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchPatient = async () => {
            const patient = await patientService.getById(id);
            setPatient(patient);
        };

        fetchPatient();

    }, [id]);

    if (!patient) {
        return <Typography>Loading...</Typography>
    }

    return (
        <>
            <Typography variant="h3">{patient.name} {patient.gender}</Typography>
            <Typography> ssh: {patient.ssn}</Typography>
            <Typography>occupation: {patient.occupation}</Typography>
        </>
    );
};

export default PatientDetailsPage;