import "./sokresultat.css";
import {useState} from "react";
import Axios from "axios";
import Popup from 'reactjs-popup';



function App() {

  const [imagesIDList, setImagesIDList] = useState([]);
  const [category, setCategory] = useState("");
  

  const getImagesID = (category) => {
    Axios.put("http://localhost:3003/imagesID",{category: category}).then((response) => {
      setImagesIDList(response.data);
      {setCategory(localStorage.getItem("Category"));}
    });
  };

  return (
    <div className="test">
      <h1>{category}</h1>
      <div className="images">
        {getImagesID(category)}
        {imagesIDList.map((val, key) => {            
            return (
            <div className="image">


              <Popup trigger={<img className="img" src={`data:image/png;base64,${val.img}`} alt=""/>} modal>
                <span>
                  <div classname="pop">
                  <div className="popimage">
                  <img className="popimg" src={`data:image/png;base64,${val.img}`} alt=""/>
                  </div>
                  <div className="popcontent">
                  <h3>ID: {val.id}</h3>
                  <h3>Category: {val.category}</h3>
                  </div>
                  </div>
                </span>
              </Popup>


                 
            </div>
            );
          })}
          
          
      </div>
    </div>
  );
}

export default App;