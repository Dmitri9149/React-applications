import React from 'react'

const Persons = ({toShow, onClick}) =>    
        toShow.map(person => {
            return (
                <table>
                <tbody key = {person.name}>
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
                </tbody>
                </table>
            )
        })


export default Persons