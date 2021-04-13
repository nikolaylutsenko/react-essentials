import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [emotion, setEmotion] = useState("happy");

  useEffect(()=>{
    console.log(`It's ${emotion} around here!`)
  })

  return(
  <>
    <h1>Current emotion is {emotion}.</h1>
    <button onClick={()=>setEmotion("happy")}>Happy</button>
    <button onClick={()=>setEmotion("frustrate")}>Frustrate</button>
    <button onClick={()=>setEmotion("enthusiastic")}>Enthuse</button>
  </>
  )
}

export default App;
