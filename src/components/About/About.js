import React, { useEffect } from 'react';

function About () {
  
  useEffect(() => {
    document.title = 'Playful Kimono - About & Contact'
  }, [])
  
  return(
    <main id="about">
      <section>
        <img src="assets/About.png" alt="Forest path Kimono design."/>
      </section>
      <section id="about-text">
        <section>
          <h1>ABOUT PLAYFUL KIMONO</h1>
          <p>
            Playful Kimono asks the question, what would your kimono look like?
          </p>
          <p>
            Drawing inspiration from kimono sample books, or <i>hinagata-bon</i> from the Edo and Meiji periods, the
            project reinterprets the kimono-design process through a digital template. Using the outline of a
            flat kimono, Playful Kimono encourages anyone to place an image inside the template to see their unique
            design instantly come to life.
          </p>
          <p>
            Sample books were typically used as catalogues to showcase the latest kimono designs and the earliest known
            example, <i>Kosode On-Hinakata</i>, was published in 1667. Intricate designs were drawn and hand-printed
            by artists before being bound and distributed by a publisher.
          </p>
          <p>
            The template was created in March 2020 during the height of the lockdown period, when people around the
            world were spending increasing amounts of time in isolation. Playful Kimono aims to provide a simple and
            satisfying activity, encouraging creativity at home.
          </p>
          <p>
            This project has been promoted by the <a href="https://www.vam.ac.uk/blog/museum-life/letsmakewednesdays-kimono>">Victoria and Albert Museum</a> and is supported by the Kingston University
            Business School.
          </p>
          <p className="margin-bottom-zero">
            Concept and design by Euphemia Franklin.
          </p>
          <p className="margin-top-zero">
            Web development by <a target="_blank" rel="noopener noreferrer" href="https://github.com/aajfranklin">Alex Franklin</a>.
          </p>
        </section>
        <section>
          <h1>ABOUT EUPHEMIA FRANKLIN</h1>
          <p>
            Euphemia Franklin is a Japanese/English graphic designer and producer based in London. Her essay, <i>Hosoo,
            Nishijin and the World: Balancing Tradition and Innovation at the House of Hosoo</i> (2020) explored the future
            of Nishijin-ori, a form of Japanese silk weaving dating back over a millennium. This essay was researched
            during Euphemia’s time in Kyoto, where she gained hands-on experience of weaving and formed relationships
            with some of Japan’s oldest kimono manufacturers. Since returning to London, Euphemia has continued to
            conduct research on Japanese craftsmanship and sensibilities.
          </p>
          <p>
            To get in touch, please visit <a target="_blank" rel="noopener noreferrer" href="http://www.euphemiafranklin.com">www.euphemiafranklin.com</a>.
          </p>
        </section>
        <section>
          <h1>CONTACT</h1>
          <p className="margin-bottom-zero"><a target="_blank" rel="noopener noreferrer" href="mailto: hello@playfulkimono.com">hello@playfulkimono.com</a></p>
          <p className="margin-top-zero"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/playful_kimono/">@playful_kimono</a></p>
        </section>
      </section>
    </main>
  )
}

export default About;