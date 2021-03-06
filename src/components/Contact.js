import React from 'react';
import './Contact.css';

const Contact = (props) => {
  return (
    <div className='Contact'>
      <img src={props.avatar} alt={props.name} className='avatar'></img>
      <div>
        <h4 className='name'>{props.name}</h4>
        <div className='status'>
          <span
            className={
              props.online ? 'status-online' : 'status-offline'
            }></span>
          <p className='status-text'>{props.online ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
