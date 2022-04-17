import React from "react";

export default function AbsentStudent(props) {
  return (
    <div className="student__absent">
      <h3>Absent Student</h3>
      <ul>
        {props.studentList
          .filter((item) => item.isPresent === false)
          .map((item) => (
            <li>
              <span>{item.name}</span>
              <button onClick={() => props.accidentHandler(item.id)}>
                Accidentally Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
