import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import arrowRight from '@iconify/icons-bi/arrow-right';

function SubmittedInstructions() {
  return(
    <section id="instructions">
      <p>Thank you for submitting your playful kimono!</p>
      <p>Your design is currently being processed and may take a while before it appears on the gallery, subject to approval.</p>
      <p>Thank you for your patience :)</p>
      <div className="button-group">
        <a href="/design">
          <button type="button" tabIndex={-1} className="action-button available">DESIGN ANOTHER KIMONO</button>
        </a>
        <Link to="/gallery">
          <button type="button" id="go-to-gallery" tabIndex={-1} className="action-button available">
            GO TO GALLERY<br/><Icon icon={arrowRight}/>
          </button>
        </Link>
      </div>
    </section>
  )
}

export default SubmittedInstructions;