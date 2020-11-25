import React from 'react'

const Header = (props) => {
    return (
      <div>
        <h3>
          {props.name}
        </h3>
      </div>
    )
  }

const Content = (props)=> {
    const {parts} = props
return (
    <div>
        <ul>
            {parts.map(part => 
                <li key={part.id}>
                    <div style={{display : 'inline-block'}} >
                    {part.name} {"  "}
                    {part.exercises} 
                    </div>
                </li>)}
        </ul>
    </div>
)
}

const Total = (props) => {
  const {parts} = props
  const reducer = (accum,val) => accum + val.exercises
return (
    <div>
    Total of: {parts.reduce(reducer,0)}
    </div>
)	  
}

const Course = (props) => {
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