import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import rgbHex from 'rgb-hex';
import hexRgb from "hex-rgb";
import { updateBackgroundGradient } from '../../actions/actionCreators';

function Home ({ bottomColour, topColour, updateBackgroundGradient }) {
  
  const canHover = !window.matchMedia('(pointer:coarse)').matches;
  
  useEffect(() => {
    document.title = 'Playful Kimono';
    
    if (canHover) {
      document.body.addEventListener('mousemove', handleMouseMove);
      return () => document.body.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])
  
  const colours = ['#FC354C', '#6E48AA', '#24FE41', '#FDFC47'];
  
  const getNewColour = (from, to, dimension, position) => {
    const ratio = 1 - (position / dimension);
    const getNewRgb = (colour) => Math.ceil((hexRgb(from)[colour] * ratio) + (hexRgb(to)[colour] * (1 - ratio)));
    return `#${rgbHex(getNewRgb('red'),getNewRgb('green'),getNewRgb('blue'))}`;
  }
  
  const handleMouseMove = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    const newBottomColour = getNewColour(colours[0], colours[1], height, y);
    const newTopColour    = getNewColour(colours[2], colours[3], width, x);
    updateBackgroundGradient(newBottomColour, newTopColour);
  };
  
  return(
    <main>
      <section>
        <div id="gradient-container" style={ canHover ? {background: `linear-gradient(45deg,${topColour},${bottomColour})`} : {}}>
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