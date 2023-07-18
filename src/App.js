import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from '';
import Portfolio from '';
import Contact from '';
import Resume from '';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/Navigation" component={Navigation} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
