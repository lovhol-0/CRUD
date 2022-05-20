import './profil.css'
import logo from "./../../images/logo.png";

/*
Här visas info om den inloggade användaren.
*/

const Profil = () => {

    return(
    
        <div className={"profil"}>

            <div class="inloggadProfil">           
               <p class="headerText"> Namn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Nina Andersson </p>     
               <p class="subText"> Mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nina.andersson@gmail.com  </p>    
               <p class="subText"> Telefon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0703215678 </p>    
               <button onClick={"redigera användare"}> Redigera användare </button>         
            </div>

            <div class="profilBild"> 
            <div class="logoWrap"> 
            <div class="imageLogo">
            <img src={logo} alt="Logo"/>  
            </div>
            <h2>Profil</h2>
            </div>
            </div>
            </div>
        
        ); 
      };

      export default Profil;