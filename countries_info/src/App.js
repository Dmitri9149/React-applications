import React,  { useState, useEffect } from 'react';
import axios from 'axios'
import Country from './components/Country'
import Filter from './components/Filter'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")
  

  useEffect(() =>  {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })

  }, [])

  return (
    <>
    </>  
  )
} 



export default App