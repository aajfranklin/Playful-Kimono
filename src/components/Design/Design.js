import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Canvas from './Canvas';
import DesignInstructions from './DesignInstructions';
import SignInstructions from './SignInstructions';
import SubmittedInstructions from './SubmittedInstructions';
import ConditionalError from '../Shared/ConditionalError';
import config from '../../config';
import { userLeftDesignPage } from "../../actions/actionCreators";

function Design({ error, step, userLeftDesignPage }) {
  
  const main = useRef(null);
  
  useEffect(() => {
    document.title = 'Playful Kimono - Design A Kimono'
  }, [])
  
  useEffect(() => {
    return () => userLeftDesignPage();
  }, [userLeftDesignPage])
  
  return(
    <main id="design" ref={main}>
      <section id="design-tool">
        <Canvas main={main}/>
      </section>
      { step === config.designSteps.EMPTY || step === config.designSteps.EDITING ? <DesignInstructions/> : null }
      { step === config.designSteps.SIGNING || step === config.designSteps.SUBMITTING ? <SignInstructions/> : null }
      { step === config.designSteps.SUBMITTED ? (error ? <ConditionalError showError={true} message={config.errors.submitKimono}/> : <SubmittedInstructions/>) : null }
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.design.error,
    step: state.design.step
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLeftDesignPage: () => dispatch(userLeftDesignPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Design);
