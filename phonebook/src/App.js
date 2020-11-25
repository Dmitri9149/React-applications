import React, { useState } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id: 'Arto Hellas', number:'123-234-345' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName
    }
    if (!existingItem(personObject)) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('') 
    } else {
      window.alert(`${personObject.name} is already added to the book!`)
      setNewName('')
      setNewNumber('')
    }

  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const existingItem = (item) => persons.find(person => person.id === item.id)

  const personsToShow = (newFilter === '')
  ? persons
  : persons.filter(person => person.name.toLowerCase() === newFilter)



  return (
    <div>
      <h2>Phoneebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          number: <input value = {newNumber} onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Filter value = {newFilter} onChange = {handleFilterChange}/>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
          <li key ={person.id}> 
          {person.name} {'  '} {person.number}
          </li>)}
      </ul>
      ...
    </div>
  )
}

export default App