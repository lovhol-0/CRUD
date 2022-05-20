import Axios from 'axios';
import React,{Component} from 'react';
import "./laddaupp.css";
import logo from "./../../images/logo.png";

/*
Sida där användaren kan ladda upp en bild som sedan läggs till i databasen.
*/
 
class App extends Component {
  
    state = {
 
      // Initially, no file is selected
      selectedFile: null,
      base64URL: ""
    };

    getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
          // Convert the file to base64 text
          reader.readAsDataURL(file);
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
            console.log(baseURL);
            resolve(baseURL);
            Axios.post("http://localhost:3003/laddaupp", {img: baseURL});
          };
          console.log(fileInfo);
        });
      };
    
    // On file select (from the pop up)
    onFileChange = event => {

        this.setState({ selectedFile: event.target.files[0] });

    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object

    console.log(this.state.selectedFile);
        let { file } = this.state;
        file = this.state.selectedFile;
        this.getBase64(file)
        .then(result => {
            file["base64"] = result;
            console.log("File Is", file);
            this.setState({
            base64URL: result,
            file
            });
        })
        .catch(err => {
            console.log(err);
        });

        this.setState({
        file: this.state.selectedFile
        });

    };
    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div>
            <h2>Fildetaljer:</h2>
             
<p>Filnamn: {this.state.selectedFile.name}</p>
 
             
<p>Filtyp: {this.state.selectedFile.type}</p>

<p>Filstorlek: {this.state.selectedFile.size} byte</p>
 
             
<p>
              Datum:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4></h4>
          </div>
        );
      }
    };
    
    render() {
    
      return (
        <div className="imageupload">
            <img src={logo} alt="Logo" id="uploadlogo"/>
            <h1>
              Ladda upp bild
            </h1>
            <h3>
              Välj bild att ladda upp nedan
            </h3>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Ladda upp!
                </button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
 
  export default App;