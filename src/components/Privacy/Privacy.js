import React, { useEffect } from 'react';

function Privacy () {
  
  useEffect(() => {
    document.title = 'Playful Kimono - Privacy Policy'
  }, [])
  
  return(<main><h1>Privacy</h1></main>)
}

export default Privacy;