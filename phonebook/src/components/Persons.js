import React from 'react'
import Person from './Person'

const Persons = ({toShow, onClick}) => 
        toShow.map(person => {
            return (
            <li key = {person.id}>
            <Person key = {person.id}
                    person = {person}
                    onClick = {onClick(person.id)}
            />
            </li>
            )
        })


export default Persons