import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const [errorText, setErrorText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (value.trim() === '') {
      setErrorText('Поле не должно быть пустым!')
    } else {
      addTodo(value)
      setValue('')
      setErrorText('')
    }
  }

  return (
    <div className={styles.form_container}>
      <form className={styles.from} onSubmit={submitHandler}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter new todo"
        />

        <button className={styles.button} type="submit">
          Add Task
        </button>

        {errorText && <p className={styles.error}>{errorText}</p>}
      </form>
    </div>
  )
}

TodoForm.propTypes = { addTodo: PropTypes.func.isRequired }

export default TodoForm
