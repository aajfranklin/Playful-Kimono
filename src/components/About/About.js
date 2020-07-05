import React, { useEffect } from 'react';

function About () {
  
  useEffect(() => {
    document.title = 'Playful Kimono - About & Contact'
  }, [])
  
  return(
    <main id="about">
      <section>
        <img src="assets/Forest_Path.png" alt="Forest path Kimono design."/>
      </section>
      <section id="about-text">
        <section>
          <h1>ABOUT PLAYFUL KIMONO</h1>
          <p>
            Playful Kimono asks the question, what would your kimono look like?
          </p>
          <p>
            This project stems from my dissertation on Nishijn weaving and the future of Japanese textiles.
            Drawing inspiration from kimono sample books, or <i>hinagata-bon</i> from the Edo and Meiji periods,
            the aim of this project was to see how people today would understand the abstracted kimono shape.
          </p>
          <p>
            Playful kimonos have been designed by participants from the UK, Japan and as far as Colombia, and has been
            supported by the Victoria and Albert Museum as well as Lewisham Council.
          </p>
          <p>
            Concept and design by Euphemia Franklin.
          </p>
          <p>
            Web development by Alex Franklin.
          </p>
        </section>
        <section>
          <h1>CONTACT</h1>
          <p className='margin-bottom-zero'>info@playfulkimono.com</p>
          <p className='margin-top-zero'>instagram @playful_kimono</p>
        </section>
      </section>
    </main>
)
}

export default About;