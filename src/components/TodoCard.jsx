import React, { useState } from 'react'


export default function TodoCard(props) {
    const {children, handleDeleteTodos, handleUpdateTodos, index} = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={(e) => {
                handleDeleteTodos(index)
            }}>
                <i class="fa-solid fa-delete-left"></i>
            </button>
            <button onClick={(e) => {
                handleUpdateTodos(index)
            }}>
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
        </div>
    </li>
  )
}
