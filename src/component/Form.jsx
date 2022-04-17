import React from "react";

export default function Form(props) {
  const createHandler = (event) => {
    event.preventDefault();
    if (props.studentName) {
      const studentObject = {
        name: props.studentName,
        id: Date.now(),
      };
      props.setStudentList([studentObject, ...props.studentList]);
      props.setStudentName("");
    }
  };

  const updateHandler = (event) => {
    event.preventDefault();
    props.editalbeStudent.name = props.studentName;
    props.setEditableStudent(null);
    props.setStudentName("");
    props.setIsEditable(false);
  };

  return (
    <form className="student__entry">
      <input
        value={props.studentName}
        onChange={(event) => props.setStudentName(event.target.value)}
        type="text"
        name=""
        className="student__input"
        placeholder="Enter Student Name"
      />
      <button
        onClick={
          props.isEditalbe === true
            ? (event) => updateHandler(event)
            : (event) => createHandler(event)
        }
        className="student__add"
      >
        {props.isEditalbe === true ? "UPDATE" : "ADD"}
      </button>
    </form>
  );
}
