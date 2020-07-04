import React, { useEffect } from 'react';
import { fabric } from 'fabric';

function Canvas ({ userImage }) {
  
  let canvas;
  
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
    img.scaleX = Math.min(img.scaleX + 0.1, 1);
    img.scaleY = Math.min(img.scaleY + 0.1, 1);
    canvas.renderAll();
  }
  
  const zoomOut = () => {
    if (!userImage) return;
    const img = canvas.item(0);
    img.scaleX = Math.max(img.scaleX - 0.1, 0.1);
    img.scaleY = Math.max(img.scaleY - 0.1, 0.1);
    canvas.renderAll();
  }
  
  return(
    <React.Fragment>
      <canvas id="canvas"/>
      <div id="zoom">
        <span>ZOOM</span>
        <div id="zoom controls">
          <button onClick={zoomOut} type="button">-</button>
          <button onClick={zoomIn} type="button">+</button>
        </div>
      </div>
    </React.Fragment>)
}

export default Canvas;