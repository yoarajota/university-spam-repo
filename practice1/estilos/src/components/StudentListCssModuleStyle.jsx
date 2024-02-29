import React from "react";
import style from "./studentList.module.css";

const StudentListCssModuleStyle = (props) => {
    const { name, registration, classId, year } = props;
    return (
        <ul className={style.list}>
            <li className={style.details}>Nome : {name}</li>
            <li className={style.details}>Matrícula: {registration}</li>
            <li className={style.details}>Turma: {classId}</li>
            <li className={style.details}>Ano : {year}</li>
        </ul>
    );
};
export default StudentListCssModuleStyle;
