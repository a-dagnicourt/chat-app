import React from 'react';
import Contact from './Contact';

const users = [
    {
      name: 'Colonel Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwellwellwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true
    },
    {
      name: 'Vernon Freemason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunterixhunter',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false
    },
    {
      name: 'Juanita Electrolux',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
    }
  ];

  const ContactList = () => (
      <div>
          {users.map(user => (
          <Contact name={user.name} avatar={user.avatar} online={user.online} key={user.name}/>
          ))}
      </div>
  )

  export default ContactList;