import React, {useState} from 'react';
import './Food.css';


function Food(props){

    let [day, setday] = useState(true);

    let [count, setCount] = useState(0)
    return(
        <div className={day ? "dayFood" : "nightFood" }>
            <h1>
                {`${day ? props.morning : props.day} `}
            </h1>

            <h2>Counter = {count}</h2>
            <div className = "button_div">
            <button 
                onClick={() => setCount(++count)}
            > Count
            </button>

            <button
                onClick ={()=>setCount(0)}
            >Reset Counter</button>

            <button 
                onClick={()=> setday(!day)}
            >Update Day
            </button>
            </div>
        </div>
    )
}

export default Food;