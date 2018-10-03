import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import { surveyInit } from '../../../actions/surveyInit';
//import {INITIAL_STATE} from "../../../store/constants";

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
  question: state.question
});

const mapDispatchToProps = dispatch => ({
  surveyInit: () => dispatch(surveyInit())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContent);
