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
  
  return(
    <main>
      <section id="design">
        <Canvas userImage={userImage}/>
        { step === config.designSteps.EMPTY ? <UploadOverlay/> : null }
      </section>
      <section id="instructions">
        Temp
      </section>
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
