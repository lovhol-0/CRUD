import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Hem from "./pages/hem/hem";
import Arkiv from "./pages/arkiv/arkiv";
import Kontakt from "./pages/kontakt/kontakt";
import RegisterUser from "./pages/register/register";
import Login from "./pages/login/login";
import Laddaupp from "./pages/laddaupp/laddaupp";
import Laddaupp_test from "./pages/laddaupp/laddaupp_test";
import Profil from "./pages/profil/profil";
// import Inlogg from "./pages/inlogg/inlogg";
// import Sokresultat from "./pages/sokresultat/sokresultat";
// import Sokish from "./pages/sokish/sokish";

<<<<<<< HEAD
=======

>>>>>>> f39e3f050edd9524ec3d9d6ab53ab87997085585
/*
Detta är våra routes som gör det möjligt att navigera runt i vår applikation. 
Varje route har en URL som är kopplad till en specifik sidas funktion.
Skriver du in t.ex localhost/login så kommer du till login-sidan 

*/

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
                <Route path="laddaupp" element={<Laddaupp />} />
                <Route path="laddaupp_test" element={<Laddaupp_test />} />
                <Route path="profil" element={<Profil />} />
                {/* <Route path="inlogg" element={<Inlogg />} /> */}
                {/* <Route path="sokresultat" element={<Sokresultat />} /> */}
                {/* <Route path="sokish" element={<Sokish />} /> */}
            </Route>
        </Routes>
      </Router>
    );
  };
  
  export default ProjectRoutes;