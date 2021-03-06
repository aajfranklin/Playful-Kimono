import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import rgbHex from 'rgb-hex';
import hexRgb from "hex-rgb";
import { homeLoaded, userLeftHomePage, updateBackgroundGradient } from '../../actions/actionCreators';
import { isTouchDevice } from '../../utils';

function Home ({ bottomColour, topColour, loaded, homeLoaded, userLeftHomePage, updateBackgroundGradient }) {
  //                TOP        BOTTOM
  const colours = ['#FF0000', '#FFFFFF'];
  
  useEffect(() => {
    document.title = 'Playful Kimono';
  
    const handleMouseMove = (e) => {
      const y = e.pageY;
      const height = window.innerHeight;
    
      const newBottomColour = getNewColour(colours[0], colours[1], height, y);
      const newTopColour    = getNewColour(colours[1], colours[0], height, y);
      updateBackgroundGradient(newBottomColour, newTopColour);
    };
    
    if (!isTouchDevice()) {
      document.body.addEventListener('mousemove', handleMouseMove);
      return () => document.body.removeEventListener('mousemove', handleMouseMove);
    }
  }, [colours, updateBackgroundGradient])
  
  useEffect(() => userLeftHomePage, [userLeftHomePage]);
  
  const getNewColour = (from, to, dimension, position) => {
    const ratio = 1 - (position / dimension);
    const getNewRgb = (colour) => Math.ceil((hexRgb(from)[colour] * ratio) + (hexRgb(to)[colour] * (1 - ratio)));
    return `#${rgbHex(getNewRgb('red'),getNewRgb('green'),getNewRgb('blue'))}`;
  }
  
  return(
    <main>
      <section>
        <div id="gradient-container" className={loaded ? 'loaded' : ''} style={ !isTouchDevice() ? {background: `linear-gradient(${topColour},${bottomColour})`} : {}}>
          <img src="assets/Kimono_Template.png" alt="Kimono template with variable gradient background" onLoad={homeLoaded}/>
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
    loaded: state.home.loaded,
    topColour: state.home.topColour
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homeLoaded: () => dispatch(homeLoaded()),
    userLeftHomePage: () => dispatch(userLeftHomePage()),
    updateBackgroundGradient: (bottomColour, topColour) => dispatch(updateBackgroundGradient(bottomColour, topColour))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);