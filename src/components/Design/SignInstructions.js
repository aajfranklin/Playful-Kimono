import React from 'react';
import { connect } from 'react-redux';
import { updateHandle, updateName, updateTitle, uploadKimono } from '../../actions/actionCreators';

// POST IMAGE TO S3 AND POST KIMONO TO STRAPI
// CHANGE STEP

function SignInstructions({ handle, name, title, updateHandle, updateName, updateTitle, uploadKimono }) {
  
  const handleHandleChange  = (e) => updateHandle(e.target.value);
  const handleNameChange    = (e) => updateName(e.target.value);
  const handleTitleChange   = (e) => updateTitle(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadKimono();
  }
  
  const isButtonAvailable = name && name.length > 0 && title && title.length > 0;
  
  return(
    <section id="instructions">
      <h1>TO UPLOAD TO GALLERY, PLEASE PROVIDE THE FOLLOWING AND CLICK UPLOAD:</h1>
      <form>
        <div className="text-input-label-pair">
          <label>Title of design</label>
          <input type='text' value={title} onChange={handleTitleChange}/>
        </div>
        <div className="text-input-label-pair">
          <label>Your name</label>
          <input type='text' value={name} onChange={handleNameChange}/>
        </div>
        <div className="text-input-label-pair">
          <label>Instagram <br/>(optional)</label>
          <div>
            <span id="instagram-at">@</span>
            <input id="instagram-input" type='text' value={handle} onChange={handleHandleChange}/>
          </div>
        </div>
        <button type="submit"
                onClick={handleSubmit}
                className={`action-button ${isButtonAvailable ? 'available' : ''}`}>
          UPLOAD
        </button>
      </form>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    handle: state.design.form.handle,
    name: state.design.form.name,
    title: state.design.form.title
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHandle: (handle) => dispatch(updateHandle(handle)),
    updateName: (name) => dispatch(updateName(name)),
    updateTitle: (title) => dispatch(updateTitle(title)),
    uploadKimono: () => dispatch(uploadKimono())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInstructions);