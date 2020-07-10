import React, { useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { kimonoLoaded, maximiseKimono } from '../../actions/actionCreators';

function Kimono({ index, kimono, linkRef, maximised, kimonoLoaded, maximise }) {
  const kimonoRef = useRef(null);

  useLayoutEffect(() => {
    if (linkRef) linkRef(kimonoRef);
  }, [linkRef, kimonoRef])
  
  const handleClick = () => {
    if (!maximised) maximise(index);
  };
  
  return(
    <div className={`kimono ${maximised ? 'maximised' : ''}`}
         onClick={Math.min(window.screen.height, window.screen.width) >= 600 ? handleClick : null}
         ref={kimonoRef}>
      { !kimono.loaded ? <img src="assets/Kimono_Template.png" alt="Kimono template"/>: null }
      <img alt={kimono.title}
           src={kimono.url}
           onLoad={() => { if (!kimono.loaded) kimonoLoaded(index) }}
           className={kimono.loaded ? '' : 'loading'}/>
      <p>{kimono.title}</p>
      <p>by {kimono.name}</p>
      <p>{kimono.handle !== '-' ? '@' : ''}{kimono.handle}</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    index: ownProps.index,
    kimono: state.gallery.kimonos[ownProps.index],
    linkRef: ownProps.linkRef,
    maximised: state.gallery.maximised
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    kimonoLoaded: (index) => dispatch(kimonoLoaded(index)),
    maximise: (index) => dispatch(maximiseKimono(index)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Kimono);