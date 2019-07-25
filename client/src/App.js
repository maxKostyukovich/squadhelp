import React from 'react';
import './_reset.sass';
import { Router, Route, Link, Switch } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { createBrowserHistory } from 'history';

const App = (props) => {
    return(
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path="/" exact render={(props)=><MainPage {...props}/>} />
                <Route path="/login/" render={(props)=><LoginPage {...props}/>} />
                <Route path="/signup/" render={(props)=><SignUpPage {...props}/>} />
            </Switch>
        </Router>);
};

export default App;
