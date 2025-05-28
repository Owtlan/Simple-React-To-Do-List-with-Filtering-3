import { useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';
import type { Filter, Todo } from './types/Todo';


let idCounter = 1;

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>('all')

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: idCounter++, text, completed: false }
    setTodos([...todos, newTodo]);
  }


  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })



  return (
    <>
      <div className='app'>
        <h1>React To-Do List</h1>
        <TodoInput onAdd={addTodo} />
        <FilterButtons currentFilter={filter} onChange={setFilter} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} />
      </div>
    </>
  )
}

export default App
