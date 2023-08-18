import React from 'react';
import Menu from '../menu/menu.componentt';
import Logo from '../../assets/pics/Techs/logoFuri.png';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <img className='logo' src={Logo} alt='Logo' />
    {/* <div className='title'>
      Furuikeya__
      <div className='subtext'>Boost your webapp..</div>
      
    </div> */}
    <Menu />
  </div>
);

export default Header;
