import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Hem from "./pages/hem/hem";
import Arkiv from "./pages/arkiv/arkiv";
import Kontakt from "./pages/kontakt/kontakt";
import RegisterUser from "./pages/register/register";
import Login from "./pages/login/login";
// import Inlogg from "./pages/inlogg/inlogg";
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
                {/* <Route path="inlogg" element={<Inlogg />} /> */}
                {/* <Route path="sokresultat" element={<Sokresultat />} /> */}
                {/* <Route path="sokish" element={<Sokish />} /> */}
            </Route>
        </Routes>
      </Router>
    );
  };
  
  export default ProjectRoutes;