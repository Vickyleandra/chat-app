import React from 'react';
import './Contact.css';

function Contact(props) {
    return  (
    <div className="Contact">
          <img src={props.avatar} className="avatar"/>
          <div>
            <h4 className="name">{props.name}</h4>
            <div className="status">
                <div className={props.online ? "status-online" : "status-offline"} />
                <span className="status-text">
                    {props.online ? 'Online' : 'Offline'}
                </span>
            </div>
          </div>
      </div>
      );      
}

export default Contact;