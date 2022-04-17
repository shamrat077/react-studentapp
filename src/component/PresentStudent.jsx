import React from "react";

export default function PresentStudent(props) {
  return (
    <div className="student__present">
      <h3>Present Student</h3>
      <ul>
        {props.studentList
          .filter((item) => item.isPresent === true)
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
