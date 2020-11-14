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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />      
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      {props.part1.exercises+props.part2.exercises+props.part3.exercises}
    </div>
  )	  
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content 
      part1 = {part1} 
      part2 = {part2} 
      part3 = {part3} 
      />
      <Total part1={part1} 
      part2={part2} 
      part3={part3}
      />      
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
