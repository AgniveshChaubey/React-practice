import logo from './logo.svg';
import './App.css';

import Heading from './components/Heading';
import Card from './components/Card';

function App(props) {
  return (
    <div className='App'>
      <Heading firstName='Agnii!' />
      {/* <Heading firstName='Rahul'/> */}
      <h1>
      {"Task: Add three Card elements"}
      <Card h2="First card's h2" h3= "First card's h3" />
      <Card h2 = "Second card's h2" h3 ="Senond card's h3" />
      <Card h2 = "Third card's h2" h3 ="Third card's h3" />
      </h1>
    </div>
  )
}

export default App;
