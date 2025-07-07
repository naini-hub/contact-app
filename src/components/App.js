import React , {useState ,useEffect} from 'react';
import './App.css';
import Header from './header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const LOCAL_STORAGE_KEY= "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log("adding contact:",contact);
    setContacts([...contacts, contact]);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts);
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts]);

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
      
    </div>
  );
}

export default App;
