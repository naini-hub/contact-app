import React , {useState} from 'react';
import './App.css';
import Header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <div className='ui contain'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
      
    </div>
  );
}

export default App;
