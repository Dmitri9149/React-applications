import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div> {props.text} {props.value} </div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const val1 = (good+bad+neutral)
  const val2 = ((good-bad)/(good+bad+neutral)).toFixed(2)
  const val3 = ((good)/(good+bad+neutral)*100).toFixed(2) + "%"
  if ((good+bad+neutral) !== 0) {
    return (
      <div>
        <Display text="all" value={val1} />
        <Display text="average" value={val2} />
        <Display text="positive" value={val3} />    
      </div>
    )
  }

  return (
    <div>
      No feedback yet
    </div>
  )
}
 
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => setGood(newValue)
  const setToNeutral = newValue => setNeutral(newValue) 
  const setToBad = newValue => setBad(newValue) 

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Display text={"good"} value={good} />
      <Display text={"neutral"} value={neutral} />
      <Display text={"bad"} value={bad} />
      <Statistics good = {good} bad = {bad} neutral ={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
