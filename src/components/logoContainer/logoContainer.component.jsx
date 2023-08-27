import React from 'react';

import './logoContainer.styles.scss';

const LogoContainer = ({ name, imageUrl }) => {
  return (
    <div className='logo-container'>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default LogoContainer;
