
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };
  return (
    <div id="main_container">
      {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        <h2>To-Do List</h2>
        <div>
          <input onChange={handleChange} value={input} type="text" />
          <button>Add Todo</button>
        </div>
      </form>

      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App
