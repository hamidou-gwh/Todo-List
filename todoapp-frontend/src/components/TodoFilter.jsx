import React from 'react'
import '../styles/styles.css'

const TodoFilter = ({filterTask}) => {
    return (
    <select className="filter" onChange={(e) => filterTask(e.target.value)}>
        <option value="New">New</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
    </select>
    )
}

export default TodoFilter