import { connect } from 'react-redux';
import AddToDo from '../components/AddToDo';
import { addToDo } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    addToDo: text => {
      dispatch(addToDo(text));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddToDo);
