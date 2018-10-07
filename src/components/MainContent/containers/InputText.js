import { connect } from 'react-redux';
import InputText from '../components/InputText';
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
)(InputText);
