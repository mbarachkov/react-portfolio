import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Home from './pages/Home';
import Resume from './pages/Resume';


// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            {/* <Route path="*" component={Navbar} />
            <Switch> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/templateone" component={TemplateOne} />
            <Route exact path="/templatetwo" component={TemplateTwo} />
            <Route exact path="/templatethree" component={TemplateThree} />
            <Route exact path="/thankyou" component={ThankU} /> */}
            {/* </Switch> */}
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
