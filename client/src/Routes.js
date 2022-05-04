import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import "./App.css";
import App from "./App";
import RegisterUser from "./Pages/Register/Register";

 function ProjectRoutes() {
    
    return(
<Router>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/register" element={<RegisterUser/>}/>
    </Routes>
</Router>
    );
}

export default ProjectRoutes;

