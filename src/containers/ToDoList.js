import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToDoList from '../components/ToDoList';
import { toggleTask } from '../actions';

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTask: bindActionCreators({toggleTask: toggleTask}, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
