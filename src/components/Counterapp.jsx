<<<<<<< HEAD
import React,{useState} from 'react'

const Counterapp = () => {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }
function decrement(){
        setCount(count - 1);
    }

  return (
   <div style={{ border: '5px solid black' }}>
     <h1 style={{color:'green'}}>Counter App</h1>
     <br />
      <h2 style={{color:'blue'}}>Count: {count}</h2>
      <br />
      <button onClick={increment} sytle={{}}>Increment</button>
      <span>count </span>
      <button onClick={decrement} style={{padding: '10px', margin: '20px'}}>Decrement</button>
   </div>
  )
}

export default Counterapp
=======
import React from 'react'

const counterapp = () => {
  return (
     <div style={{ border: '5px solid black', width: '300px', height: '300px', backgroundColor: 'rgb(231, 229, 224)', padding: '20px', margin: '10px' }}>
      <h1 style={{ color: 'brown' }}>Counter app</h1>
    </div>
  )
}

export default counterapp
>>>>>>> 377fd37684c30d13bfbb7e084dcb49dc8af27e9d
