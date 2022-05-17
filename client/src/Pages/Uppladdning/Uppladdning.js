import React, { useState } from "react";
import Axios from "axios";
import './Uppladdning.css'

/*
function LaddaUppBild(){

    const [category, setCategory] = useState("");
    const [nyckelord, setNyckelord] = useState("");
   // const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };

      const laddaUpp = () => {
        Axios.post("http://localhost:3003/upload",{
        cat : category,
        key : nyckelord,
        file : hiddenFileInput
        
      }).then((response) => {
          
        console.log(response);
        
    });
    }

return(

    <div className={"titel"}>
    <div className={"Ladda upp bild"}>
        <h1> Ladda upp bild </h1>

       <div class="inputStyle">           
           <label> Kategori </label> 
           <input type="text" onChange={(e)=> {setCategory(e.target.value)}}/> 
       </div>   

       <div class="inputStyle">  
            <label> Nyckelord </label> 
            <input type="text" onChange={(e)=> {setNyckelord(e.target.value)}}/>
       </div>
        <button onClick={handleClick}> Välj fil </button> 
        <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 

        <button onClick={laddaUpp}> Ladda upp bild </button> 
        
    </div>
</div>

);
}
export default LaddaUppBild; 

*/