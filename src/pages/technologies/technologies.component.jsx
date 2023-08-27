import React from 'react';
import { techPics } from '../../assets/pics/picsForTechs/techs';

import LogoContainer from '../../components/logoContainer/logoContainer.component';

import './technologies.styles.scss';

const Technologies = () => {
  return (
    <div>
      <h1>Technologies</h1>
      <div className='logos'>
        {techPics.map((pic) => (
          <LogoContainer name={pic.name} imageUrl={pic.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
