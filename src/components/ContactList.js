// src/components/ContactList.js
import React from "react";
import Contact from './Contact'

/// An array of objects
const contacts = [
  {
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Perry Garrett",
    online: true
      
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Margie Steward",
    online: false
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Sara Bailey",
    online: true
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "Vivan Wagner",
    online: true
  }
];

const ContactList = () => (
  <div>
    {contacts.map(item => (
    <Contact key={item.name} avatar={item.avatar} name={item.name} online={item.online}/>
    ))}
  </div>
);

export default ContactList;