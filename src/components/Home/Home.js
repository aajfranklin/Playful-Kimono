import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home () {
  
  useEffect(() => {
    document.title = 'Playful Kimono'
  }, [])
  
  return(
    <main>
      <section>
        <div className="fadein">
          <img id="f1" src="assets/fade1.png" alt="Mountain kimono design"/>
          <img id="f2" src="assets/fade2.png" alt="Desert cactus kimono design"/>
          <img id="f3" src="assets/fade3.png" alt="Space shuttle kimono design"/>
          <img id="f4" src="assets/fade4.png" alt="Torii gate kimono design"/>
          <Link to="/design" id="attract-link">
            <span>CLICK HERE TO START</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home;