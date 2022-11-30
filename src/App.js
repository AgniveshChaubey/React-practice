import logo from './logo.svg';
import './App.css';

import Heading from './components/Heading';

function App(props) {
  return (
    <div className='App'>
      <Heading firstName='Agnii!'/>

      <Heading firstName='Rahul'/>
      <h1>{}</h1>
    </div>
  )
}

export default App;
