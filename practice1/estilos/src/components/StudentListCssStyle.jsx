const StudentListCssStyle = ({ name, registration, classId, year }) => {
    return (
        <ul className="student">
            <li className="student-details">Nome : {name}</li>
            <li className="student-details">Matrícula: {registration}</li>
            <li className="student-details">Turma: {classId}</li>
            <li className="student-details">Ano : {year}</li>
        </ul>
    );
};
export default StudentListCssStyle;
