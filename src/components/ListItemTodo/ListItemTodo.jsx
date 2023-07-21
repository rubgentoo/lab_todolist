import React from 'react'

export const ListItemTodo = ({todoList}) => {
  return (
    todoList.map((element, idx) => (
      <li 
        className="list-group-item d-flex justify-content-between" 
        key={element.id}
      >
        {idx + 1} - {element.title}
      </li>
    ))
  )
};