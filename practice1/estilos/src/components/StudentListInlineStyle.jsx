const StudentListInlineStyle = ({ name, registration, classId, year }) => {
    const ulStyle = {
        border: "2px solid green",
        width: "100%",
        listStyleType: "none",
    };
    const liStyle = { color: "blue", fontSize: "23px" };

    return (
        <ul style={ulStyle}>
            <li style={liStyle}>Nome : {name}</li>
            <li style={liStyle}>Matrícula: {registration}</li>
            <li style={liStyle}>Turma: {classId}</li>
            <li style={liStyle}>Ano : {year}</li>
        </ul>
    );
};
export default StudentListInlineStyle;
