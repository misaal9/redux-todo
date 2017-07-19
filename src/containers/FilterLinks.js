import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FilterLinks from '../components/FilterLinks';
import { setFilter } from '../actions';

const mapStateToProps = state => {
  return {
    activeFilter: state.activeFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: bindActionCreators({setFilter: setFilter}, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLinks);
