import React from 'react';

import Menu from '../menu/menu.componentt';
import Logo from '../../assets/pics/Techs/logoFuri.png';

import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={Logo} alt='Logo' />

      <Menu />
    </div>
  );
};

export default Header;
