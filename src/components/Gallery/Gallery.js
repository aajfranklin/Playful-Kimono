import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getKimonos } from '../../actions/actionCreators';
import ConditionalError from '../Shared/ConditionalError';
import config from '../../config'

function Gallery ({ error, kimonos, loaded, getKimonos }) {
  
  useEffect(() => {
    document.title = `${error ? 'Error - ': ''}Playful Kimono - Gallery`
    if (!loaded) getKimonos();
  }, [error, loaded, getKimonos])
  
  return(
    <React.Fragment>
      <ConditionalError showError={error} message={config.errors.getKimonos}/>
      <ul>
        { kimonos.map(kimono => {
          return(
            <li key={kimono.uuid}>
              <p>{kimono.title}</p>
              <p>{kimono.name}</p>
              <p>{kimono.handle}</p>
              <img src={kimono.url} alt={'kimono'}/>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    error: state.gallery.error,
    kimonos: state.gallery.kimonos,
    loaded: state.gallery.loaded
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getKimonos: () => dispatch(getKimonos())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);