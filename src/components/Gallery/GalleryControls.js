import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import xIcon from '@iconify/icons-bi/x';
import chevronCompactRight from '@iconify/icons-bi/chevron-compact-right';
import chevronCompactLeft from '@iconify/icons-bi/chevron-compact-left';
import { getKimonos, maximiseKimono, minimiseKimono, minimiseGallery } from '../../actions/actionCreators';

function GalleryControls({ kimonos, loadedAll, loadingMore, maximisedKimonoIndex, start, getKimonos, maximiseKimono, minimiseKimono, minimiseGallery }) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  })
  
  useEffect(() => {
    if (maximisedKimonoIndex === kimonos.length - 1 && !loadedAll &&!loadingMore) getKimonos(start);
  }, [maximisedKimonoIndex, kimonos, loadedAll, loadingMore, getKimonos, start]);
  
  const changeKimono = (next) => {
    maximiseKimono(next ? maximisedKimonoIndex + 1 : maximisedKimonoIndex - 1);
    minimiseKimono(maximisedKimonoIndex);
  };
  
  const closeGallery = () => {
    minimiseGallery(kimonos[maximisedKimonoIndex].id);
    minimiseKimono(maximisedKimonoIndex);
  }
  
  const handleKeyDown = (e) => {
    if (e.which === 37 && maximisedKimonoIndex !== 0) changeKimono(); // left key
    if (e.which === 39 && maximisedKimonoIndex !== kimonos.length - 1) changeKimono(true); // right key
    if (e.which === 27) closeGallery(); // esc key
  }
  
  return(
    <div id="gallery-controls">
      <button type="button" onClick={closeGallery}>
        <Icon icon={xIcon} />
      </button>
      <div id="chevron-container">
        <button type="button" onClick={() => changeKimono(false)}
                className={maximisedKimonoIndex === 0 ? 'hidden' : ''}>
          <Icon icon={chevronCompactLeft} />
        </button>
        <button type="button" onClick={() => changeKimono(true)}
                className={maximisedKimonoIndex === kimonos.length - 1 ? 'hidden' : ''}>
          <Icon icon={chevronCompactRight} />
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    kimonos: state.gallery.kimonos,
    loadedAll: state.gallery.loadedAll,
    loadingMore: state.gallery.loadingMore,
    maximisedKimonoIndex: state.gallery.kimonos.findIndex(kimono => kimono.maximised),
    start: state.gallery.start
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getKimonos: (start) => dispatch(getKimonos(start)),
    maximiseKimono: (index) => dispatch(maximiseKimono(index)),
    minimiseKimono: (index) => dispatch(minimiseKimono(index)),
    minimiseGallery: (lastMaximisedKimonoId) => dispatch(minimiseGallery(lastMaximisedKimonoId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryControls);
