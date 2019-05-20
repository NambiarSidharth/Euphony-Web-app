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
      
    }else{
      history.push("/dashboard")
    }
  }
  render() {
    const {userSession} = this.props.auth;
    return (
      <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Euphony</Navbar.Brand>
      {
        (!userSession.isUserSignedIn())?<Nav className="mr-auto">
        <Button onClick={this.logInHandle}>Enter with Blockstack</Button>
      </Nav>:<Nav className="mr-auto">
      <Button onClick={this.logOutHandle}>Log Out</Button>
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