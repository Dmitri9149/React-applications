import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part.name}   {props.part.exercises}
    </div>
  )	  
}

const Content = (props)=> {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />      
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

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts = {parts} />
      <Total parts={parts} />      
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
