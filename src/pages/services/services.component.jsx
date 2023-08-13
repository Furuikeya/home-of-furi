import React from 'react';
import { services } from '../../assets/services.list';

import './services.styles.scss';

const Services = () => {
  return (
    <div>
      {services.map((service) => (
        <li>
          <div className='list-in-display'>
            <h2>{service.name}</h2>
            <h4>{service.description}</h4>
          </div>
        </li>
      ))}
      ;
    </div>
  );
};

export default Services;
