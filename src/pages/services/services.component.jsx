import React from 'react';
import { services } from '../../assets/services.list';

import './services.styles.scss';

const Services = () => {
  return (
    <div className='services'>
      <h1>Services</h1>
      <h4 className='dimmed'>Choose one or all of them!</h4>
      <div>
        {services.map((service, i) => (
          <li>
            <div className='list-in-display'>
              <h3>{i + 1 + '. ' + service.name}</h3>
              <h4>{service.description}</h4>
              <hr />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Services;
