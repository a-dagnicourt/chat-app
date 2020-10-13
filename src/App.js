import React from 'react';
import PropTypes from 'prop-types';

import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Contact
        name='Elaine Douglas'
        avatar='https://randomuser.me/api/portraits/women/66.jpg'
        online
      />
      <Contact
        name='Jane Fisher'
        avatar='https://randomuser.me/api/portraits/women/8.jpg'
      />
      <Contact
        name='Esther Russell'
        avatar='https://randomuser.me/api/portraits/women/40.jpg'
        online
      />
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default App;
