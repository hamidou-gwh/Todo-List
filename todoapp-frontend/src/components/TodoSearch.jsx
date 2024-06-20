import React from 'react'
import '../styles/styles.css'
import { useForm } from 'react-hook-form'

const TodoSearch = ({addTask}) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    return (
        <div className="search">
            <form action="" onSubmit={handleSubmit((data)=> 
                {
                    addTask(data);
                    reset()
                    })}>
                <label>
                    Task:
                    <input type="text" name="name" placeholder='Enter Task Name' { ...register("title", {required: true})}/>
                </label>
                <label>
          Description:
          <input type="text" name="description" placeholder='Enter Description' {...register("description", { required: true })} />
        </label>
        <label>
          Due Date:
          <input type="date" name="due_date" {...register("due_date", { required: true })} />
        </label>
                <button>Enter</button>
        </form>
        { errors.title?.type == "required" && <small> This field cannot be blank </small>}
        { errors.description?.type == "required" && <small> This field cannot be blank </small>}
        {errors.due_date?.type == "required" && <small>This field cannot be blank</small>}
        </div>
    )
}

export default TodoSearch
