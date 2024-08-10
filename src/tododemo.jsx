// import { useState } from "react";
// import './Todo.css'; // Import the CSS file

// export default function Todo() {
//     let [todos, setTodos] = useState([]);
//     let [newTodo, setNewTodo] = useState("");
//     let [date, setDate] = useState("");
//     let [time, setTime] = useState("");

//     let addNewTodoToArray = () => {
//         if (newTodo && date && time) {
//             setTodos([...todos, { task: newTodo, date: date, time: time }]);
//             setNewTodo("");
//             setDate("");
//             setTime("");
//         }
//     };

//     let updateTodoValue = (e) => {
//         setNewTodo(e.target.value);
//     };

//     let updateDateValue = (e) => {
//         setDate(e.target.value);
//     };

//     let updateTimeValue = (e) => {
//         setTime(e.target.value);
//     };

//     let deleteTodo = (index) => {
//         let updatedTodos = todos.filter((_, i) => i !== index);
//         setTodos(updatedTodos);
//     };

//     return (
//         <div className="todo-container">
//             <h2>Task TODO</h2>
//             <input
//                 placeholder="Enter Task"
//                 value={newTodo}
//                 onChange={updateTodoValue}
//             />
//             <input
//                 type="date"
//                 value={date}
//                 onChange={updateDateValue}
//             />
//             <input
//                 type="time"
//                 value={time}
//                 onChange={updateTimeValue}
//             />
//             <button onClick={addNewTodoToArray}>Add</button>
//             <hr />
//             <br />
//             <ol>
//                 {todos.map((todo, index) => (
//                     <li key={index}>
//                         <div className="task-details">
//                             <div className="task-name">{todo.task}</div>
//                             <div className="task-date-time">{todo.date} {todo.time}</div>
//                         </div>
//                         <button onClick={() => deleteTodo(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ol>
//         </div>
//     );
// }