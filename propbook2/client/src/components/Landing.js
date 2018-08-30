import React, { Component } from 'react';
import propMock from '../styles/propbookmockup.png';
import lgBg from '../styles/probookbackgroundl.png';
import mdBg from '../styles/probookbackgroundm.png';
import smBg from '../styles/probookbackgrounds.png';
import xsBg from '../styles/probookbackgroundxs.png';
import xxBg from '../styles/probookbackgroundxx.png';

import Services from './services';
import LandingB from './LandingB';
import Footer from './footer';
import Header from './Header';
import JoinWaitList from './waitlist';
import waitlist from './waitlist';
class Landing extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { height: props.height, width: props.width };
  // }
  // componentWillMount() {
  //   console.log('WINDOW : ', window);
  //   this.setState({
  //     height: window.innerHeight,
  //     width: window.innerWidth
  //   });
  // }
  // renderBackground() {
  //   return lgBg;
  // }
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: 'container scale-transition scale-out',
      scrolled: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    console.log(this.state);
  }

  handleScroll() {
    let pos1 = 0;
    if (!this.state.scrolled) {
      console.log(this.state.scrolled, window.scrollY);
      pos1 = window.scrollY;
      return this.setState({ scrolled: true });
    }
    if (window.scrollY === pos1) {
      return this.setState({ scrolled: false });
    }
    console.log(this.state.scrolled, window.scrollY);
  }

  render() {
    return (
      <div>
        <div id="p-background">
          <JoinWaitList
            toggleWaitList={this.state.isToggleOn}
            clickToggleWaitList={this.handleClick}
          />
          <Header
            onClick={this.handleClick}
            hasScrolled={this.state.scrolled}
          />
          {/* <img src={this.renderBackground()} id="p-background" /> */}
          <div className="container">
            <div className="row center-align valign-wrapper" id="p-land-1">
              <div className="col l6 m12">
                <span className="p-h2">Make</span>
                <span className="p-h2">homeownership</span>
                <span className="p-h2">simple.</span>
                <br />
                <span className="p-h5">
                  Australia's first digital logbook for your home. Providing a
                  secure way to track all home maintenance and warranties
                </span>
                <a
                  onClick={this.handleClick}
                  className="p-btn waves-effect waves-light white btn p-long"
                >
                  Get Started
                </a>
              </div>
              <div className="col l6 m12 hide-on-small-only">
                <img className="center-align" id="propMock" src={propMock} />
              </div>
            </div>
          </div>
        </div>
        <Services />
        <LandingB />
        <Footer />
      </div>
    );
  }
}
export default Landing;
