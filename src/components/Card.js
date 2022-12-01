import { click } from "@testing-library/user-event/dist/click";
import { isCompositeComponentWithType } from "react-dom/test-utils";

function Card(props) {
    return (
        <div className="card">
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    );
};

function Btn() {
    let clickHandler = () => {

    }

}
function Btn2() {

    const handleClick = () => {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number');
        alert(`Computer number : ${randomNum}, Your guess: ${userInput}`)
    }
    return (
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
    )
}

export function ModeToggler() {
    let lightModeOn = true;
    const lightMode = <h1>Light Mode on</h1>
    const darkMode = <h1>Dark Mode on</h1>

    function clickHandler() {
        lightModeOn = !lightModeOn;
        lightModeOn ? console.log('light') : console.log('Dark');
    }

    const myStyle = {
        //     backgroundColor : "white",
        //     padding : "40px 40px 111px 0px",
        //     textColor : "red"
    }

    return (
        <div>
            {lightModeOn ? lightMode : darkMode}
            <button style={myStyle} onClick={clickHandler} > Click me </button>

        </div>
    )
}

export { Btn };
export { Btn2 };
export default Card;