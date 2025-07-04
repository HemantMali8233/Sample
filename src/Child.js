import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h1> Hello , {props.name} <br/> Age {props.age} </h1>

      <h2> Hello , {props.name} <></></h2>
      <hr/>
    </div>
  )
}

export default Child
