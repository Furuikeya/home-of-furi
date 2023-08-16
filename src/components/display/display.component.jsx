import React, { useContext } from 'react';

import Services from '../../pages/services/services.component';
import Technologies from '../../pages/technologies/technologies.component';
import About from '../../pages/about/about.component';

import { PageContext } from '../../contexts/page.context';

import './display.styles.scss';
import Welcome from '../../pages/welcome/welcome.component';

const Display = () => {
  const { currentPage } = useContext(PageContext);
  console.log(currentPage);

  if (currentPage === 'services') {
    return (
      <div className='active-page'>
        <Services />
      </div>
    );
  }

  if (currentPage === 'technologies') {
    return (
      <div className='active-page '>
        <Technologies />
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className='active-page'>
        <About />
      </div>
    );
  }

  if (currentPage === '') {
    return <Welcome />;
  }
};

export default Display;
