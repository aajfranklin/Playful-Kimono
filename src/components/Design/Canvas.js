import React, { useEffect } from 'react';
import { fabric } from 'fabric';

function Canvas ({ userImage }) {
  
  /*
    Modified from stack overflow user Matthew's answer for 'How to convert dataURL to file object in Javascript':
    https://stackoverflow.com/questions/6850276/how-to-convert-dataurl-to-file-object-in-javascript
    Licensed under CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/legalcode)
   */
  function dataURItoBlob(dataURI) {
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
    let canvas = new fabric.Canvas('canvas', {
      width: 500,
      height: 500
    });
  
    let overlaySrc = '/assets/Kimono_Template.png';
    
    canvas.setOverlayImage(overlaySrc, () => {
      canvas.overlayImage && canvas.overlayImage.scaleToWidth(500)
      canvas.renderAll();
    });
    
    if (userImage) {
      let img = new fabric.Image(userImage);
      img.scaleToWidth(canvas.getWidth());
      canvas.add(img);
      canvas.item(0).hasControls = canvas.item(0).hasBorders = false;
    }
    
    return () => {
      let dataUrl = canvas.toDataURL({
        format: 'png',
        quality: 1
      });
      
      canvas.dispose();
    }
  }, [userImage]);
  
  return(<canvas id="canvas"/>)
}

export default Canvas;