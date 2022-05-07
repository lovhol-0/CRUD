import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Hem from "./pages/hem/hem";
import Arkiv from "./pages/arkiv/arkiv";
import Kontakt from "./pages/kontakt/kontakt";
import Inlogg from "./pages/inlogg/inlogg";

const ProjectRoutes = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Hem />} />
                <Route path="arkiv" element={<Arkiv />} />
                <Route path="kontakt" element={<Kontakt />} />
                <Route path="inlogg" element={<Inlogg />} />
            </Route>

          {/* <Route path="/" element={<Startsida />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/skresultat" element={<Skresultat />} />
          <Route path="/arkiv" element={<Arkiv />} />
          <Route path="/inloggadkund" element={<Inloggadkund />} />
          <Route path="/skapakonto" element={<Skapakonto />} />
          <Route path="/inloggningssida" element={<Inloggningssida />} />
          <Route path="/laddauppbild" element={<Laddauppbild />} />
          <Route path="/varukorg" element={<Varukorg />} />
          <Route path="/valdbild" element={<Valdbild />} />
          <Route path="/dhiwise-dashboard" element={<Home />} /> */}
        </Routes>
      </Router>
    );
  };
  
  export default ProjectRoutes;