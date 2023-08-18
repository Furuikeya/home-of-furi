import React from 'react';
import './welcome.styles.scss';
import namaste from './namaste.jpg';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <img src={namaste} alt='namaste' />
      <h4>
        Welcome to Ivan "furuikeya" Shirokov's homepage! I am thrilled to have
        you here! With a passion for crafting exceptional websites, I am
        dedicated to bringing your digital visions to life. As a web developer
        with over then 5 years of experience, I specialize in creating
        responsive and user-friendly designs that not only captivate but also
        deliver optimal functionality. Whether you need a striking portfolio
        website, a robust e-commerce platform, or a dynamic web application, I
        am committed to providing you with tailor-made solutions that exceed
        your expectations. By leveraging the latest technologies and industry
        best practices, I ensure that your online presence stands out in the
        competitive digital landscape. Let's collaborate and transform your
        ideas into a stunning reality. Together, we can elevate your online
        presence and help your business thrive. Thank you for visiting, and I
        look forward to working with you!
      </h4>
    </div>
  );
};

export default Welcome;
