import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from './components/dashboard/Dashboard'
import DetailProjects from "./components/project/DetailProject";
import CreateProject from "./components/project/CreateProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/project-create' component={CreateProject} />
            <Route path='/project/:id' component={DetailProjects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
