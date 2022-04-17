import React from "react";

export default function AllStudent(props) {
  const editHandler = (id) => {
    const edit = props.studentList.find((item) => item.id === id);
    props.setIsEditable(true);
    props.setEditableStudent(edit);
    props.setStudentName(edit.name);
  };

  const deleteHandler = (id) => {
    props.setStudentList(props.studentList.filter((item) => item.id !== id));
  };

  const presentHandler = (id) => {
    const present = props.studentList.find((item) => item.id === id);

    if (present.isPresent === undefined) {
      present.isPresent = true;
    } else if (present.isPresent === true) {
      alert("student already present on the present list ");
    } else if (present.isPresent === false) {
      alert("student already present on the absent list ");
    }

    props.setStudentList([...props.studentList]);
  };

  const absentHandler = (id) => {
    const absent = props.studentList.find((item) => item.id === id);

    if (absent.isPresent === undefined) {
      absent.isPresent = false;
    } else if (absent.isPresent === true) {
      alert("student already present on the present list ");
    } else if (absent.isPresent === false) {
      alert("student already present on the absent list ");
    }

    props.setStudentList([...props.studentList]);
  };

  return (
    <div className="student__all">
      <h3>All Student</h3>
      <ul>
        {props.studentList.map((item) => (
          <li>
            <span>{item.name}</span>
            <button onClick={() => editHandler(item.id)}>Edit</button>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
            <button onClick={() => presentHandler(item.id)}>Present</button>
            <button onClick={() => absentHandler(item.id)}>Absent</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
