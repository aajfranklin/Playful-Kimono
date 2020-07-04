import React, { useEffect } from 'react';
import { fabric } from 'fabric';

function Canvas () {
  
  // https://stackoverflow.com/a/12300351
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
    let imgSrc = '/assets/placeholder.jpg';
    
    canvas.setOverlayImage(overlaySrc, () => {
      canvas.overlayImage && canvas.overlayImage.scaleToWidth(500)
      canvas.renderAll();
    });
  
    fabric.Image.fromURL(imgSrc, function(img){
      img.scaleToWidth(canvas.getWidth());
      canvas.add(img);
      canvas.item(0).hasControls = canvas.item(0).hasBorders = false;
    });
    
    return () => {
      let dataUrl = canvas.toDataURL({
        format: 'png',
        quality: 1
      });
      
      window.open(window.URL.createObjectURL(dataURItoBlob(dataUrl)));
  
      canvas.dispose();
    }
  }, []);
  
  return(
    <canvas id="canvas" height="500" width="500"/>
  )
}

export default Canvas;