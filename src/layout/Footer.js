import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={`${process.env.PUBLIC_URL}/images/footer.jpg`} alt='푸터' />
    </div>
  );
};

export default Footer;