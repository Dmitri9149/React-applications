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

const Content = (props) => {
  return (
    <div>
      {props.part}
    </div>
  )	  
}

const Total = (props) => {
  return (
    <div>
      {props.exercises}
    </div>
  )	  
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part={part1} />
      <Total exercises={exercises1} />
      <Content part={part2} />
      <Total exercises={exercises2} />
      <Content part={part3} />
      <Total exercises={exercises3} />      
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
