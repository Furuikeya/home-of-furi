import React from 'react';

import './logoContainer.styles.scss';

const LogoContainer = (props) => {
  return (
    <div className='logo-container'>
      <img src={props.imageUrl} alt={props.name} />
    </div>
  );
};

export default LogoContainer;
