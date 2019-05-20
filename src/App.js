import React from 'react';
import {Route,BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Common/Navigation";
import Landing from "./components/Common/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import AddSong from "./components/AddSong/AddSong"
import {connect} from "react-redux";
import PropTypes from "prop-types"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Navigation />
      <Route exact path="/" component={Landing}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/addSong" component={AddSong}/>
    </div>
    </Router>
  );
}

export default App;
