import React from 'react';
import { connect} from 'react-redux';
import config from '../../config';
import { userFinishedDesigning } from '../../actions/actionCreators';
import { isTouchDevice } from '../../utils';

function DesignInstructions({ step, userFinishedDesigning }) {
  return(
    <section id="instructions">
      <h1>TO DESIGN:</h1>
      <ol>
        <li>Place image in the template</li>
        <li>{ isTouchDevice()
          ? 'Drag to reposition the image and pinch to zoom'
          : 'Click and drag to reposition the image and zoom using the key below' }</li>
        <li>Click FINISH to complete</li>
      </ol>
      <p>Refresh the page to discard the image and start again.</p>
      <button type="button"
              onClick={userFinishedDesigning}
              className={`action-button ${ step === config.designSteps.EDITING ? 'available' : '' }`}
              tabIndex={step === config.designSteps.EDITING ? 0 : -1}>
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