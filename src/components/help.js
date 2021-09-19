import React from "react";
import MobileImage from './mobile.jpeg';
const AppHelp = () => {
    return (
       <>
         <section class="main-wrapper">
                 <div className="content-wrapper">
                     <h1>How We can Help</h1>
                     <p> condimentum vel vesitibulum, facilisi euismod id ornare fermentum ac.
                      Bibendum turpis faucibus lectus cursus elementum.Suscpit mauris viverra 
                      pellentesque nisi, diam rhoncus vitae purus.Sed purus sed lects.</p>
                      <div className="steps">
                      <div>
                         Step 1: <strong>SELF ANALYSIS</strong>
                      </div>
                      <div>
                         Step 1: <strong>SELF ANALYSIS</strong>
                      </div>
                      <div>
                         Step 1: <strong>SELF ANALYSIS</strong>
                      </div>
                      <div>
                         Step 1: <strong>SELF ANALYSIS</strong>
                      </div>
                      </div>
                 </div>
                 <div className='image-wrapper'>
                    <img src={MobileImage} alt="help"/>
                 </div>
          </section>
       </>
    );
};

export default AppHelp;