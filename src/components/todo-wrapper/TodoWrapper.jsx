import { useState } from 'react'
import styles from './TodoWrapper.module.css'
import TodoForm from '../todo-form/TodoForm'
import Todos from '../todos/Todos'
import TodoList from '../todo-list/TodoList'
import { generateId } from '../../utils'

const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (todo) => {
    const newTodo = {
      todo,
      isCompleted: false,
      id: generateId(),
    }

    setTodos((prev) => [...prev, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const toogleTodoHandler = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const editTodoHandler = (id, changeText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              todo: changeText,
            }
          : todo
      )
    )
  }

  const handleCompleteAll = () => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        isCompleted: true,
      }))
    )
  }

  const deleteAllHandler = () => setTodos([])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>TODO LIST</h1>

      <TodoForm addTodo={addTodoHandler} />

      <div className={styles.actions}>
        <button className={styles.buttons} onClick={handleCompleteAll}>
          complete all
        </button>

        <button className={styles.buttons} onClick={deleteAllHandler}>
          delete all
        </button>
      </div>

      {todos.length === 0 ? (
        <div className={styles.no_todos_text}>empty</div>
      ) : (
        <Todos className={styles.list_container}>
          <TodoList
            onToggleTodo={toogleTodoHandler}
            onEditTodo={editTodoHandler}
            onDeleteTodo={deleteTodoHandler}
            todos={todos}
          />
        </Todos>
      )}
    </div>
  )
}

export default TodoWrapper
