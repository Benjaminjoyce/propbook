import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../styles/p-icons/Propbooklogo.png';

class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className={this.props.hasScrolled ? 'dim' : ''}>
          <div className="nav-wrapper ">
            <a className="brand-logo left">
              <img src={logo} alt=" " />
            </a>
            <ul id="nav-mobile" className="right">
              <li>
                <a className="hide-on-med-and-down">Overview</a>
              </li>
              <li>
                <a className="hide-on-med-and-down">Contact</a>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={this.props.onClick}
                  id="p-Hb"
                  className="p-btn waves-effect waves-light btn z-depth-2"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ waitList }) {
  return { waitList };
}

export default connect(mapStateToProps)(Header);
