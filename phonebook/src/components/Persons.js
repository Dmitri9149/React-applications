import React from 'react'

const Persons = ({toShow, onClick}) => (
    <ul>
        {toShow.map(person => 
            <li key ={person.id}> 
                {person.name} {'  '} {person.number}
            <button onClick ={onClick}>delete</button>
            </li>)}
    </ul>
)

export default Persons