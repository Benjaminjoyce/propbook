import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Survey from './Survey';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/survey" component={Survey} />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
