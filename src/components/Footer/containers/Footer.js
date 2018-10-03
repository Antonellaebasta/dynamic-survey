import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { surveyUpdate } from '../../../actions/surveyUpdate';

const mapStateToProps = state => ({
  currentPage: state.currentPage,
  currentIndex: state.currentIndex
});

const mapDispatchToProps = dispatch => ({
  surveyUpdate: d => dispatch(surveyUpdate(d))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);
