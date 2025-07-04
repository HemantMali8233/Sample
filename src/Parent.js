import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <>
        <h1> Hello , Welcome to props </h1>
        <hr/>
        {/* <Child name="John" />
        <Child name="Alice" city="Singapore" />
        <Child name="John"  city="New York" /> */}
        <Child name="Vivek"  age="26" />
        <Child name="Hemant"  age="17" />
        <Child name="Om"  age="17" />
        <Child name="Manish"  age="18" />
        <Child name="Sanket"  age="19" />

    
    </>
  )
}

export default Parent
