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

//  let addTask = (data) => {
    
//     setTasks([ ...tasks, data= { ...data, id: parseInt(tasks[tasks.length - 1].id) + 1, status:"New",}])
//     console.log(data)

// }
//   }

const addTask = (data) => {
  // const newId = tasks.length > 0 ? parseInt(tasks[tasks.length - 1].id) + 1 : 0
  // setTasks([ ...tasks, { ...data, id: newId, status: "New" }])
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
  // setTasks([ ...tasks, data={ ...data, id: parseInt(tasks[tasks.length-1].id) + 1, status: "New" }])
  // axios.post("http://127.0.0.1:8000/tasks", data)
  // .then(res => setTasks([...tasks, res.data]))
}


// const updateTask = (id, new_task) => {
//   let task = tasks[id]
//   let updatedTask = { ...task, task: new_task, status: "In Progress"}
//   setTasks(tasks.map(t => t.id == id ? updatedTask : t )) 
// }
const updateTask = (e, id, text, task) => {
  e.preventDefault()
  const updatedUser = { ...task, title:text, status:"In Progress"}
  setTasks(tasks.map(t => t.id == id ? updatedUser : t))
  const updatedTask = {...task, title:text}
  axios.patch("http://127.0.0.1:8000/tasks/" + id, updatedTask)

}

const completeTask = (e, id) => {
  if (e.target.checked) {
    setTasks(tasks.map(task => task.id == id ? { ...task, status: "Completed"}: task))
    
  }
  else {
    setTasks(tasks.map(task => task.id == id ? { ...task, status: "In Progress"}: task))
  }
}


let filterTask = (text) => {
  setTasks(tasks.filter(task => task.status == text))
}
  return (
    <div className="todo">
    {errors &&  <p>{errors}</p>}
      <TodoSearch addTask = {addTask}/>
      <TodoFilter filterTask = { filterTask }/>
      <TodoList tasks = { tasks } deleteTask={deleteTask} updateTask={updateTask} completeTask={completeTask}/>
    </div>
  );
}

export default App;
