import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import { surveyInit } from '../../../actions/surveyInit';
import {surveyUpdate} from "../../../actions/surveyUpdate";

const mapStateToProps = state => ({
  surveyObj: state
});

const mapDispatchToProps = dispatch => ({
  surveyInit: () => dispatch(surveyInit()),
  surveyUpdate: d => dispatch(surveyUpdate(d))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContent);
