import PropTypes from 'prop-types'
import styles from './Todos.module.css'

const Todos = ({ children }) => {
  return <div className={styles.list_container}>{children}</div>
}

Todos.propTypes = {
  children: PropTypes.node,
}

export default Todos
