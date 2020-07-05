import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getKimonos } from '../../actions/actionCreators';
import ConditionalError from '../Shared/ConditionalError';
import Kimono from './Kimono';
import config from '../../config'

function Gallery ({ error, kimonos, loaded, start, getKimonos }) {
  
  useEffect(() => {
    document.title = `${error ? 'Error - ': ''}Playful Kimono - Gallery`
    if (!loaded) getKimonos(start);
  }, [error, loaded, getKimonos])
  
  const Kimonos = () => {
    return(
      <section id="kimonos">
        { kimonos.filter(kimono => kimono.approved).map(kimono => <Kimono key={kimono.uuid} kimono={kimono}/>) }
      </section>
    )
  }
  
  return(
    <main id="gallery">
      <ConditionalError showError={error} message={config.errors.getKimonos}/>
      { loaded
        ? <Kimonos/>
        : <div className="lds-dual-ring"/>
      }
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.gallery.error,
    kimonos: state.gallery.kimonos,
    loaded: state.gallery.loaded,
    start: state.gallery.start
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getKimonos: (start) => dispatch(getKimonos(start))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);