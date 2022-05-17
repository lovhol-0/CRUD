import './kontakt.css'
import logo from "./../../images/logo.png";




const Kontakt = () => {


return(

<div className={"kontakt"}>


             <div className={"kontakter"}>
                 

                <div class="kontaktGruppen">           
                    <p class="headerText"> Bothniabladets Bildbyrå </p>     
                    <p class="subText"> Bothniavägen 10 </p>  
                    <p class="subText"> 97242 Luleå <br/><br/> </p> 
                        
                    <p class="subText"> Info@bothniabild.se </p>    
                    <p class="subText spaceBottom"> 070-111 22 33 </p>            
                                   
                     <p class="headerText"> Fotograf, Ahmed </p>       
                     <p class="subText"> Ahmed@bothniabild.se </p> 
                     <p class="subText"> 070-567 89 01 </p>            
                </div>

              <div class="kontaktGruppen"> 
                <div class="imagelogo">
                  <img src={logo} alt="Logo"/>
                </div>
                <h2>Kontakt</h2> 
              </div>

                <div class="kontaktGruppen">  
                 <p class="headerText"> Redaktör, Fatima </p>    
                 <p class="subText"> Fatima@bothniabild.se </p> 
                 <p class="subText spaceBottom"> 070-123 45 67 </p>             
             
                 <p class="headerText"> Regigerare, Petra </p>   
                 <p class="subText"> Petra@bothniabild.se </p> 
                 <p class="subText"> 070-234 56 78 </p>              
                </div>

                <div class="kontaktGruppen">          
                 <p class="headerText"> Ekonomi, Arne </p>     
                 <p class="subText"> Arne@bothniabild.se </p> 
                 <p class="subText spaceBottom"> 070-345 67 89 </p>          
                 
                 <p class="headerText"> Arkiv, Bengt </p>     
                 <p class="subText"> arne@bothniabild.se </p> 
                 <p class="subText"> 070-345 67 89 </p>          
                </div>

                 
             </div>
        </div>


          
                  
                    


    ); 
  };
  export default Kontakt;