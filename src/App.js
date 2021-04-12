import logo from './logo.svg';
import './App.css';
import restaurant from "./restaurant.jpg"

function Header(props){
  return(
    <header>
      <h1>
        {props.name}'s Kitchen
      </h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <p>
        We serve the most {props.adjective} food around.
      </p>
      <img src={restaurant} height={200} alt="napkin and fork at a restaurant tabel"/>
      <ul style={{textAlign:"left"}}>
        {props.dishes.map((dish)=>(
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
    <footer>
      <p>
        Copyright {props.year}
      </p>
    </footer>
  )
}

const dishes = [
  "Pizza",
  "Borsh",
  "Pureshka",
  "Kotletki"
];

const dishObj = dishes.map((dish,i)=>({id:i,title:dish}));

function App() {
  return (
    <div className="App">
      <Header name="Myke"/>
      <Main adjective="amaizing" dishes={dishObj}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
