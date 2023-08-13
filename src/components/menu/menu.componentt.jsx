import React, { useContext } from 'react';
import { PageContext } from '../../contexts/page.context';

import './menu.styles.scss';

const Menu = () => {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  return (
    <ul className='menu'>
      <li
        className={`menu-item ${
          currentPage === 'services' ? 'active-link' : ''
        }`}
        onClick={() => setCurrentPage('services')}
      >
        Services
      </li>
      <li
        className={`menu-item ${
          currentPage === 'technologies' ? 'active-link' : ''
        }`}
        onClick={() => setCurrentPage('technologies')}
      >
        Technologies
      </li>
      <li
        className={`menu-item ${currentPage === 'about' ? 'active-link' : ''}`}
        onClick={() => setCurrentPage('about')}
      >
        About
      </li>
    </ul>
  );
};
export default Menu;
