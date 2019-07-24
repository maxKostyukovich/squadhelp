import React from 'react';
import './_reset.sass';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
const App = () => {
    return(
        <Router>
            <div>
                <Route path="/" exact component={MainPage} />
                <Route path="/login/" component={LoginPage} />
                <Route path="/signup/" component={SignUpPage} />
            </div>
        </Router>);
};

export default App;
