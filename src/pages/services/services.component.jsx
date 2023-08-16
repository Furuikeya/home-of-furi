import React from 'react';
import { services } from '../../assets/services.list';

import './services.styles.scss';

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      {services.map((service, i) => (
        <li>
          <div className='list-in-display'>
            <h2>{i + 1 + '. ' + service.name}</h2>
            <h4>{service.description}</h4>
            <hr />
          </div>
        </li>
      ))}
      ;
    </div>
  );
};

export default Services;
