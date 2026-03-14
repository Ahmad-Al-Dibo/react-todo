import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'



function App() {

  const [todos, SetTodos] = useState([]);
  const [todoValue, SetTodoValue] = useState('')

  function saveData(newList){
    if (localStorage){
      localStorage.setItem('todos', JSON.stringify({
      "todos": newList
    }))
    }
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo];
    saveData(newTodoList);
    SetTodos(newTodoList);
  } 

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoindex) => {
      return todoindex !== index
    });
    saveData(newTodoList);
    SetTodos(newTodoList);
  }

  function handleUpdateTodos(index){
    const valueToEdited = todos[index];
    SetTodoValue(valueToEdited);
    handleDeleteTodos(index);
  }

  useEffect(()=>{
    if (!localStorage){
      return
    }

    let localItems = localStorage.getItem('todos')

    if (!localItems){
      return
    }
    localItems = JSON.parse(localItems).todos
    SetTodos(localItems)

  }, [])

  return (
    <>
     <TodoInput handleAddTodos = {handleAddTodos} todoValue = {todoValue} SetTodoValue = {SetTodoValue}  />
     <TodoList todos = {todos} handleDeleteTodos = {handleDeleteTodos} handleUpdateTodos= {handleUpdateTodos} />
    </>
  )
}

export default App
