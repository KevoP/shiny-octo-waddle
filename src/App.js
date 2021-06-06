import React, {Suspense, useState, useEffect} from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { getConfig, loadComponent } from './helpers/configHelper.js'
import Header from './components/layout/header/Default.js';
import Hero from './components/sections/hero/Default.js';
import Footer from './components/layout/footer/Default.js';


function App() {

  const [asyncComponents, setAsyncComponents] = useState([]);

  useEffect(() => {
      getConfig()
         .then(config => config.components.map(component => loadComponent({...component})))
         .then(componentList => setAsyncComponents(componentList));
   }, []);
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <Suspense fallback={<div>Loading...</div>}>
              {asyncComponents.map((Component, index) => 
                <React.Fragment key={index}><Component/></React.Fragment>
              )}
            </Suspense>  
          </Route>
          
          <Route path="/about">
            <h1>About</h1>
            <Suspense fallback={<div>Loading...</div>}>
              {asyncComponents.map((Component, index) => 
                <React.Fragment key={index}><Component/></React.Fragment>
              )}
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
