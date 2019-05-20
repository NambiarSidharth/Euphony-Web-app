import React, { Component } from 'react'
import {Link} from "react-router-dom"
export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
        <Link to="/addSong" className="btn btn-info">Add Song</Link>
        </div>
      </div>
    )
  }
}

export default Dashboard
