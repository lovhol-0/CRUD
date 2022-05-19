import "./layout.css";
import logo from "./../../images/logo.png";
import laddaupp from "./../../images/laddaupp.png";
import kontakt from "./../../images/kontakt.png";
import arkiv from "./../../images/arkiv.png";
import loggain from "./../../images/loggain.png";
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


/*
Denna sidan består utav två navbars. En för användare som inte är inloggade
och en för inloggad användare. De byts automatiskt när man loggar in eller ut.
Dessa navbars har länkar för att navigera sig till olika sidor. 
*/



const Layout = () => {

  const handle = () => {
    {localStorage.removeItem("LoggedIn")};
                        {localStorage.setItem("LoggedIn", false)};
                        {window.location.href = '/'};
  };
  

  return (
    <>
    {
      (() => {
          if(localStorage.getItem("LoggedIn")==='true') {
                  return (
                    <>
                    <nav className="navbar">
                    <div>
                      <Link to="/"><img class="primary-icon" src={logo} alt="Logo"/></Link>
                    </div>
                    <ul className="nav-list" id="navi-list">
                      <li className="list-item">
                      {/* <div className="search">
                        <input type="text" placeholder="Sök efter bild, händelse eller tema" name="search"></input>
                        <button type="submit">Sök</button>
                      </div> */}
                      </li>
                      <li className="list-item">
                        <Link to="/arkiv"><img src={arkiv} alt="Arkiv symbol"/>Arkiv</Link>
                      </li>
                      <li className="list-item">
                        <Link to="/kontakt"><img src={kontakt} alt="Kontakt symbol"/>Kontakt</Link>
                      </li>
                      <li className="list-item">
                        <Link to="/laddaupp"><img src={laddaupp} alt="Ladda upp symbol"/>Ladda upp bild</Link>
                      </li>
                      <li className="list-item">
                        |
                      </li>
                      <li className="list-item" onClick={handle}>
                        <Link to="">Logga ut</Link>
                      </li>
                      {/* <li className="list-item">
                        <Link to="/login">Logga in</Link>
                      </li>
                      <li className="list-item">
                        |
                      </li>
                      <li className="list-item">
                        <Link to="/register">Skapa konto</Link>
                      </li> */}
                    </ul>
                    <div className="menu" id="toggle-button" onClick={() => {
                                const naviList = document.getElementById("navi-list");
                                naviList.classList.toggle('active');
                                console.log(naviList.classList)
                              }}>
                      <div class="menu-line"></div>
                      <div class="menu-line"></div>
                      <div class="menu-line"></div>
                    </div>
                  </nav>
                  <Outlet />
    </>
                  )
              } else if (localStorage.getItem("LoggedIn")==='false') {
                  return (
                    <>
                    <nav className="navbar">
                    <div>
                      <Link to="/"><img class="primary-icon" src={logo} alt="Logo"/></Link>
                    </div>
                    <ul className="nav-list" id="navi-list">
                      {/* <li className="list-item">
                      <div className="search">
                        <input type="text" placeholder="Sök efter bild, händelse eller tema" name="search"></input>
                        <button type="submit">Sök</button>
                      </div>
                      </li> */}
                      <li className="list-item">
                        <Link to="/arkiv"><img src={arkiv} alt="Arkiv symbol"/>Arkiv</Link>
                      </li>
                      <li className="list-item">
                        <Link to="/kontakt"><img src={kontakt} alt="Kontakt symbol"/>Kontakt</Link>
                      </li>
                      <li className="list-item">
                        |
                      </li>
                      <li className="list-item">
                        <Link to="/login"><img src={loggain} alt="Logga in symbol"/>Logga in</Link>
                      </li>
                      <li className="list-item">
                        |
                      </li>
                      <li className="list-item">
                        <Link to="/register">Skapa konto</Link>
                      </li>
                    </ul>
                    <div className="menu" id="toggle-button" onClick={() => {
                                const naviList = document.getElementById("navi-list");
                                naviList.classList.toggle('active');
                                console.log(naviList.classList)
                              }}>
                      <div class="menu-line"></div>
                      <div class="menu-line"></div>
                      <div class="menu-line"></div>
                    </div>
                  </nav>
                  <Outlet />
    </>
                  )
              } 
      })()  
  }  




    
  
  </>
  )

};

export default Layout;