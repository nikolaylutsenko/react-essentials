import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);

  function toggle(){
    setChecked((checked)=>!checked);
  }

  return(
  <>
   <input type="checkbox" value={checked} onChange={toggle}></input>
  <p>{checked ? "Checked" : "Not checked"}</p>
  </>
  )
}

export default App;
