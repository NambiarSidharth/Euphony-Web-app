import React, { Component } from 'react'
import {Navbar, Button} from "react-bootstrap"
import {withRouter,Link} from "react-router-dom"
import {connect} from "react-redux"
import PropTypes from "prop-types"
export class Navigation extends Component {

    onLogin(){
    
    }
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Euphony</Navbar.Brand>
      <Nav className="mr-auto">
        <Button onClick={this.onlogin}>Enter with Blockstack</Button>
      </Nav>
    </Navbar>
      </div>
    )
  }
}
const mapStateToProps = (state)=>({
    auth:state.auth
})

export default connect(mapStateToProps)(Navigation);