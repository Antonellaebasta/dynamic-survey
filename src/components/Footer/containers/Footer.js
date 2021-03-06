import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { surveyUpdate } from '../../../actions/surveyUpdate';

const mapStateToProps = state => ({
  surveyObj: state
});

const mapDispatchToProps = dispatch => ({
  surveyUpdate: d => dispatch(surveyUpdate(d))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);
