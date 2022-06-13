import React, { useState }  from 'react'


export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
       setCount(prev => prev +1);
       setCount(prev => prev +1);
       setCount(prev => prev +1);
        // setCount([...count, '+1']);
    }
    const decrement = () => {
        setCount([...count, '-1']);
    }
    const onlyMinus = () => {
        setCount(count.filter(t => t ==='-1'));
    }
    return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={onlyMinus}>only -</button>
        {/*{count.map(t=><p>{t}</p>)}*/}
        </div>
  )
}
