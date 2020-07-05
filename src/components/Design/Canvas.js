import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fabric } from 'fabric';
import config from '../../config';
import { saveFinishedImage, setMaxScale } from '../../actions/actionCreators';
import UploadOverlay from './UploadOverlay';

function Canvas ({ maxScale, step, userImage, saveFinishedImage, setMaxScale }) {
  
  let canvasRef = useRef(null);
  let slider = useRef(null);
  
  useEffect(() => {
    if (step === config.designSteps.EMPTY || step === config.designSteps.EDITING) initialiseCanvas();
    if (step === config.designSteps.SIGNING) {
      lockImage();
      saveImageDataToState();
    }
  }, [step, userImage]);
  
  const initialiseCanvas = () => {
    if (canvasRef.current !== null) {
      canvasRef.current.dispose();
      canvasRef.current = null;
    }
    
    canvasRef.current = new fabric.Canvas('canvas', {
      width: getCanvasWidth(),
      height: getCanvasWidth()
    });

    let overlaySrc = '/assets/Kimono_Template.png';
    
    canvasRef.current.setOverlayImage(overlaySrc, () => {
      canvasRef.current.overlayImage && canvasRef.current.overlayImage.scaleToWidth(getCanvasWidth())
      canvasRef.current.renderAll();
      if (userImage) addUserImage();
    });
  }
  
  const getCanvasWidth = () => {
    return window.screen.width > 500 ? 500: 360;
  }
  
  const addUserImage = () => {
    let img = new fabric.Image(userImage);
    
    // allow image to scale to twice its size or twice the size of the canvas, whichever is larger
    let newMaxScale = img.width >= getCanvasWidth() && img.height >= getCanvasWidth()
      ? 2
      : getCanvasWidth() / Math.min(img.width, img.height) * 2;
    
    img.scaleToWidth(canvasRef.current.getWidth());
    canvasRef.current.add(img);
    canvasRef.current.item(0).hasControls = canvasRef.current.item(0).hasBorders = false;
    slider.current.value = 100 * (canvasRef.current.item(0).scaleX / newMaxScale);
    
    setMaxScale(newMaxScale);
  };
  
  const lockImage = () => {
    const img = canvasRef.current.item(0);
    img.lockMovementX = img.lockMovementY = true;
  };
  
  const saveImageDataToState = () => {
    const scaleRatio = 1080 / getCanvasWidth();
    canvasRef.current.setDimensions({ width: 1080, height: 1080});
    canvasRef.current.setZoom(scaleRatio);
    
    let dataUrl = canvasRef.current.toDataURL({
      format: 'png',
      quality: 1
    });
  
    canvasRef.current.setZoom(1);
    canvasRef.current.setDimensions({ width: getCanvasWidth(), height: getCanvasWidth()});
    canvasRef.current.renderAll();
  
    saveFinishedImage(dataURItoBlob(dataUrl));
  }
  
  /*
    Modified from stack overflow user Matthew's answer for 'How to convert dataURL to file object in Javascript':
    https://stackoverflow.com/questions/6850276/how-to-convert-dataurl-to-file-object-in-javascript
    Licensed under CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/legalcode)
 */
  const dataURItoBlob = (dataURI) => {
    let byteString = atob(dataURI.split(',')[1]);
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    let arrayBuffer = new ArrayBuffer(byteString.length);
    let iterableBuffer = new Uint8Array(arrayBuffer);
    
    for (let i = 0; i < byteString.length; i++) {
      iterableBuffer[i] = byteString.charCodeAt(i);
    }
    
    return new Blob([arrayBuffer], {type: mimeString});
  }
  
  const zoomIn = () => {
    if (!userImage || step !== config.designSteps.EDITING) return;
    const img = canvasRef.current.item(0);
    img.scaleX = img.scaleY = Math.min(img.scaleX + 0.1, maxScale);
    slider.current.value = 100 * (img.scaleX / maxScale);
    canvasRef.current.renderAll();
  };
  
  const zoomOut = () => {
    if (!userImage || step !== config.designSteps.EDITING) return;
    const img = canvasRef.current.item(0);
    img.scaleX = img.scaleY = Math.max(img.scaleX - 0.1, 0.001); // fabricjs treats scale 0 as unscaled aka scale 1, so stop just before 0
    slider.current.value = 100 * (img.scaleX / maxScale);
    canvasRef.current.renderAll();
  };
  
  const handleSliderChange = () => {
    if (!userImage || step !== config.designSteps.EDITING) return;
    const img = canvasRef.current.item(0);
    img.scaleX = img.scaleY = Math.max(slider.current.value / 100 * maxScale, 0.001); // fabricjs treats scale 0 as unscaled aka scale 1, so stop just before 0
    canvasRef.current.renderAll();
  };
  
  const ZoomControls = () => {
    return(
      <div id="zoom">
        <span>ZOOM</span>
        <div id="zoom-controls">
          <button onClick={zoomOut} type="button" className="zoom-button">-</button>
          <input onChange={handleSliderChange} ref={slider} type="range" className="zoom-slider" disabled={step !== config.designSteps.EDITING}/>
          <button onClick={zoomIn} type="button" className="zoom-button">+</button>
        </div>
      </div>
    )
  };
  
  return(
    <React.Fragment>
      <div id="canvas-label-container">
        <canvas id="canvas"/>
        { step === config.designSteps.EMPTY ? <UploadOverlay/> : null }
      </div>
      { step === config.designSteps.EMPTY || step === config.designSteps.EDITING ? <ZoomControls/> : null }
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    maxScale: state.design.maxScale,
    step: state.design.step,
    userImage: state.design.userImage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveFinishedImage: (imageData) => dispatch(saveFinishedImage(imageData)),
    setMaxScale: (scale) => dispatch(setMaxScale(scale))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
