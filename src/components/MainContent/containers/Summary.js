import { connect } from 'react-redux';
import Summary from "../components/Summary";

const mapStateToProps = state => ({
  surveyObj: state
});

export default connect(
    mapStateToProps
)(Summary);
