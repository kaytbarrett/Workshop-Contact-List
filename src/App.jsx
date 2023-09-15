import './App.css'
import React, { useState } from 'react';
import ContactList from './components/ContactList'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)


  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (<ContactList setSelectedContactId={setSelectedContactId} />)
    } 
    </>
  )
}

export default App
