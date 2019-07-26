import React from 'react';
import './_reset.sass';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import renderMainPage from './components/HOC/renderMainPage';
const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={renderMainPage(MainPage)} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" componen={SignUpPage} />
            </Switch>
        </Router>);
};

export default App;
