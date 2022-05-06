import React, {useState} from "react";
import  Axios  from 'axios';
import './Register.css'

function RegisterUser(){

    const [fNameReg, setFNameReg] = useState("");
    const [lNameReg, setLNameReg] = useState("");
    const [addressReg, setAddressReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");


    const register = () => {
        Axios.post("http://localhost:3003/register",{
            fName:  fNameReg,
            lName: lNameReg,
            address: addressReg,
            email: emailReg,
            password: passwordReg,
            
            }).then((response) => {
                console.log(response);
            });
            
        };


    return(
        
            
        <div className={"register"}>
             <div className={"Registrering"}>
                 <h1> Registrering </h1>
                 <label> Namn </label>
                 <input type="text" onChange={(e)=> {
                     setFNameReg(e.target.value)}}/>
                 <label> Efternamn </label>
                 <input type="text" onChange={(e)=> {
                     setLNameReg(e.target.value)}}/>
                 <label> Adress </label>
                 <input type="text" onChange={(e)=> {
                     setAddressReg(e.target.value)}}/>
                 <label> Email </label>
                 <input type="text" onChange={(e)=> {
                     setEmailReg(e.target.value)}}/>
                 <label> Lösenord </label>
                 <input type="text" onChange={(e)=> {
                     setPasswordReg(e.target.value)}}/>
                 <button onClick={register}> Registrera </button>
             </div>
        </div>
        
      
    );
}

export default RegisterUser;


