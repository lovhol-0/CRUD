import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Hem from "./pages/hem/hem";
import Arkiv from "./pages/arkiv/arkiv";
import Kontakt from "./pages/kontakt/kontakt";
import Inlogg from "./pages/inlogg/inlogg";
import Sokresultat from "./pages/sokresultat/sokresultat";

const ProjectRoutes = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Hem />} />
                <Route path="arkiv" element={<Arkiv />} />
                <Route path="kontakt" element={<Kontakt />} />
                <Route path="inlogg" element={<Inlogg />} />
                <Route path="sokresultat" element={<Sokresultat />} />
            </Route>
        </Routes>
      </Router>
    );
  };
  
  export default ProjectRoutes;