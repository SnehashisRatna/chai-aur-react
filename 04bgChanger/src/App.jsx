import React from 'react'
import { useState } from 'react'

const [color , setColor] = useState("bg-amber-500") ;

const App = () => {
  return (
    <>
         <div 
             className="w-full h-screen duration-300 " 
            //  style={{backgroundColor: color}} 
         ></div>
         
          <div className=''>

          </div>
    </>
  )
}

export default App