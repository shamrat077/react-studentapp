import React from "react";
import AllStudent from "./AllStudent";
import PresentStudent from "./PresentStudent";
import AbsentStudent from "./AbsentStudent";

export default function StudentSection(props) {
  const accidentHandler = (id) => {
    const student = props.studentList.find((item) => item.id === id);
    student.isPresent = !student.isPresent;
    props.setStudentList([...props.studentList]);
  };

  return (
    <div className="student__section">
      <AllStudent
        studentName={props.studentName}
        setStudentName={props.setStudentName}
        studentList={props.studentList}
        setStudentList={props.setStudentList}
        isEditalbe={props.isEditalbe}
        setIsEditable={props.setIsEditable}
        editalbeStudent={props.editalbeStudent}
        setEditableStudent={props.setEditableStudent}
      />

      <PresentStudent
        accidentHandler={accidentHandler}
        studentList={props.studentList}
      />

      <AbsentStudent
        accidentHandler={accidentHandler}
        studentList={props.studentList}
      />
    </div>
  );
}
