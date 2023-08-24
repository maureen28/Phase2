import React from 'react'

function Events() {
const bio = 'Nimo'

    function handleClick(){
        console.log('Button was clicked')
    }
  return (
    <div>
        <p>{bio && <h1>{bio}</h1>}</p>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Events;