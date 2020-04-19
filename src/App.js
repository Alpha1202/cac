import React from 'react';
import "./fonts/fonts.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import SignUp from './pages/SignUp';

import * as ROUTES from './constants/routes';
import CreateAccountPage from './pages/CreateAccountPage';
import TestComponent from './components/Test';

const App = () => (
  <Router>
    <Route exact path={ROUTES.SIGN_UP} component={CreateAccountPage} />
    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route exact path={ROUTES.ABOUT} component={AboutPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignUp} />
    <Route exact path={ROUTES.HOME} component={HomePage} />
    <Route exact path={ROUTES.FAQ} component={FaqPage} />
    <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    <Route exact path={"/test"} component={TestComponent} />
  </Router>
)

export default App;
