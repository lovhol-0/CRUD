import "./hem.css";
import {useState} from "react";
import { Link } from "react-router-dom";

/*
Detta är vår "homescreen". Den visas vare sig du är inloggad eller utloggad. 
Den består utav en bakgrundsbild samt en bild-sökfunktion.

*/


function App() {

  const [category, setCategory] = useState("");
  const handle = () => {
    localStorage.removeItem("Category");
    localStorage.setItem("Category", category);
  };
  

  return (
    <div className="App">
      <div className="content">
        <h1>Bothniabladets Bildbyrå</h1>
        <input type="text" autocomplete="off" placeholder="Sök efter bild, händelse eller tema" name="search"
          onChange={(event)=> {setCategory(event.target.value)}}/>
        <Link to="/arkiv" className="btn btn-primary" onClick={handle}>Sök</Link>
      </div>
    </div>
  );
}
export default App;