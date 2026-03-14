
import {react, useState} from 'react'

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, SetTodoValue} = props;
    
    return (
        <header>
            <input value={todoValue} onChange={(e) => {SetTodoValue(e.target.value)}} placeholder='Ente task ... '/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                SetTodoValue('')
            }}>Add</button>
        </header>
    )
};
