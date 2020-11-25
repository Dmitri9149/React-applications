import React from 'react'


const Filter = (props) => {
const {value, onChange} = props
return (
    <div>
    filtering with: <input value = {value} onChange = {onChange} />
    </div>
)

}
export default Filter