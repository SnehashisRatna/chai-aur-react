import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //  let cnt = 10

   const addValue = ()=>{
    console.log("Clicked" , count) ;
    setCount(count+1) ;
      
   }

   const removeValue= ()=>{
    // console.log("Clicked" , count) ;
    if(count >0){
      setCount(count-1) ; 
    }
   }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value :- {count} </h2>

      <button onClick={addValue} type="button">Add Value</button>
      <button onClick={removeValue} type="button">Remove Value</button>
    </>
  )
}

export default App
