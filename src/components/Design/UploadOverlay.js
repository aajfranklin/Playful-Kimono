import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { userUploadedImage } from '../../actions/actionCreators';

function UploadOverlay({ userUploadedImage }) {
  
  let dragAndDropRef = useRef(null);
  
  useEffect(() => {
    const dragAndDrop = dragAndDropRef.current;
    dragAndDrop.ondragover = dragAndDrop.ondragenter = (e) => e.preventDefault();
  
    dragAndDrop.ondrop = (e) => {
      e.preventDefault();
      if (e.dataTransfer.files[0].type.indexOf('image/') !== 0) return;
      handleFileInput({ target: { files: e.dataTransfer.files } });
    };
  }, []);
  
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
    <label id="image-input-label" ref={dragAndDropRef}>
      <input type="file" id="image-input" accept="image/*" onChange={handleFileInput}/>
      <span id="image-input-text">DRAG AND DROP <br/>OR <u>UPLOAD</u><br/> IMAGE HERE</span>
    </label>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    userUploadedImage: (image) => dispatch(userUploadedImage(image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadOverlay);