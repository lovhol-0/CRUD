import './hem.css';
import {useState} from "react";
import Axios from "axios";

function App() {

  const [imagesList, setImagesList] = useState([]);
  const [imagesIDList, setImagesIDList] = useState([]);
  const [category, setCategory] = useState("");

  const getImages = () => {
    Axios.get("http://localhost:3003/images").then((response) => {
      console.log(response);
      setImagesList(response.data);
    });
  };

  const getImagesID = (category) => {
    Axios.post("http://localhost:3003/imagesID",{category: category}).then((response) => {
      console.log(response);
      setImagesIDList(response.data);
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

          </div>
          
          
          );
        })}
        <hr></hr><hr></hr><hr></hr><hr></hr>
        <input type="text" placeholder="Sök..."
                        onChange={(event)=> {
                            setCategory(event.target.value)}}/>
                             <button
                  onClick={() => {
                    getImagesID(setCategory);
                  }}
                >
                  {" "}
                  Update
                </button>
              <button onClick={getImagesID(category)}>Show imagesID</button>
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