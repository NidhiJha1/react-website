import React from "react";
import logo from './logo.jpeg';
import { NavLink } from "react-router-dom";
import classes from './navigation.module.css';

const AppNavigation = () => {
    return (
       <>
          <header className={classes.header}>
      <NavLink to='/'>
        <div className={classes.logo}><img src={logo} alt="logo"/></div>
      </NavLink>
      <nav>
        <ul>
         
            <li>
                <NavLink to='/' activeClassName={classes.active} exact>Home</NavLink>
            </li>
     
             <li>
               <NavLink to='/help' activeClassName={classes.active}>How we help</NavLink>
             </li>

             <li>
                <NavLink to='/program' activeClassName={classes.active}>Programs</NavLink>
            </li>
     
             <li>
               <NavLink to='/faq' activeClassName={classes.active}>FAQs</NavLink>
             </li>

             <li>
             <NavLink to='/getintouch'> <button>Get in touch</button></NavLink>           
            </li>
         
        </ul>
      </nav>
    </header>
       </>
    );
};

export default AppNavigation;