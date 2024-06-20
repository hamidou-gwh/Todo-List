import React, { useState } from 'react'
import '../styles/styles.css'
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const TodoList = ({ tasks, deleteTask, updateTask, completeTask }) => {

  let [ toggle, setToggle ] = useState(false)
  let [ todoItem, setTodoItem ] = useState("")
  // let [todo, setTodo] = useState({})
  // let [task, setTask] = useState({})
  let [ todoId, setTodoId ] = useState(0)

  const toggleModal = (item, id, todo) => {
    setToggle(true)
    setTodoItem(item)
    setTodoId(id)
    // setTask(task)
  }


  // const turnOffModal = () => {
  //   setToggle(false)
  // }
  return (
    <>
    <div className="todolist">

      {tasks.map((task, index) => (
        <div className='todolistitem' key= {index}>
          <div className="task">
          <input type="checkbox" className="checkbox"    onChange={(e) => completeTask(e, task.id)}/>
          <div>
          <p id = "t_task" className = {task.status == "Completed"? "strike":"" }  >{task.title}</p>
           <p>{task.description}</p>
                <p>Created: {task.created_date}</p>
                <p>Due: {task.due_date}</p>
          </div>
          </div>
          <div className="btn-container">
    <div className="edit"> <TbEdit size={25} onClick={()=>toggleModal(task.title, task.id)}/></div>
    <div className="del"> <MdDelete size={25} onClick={ ()=> deleteTask(task.id) }/></div>
   </div>
   </div>
      )
     
      )}
      </div>

  {/* </div> tasks.map( task => <div className="todoitem" key = {task.id}>
  tasks.map((task, index) => ()
    <div className="task">
      <input type="checkbox" className="checkbox" onChange={(e) => completeTask(e, task.id)}/>
      <p id = "t_task" className = {task.status == "Completed"? "strike":"" }  >{task.task}</p>
    </div>
   <div className="btn-container">
    <div className="edit"> <TbEdit size={25} onClick={()=>toggleModal(task.task, task.id)}/></div>
    <div className="del"> <MdDelete size={25} onClick={ ()=> deleteTask(task.id) }/></div>
   </div>
   </div>

</div> */}

{ toggle && <div className="modal-container">
  <div className="modal">
    <h1>Update Todo List</h1>
    <form action="" onSubmit={()=>{    updateTask(todoId, todoItem); setToggle(false)}}>
      <input type="text" placeholder = "Update todo" value = { todoItem } onChange={(e) => setTodoItem(e.target.value)}required/>
      <button id="add">Add</button>
    </form>
    <div className="btn-contianer">
      <button className="cancel mod-btn" onClick={() => setToggle(false)}>Cancel</button>
    </div>
  </div>
</div>}
</>
  )}
    export default TodoList
    
