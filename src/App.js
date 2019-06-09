import React from 'react';
import {Route,BrowserRouter as Router} from "react-router-dom";
import Navigation from "./components/Common/Navigation";
import Landing from "./components/Common/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import AddSong from "./components/AddSong/AddSong";
import Song from "./components/SongPlayer/Song"; 
import ExploreSongs from "./components/MySongsList/ExploreSongs";
import Album from "./components/Album/Album";
import {connect} from "react-redux";
import './R.css';
import "tachyons";
import PropTypes from "prop-types"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Navigation />
      <Route exact path="/" component={Landing}/>
      <div className="container">
      <Route exact path="/album" component={Album} />
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/addSong" component={AddSong}/>
      <Route exact path="/song/:songid" component={Song}/>
      <Route exact path="/explore" component={ExploreSongs} />
    </div>
    </div>
    </Router>
  );
}

export default App;
