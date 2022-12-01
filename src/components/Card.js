import { click } from "@testing-library/user-event/dist/click";

function Card(props) {
    return (
        <div className="card">
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    );
};

function Btn(){
    let clickHandler = ()=>{
        console.log('Button clicked')
    } 
    return(
        <button onClick={clickHandler} > Click me </button>
    )
}

export {Btn};
export default Card;