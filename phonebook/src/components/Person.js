import React from 'react'

const Person = ({ person, onClick }) => {
  return (

    <>
        {person.name} &nbsp;&nbsp;
        {person.number} &nbsp;&nbsp;
        <button onClick={onClick}>delete</button>
    </>

  )
}

export default Person