// import React from "react";

export function Fruits(props) {
    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits

export function FruitsCounter(props) {
    return (
        <h2>Total fruits: {props.fruits.length}</h2>
    )
}