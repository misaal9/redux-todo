import { connect } from 'react-redux';
import FilterLinks from '../components/FilterLinks';

const mapStateToProps = state => {
  console.log(state);
  return {
    activeFilter: state.activeFilter
  }
};

export default connect(mapStateToProps)(FilterLinks);
