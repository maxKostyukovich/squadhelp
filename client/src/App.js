import React from 'react';
import './_reset.sass';
import { Router, Route, Link, Switch } from "react-router-dom";
import history from './history';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import AdminPage from './pages/AdminPage/AdminPage';
import ContestTypePage from './pages/ContestTypePage/ContestTypePage';
import NotFound from './pages/NotFound/NotFound';
import renderMainPage from './components/HOC/renderMainPage';
import renderAdminPage from './components/HOC/renderAdminPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
const App = () => {
    return(
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={renderMainPage(MainPage)} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <PrivateRoute path={"/admin-panel"} component={renderAdminPage(AdminPage)}/>
                <Route path={"/contesttype"} component={ContestTypePage}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>);
};

export default App;
