import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact 
      avatar= "http://www.garygreen.co.za/img/team/isabel_ungerer.jpg"
      name="Isabel" 
      online= {true}
      />

      <Contact 
      avatar= "https://randomuser.me/api/portraits/women/75.jpg"
      name="Shane" 
      online= {false}
      />

      <Contact 
      avatar= "https://i.pinimg.com/280x280_RS/73/5a/8d/735a8d02b1d1151385a7de051d3d7e4a.jpg"
      name="Mariska" 
      online= {true}
      />
      <ContactList/>
    </div>
  );
}

export default App;


