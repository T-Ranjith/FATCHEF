import React, { useEffect, useState } from 'react'

function HooksEx() {
    const[count,setCount]=useState(0)
    useEffect()=>{
        document.title='HI';
        console.log({count})
    }
    }
    return(
    <div>
        <h1>{count}</h1>
        <button onClick={inc}>Click by 1 </button>
        <button onClick={inc}=()>{setCount1(count1+5)}}>Click by 5</button>
    </div>
  )
}

export default HooksEx