import React, { useState } from "react";
import Axios from "axios";
import "./login.css"
export const loginStatus = ("");

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("");
    const [loginStatus, setloginStatus] = useState("false");
    
    
    const loggaIn = () => {
        Axios.post("http://localhost:3003/login",{
            
            email: email,
            password: password,
            
            }).then((response) => {

                if (response.data.message) {
                setLoginMessage(response.data.message)
                setloginStatus(false);
                console.log("loginStatus " + loginStatus);
            } else { setLoginMessage(response.data[0].email)
                setloginStatus(true);
                console.log("loginStatus " + loginStatus);
                window.location.href = '/inloggad'

            }
    });
            
        };

       /* const logout = () => {
            setloginStatus(false);
            window.location.href = '/'
        };
*/
      


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

