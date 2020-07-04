import React from 'react';
import { connect } from 'react-redux';
import Canvas from './Canvas';
import config from '../../config';
import { userUploadedImage } from "../../actions/actionCreators";

function Design({ step, userImage, userUploadedImage }) {
  
  const handleFileInput = (e) => {
    let reader = new FileReader();
    
    reader.onload = event => {
      let img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        userUploadedImage(img);
      }
    }
  
    reader.readAsDataURL(e.target.files[0]);
  }
  
  return(
    <main>
      <section id="design">
        <Canvas userImage={userImage}/>
        { step === config.designSteps.EMPTY
          ?
          <label id="image-input-label">
            <input type="file" id="image-input" accept="image/*" onChange={handleFileInput}/>
            <span id="image-input-text">DRAG AND DROP <br/>OR <u>UPLOAD</u><br/> IMAGE HERE</span>
          </label>
          : null
        }
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
    userUploadedImage: (image) => dispatch(userUploadedImage(image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Design);
