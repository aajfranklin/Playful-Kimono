import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fabric } from 'fabric';
import Hammer from 'hammerjs';
import config from '../../config';
import { saveFinishedImage, setMaxScale } from '../../actions/actionCreators';
import UploadOverlay from './UploadOverlay';
import { isTouchDevice } from '../../utils';
import ScrollButton from "./ScrollButton";

function Canvas ({ main, maxScale, step, userImage, saveFinishedImage, setMaxScale }) {
  
  let canvas = useRef(null);
  let container = useRef(null);
  let slider = useRef(null);
  let hammer;     // does not need to be retained between renders
  let pinchScale; // does not need to be retained between renders
  
  useEffect(() => {
    if (step === config.designSteps.EMPTY)    initialiseCanvas();
    if (step === config.designSteps.EDITING)  addUserImageToCanvas();
    if (step === config.designSteps.SIGNING)  lockCanvas();
  }, [step, userImage]);
  
  const initialiseCanvas = () => {
    canvas.current = new fabric.Canvas('canvas', {
      width: getCanvasWidth(),
      height: getCanvasWidth()
    });

    let overlaySrc = '/assets/Kimono_Template.png';
    
    canvas.current.setOverlayImage(overlaySrc, () => {
      canvas.current.overlayImage.scaleToWidth(getCanvasWidth())
      canvas.current.renderAll();
    });
  }
  
  const addUserImageToCanvas = () => {
    let img = new fabric.Image(userImage);
  
    // allow image to scale to its own size or the size of the canvas, whichever is larger
    let newMaxScale = img.width >= getCanvasWidth() && img.height >= getCanvasWidth()
      ? 1
      : getCanvasWidth() / Math.min(img.width, img.height);
  
    setMaxScale(newMaxScale);
    img.scaleToWidth(getCanvasWidth());
    canvas.current.add(img);
    
    getImg().center();
    getImg().hasControls = getImg().hasBorders = false;
    
    if (isTouchDevice()) addPinchHandler();
    if (!isTouchDevice()) updateSlider(newMaxScale);
  };
  
  const lockCanvas = () => {
    lockImageMovement();
    saveImageDataToState();
  }
  
  const getCanvasWidth = () => Math.min(window.screen.width, window.screen.height) > 500 ? 500: 360;
  const getImg = () => canvas.current.item(0);
  const lockImageMovement = () => getImg().lockMovementX = getImg().lockMovementY = true;
  const unlockImageMovement = () => getImg().lockMovementX = getImg().lockMovementY = false;
  
  const addPinchHandler = () => {
    hammer = new Hammer(container.current);
    hammer.get('pinch').set({ enable: true });
  
    hammer.on('pinchstart', () => {
      lockImageMovement();
      pinchScale = getImg().scaleX;
    });
    
    hammer.on('pinch', (e) => {
      getImg().scaleX = getImg().scaleY = Math.max(Math.min(pinchScale * e.scale, 1), 0.001);
      canvas.current.renderAll();
    });
  
    hammer.on('pinchend', unlockImageMovement);
  };
  
  const saveImageDataToState = () => {
    const scaleRatio = 1080 / getCanvasWidth();
    canvas.current.setDimensions({ width: 1080, height: 1080});
    canvas.current.setZoom(scaleRatio);
    
    let dataUrl = canvas.current.toDataURL({
      format: 'png',
      quality: 1
    });
  
    canvas.current.setZoom(1);
    canvas.current.setDimensions({ width: getCanvasWidth(), height: getCanvasWidth()});
    canvas.current.renderAll();
  
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
  
  const zoom = (out) => {
    if (!userImage || step !== config.designSteps.EDITING) return;
    getImg().scaleX = getImg().scaleY = Math[out ? 'max' : 'min'](getImg().scaleX + (out ? - 0.1 : 0.1), out ? 0.001 : maxScale);
    updateSlider(maxScale);
    canvas.current.renderAll();
  };
  
  const handleSliderChange = () => {
    if (!userImage || step !== config.designSteps.EDITING) return;
    getImg().scaleX = getImg().scaleY = Math.max(slider.current.value / 100 * maxScale, 0.001);
    canvas.current.renderAll();
  };
  
  const updateSlider = (scale) => slider.current.value = 100 * (getImg().scaleX / scale)
  
  const ZoomControls = () => {
    return(
      <div id="zoom" className={ step === config.designSteps.EMPTY || step === config.designSteps.EDITING ? '' : 'hidden' }>
        <span>ZOOM</span>
        <div id="zoom-controls">
          <button onClick={() => zoom(true)} type="button" className="zoom-button">-</button>
          <input onChange={handleSliderChange} ref={slider} type="range" className="zoom-slider" disabled={step !== config.designSteps.EDITING}/>
          <button onClick={() => zoom(false)} type="button" className="zoom-button">+</button>
        </div>
      </div>
    )
  };
  
  return(
    <React.Fragment>
      <div id="canvas-label-container"
           ref={container}
           className={step === config.designSteps.EMPTY || step === config.designSteps.EDITING ? '': 'locked'}>
        <canvas id="canvas"/>
        { step === config.designSteps.EMPTY ? <UploadOverlay/> : null }
        { step === config.designSteps.EDITING && window.screen.height <= 500 && window.screen.width <= 400 ? <ScrollButton main={main}/> : null}
      </div>
      { !isTouchDevice() ? <ZoomControls/> : null }
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    main: ownProps.main,
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
