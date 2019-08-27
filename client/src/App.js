import React from 'react';
import './_reset.sass';
import { Router, Route, Link, Switch } from "react-router-dom";
import history from './history';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import AdminPage from './pages/AdminPage/AdminPage';
import ContestPage from './pages/ContestPage/ContestPage';
import NotFound from './pages/NotFound/NotFound';
import renderMainPage from './components/HOC/renderMainPage';
import renderAdminPage from './components/HOC/renderAdminPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import StartContestPage from './pages/StartContestPage/StartContestPage';
const App = () => {
    return(
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={renderMainPage(MainPage)} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <PrivateRoute path={"/admin-panel"} component={renderAdminPage(AdminPage)}/>
                <Route  exact path={"/contest"} component={renderMainPage(ContestPage)}/>
                <Route path={'/startcontest'} component={renderMainPage(StartContestPage)}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>);
};

export default App;