import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Canvas from './Canvas';
import UploadOverlay from './UploadOverlay';
import config from '../../config';
import { userLeftDesignPage } from "../../actions/actionCreators";

function Design({ step, userImage, userLeftDesignPage }) {
  
  useEffect(() => {
    return () => userLeftDesignPage();
  }, [])
  
  const DesignInstructions = () => {
    return(
      <section id="instructions">
        <h1>TO DESIGN:</h1>
        <ol>
          <li>Place image in the template</li>
          <li>You can click and drag to reposition the image and zoom in and out using the key below</li>
          <li>Click FINISH to finalise to complete.</li>
        </ol>
        <button type="button" className={`action-button ${ step === config.designSteps.EDITING ? 'available' : '' }`}>FINISH</button>
      </section>
    )
  };
  
  const SignInstructions = () => {
  
  };
  
  const SubmittedInstructions = () => {
  
  };
  
  return(
    <main id="design">
      <section id="design-tool">
        <Canvas userImage={userImage}/>
        { step === config.designSteps.EMPTY ? <UploadOverlay/> : null }
      </section>
      { step === config.designSteps.EMPTY || step === config.designSteps.EDITING ? <DesignInstructions/> : null }
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    step: state.design.step,
    userImage: state.design.userImage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLeftDesignPage: () => dispatch(userLeftDesignPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Design);
