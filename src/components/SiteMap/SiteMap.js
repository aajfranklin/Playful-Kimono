import React, { useEffect } from 'react';

function SiteMap () {
  
  useEffect(() => {
    document.title = 'Playful Kimono - Site Map'
  }, [])
  
  return(<main><h1>SiteMap</h1></main>)
}

export default SiteMap;