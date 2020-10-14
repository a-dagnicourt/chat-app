import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online,
    };
  }

  render() {
    return (
      <div className='Contact'>
        <img
          src={this.props.avatar}
          alt={this.props.name}
          className='avatar'></img>
        <div>
          <h4 className='name'>{this.props.name}</h4>
          <div
            className='status'
            onClick={(e) => {
              const newStatus = !this.state.online;
              this.setState({
                online: newStatus,
              });
            }}>
            <span
              className={
                this.state.online ? 'status-online' : 'status-offline'
              }></span>
            <p className='status-text'>
              {this.state.online ? 'online' : 'offline'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
