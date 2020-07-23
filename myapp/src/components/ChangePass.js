import React from 'react';
import PropTypes from 'prop-types';

class ChangePass extends React.Component {
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
        <form onSubmit={e => this.props.handle_login(e, this.state)}>
            <h4 class="heading">Change Password</h4>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handle_change}
            />
            <label htmlFor="password">Old Password</label>
            <input
            type="password"
            name="password"
            placeholder="Old Password"
            value={this.state.password}
            onChange={this.handle_change}
            />
            <label htmlFor="password">New Password</label>
            <input
            type="password"
            name="password1"
            placeholder="New Password"
            value={this.state.password}
            onChange={this.handle_change}
            />
            <div class="wrapp">
                <input type="submit" class="but"/>
            </div>
        </form>
      </div>
    );
  }
}

export default ChangePass;

ChangePass.propTypes = {
  handle_changepass: PropTypes.func.isRequired
};