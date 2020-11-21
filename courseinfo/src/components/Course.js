import React from 'react'

const Header = (props) => {
    return (
      <div>
        <p>
          {props.name}
        </p>
      </div>
    )
  }

const Content = (props)=> {
    const {parts} = props
return (
    <div>
        <ul>
            {parts.map(part => 
                <li style={{display : 'inline-block'}} key={part.id}>
                    <div> {part.name} </div>  
                    <div> {part.exercises} </div>
                </li>)}
        </ul>
    </div>
)
}

const Total = (props) => {
return (
    <div>
    {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
    </div>
)	  
}

const Course = (props) => {
console.log(props)
const { course } = props
return (
    <div>
    <Header name={course.name} />
    <Content parts = {course.parts} />
    <Total parts={course.parts} /> 
    </div>
)
}

export default Course