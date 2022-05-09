import "./hem.css";
import {useState} from "react";
import { Link } from "react-router-dom";


function App() {

  const [category, setCategory] = useState("");
  const handle = () => {
    localStorage.setItem("Category", category);
  };
  localStorage.removeItem("Category");

  return (
    <div className="App">
      <div className="content">
        <h1>Bothniabladets Bildbyrå</h1>
        <input type="text" placeholder="Sök efter bild, händelse eller tema" name="search"
          onChange={(event)=> {setCategory(event.target.value)}}/>
        <Link to="/sokresultat" className="btn btn-primary" onClick={handle}>Sök</Link>
      </div>
    </div>
  );
}
export default App;