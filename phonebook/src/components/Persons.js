import React from 'react'

const Persons = ({toShow, onClick}) => (
    <ul>
        {toShow.map(person => 
            <li key ={person.id}> 



            <tr>
                <td>
                    {person.name}
                 </td>
                <td>
                    {person.number}
                </td>
                <td>
                    <button onClick ={onClick}>delete</button>
                </td>
            </tr>
            </li>)}
    </ul>
)

export default Persons