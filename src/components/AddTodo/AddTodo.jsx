import React from 'react'
import { v4 as uuid } from 'uuid';

export const AddTodo = ({onInputChange, setTodoList, state, setState}) => {

  const handleNewTodo = (e) => {
    e.preventDefault();
    if(state.length === 0) return;
    const newTodo = {
      id: uuid(),
      title: state.inputTodo,
      completed: false
    }
    setTodoList(cb => [newTodo, ...cb])
    setState({
      inputTodo: ''
    })
  }

  return (
    <>
      <h2>Add new task</h2>
      <form>
        <input
          type="text"
          className='form-control mb-3'
          placeholder='Get new lancer'
          onChange={onInputChange}
          name={"inputTodo"}
          value={state.inputTodo}
        />
        <div className='d-grid gap-2'>
          <button 
            className='btn btn-success' 
            onClick={handleNewTodo}
          >Add new task</button>
        </div>
      </form>
    </>
  )
};