import React from 'react';
import { connect} from 'react-redux';
import config from '../../config';
import { userFinishedDesigning } from '../../actions/actionCreators';

function DesignInstructions({ step, userFinishedDesigning }) {
  return(
    <section id="instructions">
      <h1>TO DESIGN:</h1>
      <ol>
        <li>Place image in the template</li>
        <li>You can click and drag to reposition the image and zoom in and out using the key below</li>
        <li>Click FINISH to finalise to complete.</li>
      </ol>
      <button type="button"
              onClick={userFinishedDesigning}
              className={`action-button ${ step === config.designSteps.EDITING ? 'available' : '' }`}>
        FINISH
      </button>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    step: state.design.step
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userFinishedDesigning: () => dispatch(userFinishedDesigning()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignInstructions);