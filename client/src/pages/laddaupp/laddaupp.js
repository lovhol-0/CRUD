import Axios from 'axios';
import "./laddaupp.css";
import React,{Component} from 'react';

/*
Sida som möjliggör bilduppladdning från användare, som sedan sparas i vår databas.
*/
 
class App extends Component {
  
    state = {
 
        file: null,
    base64URL: ""
      // Initially, no file is selected
    //   selectedFile: null
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

        console.log(event.target.files[0]);
    let { file } = this.state;

    file = event.target.files[0];

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
      file: event.target.files[0]
    });
    
      // Update the state
    //   this.setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile"
        ,
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      Axios.post("http://localhost:3003/laddaupp", formData);
    };
    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div>
            <h2>File Details:</h2>
             
<p>File Name: {this.state.selectedFile.name}</p>
             
<p>File Type: {this.state.selectedFile.type}</p>

<p>File Size: {this.state.selectedFile.size} byte</p>

<p>Image width: {this.state.selectedFile.width}</p>

<p>Image height: {this.state.selectedFile.height}</p>

{/* <p>Date: {" "} {this.state.selectedFile.date.toDateString()}</p> */}

 
             
<p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };
    
    render() {
    
      return (
        <div className="imageupload">
            <h1>
              GeeksforGeeks
            </h1>
            <h3>
              File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
 
  export default App;