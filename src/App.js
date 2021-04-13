import logo from './logo.svg';
import './App.css';

function SecretComponent(){
  return <h1>Secret component for authorized users only</h1>;
}

function RegularComponent(){
  return <h1>Everybody can see this component.</h1>;
}

function App(props) {
  return(
  <>
    {props.authorized ? <SecretComponent/> : <RegularComponent/>}
  </>
  )
}

export default App;
