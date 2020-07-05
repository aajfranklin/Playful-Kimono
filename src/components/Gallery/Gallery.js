import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { getKimonos } from '../../actions/actionCreators';
import ConditionalError from '../Shared/ConditionalError';
import Kimono from './Kimono';
import config from '../../config'

function Gallery ({ error, kimonos, loadedAll, loadedAny, loadingMore, start, getKimonos }) {
  
  const mainRef = useRef(null);
  
  useEffect(() => {
    document.title = `${error ? 'Error - ': ''}Playful Kimono - Gallery`;
    const canLoadMoreWithinScreenDimensions = loadedAny && !loadedAll && mainRef.current.offsetHeight === mainRef.current.scrollHeight;
    if (!loadedAny || canLoadMoreWithinScreenDimensions) getKimonos(start);
  }, [error, loadedAny, getKimonos, start]);
  
  const handleScroll = (e) => {
    const isNearBottom = e.target.offsetHeight + e.target.scrollTop + 20 > e.target.scrollHeight;
    if (isNearBottom && !loadingMore && !loadedAll) {
      getKimonos(start);
    }
  };
  
  const Kimonos = () => {
    return(
      <section id="kimonos">
        { kimonos.filter(kimono => kimono.approved).map(kimono => <Kimono key={kimono.uuid} kimono={kimono}/>) }
      </section>
    )
  };
  
  return(
    <main id="gallery" onScroll={handleScroll} ref={mainRef}>
      <ConditionalError showError={error} message={config.errors.getKimonos}/>
      { loadedAny
        ? <Kimonos/>
        : <div className="lds-dual-ring"/>
      }
      { loadedAny && loadingMore ? <div className="lds-dual-ring infinite-scroll-status-area"/> : null }
      { loadedAll ? <p className="infinite-scroll-status-area">Check back for more kimonos soon!</p> : null }
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.gallery.error,
    kimonos: state.gallery.kimonos,
    loadedAll: state.gallery.loadedAll,
    loadedAny: state.gallery.loadedAny,
    loadingMore: state.gallery.loadingMore,
    start: state.gallery.start
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getKimonos: (start) => dispatch(getKimonos(start))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);