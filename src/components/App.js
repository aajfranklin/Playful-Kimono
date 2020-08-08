import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CookieConsent, { Cookies }  from 'react-cookie-consent';
import ReactGA from 'react-ga';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import About from './About/About';
import Design from './Design/Design';
import Gallery from './Gallery/Gallery';
import Home from './Home/Home';
import Privacy from './Privacy/Privacy';
import '../styles/App.css'
import { initialisedGoogleAnalytics } from '../actions/actionCreators';

function App({ isGoogleAnalyticsInitialised, initialisedGoogleAnalytics }) {
  const handleAcceptCookies = () => {
    Cookies.set('kimono-cookie-permission', 'true', { expires: 30, SameSite: 'lax' });
    initialiseAnalytics();
  };
  
  const handleDeclineCookies = () => {
    Cookies.set('kimono-cookie-permission', 'false', { expires: 30, SameSite: 'lax' });
  }
  
  const initialiseAnalytics = useCallback(() => {
    ReactGA.initialize('UA-174959968-1');
    initialisedGoogleAnalytics();
    ReactGA.pageview(window.location.pathname)
  }, [initialisedGoogleAnalytics]);
  
  let history = useHistory();
  
  useEffect(() => {
    if (Cookies.get('kimono-cookie-permission') === 'true') initialiseAnalytics();
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
        <Route path="" component={Home}/>
      </Switch>
      <Footer/>
      { Cookies.get('kimono-cookie-permission')
          ? null
          : <CookieConsent location={'bottom'}
                           buttonText={'Accept'}
                           enableDeclineButton={true}
                           declineButtonText={'Decline'}
                           flipButtons={true}
                           onAccept={handleAcceptCookies}
                           onDecline={handleDeclineCookies}>
              We use cookies to measure site readership. View the <Link to={"/privacy-policy"}>privacy policy</Link> to read more.
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
