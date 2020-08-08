import React, { useEffect } from 'react';

function Terms () {
  
  useEffect(() => {
    document.title = 'Playful Kimono - Terms and Conditions'
  }, [])
  
  return(<main><h1>Terms</h1></main>)
}

export default Terms;