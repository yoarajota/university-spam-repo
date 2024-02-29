import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    student: {
        border: '2px solid green',
        width: '100%',
        listStyleType: 'none'
    },
    studentDetails: {
        color: 'blue',
        fontSize: '23px'
    }
});

const StudentListJsStyle = ({ name, registration, classId, year }) => {
    const classes = styles();

    return (
        <ul className={classes.student}>
            <li className={classes.studentDetails}>Nome : {name}</li>
            <li className={classes.studentDetails}>Matrícula: {registration}</li>
            <li className={classes.studentDetails}>Turma: {classId}</li>
            <li className={classes.studentDetails}>Ano : {year}</li>
        </ul>

    );
};
export default StudentListJsStyle;
