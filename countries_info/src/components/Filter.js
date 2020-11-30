import React from 'react'

const Filter = ({value, onChange}) => {
    return(
        <div> Find countries which include the subword:{' '} 
        <input value = {value} onChange = {onChange} />
        </div>
    )
}


export default Filter