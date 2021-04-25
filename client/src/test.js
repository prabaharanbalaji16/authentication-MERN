import React,{useState} from 'react';

function Test() {
    const [count,setCount] = useState(0);

    const incre =() =>{
        setCount(count + 1);
    }
    const decre = ()=>{
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={decre}>Decre</button>
            <input value={count} disabled />
            <button onClick={incre}>Incre</button>

        </div>
    )
}

export default Test
