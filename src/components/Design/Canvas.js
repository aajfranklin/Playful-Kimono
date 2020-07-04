import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function Canvas ({ userImage }) {
  
  let canvas;
  let slider = useRef(null);
  
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
  
  useEffect(() => {
    canvas = new fabric.Canvas('canvas', {
      width: 500,
      height: 500
    });
  
    let overlaySrc = '/assets/Kimono_Template.png';
    
    canvas.setOverlayImage(overlaySrc, () => {
      canvas.overlayImage && canvas.overlayImage.scaleToWidth(500)
      canvas.renderAll();
  
      if (userImage) {
        let img = new fabric.Image(userImage);
        img.scaleToWidth(canvas.getWidth());
        canvas.add(img);
        canvas.item(0).hasControls = canvas.item(0).hasBorders = false;
        slider.current.value = 100 * canvas.item(0).scaleX;
      }
    });
    
    return () => {
      let dataUrl = canvas.toDataURL({
        format: 'png',
        quality: 1
      });
      
      canvas.dispose();
    }
  }, [userImage]);
  
  const zoomIn = () => {
    if (!userImage) return;
    const img = canvas.item(0);
    img.scaleX = img.scaleY = Math.min(img.scaleX + 0.1, 1);
    slider.current.value = 100 * img.scaleX;
    canvas.renderAll();
  };
  
  const zoomOut = () => {
    if (!userImage) return;
    const img = canvas.item(0);
    img.scaleX = img.scaleY = Math.max(img.scaleX - 0.1, 0.001); // fabricjs treats scale 0 as unscaled aka scale 1, so stop just before 0
    slider.current.value = 100 * img.scaleX;
    canvas.renderAll();
  };
  
  const handleSliderChange = () => {
    if (!userImage) return;
    const img = canvas.item(0);
    img.scaleX = img.scaleY = Math.max(slider.current.value / 100, 0.001); // fabricjs treats scale 0 as unscaled aka scale 1, so stop just before 0
    canvas.renderAll();
  };
  
  return(
    <React.Fragment>
      <canvas id="canvas"/>
      <div id="zoom">
        <span>ZOOM</span>
        <div id="zoom-controls">
          <button onClick={zoomOut} type="button" className="zoom-button">-</button>
          <input onChange={handleSliderChange} ref={slider} type="range" className="zoom-slider"/>
          <button onClick={zoomIn} type="button" className="zoom-button">+</button>
        </div>
      </div>
    </React.Fragment>)
}

export default Canvas;