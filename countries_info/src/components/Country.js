import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Country = ({filter, country}) => {

    const [weatherCurrent, setWeatherCurrent]= useState({})
    const [weatherCondition, setWeatherCondition]= useState({})

    console.log("Country effect !!!!!!!!!!")
    const url = new URL('http://api.weatherstack.com/current?access_key=""&query=Helsinki')
    url.searchParams.set('access_key', process.env.REACT_APP_WEATHER)
    url.searchParams.set('query' , country.capital)
    console.log('filter', filter)
    console.log('url', url)

    useEffect(() =>  {
        axios
          .get(url)
          .then(response => {
            console.log('weather promise fulfilled')
            setWeatherCurrent(response.data.current)
            setWeatherCondition(response.data)
          })
      }, [])

    return (
        <>
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {'  '} {country.capital}</p>
            <p>Population: {'  '} {country.population}</p>
            <h3>Languages:</h3>
            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)} 
            </ul>
            <img max-width = {250} height = {80} src={country.flag} alt="flag" />
            <p>
                Temperature feelslike: {weatherCurrent.feelslike}
            </p>
            <h2>Weather in {country.capital}</h2>
            <p>
                <b>
                temperature :&nbsp; 
                </b> 
                {weatherCurrent.temperature} Celsius
            </p>
            <img max-width = {40} height = {40} src = {weatherCurrent.weather_icons} alt="Weather" /> 
            <p>
                <b>
                wind :&nbsp; 
                </b>   
                {weatherCurrent.wind_speed} kph direction {weatherCurrent.wind_dir}
            </p>
        </div>
        </>
    )
}


export default Country