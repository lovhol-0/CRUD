import './App.css';
import {useState} from "react";
import Axios from "axios";

function App() {

  const [imagesList, setImagesList] = useState([]);

  const getImages = () => {
    Axios.get("http://localhost:3003/images").then((response) => {
      console.log(response);
      setImagesList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="information">
        <h1>Bothniabladet</h1>
      </div>
      <div className="images">
        <button onClick={getImages}>Show images</button>
        {imagesList.map((val, key) => {
            
          return (
          <div className="image">
            <h3>ID: {val.id}</h3>
            <h3>Category: {val.category}</h3>

            <h3>Image: </h3>
            <img src={`data:image/png;base64,${val.img}`} alt=""/>

            <h3>Hejsan</h3>
          
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;