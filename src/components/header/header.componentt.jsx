import React from 'react';
import Menu from '../menu/menu.componentt';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='title'>
      Furuikeya__
      <div className='subtext'>Boost your webapp..</div>
      <Menu />
    </div>
  </div>
);

export default Header;
