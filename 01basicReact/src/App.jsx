import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

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


  //  let productName = ""
  return (
    <>
       <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
       <div className='sm:grid sm:grid-cols-3 gap-5'>

       <Card productName = "Apple" btnText = "click me" />
       <Card productName="Samsung" btnText = "read me "/>
       <Card productName="HP" btnText = "About me "/>

       </div>
    </>
  )
}

export default App
