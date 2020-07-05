import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Canvas from './Canvas';
import UploadOverlay from './UploadOverlay';
import DesignInstructions from './DesignInstructions';
import SignInstructions from './SignInstructions';
import SubmittedInstructions from './SubmittedInstructions';
import config from '../../config';
import { userLeftDesignPage } from "../../actions/actionCreators";

function Design({ step, userLeftDesignPage }) {
  
  useEffect(() => {
    document.title = 'Playful Kimono - Design A Kimono'
  }, [])
  
  useEffect(() => {
    return () => userLeftDesignPage();
  }, [userLeftDesignPage])
  
  return(
    <main id="design">
      <section id="design-tool">
        <Canvas/>
        { step === config.designSteps.EMPTY ? <UploadOverlay/> : null }
      </section>
      { step === config.designSteps.EMPTY || step === config.designSteps.EDITING ? <DesignInstructions/> : null }
      { step === config.designSteps.SIGNING || step === config.designSteps.SUBMITTING ? <SignInstructions/> : null }
      { step === config.designSteps.SUBMITTED ? <SubmittedInstructions/> : null }
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    step: state.design.step
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLeftDesignPage: () => dispatch(userLeftDesignPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Design);
