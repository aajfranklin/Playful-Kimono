import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Design from './Design/Canvas';
import Gallery from './Gallery/Gallery';
import Home from './Home/Home';
import News from './News/News';
import Privacy from './Privacy/Privacy';
import SiteMap from './SiteMap/SiteMap';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/design" component={Design}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/news" component={News}/>
        <Route path="/privacy" component={Privacy}/>
        <Route path="/site-map" component={SiteMap}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
