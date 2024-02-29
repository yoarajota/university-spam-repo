import React from "react";
import "./sass.scss";
const StudentListSassStyle = ({ name, registration, classId, year }) => {
    return (
        <ul className="list">
            <li className="details">Nome : {name}</li>
            <li className="details">Matrícula: {registration}</li>
            <li className="details">Turma: {classId}</li>
            <li className="details">Ano : {year}</li>
        </ul>
    );
};
export default StudentListSassStyle;
