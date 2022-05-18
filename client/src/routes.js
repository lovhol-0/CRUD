import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Hem from "./pages/hem/hem";
import Arkiv from "./pages/arkiv/arkiv";
import Kontakt from "./pages/kontakt/kontakt";
import RegisterUser from "./pages/register/register";
import Login from "./pages/login/login";
import InloggadLayout from "./pages/layout/inloggadLayout";
import {loginStatus} from "./pages/login/login";
// import Sokresultat from "./pages/sokresultat/sokresultat";
// import Sokish from "./pages/sokish/sokish";

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
                {/* <Route path="sokresultat" element={<Sokresultat />} /> */}
                {/* <Route path="sokish" element={<Sokish />} /> */}
            </Route>
             <Route path="inloggad" element={<InloggadLayout />}> 
             <Route path="inloggad/arkiv" element={<Arkiv />} />
             <Route path="inloggad/kontakt" element={<Kontakt />} />
             <Route index element={<Hem />} />
             
             /</Route>
        </Routes>
      </Router>

    );

}; 
  
  export default ProjectRoutes;