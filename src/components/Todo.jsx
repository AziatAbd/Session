import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'
import styles from './Todo.module.css'

const Todo = ({ todo, onDeleteTodo }) => {
  return (
    <div className={styles.todo}>
      <p className={styles.text}>{todo.todo}</p>

      <MdDelete
        className={styles.delete}
        onClick={() => onDeleteTodo(todo.id)}
      />
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    id: PropTypes.number,
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
}

export default Todo
