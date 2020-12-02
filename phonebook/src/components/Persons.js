import React from 'react'

const Persons = ({toShow}) => (
    <ul>
        {toShow.map(person => 
            <li key ={person.id}> 
                {person.name} {'  '} {person.number}
            <button type ="submit">delete</button>
            </li>)}
    </ul>
)

export default Persons