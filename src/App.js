import './App.css';
import {Btn, Btn2} from './components/Card';
import { ModeToggler } from './components/Card';
import { RegisterForm } from './components/InputFunction'; 
import Heading from './components/Heading';
import Card from './components/Card';

function App(props) {
  return (
    <div className='App'>
      <Heading firstName='Agnii!' />
      {/* <Heading firstName='Rahul'/> */}
      <h1>
      {/* {"Task: Add a button and handle a click event!"} */}
      </h1>
      <RegisterForm />
      {/* <Btn2 /> */}
      {/* <InputFunction /> */}
      {/* <Card h2="First card's h2" h3= "First card's h3" /> */}
      {/* <Btn /> */}
      <ModeToggler />
      {/* <Card h2 = "Second card's h2" h3 ="Senond card's h3" />
      <Card h2 = "Third card's h2" h3 ="Third card's h3" /> */}
    </div>
  )
}

export default App;
