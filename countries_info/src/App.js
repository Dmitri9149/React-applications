import React,  { useState, useEffect } from 'react';
import axios from 'axios'
{/*import Country from './components/Country' /*}
{/*import Filter from './components/Filter' */}

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
  ? candidatesToShow.map(x => 
  <li onClick = {() => handleSingleName(x.name)}>
    <button type = "OnClick">show</button> 
    {x.name}
  </li>
  )
  : candidatesToShow.length === 1 
  ? <div> 
      <h2>{candidatesToShow[0].name}</h2>
      <p>Capital: {'  '} {candidatesToShow[0].capital}</p>
      <p>Population: {'  '} {candidatesToShow[0].population}</p>
      <h3>Languages:</h3>
      <ul>
       {candidatesToShow[0].languages.map(lang => <li key={lang.name}>{lang.name}</li>)} 
      </ul>
      <img max-width = {250} height = {80} src={candidatesToShow[0].flag} alt="flag" />
    </div>
  : "Too many matches, use a more specific filter"

  const handleFilter = (event) => setFilter(event.target.value)

  const handleSingleName = (name) => setFilter(name)

  return (
    <>
      <div> Find countries which include the subword:{' '} 
      <input val = {filter} onChange = {handleFilter} />
      </div>
{/*      <ul>
        {countriesToShow.map(x => <li>{x.name}</li>)}
</ul>   */}
      {whatToShow}
{/*    <Country countries = {countries} />  */}
    </>  
  )
} 



export default App