import { connect } from 'react-redux';
import RadioButton from '../components/RadioButton';
import {surveyUpdate} from "../../../actions/surveyUpdate";

const mapStateToProps = state => ({
  surveyObj: state
});

const mapDispatchToProps = dispatch => ({
  surveyUpdate: d => dispatch(surveyUpdate(d))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RadioButton);
