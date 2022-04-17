import "./App.css";
import { useState } from "react";
import Form from "./component/Form";
import StudentSection from "./component/StudentSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [isEditalbe, setIsEditable] = useState(false);
  const [editalbeStudent, setEditableStudent] = useState(null);

  return (
    <div className="App">
      <Form
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        isEditalbe={isEditalbe}
        setIsEditable={setIsEditable}
        editalbeStudent={editalbeStudent}
        setEditableStudent={setEditableStudent}
      />

      <StudentSection
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        isEditalbe={isEditalbe}
        setIsEditable={setIsEditable}
        editalbeStudent={editalbeStudent}
        setEditableStudent={setEditableStudent}
      />
    </div>
  );
}

// function App() {
//   const [studentName, setStudentName] = useState("");
//   const [studentList, setStudentList] = useState([]);
//   const [isEditalbe, setIsEditable] = useState(false);
//   const [editalbeStudent, setEditableStudent] = useState(null);

//   const createHandler = (event) => {
//     event.preventDefault();
//     if (studentName) {
//       const studentObject = {
//         name: studentName,
//         id: Date.now(),
//       };
//       setStudentList([studentObject, ...studentList]);
//       setStudentName("");
//     }
//   };

//   const deleteHandler = (id) => {
//     setStudentList(studentList.filter((item) => item.id !== id));
//   };

//   const editHandler = (id) => {
//     const edit = studentList.find((item) => item.id === id);
//     setIsEditable(true);
//     setEditableStudent(edit);
//     setStudentName(edit.name);
//   };

//   const updateHandler = (event) => {
//     event.preventDefault();
//     editalbeStudent.name = studentName;
//     setEditableStudent(null);
//     setStudentName("");
//     setIsEditable(false);
//   };

//   const presentHandler = (id) => {
//     const present = studentList.find((item) => item.id === id);

//     if (present.isPresent === undefined) {
//       present.isPresent = true;
//     } else if (present.isPresent === true) {
//       alert("student already present on the present list ");
//     } else if (present.isPresent === false) {
//       alert("student already present on the absent list ");
//     }

//     setStudentList([...studentList]);
//   };

//   const absentHandler = (id) => {
//     const absent = studentList.find((item) => item.id === id);

//     if (absent.isPresent === undefined) {
//       absent.isPresent = false;
//     } else if (absent.isPresent === true) {
//       alert("student already present on the present list ");
//     } else if (absent.isPresent === false) {
//       alert("student already present on the absent list ");
//     }

//     setStudentList([...studentList]);
//   };

//   const accidentHandler = (id) => {
//     const student = studentList.find((item) => item.id === id);
//     student.isPresent = !student.isPresent;
//     setStudentList([...studentList]);
//   };

//   return (
//     <div className="App">
//       <form className="student__entry">
//         <input
//           value={studentName}
//           onChange={(event) => setStudentName(event.target.value)}
//           type="text"
//           name=""
//           className="student__input"
//           placeholder="Enter Student Name"
//         />
//         <button
//           onClick={
//             isEditalbe === true
//               ? (event) => updateHandler(event)
//               : (event) => createHandler(event)
//           }
//           className="student__add"
//         >
//           {isEditalbe === true ? "UPDATE" : "ADD"}
//         </button>
//       </form>

//       <div className="student__section">
//         <div className="student__all">
//           <h3>All Student</h3>
//           <ul>
//             {studentList.map((item) => (
//               <li>
//                 <span>{item.name}</span>
//                 <button onClick={() => editHandler(item.id)}>Edit</button>
//                 <button onClick={() => deleteHandler(item.id)}>Delete</button>
//                 <button onClick={() => presentHandler(item.id)}>Present</button>
//                 <button onClick={() => absentHandler(item.id)}>Absent</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="student__present">
//           <h3>Present Student</h3>
//           <ul>
//             {studentList
//               .filter((item) => item.isPresent === true)
//               .map((item) => (
//                 <li>
//                   <span>{item.name}</span>
//                   <button onClick={() => accidentHandler(item.id)}>
//                     Accidentally Added
//                   </button>
//                 </li>
//               ))}
//           </ul>
//         </div>
//         <div className="student__absent">
//           <h3>Absent Student</h3>
//           <ul>
//             {studentList
//               .filter((item) => item.isPresent === false)
//               .map((item) => (
//                 <li>
//                   <span>{item.name}</span>
//                   <button onClick={() => accidentHandler(item.id)}>
//                     Accidentally Added
//                   </button>
//                 </li>
//               ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
