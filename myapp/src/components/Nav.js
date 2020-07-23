import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  const logged_out_nav = (
    <ul>
      <li class="item" onClick={() => props.display_form('login')}>Login</li>
      <li class="item" onClick={() => props.display_form('signup')}>Signup</li>
      <li class="item" onClick={() => props.display_form('changepass')}>Change Pass</li>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li class="item" onClick={props.handle_logout}>Logout</li>
    </ul>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};