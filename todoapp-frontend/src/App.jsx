import React, { useEffect, useState } from 'react';
import axios from 'axios'
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';
import TodoFilter from './components/TodoFilter';


function App() {

  const [tasks, setTasks] = useState([ ]);
  const [errors, setErrors] = useState("")

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/tasks")
    .then(res => setTasks(res.data))
    .catch(err => setErrors(err.message))
  }, []) 

const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    const originalTasks = [...tasks]
    axios.delete("http://127.0.0.1:8000/tasks/" + id)
    .catch(err => {
      setErrors(err.message)
    setTasks(originalTasks)
})
  }

const addTask = (data) => {
  const originalTasks = [...tasks]
  const newTask = {
    ...data,
    created_date: new Date().toISOString().split('T')[0],
    status: "NewTask"
  }
  axios.post("http://127.0.0.1:8000/tasks", newTask)
  .then(res => setTasks([...tasks, res.data]))
  .catch(err => {
    setErrors(err.message)
    setTasks(originalTasks)
  })
}



let filterTask = (text) => {
  setTasks(tasks.filter(task => task.status == text))
}
  return (
    <div className="todo">
    {errors &&  <p>{errors}</p>}
      <TodoSearch addTask = {addTask}/>
      <TodoFilter filterTask = { filterTask }/>
      <TodoList tasks = { tasks } deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
