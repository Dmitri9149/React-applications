import React from 'react'

const Persons = ({toShow, onClick}) => (
    <tbody>   
        {toShow.map(person =>  
                <tr key = {person.name}>
                    <td>
                        {person.name}&nbsp;&nbsp;
                    </td>
                    <td>
                        {person.number}&nbsp;&nbsp;
                    </td>
                    <td>
                        <button onClick ={onClick}>delete</button>
                    </td>
                </tr>
            )}
    </tbody>
)

export default Persons