import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onDeleteTodo }) =>
  todos?.map((todo) => (
    <Todo onDeleteTodo={onDeleteTodo} key={todo.id} todo={todo} />
  ))

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onDeleteTodo: PropTypes.func.isRequired,
}

export default TodoList
