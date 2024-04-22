import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'
import { RiEditFill } from 'react-icons/ri'
import styles from './Todo.module.css'
import { useState } from 'react'

const Todo = ({ todo, onDeleteTodo, onEditTodo, onToggleTodo }) => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [changeText, setChangeText] = useState(todo.todo)

  const changeTextValue = (e) => setChangeText(e.target.value)

  const toggleInputHandler = () => setIsEditOpen((prev) => !prev)

  const submitChangesHandler = () => {
    onEditTodo(todo.id, changeText)
    setIsEditOpen(false)
  }

  return (
    <div className={todo?.isCompleted ? styles.completed_todo : styles.todo}>
      {isEditOpen ? (
        <div className={styles.edit_form}>
          <input
            autoFocus
            value={changeText}
            onChange={changeTextValue}
            className={styles.input}
            type="text"
          />

          <button onClick={submitChangesHandler} className={styles.button}>
            save
          </button>
        </div>
      ) : (
        <>
          <div className={styles.text}>
            <input
              onChange={() => onToggleTodo(todo.id)}
              type="checkbox"
              checked={todo.isCompleted}
            />

            <p>{todo.todo}</p>
          </div>

          <div className={styles.actions_container}>
            <RiEditFill
              onClick={toggleInputHandler}
              className={todo?.isCompleted ? styles.edit : styles.delete}
            />

            <MdDelete
              className={styles.delete}
              onClick={() => onDeleteTodo(todo.id)}
            />
          </div>
        </>
      )}
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    id: PropTypes.string,
    isCompleted: PropTypes.bool,
  }).isRequired,

  onToggleTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
}

export default Todo
