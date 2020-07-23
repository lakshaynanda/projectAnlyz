import React from 'react';
import PropTypes from 'prop-types';

class ChangePass extends React.Component {
  state = {
    username: '',
    old_password: '',
    new_password1:'',
    new_password2:''
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
        <form onSubmit={e => this.props.handle_changepass(e, this.state)}>
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
            name="old_password"
            placeholder="Old Password"
            value={this.state.old_password}
            onChange={this.handle_change}
            />
            <label htmlFor="password">New Password</label>
            <input
            type="password"
            name="new_password1"
            placeholder="New Password"
            value={this.state.new_password}
            onChange={this.handle_change}
            />
            <label htmlFor="password">Confirm New Password</label>
            <input
            type="password"
            name="new_password2"
            placeholder="Confirm New Password"
            value={this.state.new_password}
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
  handle_changepass: PropTypes.func
};