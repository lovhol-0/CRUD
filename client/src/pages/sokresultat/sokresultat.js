import "./sokresultat.css";
import {useState} from "react";
import Axios from "axios";

function App() {

  const [imagesIDList, setImagesIDList] = useState([]);
  const [category, setCategory] = useState("");
  

  const getImagesID = (category) => {
    Axios.post("http://localhost:3003/imagesID",{category: category}).then((response) => {
      setImagesIDList(response.data);
      {setCategory(localStorage.getItem("Category"));}
    });
  };

  return (
    <div>
      <h1>{category}</h1>
      <div className="images">
        {getImagesID(category)};
        {imagesIDList.map((val, key) => {            
            return (
            <div className="image">
              <h3>ID: {val.id}</h3>
              <h3>Category: {val.category}</h3>
              <h3>Image: </h3>
              <img src={`data:image/png;base64,${val.img}`} alt=""/>          
            </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;