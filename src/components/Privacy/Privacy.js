import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Privacy () {
  
  useEffect(() => {
    document.title = 'Playful Kimono - Privacy Policy'
  }, [])
  
  return(
    <main>
      <section id="privacy">
        <h1>PRIVACY POLICY</h1>
        <h2>Our contact details</h2>
        <p className="margin-bottom-zero">Name: Euphemia Franklin</p>
        <p className="margin-top-zero">Email: <a target="_blank" rel="noopener noreferrer" href="mailto:hello@playfulkimono.com">hello@playfulkimono.com</a></p>
        <h2>The type of personal information we collect</h2>
        <p>We currently collect and process the following information:</p>
        <ul>
          <li>Personal identifiers, contacts and characteristics</li>
        </ul>
        <h2>How we get the personal information and why we have it</h2>
        <p>Most of the personal information we process is provided to us directly by you for one of the following reasons:</p>
        <ul>
          <li>To upload a design and credit the contribution.</li>
        </ul>
        <p>We use the information that you have given us in order to credit users and identify their contribution.</p>
        <p>We may share this information with certain organisations or individuals who have an expressed or reasonable interest in the given design and/or contribution.</p>
        <p>Under the General Data Protection Regulation (GDPR), the lawful bases we rely on for processing this information are:</p>
        <ol type="a">
          <li>Your consent. You are able to remove your consent at any time. You can do this by contacting Euphemia Franklin at <a target="_blank" rel="noopener noreferrer" href="mailto:hello@playfulkimono.com">hello@playfulkimono.com</a></li>
          <li>We have a contractual obligation.</li>
          <li>We have a legal obligation.</li>
          <li>We have a vital interest.</li>
          <li>We need it to perform a public task.</li>
          <li>We have a legitimate interest.</li>
        </ol>
        <h2>How we store your personal information</h2>
        <p>Your information is securely stored on a remote database server and periodically backed up to a physical hard drive.</p>
        <p>We keep your name and social media identifier until your consent is withdrawn or until your design and/or contribution is removed from the site. We will then dispose your information by deleting it from both the server and the physical backup. This will also remove any reference to this information on <Link to={'/'}>www.playfulkimono.com</Link>.</p>
        <h2>Your data protection rights</h2>
        <p>Under data protection law, you have rights including:</p>
        <ul>
          <li>Your right of access - You have the right to ask us for copies of your personal information.</li>
          <li>Your right to rectification - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li>
          <li>Your right to erasure - You have the right to ask us to erase your personal information in certain circumstances.</li>
          <li>Your right to restriction of processing - You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li>
          <li>Your right to object to processing - You have the the right to object to the processing of your personal information in certain circumstances.</li>
          <li>Your right to data portability - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</li>
        </ul>
        <p>You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.</p>
        <p>Please contact us at <a target="_blank" rel="noopener noreferrer" href="mailto:hello@playfulkimono.com">hello@playfulkimono.com</a> if you wish to make a request.</p>
        <h2 id="cookies">Cookies</h2>
        <p>
          We use Google Analytics to analyse the use of our website and create reports about such
          usage. Google Analytics gathers information about website use by means of cookies. Such
          usage data may include your IP address, geographical location, browser type and version,
          operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use.
        </p>
        <p>A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.</p>
        <p>Further information on the cookies and how they work can be found here:</p>
        <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</a>
        <p>You can prevent these cookies by installing the Google Analytics opt-out browser extension here:</p>
        <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh?hl=en">https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh?hl=en</a>
        <h2>How to complain</h2>
        <p>If you have any concerns about our use of your personal information, you can make a complaint to us at <a target="_blank" rel="noopener noreferrer" href="mailto:hello@playfulkimono.com">hello@playfulkimono.com</a>.</p>
        <p>You can also complain to the ICO if you are unhappy with how we have used your data.</p>
        <p>The ICO’s address:</p>
        <p className="margin-bottom-zero">Information Commissioner’s Office</p>
        <p className="margin-top-zero margin-bottom-zero">Wycliffe House</p>
        <p className="margin-top-zero margin-bottom-zero">Water Lane</p>
        <p className="margin-top-zero margin-bottom-zero">Wilmslow</p>
        <p className="margin-top-zero margin-bottom-zero">Cheshire</p>
        <p className="margin-top-zero">SK9 5AF</p>
        <p>Helpline number: 0303 123 1113</p>
        <p>ICO website: <a target="_blank" rel="noopener noreferrer" href="https://www.ico.org.uk">https://www.ico.org.uk</a></p>
      </section>
    </main>
  )
}

export default Privacy;