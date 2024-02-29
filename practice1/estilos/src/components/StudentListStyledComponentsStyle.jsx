import React from "react";
import styled from "styled-components";
//styled component MyLi
const MyLi = styled.li`
color: blue;
font-size: 23px;
`;

//Styled component MyUl
const MyUl = styled.ul`
border: 2px solid green;
width: 100%;
list-style-type: none;
`;

const StudentListStyledComponentsStyle = ({ name, registration, classId, year }) => {
    return (
        <MyUl>
            <MyLi>Nome : {name}</MyLi>
            <MyLi>Matrícula: {registration}</MyLi>
            <MyLi>Turma: {classId}</MyLi>
            <MyLi>Ano : {year}</MyLi>
        </MyUl>
    );
};
export default StudentListStyledComponentsStyle;