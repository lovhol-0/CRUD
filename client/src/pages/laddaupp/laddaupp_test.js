import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./laddaupp.css";
import Axios from 'axios';

function FacialRecognition() {
    const [image, setImage] = useState("");

    function ProcessImage(localImage) {
       
        var reader = new FileReader();

        const file = document.querySelector('input[type=file]').files[0];

        // reader.onload = function(e) {
        //     const blob = new Blob([new Uint8Array(e.target.result)], {type: file.type });
        //     console.log(blob);
        //     Axios.post("http://localhost:3003/laddaupp", {img: blob});
        // };


        file.arrayBuffer().then((arrayBuffer) => {
            const blob = new Blob([new Uint8Array(arrayBuffer)], {type: file.type });
            
            console.log(blob);
            
            var promise = new Promise(getBuffer(blob));
    // Wait for promise to be resolved, or log error.
    promise.then(function(data) {
      // Here you can pass the bytes to another function.
      
      console.log(data);
      console.log(data.toString());
      Axios.post("http://localhost:3003/laddaupp", {img: data.toString()});
    }).catch(function(err) {
      console.log('Error: ',err);
    });


            
        });

        var imageTransformation = reader.readAsDataURL(
            localImage
        );
        console.log(imageTransformation);
        console.log(localImage);
        // Axios.post("http://localhost:3003/laddaupp", {img: localImage});

        
    }


    function getBuffer(fileData) {
        return function(resolve) {
          var reader = new FileReader();
          reader.readAsArrayBuffer(fileData);
          reader.onload = function() {
            var arrayBuffer = reader.result
            var bytes = new Uint8Array(arrayBuffer);
            resolve(bytes);
          }
      }
    }


    return (
        <div>
            <Container fluid="xl">
                <Row>
                    <Col xs="auto">
                        <p>
                            Select a local image, and then click the
                            <b>Analyze face button.</b>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col x="auto">
                        <label>Image to analyze: </label>
                        <input
                            type="file"
                            name="inputImage"
                            id="inputImage"
                            autoComplete="off"
                            onChange={(e) => setImage(e.target.files[0])}
                            style={{ width: "60%", marginLeft: "1vw" }}
                        />
                        <Button
                            variant="info"
                            onClick={() => ProcessImage(image)}>
                            Analyze face
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FacialRecognition;