import React from 'react';
import { connect } from 'react-redux';
import { maximiseKimono, minimiseKimono, minimiseGallery } from '../../actions/actionCreators';

function GalleryControls({ kimonos, maximisedKimonoIndex, maximiseKimono, minimiseKimono, minimiseGallery }) {
  const changeKimono = (next) => {
    minimiseKimono(maximisedKimonoIndex);
    maximiseKimono(next ? maximisedKimonoIndex + 1 : maximisedKimonoIndex - 1);
  };
  
  const closeGallery = () => {
    minimiseKimono(maximisedKimonoIndex);
    minimiseGallery();
  }
  
  return(
    <div id="gallery-controls">
      <button type="button" onClick={closeGallery}>Close</button>
      <div id="chevron-container">
        <button type="button" onClick={() => changeKimono(false)} className={maximisedKimonoIndex === 0 ? 'hidden' : ''}>Previous</button>
        <button type="button" onClick={() => changeKimono(true)} className={maximisedKimonoIndex === kimonos.length - 1 ? 'hidden' : ''}>Next</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    kimonos: state.gallery.kimonos,
    maximisedKimonoIndex: state.gallery.kimonos.findIndex(kimono => kimono.maximised)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    maximiseKimono: (index) => dispatch(maximiseKimono(index)),
    minimiseKimono: (index) => dispatch(minimiseKimono(index)),
    minimiseGallery: () => dispatch(minimiseGallery())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryControls);
