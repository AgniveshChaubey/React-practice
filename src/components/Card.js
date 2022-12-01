import { click } from "@testing-library/user-event/dist/click";

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

export function ModeToggler() {
    let lightModeOn = true;
    const lightMode = <h1>Light Mode on</h1>
    const darkMode = <h1>Dark Mode on</h1>

    function clickHandler(){
        lightModeOn = !lightModeOn;
        lightModeOn ? console.log('light') : console.log('Dark');
    }

    return (
        <div>
            {lightModeOn ? lightMode : darkMode}
            <button onClick={clickHandler} > Click me </button>

        </div>
    )
}

export { Btn };
export default Card;