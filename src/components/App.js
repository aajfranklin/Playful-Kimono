import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import ReactGA from 'react-ga';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import About from './About/About';
import Design from './Design/Design';
import Gallery from './Gallery/Gallery';
import Home from './Home/Home';
import Privacy from './Privacy/Privacy';
import Terms from './Terms/Terms';
import '../styles/App.css'
import config from '../config';
import { initialisedGoogleAnalytics } from '../actions/actionCreators';

function App({ isGoogleAnalyticsInitialised, initialisedGoogleAnalytics }) {
  const handleAcceptCookies = () => {
    initialiseAnalytics();
  };
  
  const initialiseAnalytics = useCallback(() => {
    ReactGA.initialize(config.gaKey);
    initialisedGoogleAnalytics();
    ReactGA.pageview(window.location.pathname)
  }, [initialisedGoogleAnalytics]);
  
  let history = useHistory();
  
  useEffect(() => {
    if (Cookies.get('KimonoCookieConsent') === 'true') initialiseAnalytics();
  }, [initialiseAnalytics]);
  
  useEffect(() => {
    return history.listen((location) => {
      if (isGoogleAnalyticsInitialised) ReactGA.pageview(location.pathname)
    })
  },[history, isGoogleAnalyticsInitialised])
  
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/design" component={Design}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/privacy-policy" component={Privacy}/>
        <Route path="/terms" component={Terms}/>
        <Route path="" component={Home}/>
      </Switch>
      <Footer/>
      { Cookies.get('KimonoCookieConsent')
          ? null
          : <CookieConsent location={'bottom'}
                           buttonText={'Accept'}
                           enableDeclineButton={true}
                           declineButtonText={'Decline'}
                           flipButtons={true}
                           cookieName={'KimonoCookieConsent'}
                           expires={30}
                           sameSite={'lax'}
                           onAccept={handleAcceptCookies}>
              We use cookies to measure site readership. Read our <Link to={"/privacy-policy"}>privacy policy</Link> for more details.
            </CookieConsent>
      }
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isGoogleAnalyticsInitialised: state.isGoogleAnalyticsInitialised
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialisedGoogleAnalytics: () => dispatch(initialisedGoogleAnalytics())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
