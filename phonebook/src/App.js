import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(()=> {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])

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

      <Filter value = {newFilter} onChange = {handleFilterChange}/>

      <h3>Add a new</h3>

      <PersonForm onSubmit = {addName} newName = {newName}
      newNumber = {newNumber} onChangeName = {handleNameChange} 
      onChangeNumber = {handleNumberChange} /> 

      <h3>Numbers</h3>

      <Persons toShow ={personsToShow} />
    </div>
  )
}

export default App