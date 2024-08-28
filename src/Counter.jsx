import React, { useState } from 'react'
import Button from './Button'
import './Counter.css'


const Counter = () => {

    const [count, setCount] = useState('0')
    const[CountColor,setCountColor] = useState('black')

    const increase = () =>{
        setCount(count => count + 1)
        setCountColor('green')
    }

    const reset = ()=>{
        setCount(0)
        setCountColor('black')
    }

    const decrease =()=>{
        setCount(count => count - 1)
        setCountColor('red')
    }

  return (
     <div className="main" >
        <h2>Counter</h2>
       <h1 className='count' style={{ color: CountColor}}>{count}</h1>
       <div className='Buttons'>
       <Button  text={{label:'-'}} clickCount={()=>decrease()}/>
      <Button  text={{label:'reset'}}  clickCount={()=>reset()}/>  
      <Button text={{label:'+'}} clickCount={()=>increase()} />
     
    </div>
    </div>
  )

}   
    



export default Counter

