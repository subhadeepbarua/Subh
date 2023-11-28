import React from "react";
import { useState } from 'react';
import Swal from 'sweetalert2';
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skill = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClickLanguage = () => {
    setShowAlert(true);
      Swal.fire({
        html: "<div class='sb'><div class='si' id='js'> java script </div><div class='progress-bar'></div><div class='si' id='c' > C</div><div class='progress-bar'></div><div class='si' id='cpp' > C++</div><div class='progress-bar'></div><div class='si' id='python'> Python</div><div class='progress-bar'></div></div>",
  
        weidth: '10rem',
        showCancelButton: false,  
        showConfirmButton: false
  
      });
    }

    const handleClickWebD = () => {
      setShowAlert(true);
        Swal.fire({
          html: "<div class='sb'> <div class='si' id='html'> HTML </div><div class='progress-bar'></div> <div class='si' id='css' > CSS </div><div class='progress-bar'></div><div class='si' id='react' > React.js</div><div class='progress-bar'></div> <div class='si' id='express'>Express.js</div><div class='progress-bar'></div> <div class='si' id='node'> Node.js</div><div class='progress-bar'></div> <div class='si' id='mongo'> MongoDB </div><div class='progress-bar'></div><div class='si' id='bootstrap'> BootStrap</div><div class='progress-bar'></div><div class='si' id='tailwind'>TailWind</div><div class='progress-bar'></div></div>",
    
          weidth: '10rem',
          showCancelButton: false,  
          showConfirmButton: false,

        });
      }

      const handleClickTools = () => {
        setShowAlert(true);
          Swal.fire({
            
            html: "<div class='sb'><div class='si' id='vs'> VS Code </div><div class='progress-bar'></div><div class='si' id='git' > Git </div><div class='progress-bar'></div><div class='si' id='googleCloud'> Google Clouds</div><div class='progress-bar'></div><div class='si' id='linux'> Linux </div><div class='progress-bar'></div></div>",
      
            weidth: '10rem',
            showCancelButton: false,  
            showConfirmButton: false
      
          });
        }
  return (
    <section id="skills">
      <span className="skillTitle">Skills</span>

      <div className="skillBars">

        <div className="skillBar">
         <img src={AppDesign} alt="" className="skillBarImg"></img>
           <div className="skillBarText"> 
             <h2 onClick={handleClickLanguage}>Languages</h2>
           </div>
        </div>

        <div className="skillBar">
         <img src={UIDesign} alt="" className="skillBarImg"></img>
           <div className="skillBarText"> 
             <h2 onClick={handleClickWebD}>Web Development</h2>
           </div>
        </div>

        <div className="skillBar">
         <img src={webDesign} alt="" className="skillBarImg"></img>
           <div className="skillBarText"> 
             <h2 onClick={handleClickTools}>Tools</h2>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
