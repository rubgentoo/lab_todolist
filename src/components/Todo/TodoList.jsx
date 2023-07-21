import React, { useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { AddTodo } from '../AddTodo';
import { ListTodo } from '../ListTodo/ListTodo';

export const TodoList = () => {

  const [todoList, setTodoList] = useState([]);
  const { onInputChange, state, setState } = useForm({
    inputTodo: ''
  })

  const getData = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    const data = await response.json();
    setTodoList(data)
  }

  useEffect(() => {
    console.log('Here comes a new challenger!')
  }, [todoList]);

  useEffect(() => {
    getData(1)
  }, [])

  return (
    <div className='container'>
      <div className="row">
        <div className='col-7'>
          <ListTodo todoList={todoList}/>
        </div>
        <div className='col-5'>
          <AddTodo onInputChange={onInputChange} setTodoList={setTodoList} state={state} setState={setState}/>
        </div>
      </div>
    </div>
    // {/* {todoList.todos.map(element => (<li key={element.id}>{element.description}</li>))} */}
    
  )
};