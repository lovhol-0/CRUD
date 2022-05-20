import "./arkiv.css";
import {useState} from "react";
import Axios from "axios";
import Popup from 'reactjs-popup';
import varukorg from "./../../images/varukorg.png";

/*
Sida som visar bilder utefter det användaren har sökt på.
Sökningen är baserad på bildernas "category"
Vid en sökning så skickas den inskrivna informationen till vår server som 
i sin tur skickar en SQL-sats till vår databas beroende på vilken kategori
man sökt efter. Sedan visas de bilderna som matchar kategorin.  

*/

/*
Sida som visar bilder utefter det användaren har sökt på.
Sökningen är baserad på bildernas "category"
Vid en sökning så skickas den inskrivna informationen till vår server som 
i sin tur skickar en SQL-sats till vår databas beroende på vilken kategori
man sökt efter. Sedan visas de bilderna som matchar kategorin.  

*/



function App() {

  

  const [imagesIDList, setImagesIDList] = useState([]);
  const [category, setCategory] = useState("");

  const handleDelete = () => {
    localStorage.setItem("Category", "");
  };

  const handle = () => {
    localStorage.removeItem("Category");
    localStorage.setItem("Category", category);
  };

  const handleSet = () => {
    {setCategory(localStorage.getItem("Category"));}
  }
  
  const getImagesID = (category) => {
    Axios.put("http://localhost:3003/imagesID",{category: category}).then((response) => {
      setImagesIDList(response.data);
      {console.log(imagesIDList)} 
      // {setCategory(localStorage.getItem("Category"));}
      
    });
  };

  

  return (
    <div className="test">

      {/* <input type="text" placeholder={category} name="search"
          onChange={(event)=> {setCategory(event.target.value)}}/> */}

      {/* {setCategory(localStorage.getItem("Category"))} */}
      {console.log(category)}

      <h1>Nuvarande sökning: {localStorage.getItem("Category")}</h1>
      
      {/* <input type="text"></input> */}

      <input type="text" name="search" autocomplete="off" value={localStorage.getItem("Category")}
          onChange={(event)=> {localStorage.setItem("Category", event.target.value)}}/>
      {/* {console.log(category)} */}

      {/* <button onClick={handle}>Sök</button> */}
      <button onClick={handleDelete}>Återställ sökning</button>

      <div className="images">
        {getImagesID(localStorage.getItem("Category"))}
        
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

                  <h6>Beskrivning: {val.description}</h6><br></br>
                  <h6>Kategori: {val.category}</h6><br></br>
                  <h6>Plats: {val.locationTaken}</h6>
                  <h6>Datum: {val.dateTaken}</h6>
                  <h6>Fotograf: {val.photographer}</h6><br></br>
                  <h6>Filstorlek: {val.fileSize} kB</h6>
                  <h6>Format: {val.format}</h6>
                  <h6>Upplösning: {val.resolution}</h6>
                  <h6>Bildförhållande: {val.aspectRatio}</h6><br></br>
                  <h6>Pris: {val.price} kr</h6>

                  <button id="popupbutton"><img src={varukorg} alt="Arkiv symbol"/>Lägg i varukorg</button>
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