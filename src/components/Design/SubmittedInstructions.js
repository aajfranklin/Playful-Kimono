import React from 'react';
import { Link } from 'react-router-dom';

function SubmittedInstructions() {
  return(
    <section id="instructions">
      <p>Thank you for submitting your playful kimono!</p>
      <p>Your design is currently being processed and may take a while before it appears on the gallery.</p>
      <p>Thank you for your patience :)</p>
        <Link to="/gallery">
          <button type="button" id="go-to-gallery" className="action-button available">
            GO TO GALLERY<br/>🡒
          </button>
        </Link>
    </section>
  )
}

export default SubmittedInstructions;