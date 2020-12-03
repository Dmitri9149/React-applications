import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const Notification = ({message, messageClass}) => {
  if (message === '') {
    return null
  }
  return (
    <div className = {messageClass}>
      {message}
    </div>
  )


}

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [notify, setNotify]= useState({message:'', messageClass:'nothing'})

  useEffect(()=> {
    personService
      .getAll()
        .then(persons => setPersons(persons))
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
      number: newNumber
    }
    const existingPerson = existingItem(personObject)
    if (!existingPerson) {
      personService 
        .create(personObject)
          .then(returnedPerson => 
            setPersons(persons.concat(returnedPerson)))
            setNotify(
              {message:`Added ${personObject.name}`, messageClass:'personAdd'}
            )
            setTimeout(() => setNotify({message:'', messageClass:'nothing'}), 4000)
      setNewName('')
      setNewNumber('') 
    } else {
        const name = personObject.name
        const warning = `${name} is already added to the book! Replace the old 
          number with the new one?`
        if (window.confirm(warning)) {
            
          const changedPerson = { ...existingPerson, number:personObject.number }
          const id = changedPerson.id
          personService
            .update(id, changedPerson)
            .then(response => 
              setPersons(persons.map(person => 
                person.id !== id ? person : response)))
              setNotify(
                {message:`${changedPerson.name} data are updated`, messageClass:'personUpdate'}
              )
              setTimeout(() => setNotify({message:'', messageClass:'nothing'}), 4000)                
            .catch(error => {
              const restorePersons = persons.filter(person => person.id !== id)
              setPersons(restorePersons)
              setNotify(
                {message:`Person ${changedPerson} was already deleted!`, messageClass:"errorDeleted"
              })
              setTimeout(() => {
                setNotify({message:"", messageClass:"nothing"})
              }, 1000)
            })
          setNewName('')
          setNewNumber('')
      } else {
          setNewName('')
          setNewNumber('')

      }
    }

  }

  const deletePerson = (id) => {
    return () => {
      const person = persons.find(person => person.id === id)
      if (window.confirm(`Delete  "${person.name}" ?`)) {
        personService
          .del(id)
            .then(data => {
              const newPersons = persons.filter(person => person.id!==id )
              setPersons(newPersons)
            })
      }
    }
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const existingItem = (item) => persons.find(person => person.name === item.name)


const personsToShow =  newFilter === ""
? persons
: persons.filter(person => person.name.toLowerCase().startsWith(newFilter.toLowerCase()));



  return (
    <div>
      <h2>Phoneebook</h2>
      <Notification 
        message = {notify.message}
        messageClass = {notify.messageClass}
      />

      <Filter value = {newFilter} onChange = {handleFilterChange}/>

      <h3>Add a new</h3>

      <PersonForm onSubmit = {addName} newName = {newName}
      newNumber = {newNumber} onChangeName = {handleNameChange} 
      onChangeNumber = {handleNumberChange} /> 

      <h3>Numbers</h3>

      <Persons toShow ={personsToShow}
               onClick= {deletePerson} 
       />
    </div>
  )
}

export default App