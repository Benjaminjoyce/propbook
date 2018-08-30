import React, { Component } from 'react';
import { Field } from 'redux-form';

import Header from './Header';
import Footer from './footer';
export default class Survey extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row center-align">
          <div className="container">this is the survey page</div>
        </div>
        <Footer />
      </div>
    );
  }
}
