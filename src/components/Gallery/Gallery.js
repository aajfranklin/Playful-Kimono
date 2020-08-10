import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { clearLastMaximised, getKimonos } from '../../actions/actionCreators';
import ConditionalError from '../Shared/ConditionalError';
import Kimono from './Kimono';
import GalleryControls from './GalleryControls';
import config from '../../config'

function Gallery ({ error, kimonos, lastMaximised, loadedAll, loadedAny, loadingMore, maximised, start, clearLastMaximised, getKimonos }) {
  
  const mainRef = useRef(null);
  const kimonoRefs = {};
  
  useEffect(() => {
    document.title = `${error ? 'Error - ': ''}Playful Kimono - Gallery`;
    const canLoadMoreWithinScreenDimensions = loadedAny && !loadedAll && mainRef.current.offsetHeight === mainRef.current.scrollHeight;
    if (!loadedAny || canLoadMoreWithinScreenDimensions) getKimonos(start);
  }, [error, loadedAny, loadedAll, getKimonos, start]);
  
  useLayoutEffect(() => {
    if (lastMaximised) {
      kimonoRefs[lastMaximised].current.focus();
      clearLastMaximised();
    }
  }, [lastMaximised, kimonoRefs, clearLastMaximised]);
  
  const handleScroll = (e) => {
    const isNearBottom = e.target.offsetHeight + e.target.scrollTop + 20 > e.target.scrollHeight;
    if (isNearBottom && !loadingMore && !loadedAll) {
      getKimonos(start);
    }
  };
  
  const Kimonos = () => {
    return(
      <section id="kimonos" className={maximised ? 'maximised' : ''}>
        { maximised
          ? <React.Fragment>
              <Kimono index={kimonos.findIndex(kimono => kimono.maximised)}/>
            </React.Fragment>
          : kimonos.map((kimono, index) => <Kimono key={kimono.id} linkRef={ref => kimonoRefs[kimono.id] = ref} index={index}/>) }
      </section>
    )
  };
  
  const LoadingGraphic = () => {
    return(
      <div className="loading-container">
        <img className="loading-spinner" src="assets/loading.png" alt="Spinning kimono loading graphic"/>
      </div>
    );
  };
  
  return(
    <main id="gallery" onScroll={handleScroll} ref={mainRef}>
      <ConditionalError showError={error} message={config.errors.getKimonos}/>
      { loadedAny
        ? <Kimonos/>
        : <LoadingGraphic/>
      }
      { loadedAny && maximised ? <GalleryControls key={"controls"}/> : null }
      {!maximised
          ? <React.Fragment>
              { loadedAny && loadingMore ? <div className="infinite-scroll-status-area"><LoadingGraphic/></div>: null }
              { loadedAll ? <p className="infinite-scroll-status-area">More designs coming soon.</p> : null }
            </React.Fragment>
          : null
      }
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.gallery.error,
    kimonos: state.gallery.kimonos,
    lastMaximised: state.gallery.lastMaximised,
    loadedAll: state.gallery.loadedAll,
    loadedAny: state.gallery.loadedAny,
    loadingMore: state.gallery.loadingMore,
    maximised: state.gallery.maximised,
    start: state.gallery.start
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearLastMaximised: () => dispatch(clearLastMaximised()),
    getKimonos: (start) => dispatch(getKimonos(start))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);