import './App.css';
import React, {useState} from 'react';
import contactArr from './contacts.json'
function App() {
  const [contacts, setContacts] = useState(contactArr.slice(0,5));
  const [remainingContacts, setRemainingContacts] = useState(contactArr.slice(5))

  console.log(remainingContacts)
  
  const handleRandomContact = () =>{
    //const randomContactObj = remainingContacts[Math.floor(Math.random()* [...contacts].length)]
    const currentContacts = [...contacts];
    const currentRemainingContacts = [...remainingContacts];

    if (currentRemainingContacts.length === 0) {
      return;
    }
    
    const randomIndex = Math.round(
      Math.random() * (remainingContacts.length - 1)
    );

      const newRandomContact = remainingContacts[randomIndex];

      currentContacts.push(newRandomContact)

      currentRemainingContacts.splice(
        currentRemainingContacts.findIndex((contact) => contact === newRandomContact),
        1
      );
      setContacts(currentContacts);
      setRemainingContacts(currentRemainingContacts);
  }


  const handleSortByName = () => {
    const sorted = [...contacts].sort(function(a, b) {
      var nameA = a.name;
      var nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1; 
      }
      return 0;
    });

    setContacts(sorted)
  }

  const handleSortByPopularity = () => {
    const sorted = [...contacts].sort((a,b) => {
      let popularity =  b.popularity - a.popularity
      return popularity.toFixed(2)
    })

    setContacts(sorted)
  }


  const handleDelete = (id) => {
    [...contacts].filter(contact => {
      return  contact.id !== id
    })
  }

  const showContacts = contacts.map(contact => {
    return (
      <>
      <tr key = {contact.name}>
          <td><img src={contact.pictureUrl} alt={contact.name} width="50px"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar}</td>
          <td>{contact.wonEmmy}</td>
          {contact.wonOscar && <th>🏆</th>}
          {contact.wonEmmy && <th>🏆</th>}
        </tr>
        <button onClick={(id) => handleDelete(contact.id)}>delete</button>
        </>
    )
  })

  return (
    <div className="App">
       <h1>IronContacts</h1>
        <button onClick={() => handleRandomContact()}>Random Contact</button>
        <button onClick={()=> handleSortByName()}>Sort by Name</button>
        <button onClick={() =>handleSortByPopularity()}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
          
        </tr>
        {showContacts}
        </table>
        
    </div>
  );
}

export default App;
