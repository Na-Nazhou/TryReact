
import { connect } from 'react-redux'
import { toggleTodo } from '../Actions/actionCreators'
import TodoList, { StateProps, DispatchProps } from '../Components/TodoList'
import { AppState } from '../Types/States/AppState'
import { TodoState } from '../Types/States/TodoState'
import { VisibilityFilterState, VisibilityFilter } from '../Types/States/VisibilityFilterState'
const { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } = VisibilityFilter

const getVisibleTodos = (todos: TodoState, filter: VisibilityFilterState): TodoState => {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_ALL:
      return todos
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps: (state: AppState) => StateProps
  = state => {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
  }

const mapDispatchToProps: (dispatch: any) => DispatchProps
  = dispatch => {
    return {
      onTodoClick: (id: number) => {
        dispatch(toggleTodo(id))
      }
    }
  }

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList