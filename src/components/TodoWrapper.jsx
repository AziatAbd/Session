import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import styles from './TodoWrapper.module.css'
import { generateId } from '../utils'
import Todos from './Todos'

const TodoWrapper = () => {
  const [todos, setTodos] = useState([
    {
      todo: 'do homework',
      id: 1,
    },
  ])

  const addTodoHandler = (todo) => {
    const newTodo = {
      todo,
      id: generateId(),
    }

    setTodos((prev) => [...prev, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>TODO LIST</h1>

      <TodoForm addTodo={addTodoHandler} />

      {todos.length === 0 ? (
        <div className={styles.no_todos_text}>empty</div>
      ) : (
        <Todos className={styles.list_container}>
          <TodoList onDeleteTodo={deleteTodoHandler} todos={todos} />
        </Todos>
      )}
    </div>
  )
}

export default TodoWrapper
