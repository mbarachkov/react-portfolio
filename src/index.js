import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Route, BrowserRouter as Router } from 'react-router-dom';

//this page will be for all the routing for the site.
//you need to import the page from where its nested before you can route it



//import pages here
import Home from './pages/Home';
import Contact from './pages/Contact';
import GraphicArt from './pages/GraphicArt';
import WebDevelopment from './pages/WebDevelopment';
import Resume from './pages/Resume';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/WebDevelopment" component={WebDevelopment} />
            <Route exact path="/GraphicArt" component={GraphicArt} />
            <Route exact path="/Resume" component={Resume} />
            <Route exact path="/Contact" component={Contact} />
        </div>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
