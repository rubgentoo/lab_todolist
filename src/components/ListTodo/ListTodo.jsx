import React from 'react'
import { ListItemTodo } from '../ListItemTodo';

export const ListTodo = ({todoList}) => {
  return (
    <>
      <h2>Todo List</h2>
      <ul className='list-group'>
        <ListItemTodo todoList={todoList}/>
      </ul>
    </>
  )
};