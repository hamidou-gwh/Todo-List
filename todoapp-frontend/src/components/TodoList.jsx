import React, { useState } from 'react'
import '../styles/styles.css'
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const TodoList = ({ tasks, deleteTask,  }) => {

  let [ toggle, setToggle ] = useState(false)
  let [ todoItem, setTodoItem ] = useState("")
  let [ todoId, setTodoId ] = useState(0)



  return (
    <>
    <div className="todolist">

      {tasks.map((task, index) => (
        <div className='todolistitem' key= {index}>
          <div className="task">
          <div>
          <p id = "t_task" className = {task.status == "Completed"? "strike":"" }  >{task.title}</p>
           <p>{task.description}</p>
                <p>Created: {task.created_date}</p>
                <p>Due: {task.due_date}</p>
          </div>
          </div>
          <div className="btn-container">

    <div className="del"> <MdDelete size={25} onClick={ ()=> deleteTask(task.id) }/></div>
   </div>
   </div>
      )
     
      )}
      </div>



</>
  )}
    export default TodoList
    
