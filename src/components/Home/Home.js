import React, { useEffect } from 'react';

function Home () {
  
  useEffect(() => {
    document.title = 'Playful Kimono'
  }, [])
  
  return(<main><h1>Home</h1></main>)
}

export default Home;