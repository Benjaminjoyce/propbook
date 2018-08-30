import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addWaitList } from '../actions';

import logo from '../styles/p-icons/Propbooklogo.png';

class JoinWaitListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: '' };
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const errorAlert = `${touched && error ? 'red-text text-darken-2' : ''}`;
    return (
      <div className={field.width + ' ' + errorAlert}>
        <input
          {...field.input}
          className="validate"
          placeholder={field.placeholder}
          type="text"
        />
        <div className="text-help"> {touched ? error : ' '} </div>{' '}
      </div>
    );
  }
  onSubmit(values) {
    this.props.addWaitList(values);
    this.props.clickToggleWaitList();
  }

  handleClick = e => {
    this.props.clickToggleWaitList();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div
        className={
          this.props.toggleWaitList
            ? 'container scale-transition scale-out'
            : 'container scale-transition'
        }
        id="p-wlbg"
      >
        <div className="row center-align">
          <div className="container" id="p-wlsu">
            <form
              onSubmit={handleSubmit(this.onSubmit.bind(this))}
              className="col s12"
              id="p-wlFm"
            >
              <a onClick={this.handleClick} id="p-wlXb">
                x
              </a>
              <div className="row center-align">
                <img src={logo} alt="" />
              </div>
              <div id="p-wlFt" className="row center-align p-h5">
                We're working hard to get to everyone. Add yourself to our
                waitlist and we will be in contact as soon as we can(this doesnt
                take long).
              </div>
              <div className="row">
                <Field
                  className="input-field col s12"
                  placeholder="First Name"
                  name="name"
                  component={this.renderField}
                />
              </div>
              <div className="row">
                <Field
                  className="input-field col s12"
                  placeholder="Email"
                  name="email"
                  component={this.renderField}
                />{' '}
              </div>{' '}
              <button
                id="p-wlAc"
                className="p-btn waves-effect waves-light btn"
                type="submit"
                name="action"
              >
                Join!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = 'Please Enter your first name or intial';
  }
  //   if (!values.lastName) {
  //     errors.lastName = 'Please Enter your last name or intial';
  //   }
  if (!values.email) {
    errors.email = "To get in touch we'll need your email";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(
    null,
    {
      addWaitList
    }
  )(JoinWaitListForm)
);
