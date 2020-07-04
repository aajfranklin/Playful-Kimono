import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import About from './About/About';
import Design from './Design/Canvas';
import Gallery from './Gallery/Gallery';
import Home from './Home/Home';
import Privacy from './Privacy/Privacy';
import SiteMap from './SiteMap/SiteMap';
import '../styles/App.css'

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/design" component={Design}/>
          <Route path="/home" component={Home}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/privacy-policy" component={Privacy}/>
          <Route path="/site-map" component={SiteMap}/>
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
