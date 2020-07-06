import React from 'react';
import { connect } from 'react-redux';
import { kimonoLoaded} from '../../actions/actionCreators';

function Kimono({ index, kimono, kimonoLoaded }) {
  
  if (!kimono.approved) return null;
  
  return(
    <div className="kimono">
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
    kimono: state.gallery.kimonos[ownProps.index]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    kimonoLoaded: (index) => dispatch(kimonoLoaded(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Kimono);