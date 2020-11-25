import React from 'react'

const Persons = ({toShow}) => (
    <ul>
        {toShow.map(person => 
            <li key ={person.id}> 
                {person.name} {'  '} {person.number}
            </li>)}
    </ul>
)

export default Persons