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
