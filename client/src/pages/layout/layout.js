import "./layout.css";
import logo from "./../../images/logo.png";
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  

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
                        <Link to="/arkiv">Arkiv</Link>
                      </li>
                      <li className="list-item">
                        <Link to="/kontakt">Kontakt</Link>
                      </li>
                      {/* <li className="list-item">
                        |
                      </li>
                      <li className="list-item">
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
                      <li className="list-item">
                      {/* <div className="search">
                        <input type="text" placeholder="Sök efter bild, händelse eller tema" name="search"></input>
                        <button type="submit">Sök</button>
                      </div> */}
                      </li>
                      <li className="list-item">
                        <Link to="/arkiv">Arkiv</Link>
                      </li>
                      <li className="list-item">
                        <Link to="/kontakt">Kontakt</Link>
                      </li>
                      <li className="list-item">
                        |
                      </li>
                      <li className="list-item">
                        <Link to="/login">Logga in</Link>
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