import './App.css';
import React, {useState} from 'react';
import contactArr from './contacts.json'
function App() {
  const firstFiveContactsArr = contactArr.slice(0,5);
  const remainingContacts = contactArr.slice(5);
  const randomContactObj = remainingContacts[Math.floor(Math.random()* contactArr.length)]
  const [contacts, setContacts] = useState(firstFiveContactsArr);
  const [randomContact, setRandomContact] = useState(randomContactObj);
  const [sortPopularity, setSortPopularity] = useState(firstFiveContactsArr);

  
  
  const handleRandomContact = () =>{
   
    const randomContactIs = showContacts.push(<tr>
    <td><img src={randomContact.pictureUrl} alt={randomContact.name} width="50px"/></td>
    <td>{randomContact.name}</td>
    <td>{randomContact.popularity}</td>
    <td>{randomContact.wonOscar}</td>
    <td>{randomContact.wonEmmy}</td>
    {randomContact.wonOscar && <th>🏆</th>}
    {randomContact.wonEmmy && <th>🏆</th>}
  </tr>)
    //console.log(randomContactIs)
    setRandomContact(randomContactIs)
  }


  const handleSortByName = () => {
    const sorted = contacts.sort(function(a, b) {
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
    const sorted = sortPopularity.sort((a,b) => {
      let popularity =  b.popularity - a.popularity
      return popularity.toFixed(2)
    })

    setSortPopularity(sorted)
  }

  const showContacts = contacts.map(contact => {
    return (
      <tr key = {contact.name}>
          <td><img src={contact.pictureUrl} alt={contact.name} width="50px"/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar}</td>
          <td>{contact.wonEmmy}</td>
          {contact.wonOscar && <th>🏆</th>}
          {contact.wonEmmy && <th>🏆</th>}
        </tr>
    )
  })

  return (
    <div className="App">
       <h1>IronContacts</h1>
        <button onClick={handleRandomContact}>Random Contact</button>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByPopularity}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {showContacts}
        {}
        </table>
        
    </div>
  );
}

export default App;
