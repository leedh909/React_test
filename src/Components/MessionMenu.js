import React from 'react';
import { NavLink } from 'react-router-dom';

const MessionMenu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem',
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Test_Layout" activeStyle={activeStyle}>
            1.Test_Layout
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Test_Input" activeStyle={activeStyle}>
            2.Test_Input
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Test_Select" activeStyle={activeStyle}>
            3.Test_Select
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Test_Api" activeStyle={activeStyle}>
            4.Test_Api
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default MessionMenu;
