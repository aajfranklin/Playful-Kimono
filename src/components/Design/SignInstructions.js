import React from 'react';

function SignInstructions() {
  return(
    <section id="instructions">
      <h1>TO UPLOAD TO GALLERY, PLEASE PROVIDE THE FOLLOWING AND CLICK UPLOAD:</h1>
      <ul>
        <li>Title of design</li>
        <li>Your name</li>
        <li>Instagram <br/>(optional)</li>
      </ul>
      <button type="button" className="action-button">
        UPLOAD
      </button>
    </section>
  )
}

export default SignInstructions;