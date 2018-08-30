import React, { Component } from 'react';
import sw from '../styles/p-icons/sw81012.png';
import se from '../styles/p-icons/se81012.png';
import sp from '../styles/p-icons/sp81012.png';

class Services extends Component {
  render() {
    return (
      <div id="sp-header">
        <div className="row">
          <div className="col s12">
            <h3 className="center-align">
              Upcoming maintenance and history stored in your head?
            </h3>
            <h6 className="center-align">
              Propook enables you to track home maintenance and warranties.
            </h6>
          </div>
        </div>
        <div className="row" id="ps">
          <div className="col l4 12 center-align">
            <img src={sw} alt="" className="circle responsive-img" />
            <div>
              <h4>Suggest</h4>
              <p>
                Suggests and reminds you of all upcoming maintenance tasks that
                may need to be performed.
              </p>
            </div>
          </div>
          <div className="col l4 m12 center-align">
            <img src={se} alt="" className="circle responsive-img" />
            <div>
              <h4>Master</h4>
              <p>
                Guides on how to perform each maintenance task, or how to source
                the right tradesperson.
              </p>
            </div>
          </div>
          <div className="col l4 m12  center-align">
            <img src={sp} alt="" className="circle responsive-img" />
            <div>
              <h4>Record</h4>
              <p>
                Store history of maintenance and warranties. Use this data for
                insurance claims or when selling your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
