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
  componentDidMount= async()=>{
    const {userSession} = this.props.auth;
    const {history} = this.props;
    if(!userSession.isUserSignedIn() && userSession.isSignInPending()){
      userSession.handlePendingSignIn()
        .then(userData=>{
          if(!userData.username){
            throw new Error('This app requires username')
          }
          console.log(userData)
          this.props.setCurrentUser()

          history.push("/dashboard")
        })
        .catch(err=>{
          console.log(err)
        })
      
    }
  }
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Euphony</Navbar.Brand>
      <Nav className="mr-auto">
        <Button onClick={this.logInHandle}>Enter with Blockstack</Button>
      </Nav>
    </Navbar>
      </div>
    )
  }
}
const mapStateToProps = (state)=>({
    auth:state.auth
})

export default connect(mapStateToProps,{setCurrentUser})(withRouter(Navigation));