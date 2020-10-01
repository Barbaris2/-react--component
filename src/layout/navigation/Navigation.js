import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='logoWrapper'>
        <img
          src='https://www.vectorlogo.zone/logos/reactjs/reactjs-card.png'
          height='60'
          alt='logo'
        />
      </div>
      <nav>
        <ul className='nav'>
          <li>
            <NavLink to='/' exact>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
