import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingB extends Component {
  render() {
    return (
      <div id="sp-footer">
        <div className="row">
          <div className="col m6 s12">
            <h2 className="p-h3">Not ready to signup?</h2>
            <h2 className="p-h3">
              Fill out a quick survey to let us know why.
            </h2>
          </div>
          <div className="col m6 s12">
            <div className="">
              <Link
                id="sp-footer-b"
                to="/survey"
                className="p-btn waves-effect waves-light white btn p-long"
              >
                Start Survey
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingB;
