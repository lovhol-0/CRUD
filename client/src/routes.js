import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/layout/layout";
import Hem from "./Pages/hem/hem";
import Arkiv from "./Pages/arkiv/arkiv";
import Kontakt from "./Pages/kontakt/kontakt";
import Sokresultat from "./Pages/sokresultat/sokresultat";
import Login from "./Pages/Login/Login";
import RegisterUser from "./Pages/Register/Register";

const ProjectRoutes = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Hem />} />
                <Route path="arkiv" element={<Arkiv />} />
                <Route path="kontakt" element={<Kontakt />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<RegisterUser />} />
                <Route path="sokresultat" element={<Sokresultat />} />
            </Route>
        </Routes>
      </Router>
    );
  };
  
  export default ProjectRoutes;