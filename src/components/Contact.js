import React from 'react';
import './Contact.css';

const avatar =
  'https://img.buzzfeed.com/buzzfeed-static/static/2015-01/28/15/campaign_images/webdr11/if-silent-bob-quotes-were-motivational-posters-2-7063-1422478686-11_big.jpg';
const name = 'Silent Bob';
const online = true;

const Contact = () => {
  return (
    <div className='Contact'>
      <img src={avatar} className='avatar'></img>
      <div>
        <h4 className='name'>{name}</h4>
        <div className='status'>
          <span className={online ? 'status-online' : 'status-offline'}></span>
          <p className='status-text'>{online ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
