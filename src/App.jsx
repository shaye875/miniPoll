import { useState } from 'react'
import './App.css'
import Polls from './Poll'

function App() {
  const [options, setOptions] = useState(["React", "Vue", "Svelte"])
  const [countPolls, setCount] = useState({
    React: 0,
    Vue: 0,
    Svelte: 0
  })
  const [showResults, setShow] = useState(false)
  const [add,SetAdd] = useState("")
  return (
    <>
      {options.map((item) => {
        return (<>
          <Polls obj={countPolls} setCount={setCount} item={item} />
          {showResults && <h1>{countPolls[item]}</h1>}
        </>
        )
      })}
      <button onClick={() => {
        if (showResults) {
          setShow(false)
        } else {
          setShow(true)
        }
      }}>show result</button>
      <button onClick={() => {
        options.map((item) => {
          setCount({ ...countPolls, [item]: countPolls[item] = 0 })
        })
      }}>Reset Votes</button>
      <br />
      <label>Add Option</label>
      <label>
        <input id='input' type="text" value={add} onChange={(value) => {
              SetAdd(value.target.value)
        }} />
      </label>
            <button onClick={() => {
           setOptions([...options,add])
          setCount({...countPolls,[add]:0})
      }}>enter</button>
    </>
  )
}

export default App
