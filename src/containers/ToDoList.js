import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToDoList from '../components/ToDoList';
import { toggleTask } from '../actions';
import { FILTER } from '../actions';

const getFilteredTodos = (state, filter) => {
  switch(filter) {
    case FILTER.SHOW_ALL:
      return state;
    case FILTER.SHOW_C:
      return state.filter(todo => todo.completed);
    case FILTER.SHOW_IC:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

const mapStateToProps = state => {
  return {
    todos: getFilteredTodos(state.todos, state.activeFilter)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTask: bindActionCreators({toggleTask: toggleTask}, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
