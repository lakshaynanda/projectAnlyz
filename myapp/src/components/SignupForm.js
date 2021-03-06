import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
    <div class="mainForm">
        <form onSubmit={e => this.props.handle_signup(e, this.state)}>
            <h4 class="heading">Sign Up</h4>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handle_change}
            />
            <label htmlFor="password">Password</label>
            <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handle_change}
            />
            <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};