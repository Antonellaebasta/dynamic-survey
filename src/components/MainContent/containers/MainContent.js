import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import { surveyInit } from '../../../actions/surveyInit';
import {surveyUpdate} from "../../../actions/surveyUpdate";
//import {INITIAL_STATE} from "../../../store/constants";

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
  currentView: state.currentView,
  question: state.question
});

const mapDispatchToProps = dispatch => ({
  surveyInit: () => dispatch(surveyInit()),
  surveyUpdate: d => dispatch(surveyUpdate(d))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContent);
