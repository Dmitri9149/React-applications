import React,  { useState, useEffect } from 'react';
import axios from 'axios'
import Country from './components/Country'
import Filter from './components/Filter'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  

  useEffect(() =>  {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])



  const candidatesToShow = (filter === '')
  ? countries
  : countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  const whatToShow = candidatesToShow.length === 0
  ? "" : 
  candidatesToShow.length > 1 && candidatesToShow.length <= 10 
  ? candidatesToShow.map(country => 
  <li key = {country.name} onClick = {() => handleSingleName(country)}>
    <button type = "OnClick">show</button> {'    '}
    {country.name}
  </li>
  )
  : candidatesToShow.length === 1 
  ? <div> 
      <Country 
        country = {candidatesToShow[0]}
        filter = {filter}
      />
    </div>
  : "Too many matches, use a more specific filter"

  const handleFilter = (event) => setFilter(event.target.value)

  const handleSingleName = (country) => {
    console.log(process.env.REACT_APP_WEATHER)
    console.log("singl")
    setFilter(country.name)
  }

  return (
    <>
      <Filter value = {filter} onChange = {handleFilter} />
      {whatToShow}
    </>  
  )
} 



export default App