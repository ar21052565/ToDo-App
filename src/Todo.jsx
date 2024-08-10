import { useState } from "react";
import './Todo.css';

const predefinedTodos = [
    {
        task: "Finish React project",
        date: "2024-08-15",
        time: "14:00",
        priority: "High",
        category: "Work",
        completed: false
    },
    {
        task: "Buy groceries",
        date: "2024-08-12",
        time: "10:00",
        priority: "Medium",
        category: "Personal",
        completed: true
    },
    {
        task: "Call mom",
        date: "2024-08-13",
        time: "18:00",
        priority: "Low",
        category: "Personal",
        completed: false
    },
    {
        task: "Prepare presentation",
        date: "2024-08-14",
        time: "09:00",
        priority: "High",
        category: "Work",
        completed: false
    },
    {
        task: "Read a book",
        date: "2024-08-16",
        time: "20:00",
        priority: "Medium",
        category: "Personal",
        completed: true
    },
    {
        task: "Schedule dentist appointment",
        date: "2024-08-17",
        time: "11:00",
        priority: "Medium",
        category: "Health",
        completed: false
    },
    {
        task: "Exercise",
        date: "2024-08-12",
        time: "07:00",
        priority: "Low",
        category: "Health",
        completed: true
    }
];


export default function Todo() {
    let [todos, setTodos] = useState(predefinedTodos);
    let [newTodo, setNewTodo] = useState("");
    let [date, setDate] = useState("");
    let [time, setTime] = useState("");
    let [priority, setPriority] = useState("Medium");
    let [searchTerm, setSearchTerm] = useState("");
    let [filterPriority, setFilterPriority] = useState("All");
    let [editIndex, setEditIndex] = useState(null);

    let addNewTodoToArray = () => {
        if (newTodo && date && time) {
            if (editIndex !== null) {
                let updatedTodos = todos.map((todo, index) =>
                    index === editIndex ? { task: newTodo, date, time, priority, completed: todo.completed } : todo
                );
                setTodos(updatedTodos);
                setEditIndex(null);
            } else {
                setTodos([...todos, { task: newTodo, date, time, priority, completed: false }]);
            }
            setNewTodo("");
            setDate("");
            setTime("");
            setPriority("Medium");
        }
    };

    let updateTodoValue = (e) => {
        setNewTodo(e.target.value);
    };

    let updateDateValue = (e) => {
        setDate(e.target.value);
    };

    let updateTimeValue = (e) => {
        setTime(e.target.value);
    };

    let updatePriorityValue = (e) => {
        setPriority(e.target.value);
    };

    let updateSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };

    let updateFilterPriority = (e) => {
        setFilterPriority(e.target.value);
    };

    let deleteTodo = (index) => {
        let updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    let editTodo = (index) => {
        let todo = todos[index];
        setNewTodo(todo.task);
        setDate(todo.date);
        setTime(todo.time);
        setPriority(todo.priority);
        setEditIndex(index);
    };

    let toggleCompletion = (index) => {
        let updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    let filteredTodos = todos
        .filter(todo =>
            todo.task.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterPriority === "All" || todo.priority === filterPriority)
        );

    return (
        <div className="todo-container">
            <h2>Task TODO</h2>
            <input
                placeholder="Enter Task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <input
                type="date"
                value={date}
                onChange={updateDateValue}
            />
            <input
                type="time"
                value={time}
                onChange={updateTimeValue}
            />
            <select value={priority} onChange={updatePriorityValue}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={addNewTodoToArray}>{editIndex !== null ? "Update" : "Add"}</button>
            <hr />
            <input
                type="text"
                placeholder="Search Tasks"
                value={searchTerm}
                onChange={updateSearchTerm}
            />
            <select value={filterPriority} onChange={updateFilterPriority}>
                <option value="All">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <br /><br />
            <ol>
                {filteredTodos.map((todo, index) => (
                    <li key={index} className={`${todo.completed ? "completed" : ""} ${todo.priority.toLowerCase()}`}>
                        <div className="task-details" onClick={() => toggleCompletion(index)}>
                            <div className="task-name">{todo.task}</div>
                            <div className="task-date-time">{todo.date} {todo.time} ({todo.priority})</div>
                        </div>
                        <button onClick={() => editTodo(index)}>Edit</button>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
