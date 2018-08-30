import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <Link className="col s4" to="/Legal">
                Terms of Service
              </Link>
              <Link className="col s4" to="/Legal">
                Privacy Policy
              </Link>
              <Link className="col s4" to="/Legal">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
