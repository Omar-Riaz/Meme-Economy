import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SignIn from './components/SignIn';
import App from './pages/App'
import Homepage from './components/Homepage';
import Aa from './components/aa';
render ((
    <BrowserRouter basename="/">
        <Switch>
            <Route exact path="/" component= {App}/>
            <Route path="/Homepage" component= {Homepage}/>
            <Route path="/AApage" component={Aa}/>
        </Switch>
    </BrowserRouter>
    ), document.getElementById("root"));
