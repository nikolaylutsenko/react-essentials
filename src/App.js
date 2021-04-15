import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

//https://api.github.com/users/eveporcello

function App({login}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    if(!login) return;
      setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
    .then((response)=>response.json())
    .then(setData)
    .then(()=>setLoading(false))
    .catch(setError);
  }, [login]);

  if(loading) return <h1>Loading...</h1>;

  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if(!data) return null;

  if(data){
    return (<div>
      <img alt={data.login} src={data.avatar_url}/>
      <h1>{data.login}</h1>
      <p>{data.location}</p>
      <h2>{data.name}</h2>
      </div>);
  }

  return <div>No User Available</div>
}

export default App;
