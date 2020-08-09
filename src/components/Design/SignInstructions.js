import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { updateHandle, updateName, updateTitle, uploadKimono } from '../../actions/actionCreators';
import config from '../../config';

function SignInstructions({ handle, name, imageData, step, title, isGoogleAnalyticsInitialised, updateHandle, updateName, updateTitle, uploadKimono }) {
  
  const handleHandleChange  = (e) => updateHandle(e.target.value);
  const handleNameChange    = (e) => updateName(e.target.value);
  const handleTitleChange   = (e) => updateTitle(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isGoogleAnalyticsInitialised) {
      ReactGA.event({
        category: 'Design',
        action: 'Submitted a kimono'
      });
    }
    uploadKimono({
      handle,
      name,
      title,
      imageData
    });
  }
  
  const isButtonAvailable = name && name.length > 0 && title && title.length > 0;
  
  const UploadButton = () => {
    return(
      <button type="submit"
              onClick={handleSubmit}
              className={`action-button ${isButtonAvailable ? 'available' : ''}`}
              tabIndex={isButtonAvailable ? 0 : -1}>
        UPLOAD
      </button>
    );
  }
  
  return(
    <section id="instructions">
      <h1>TO UPLOAD TO GALLERY, PLEASE PROVIDE THE FOLLOWING AND CLICK UPLOAD:</h1>
      <form>
        <div className="text-input-label-pair">
          <label>Title of design</label>
          <input type='text' value={title} onChange={handleTitleChange} maxLength="30"/>
        </div>
        <div className="text-input-label-pair">
          <label>Your name</label>
          <input type='text' value={name} onChange={handleNameChange} maxLength="30"/>
        </div>
        <div className="text-input-label-pair">
          <label>Instagram <br/>(optional)</label>
          <div>
            <span id="instagram-at">@</span>
            <input id="instagram-input" type='text' value={handle} onChange={handleHandleChange} maxLength="30"/>
          </div>
        </div>
        <p id="confirm-terms-of-use">By clicking UPLOAD you agree to the <Link to={'/terms'}>terms of use</Link>.</p>
        { step === config.designSteps.SUBMITTING
          ?
            <button className="loading-container action-button" onClick={(e) => e.preventDefault()}>
              <img className="loading-spinner" src="assets/loading.png" alt="Spinning kimono loading graphic"/>
            </button>
          : <UploadButton/>
        }
      </form>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    handle: state.design.form.handle,
    imageData: state.design.imageData,
    name: state.design.form.name,
    step: state.design.step,
    title: state.design.form.title,
    isGoogleAnalyticsInitialised: state.isGoogleAnalyticsInitialised
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHandle: (handle) => dispatch(updateHandle(handle)),
    updateName: (name) => dispatch(updateName(name)),
    updateTitle: (title) => dispatch(updateTitle(title)),
    uploadKimono: (data) => dispatch(uploadKimono(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInstructions);