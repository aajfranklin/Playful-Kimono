import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateBackgroundGradient } from '../../actions/actionCreators';

function Home ({ bottomColour, topColour, updateBackgroundGradient }) {
  
  useEffect(() => {
    document.title = 'Playful Kimono';
    document.body.addEventListener('mousemove', handleMouseMove);
    return () => document.body.removeEventListener('mousemove', handleMouseMove);
  }, [])
  
  const colours = ['#6E48AA', '#FDFC47', '#24FE41', '#FC354C'];
  
  const hexStringToRgbArray = (hex) => {
    const rgb = (string) => parseInt(string, 16);
    return [rgb(hex.substring(1,3)),rgb(hex.substring(3,5)),rgb(hex.substring(5,7))];
  }
  
  const rgbArrayToHexString = (rgb) => {
    const hex = (int) => int.toString(16);
    return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
  }
  
  const left = hexStringToRgbArray(colours[0]);
  const right = hexStringToRgbArray(colours[1]);
  const top = hexStringToRgbArray(colours[2]);
  const bottom = hexStringToRgbArray(colours[3]);
  
  const getNewColour = (from, to, width, pos) => {
    const m = pos / width;
    const r = Math.ceil(from[0] * m + to[0] * (1 - m));
    const g = Math.ceil(from[1] * m + to[1] * (1 - m));
    const b = Math.ceil(from[2] * m + to[2] * (1 - m));
    return rgbArrayToHexString([r,g,b]);
  }
  
  const handleMouseMove = (e) => {
    const xPos = e.pageX;
    const yPos = e.pageY;
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    const newBottomColour = getNewColour(bottom, top, height, yPos);
    const newTopColour = getNewColour(right, left, width, xPos);
    updateBackgroundGradient(newBottomColour, newTopColour);
  };
  
  return(
    <main>
      <section>
        <div id="gradient-container" style={{background: `linear-gradient(${topColour},${bottomColour})`}}>
          <img src="assets/Kimono_Template.png" alt="Kimono template with variable gradient background"/>
          <Link to="/design" id="attract-link">
            <span>CLICK HERE TO START</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    bottomColour: state.home.bottomColour,
    topColour: state.home.topColour
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBackgroundGradient: (bottomColour, topColour) => dispatch(updateBackgroundGradient(bottomColour, topColour))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);