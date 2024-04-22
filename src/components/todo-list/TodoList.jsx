import PropTypes from 'prop-types'
import Todo from '../todo/Todo'

const TodoList = ({ todos, onDeleteTodo, onEditTodo, onToggleTodo }) => {
  return (
    <>
      {todos?.map((todo) => (
        <Todo
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
          onToggleTodo={onToggleTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      todo: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ),

  onToggleTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
}

export default TodoList
