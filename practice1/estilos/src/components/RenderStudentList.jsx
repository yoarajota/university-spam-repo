import React from "react";
import StudentListCssModuleStyle from "./StudentListCssModuleStyle";
import StudentListCssStyle from "./StudentListCssStyle";
import StudentListInlineStyle from "./StudentListInlineStyle";
import StudentList from "./StudentListInlineStyle";
import StudentListJsStyle from "./StudentListJsStyle";
import StudentListSassStyle from "./StudentListSassStyle";
import StudentListStyledComponentsStyle from "./StudentListStyledComponentsStyle";
const RenderStudentList = () => {
    return (
        <div>
            <StudentListCssModuleStyle
                name="Ana Maria Lima"
                registration="2020123456"
                classId="Informática"
                year="2020"
            />
            <StudentListCssModuleStyle
                name="Ana Maria Lima"
                registration="2020123456"
                classId="Informática"
                year="2020"
            />
            <StudentListCssStyle
                name="Ana Maria Lima"
                registration="2020123456"
                classId="Informática"
                year="2020"
            />
            <StudentListInlineStyle
                name="Ana Maria Lima"
                registration="2020123456"
                classId="Informática"
                year="2020"
            />
            <StudentListJsStyle
                name="Ana Maria Lima"
                registration="2020123456"
                classId="Informática"
                year="2020"
            />
            <StudentListSassStyle
                name="Ana Maria Lima"
                registration="2020123456"
                classId="Informática"
                year="2020"
            />
            <StudentListStyledComponentsStyle
                name="Ana Maria Lima"
                registration="2020123456"
                classId="Informática"
                year="2020"
            />
        </div>
    );
};
export default RenderStudentList;
