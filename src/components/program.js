import React from "react";
import MobileImage from './mobile.jpeg';

const AppProgram = () => {
    return (
       <>
             <section class="main-wrapper">
               <div className="content-wrapper">
                        <h1>Programs</h1>
                     <p> There are many variations of passages of Lorem Ipsum available, but the
                         have suffered alteration in some form, by injected humour, or randomised
                         don't look even slightly believable. If you are going to use a passage 
                         you need to be sure there isn't anything embarrassing hidden in the
                        </p>
                 </div>
                 <div className='image-wrapper'>
                    <img src={MobileImage} alt="programs"/>
                 </div>
          </section>
       </>
    );
};

export default AppProgram;