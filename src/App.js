import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Btn, Btn2 } from './components/Card';
import { ModeToggler } from './components/Card';
import { RegisterForm, TextInputWithFocusButton } from './components/InputFunction';
import Heading from './components/Heading';
// import Card from './components/Card';
import Main from './components/Main';
import { Fruits, FruitsCounter } from './components/Fruits';
import { Intro1, Intro2, Intro3 } from './components/Intro';

import profilePic from './assets/images/profile_pic.png'
import ReactPlayer from 'react-player/youtube';

function App(props) {

  const [fruits] = React.useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ]);


  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );
  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    }
    else {
      bird1.pause();
    }
  }

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    }
    else {
      bird2.pause();
    }
  }


  return (

    const myBtn ={
      
    }
    <div className='App'>
      <button style={myBtn} onClick={toggle1}>Bird1</button>
      <button onClick={toggle2}>Bird2</button>


      {/* <Heading firstName='Agnii!' /> */}
      {/* <Heading firstName='Rahul'/> */}
      <h1>{"Task: Audio playing/pausing"}</h1>
      {/* <Fruits fruits={fruits} />
      <FruitsCounter fruits = {fruits} /> */}
      {/* <RegisterForm /> */}
      {/* <TextInputWithFocusButton /> */}
      {/* <Btn2 /> */}
      {/* <InputFunction /> */}
      {/* <Card h2="First card's h2" h3="First card's h3" /> */}
      {/* <Btn /> */}
      {/* <ModeToggler /> */}
      {/* <Main msg="I passed through the Header and the Wrapper and I reached the Button component" /> */}
      {/* <Card h2="Second card's h2" h3="Senond card's h3" /> */}
      {/* <Card h2="Third card's h2" h3="Third card's h3" /> */}




      {/*    <nav style={{backgroundColor : "", text : "bold"}}>
        <Link to="/intro1" className="nav-item" >Intro1</Link>
        <Link to="/intro2" className="nav-item" >intro2</Link>
        <Link to="/intro3" className="nav-item" >Intro3</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Intro1 />} />
        <Route path="/intro1" element={<Intro1 />} />
        <Route path="/intro2" element={<Intro2 />} />
        <Route path="/intro3" element={<Intro3 />} />
      </Routes> */}


      {/* <img
        height={200}
        src={profilePic}
      />
      <img
        height={200}
        src={require("./assets/images/aaaa.png")}
      /> */}



      {/* <ReactPlayer
        playing={true}
        volume={.1}
        url={'https://www.youtube.com/watch?v=3GsA60QpJz0'}

      /> */}





    </div>
  );
};

export default App;
