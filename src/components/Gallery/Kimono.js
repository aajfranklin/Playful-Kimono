import React from 'react';

function Kimono({ kimono }) {
  return(
    <div className="kimono">
      <img alt={kimono.title} src={kimono.url}/>
      <p>{kimono.title}</p>
      <p>by {kimono.name}</p>
      <p>{kimono.handle !== '-' ? '@' : ''}{kimono.handle}</p>
    </div>
  );
}

export default Kimono;