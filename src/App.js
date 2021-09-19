import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import './App.css';
import AppFaq from './components/faq';
import AppGetInTouch from './components/getintouch';
import AppHelp from './components/help';
import AppHome from './components/home';
import AppNavigation from './components/navigation';
import AppProgram from './components/program';

function App() {
  return (
    <div className="App">
    <AppNavigation/>
      <Switch>
          <Route path='/' exact>
                <AppHome/>
          </Route>

          <Route path='/help'>
               <AppHelp/>
          </Route>

          <Route path='/faq'>
                <AppFaq/>
          </Route> 
          
          <Route path='/program'>
              <AppProgram/>
          </Route> 

          <Route path='/getintouch'>
              <AppGetInTouch/>
          </Route>

         <Route Path='*'>
            <Redirect to='/'/>
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
