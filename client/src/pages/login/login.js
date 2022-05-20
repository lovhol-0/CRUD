import React, { useState } from "react";
import Axios from "axios";
import "./login.css"

/*
Sida där användaren kan logga in. 
När inloggnings-infon har matats in och man klickar på "Logga in"
så skickas informationen till servern som i sin tur skickar en SQL-sats
till vår databas för att se så att det finns 
en email som är kopplad till det angivna lösenordet. 
Har man skrivit in fel information så får man ett felmeddelande. 
Annars sätts status som "LoggedIn" och man skickas vidare till en inloggad vy.
*/

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("");
    const [loginStatus, setloginStatus] = useState();
    
    const loggaIn = () => {
        Axios.post("http://localhost:3003/login",{
            
            email: email,
            password: password,
            
            }).then((response) => {

                if (response.data.message) {
                setLoginMessage(response.data.message)
                setloginStatus(false);
                console.log("loginStatus " + loginStatus);
                localStorage.removeItem("LoggedIn");
                localStorage.setItem("LoggedIn", false);
            } else { setLoginMessage(response.data[0].email)
                setloginStatus(true);
                console.log("loginStatus " + loginStatus);
                localStorage.removeItem("LoggedIn");
                localStorage.setItem("LoggedIn", true);
                window.location.href = '/'
            }
    });
            
        };

    return(
            
        <div className={"login"}>
             <div className={"Logga in"}>
                 <h1> Logga in </h1>
                 <label> Email: </label>
                 <input type="text"
                 placeholder="Email..."
                 onChange={(e)=> {
                     setEmail(e.target.value)}}/>
                 <label> Lösenord: </label>
                 <input type="text"
                 placeholder="Lösenord..."
                 onChange={(e)=> {
                     setPassword(e.target.value)}}/>
                 <button onClick={loggaIn}> Logga in </button>
             </div>
            <h3>{loginMessage}</h3>
        </div>
        
    );
}

export default Login;