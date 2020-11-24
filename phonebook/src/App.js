import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: newName
    }
    if (!existingItem(personObject)) {
      setPersons(persons.concat(personObject))
      setNewName('') 
    } else {
      window.alert(`${personObject.name} is already added to the book!`)
      setNewName('')
    }

  }

  const existingItem = (item) => persons.find(person => person.id === item.id)



  return (
    <div>
      <h2>Phoneebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange= {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key ={person.id}> 
          {person.name}
          </li>)}
      </ul>
      ...
    </div>
  )
}

export default App