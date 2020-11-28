import React,  { useState, useEffect } from 'react';
import axios from 'axios'
{/*import Country from './components/Country' /*}
{/*import Filter from './components/Filter' */}

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("ar")
  

  useEffect(() =>  {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = (filter === '')
  ? countries
  : countries.filter(country => country.name.toLowerCase().includes(filter))

  return (
    <>
      <ul>
        {countriesToShow.map(x => <li>{x.name}</li>)}
      </ul>
{/*    <Country countries = {countries} />  */}
    </>  
  )
} 



export default App