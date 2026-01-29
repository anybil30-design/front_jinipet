import React from 'react';

const Main = () => {
  return (
    <div className='main'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/main1.jpg`} alt='메인1' />
      </div>

      <div>
        <img src={`${process.env.PUBLIC_URL}/images/shop.jpg`} alt='메인1' />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/story.jpg`} alt='메인1' />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/in_star.jpg`} alt='메인1' />
      </div>
    </div>
  );
};

export default Main;