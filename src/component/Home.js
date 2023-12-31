
import React from "react";

export default function Home(props){
    
    return(
        <div>
            <h1>Redux Counter Project</h1>

            <div>
                <button onClick={props.increment}>
                    INCREMENT
                </button>
            </div>
            <div>
                <button onClick={props.decrement}>
                    DECREMENT
                </button>
            </div>
            <div>
                <h3>
                    Counter
                    <p>{props.count}</p>
                </h3>
            </div>
        </div>
    )
}