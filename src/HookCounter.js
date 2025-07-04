import React, { useState } from 'react'


function HookCounter() {
  // const [count, setCount] = useState(0);

  // const DecrementHandler = () => {

  //   if (count <= 0) {
  //     alert("Count cannot be less than 0");
  //   }
  //   else {
  //     setCount(count - 1);
  //   }
  // }

  const VisibleHandler = () => {

  }

  return (

    // <div>
    //   <h2> Count : {count} </h2>
    //   <button onClick={() => setCount(count + 1)}>+</button>
    //   <button onClick={DecrementHandler}>-</button>
    // </div>


    <>
    
    <button onClick={VisibleHandler}> 
      Click Here
    </button>
    
    
    </>
  )
}

export default HookCounter
