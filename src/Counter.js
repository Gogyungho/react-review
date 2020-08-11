import React, {useState} from 'react';

function Counter(){
    const [number, setNumber] = useState(0);

    const onIncrease=()=>{
        setNumber(prevNumber => prevNumber +1) //함수형 업데이트 , 성능 최적화 시킬때 
    }
    const onDecrease = () =>{
        setNumber(number-1)
    }

    return (
        <div>
            <h1>{number} </h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;