import React, { Component } from 'react';
// const ipfsHash1="QmNmBKaBXqutvz6ozwRyaf3aaUFYbvMWGMi7gUXegwhLby"
// export class Landing extends Component {
//   componentDidMount(){
//   //   console.log("started")
//   //   ipfs.get(ipfsHash1,(err,files)=>{
//   //     console.log(files)
//   //     console.log(err)
//   // })
//   }
//   render() {
//     return (
//       <div>
//         Landing Page
//       </div>
//     )
//   }
// }

// export default connect(null,{getSong})(Landing)
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Jumbotron} from 'react-bootstrap';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {getSong} from "../../Store/actions/songAction"
import {connect} from "react-redux"
import ipfs from "../../utils/IPFS"
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 90,
    
    justifyContent: 'center',
    padding: '0 30px',
    boxShadow: '0 2px 2px 1px rgba(255, 105, 135, .3)',
  },
});

function R(props) {
  const { classes } = props;
    return (
      <React.Fragment>
      <CssBaseline />
      <header className="App-header">
          <Button raised variant="contained" color="secondary" size="large" className={classNames(classes.margin, classes.root)}
          component={Link} to="/Album">
            LISTEN NOW
          </Button>
        
      </header>
      </React.Fragment>
    );
}

R.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(R);