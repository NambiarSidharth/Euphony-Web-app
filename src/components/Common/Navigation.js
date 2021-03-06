import React, { Component } from 'react'
import {Navbar, Button,Nav} from "react-bootstrap"
import {withRouter,Link} from "react-router-dom"
import {connect} from "react-redux"
import {setCurrentUser} from "../../Store/actions/authAction";
import PropTypes from "prop-types"

export class Navigation extends Component {

  logInHandle=()=>{
    const {userSession} = this.props.auth;
    userSession.redirectToSignIn();
  }
  logOutHandle=()=>{
    const {userSession} = this.props.auth
    userSession.signUserOut()
    const {history}=this.props
    history.push('/')
  }
  componentDidMount= async()=>{
    const {userSession} = this.props.auth;
    const {history} = this.props;
    console.log(userSession.isUserSignedIn(),userSession.isSignInPending())
    if(!userSession.isUserSignedIn() && userSession.isSignInPending()){
      userSession.handlePendingSignIn()
        .then(userData=>{
          if(!userData.username){
            throw new Error('This app requires username')
          }
          console.log(userData)
          this.props.setCurrentUser(userData)

          history.push("/dashboard")
        })
        .catch(err=>{
          console.log(err)
        })
      
    }
  }
  render() {
    const {userSession} = this.props.auth;
    return (
      <div>
      <Navbar style={{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}>
      <Navbar.Brand className="text-light">Euphony</Navbar.Brand>
      
      {
        (!userSession.isUserSignedIn())?<Nav className="mr-auto">
        <Button onClick={this.logInHandle}>Enter with Blockstack</Button>
      </Nav>:<Nav className="navbar align-content-end">
      <div className="mr-auto" style={{marginLeft:"40rem"}}>
      <Link to={`/dashboard`} className="mh2 text-light">Dashboard</Link>
      <Link to={`/explore`} className="mh2 text-light">Explore Songs</Link>
      <Link to="/addSong" className="btn btn-outline-success mh2">Add Song</Link>
      </div>
      <Button variant="outline-light" onClick={this.logOutHandle}>Log Out</Button>
    </Nav>
    }
    </Navbar>
      </div>
    )
  }
}
const mapStateToProps = (state)=>({
    auth:state.auth
})

export default connect(mapStateToProps,{setCurrentUser})(withRouter(Navigation));