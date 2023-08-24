import {useState} from 'react'

function State1() {

    const [clicks,setClicks ] =useState(5)
    function decrementClick(){
        setClicks(prevCount =>{ return prevCount -1 } )
        setClicks(prevCount =>{ return prevCount -1 } )
       
    }
    function incrementClick(){
        setClicks(prevCount =>{ return prevCount + 1 } )
    }
  return (
    <div>
        <button onClick={decrementClick}>-</button>
        <p>No of clicks {clicks}</p>
        <button onClick={incrementClick}>+</button>
    
    </div>
  )
}

export default State1

// useEffect, use