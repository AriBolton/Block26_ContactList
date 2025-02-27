import { useState } from 'react'
import ContactList from './Components/ContactList';
import SelectedContact from "./Components/SelectedContact";
import './App.css';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <div>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  )
}

export default App

