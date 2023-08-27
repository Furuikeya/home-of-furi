import React from 'react';

import MyPic from '../../assets/pics/myphoto2_small.jpg';
// import WhatsApp from '../../assets/pics/social/whatsapp.png';
// import Telegram from '../../assets/pics/social/telegram.png';
// import Github from '../../assets/pics/social/github.png';

import './about.styles.scss';

const About = () => {
  return (
    <div className='about'>
      <h1>Contacts</h1>
      <h4 className='dimmed'>Just contact me any way you like!</h4>
      <div className='mini-display'>
        <img src={MyPic} alt='furuikeya' />
        <div className='contacts'>
          <h4>GitHub: </h4>
          <h4>furuikeya.github.io/home-of-furi/</h4>

          <h4>Telegram: </h4>
          <h4>@buriburifuri</h4>

          <h4>WhatsApp: </h4>
          <h4>+79263616684</h4>

          <div>
            <h4 className='social right'>Email:</h4>
          </div>
          <h4>furuikeya@gmail.com</h4>

          <h4>Instagram: </h4>
          <h4>@obmorog</h4>

          <h4>Facebook: </h4>
          <h4>facebook.com/ivan.shirokov</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
