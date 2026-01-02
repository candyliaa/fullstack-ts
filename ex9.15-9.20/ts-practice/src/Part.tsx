import type { CoursePart } from "./types";

interface PartProps {
    part: CoursePart;
}

const Part = (props: PartProps) => {
    const assertNever = (value: never): never => {
        throw new Error(
            `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
    };

    switch (props.part.kind) {
        case "basic":
            return (
                <div>
                    <h2>{props.part.name} {props.part.exerciseCount}</h2>
                    <i>{props.part.description}</i>
                </div>
            )
        case "group":
            return (
                <div>
                    <h2>{props.part.name} {props.part.exerciseCount}</h2>
                    <p>project exercises {props.part.groupProjectCount}</p>
                </div>
            )
        case "background":
            return (
                <div>
                    <h2>{props.part.name} {props.part.exerciseCount}</h2>
                    <i>{props.part.description}</i>
                    <p>background material: {props.part.backgroundMaterial}</p>
                </div>
            )
        case "special":
            return (
                <div>
                    <h2>{props.part.name} {props.part.exerciseCount}</h2>
                    <i>{props.part.description}</i>
                    <p>required skills: {props.part.requirements.join(', ')}</p>
                </div>
            )
        default:
            return assertNever(props.part);
    }
}

export default Part;