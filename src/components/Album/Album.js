import React,{Component} from 'react';
import classNames from 'classnames';
import {Button} from "react-bootstrap";
import TrendingList from "./TrendingList";
import MTList from "./MTList";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {getMTSongs,getTrendingSongs} from "../../Store/actions/songAction"
// const styles = theme => ({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     height: 90,
    
//     justifyContent: 'center',
//     padding: '0 30px',
//     boxShadow: '0 2px 2px 1px rgba(255, 105, 135, .3)',
//   },
//   appBar: {
//     position: 'relative',
//   },
//   icon: {
//     marginRight: theme.spacing.unit * 2,
//   },
//   heroUnit: {
//     backgroundColor: theme.palette.background.paper,
//   },
//   heroContent: {
//     maxWidth: 600,
//     margin: '0 auto',
//     padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
//   },
//   heroButtons: {
//     marginTop: theme.spacing.unit * 4,
//   },
//   layout: {
//     width: 'auto',
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
//       width: 1100,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   cardGrid: {
//     padding: `${theme.spacing.unit * 8}px 0`,
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing.unit * 6,
//   },
//   dividerFullWidth: {
//     marginLeft: 130,
//     marginRight: 130,
//   },
// });

// const cards = [1, 2, 3, 4];

// function Album(props) {
//   const { classes } = props;

 
// }


export class Album extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      };
    };
    logInHandle=()=>{
        const {userSession} = this.props.auth;
        userSession.redirectToSignIn();
    }
    
    componentDidMount() {
    this.props.getMTSongs();
    this.props.getTrendingSongs();   
    }
    render() {
        const {trending,monthlytop} = this.props.songs;
        return (
            <React.Fragment>
                  <header>
              </header>
              <main>
                {/* Hero unit */}
                <div>
                  <div>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      MUSIC for YOU
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                      Stay Updated, Stay Tuned!
                    </Typography>
                    <div>
                      <Grid container spacing={16} justify="center">
                        <Grid item>
                          <Button variant="dark" onClick={this.logInHandle}>
                          login with blockstack
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
                <div>
                </div>
                <div>
                <Typography gutterBottom variant="h5" component="h2">Trending</Typography>
                </div>
                <Divider variant="middle" />
                <TrendingList trending={trending}/>
                <div>
                <Typography gutterBottom variant="h5" component="h2">Monthly Top</Typography>
                </div>
                <Divider variant="middle"/>
                <MTList mt={monthlytop}/>
              </main>
              {/* Footer */}
              <footer>
                <Typography variant="h6" align="center" gutterBottom>
                  Euphony and Co.
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  MSRIT
                </Typography>
              </footer>
              {/* End footer */}
            </React.Fragment>
          );
    }
}

Album.propTypes= {
    songs:PropTypes.object.isRequired,
    getMTSongs:PropTypes.func.isRequired,
    getTrendingSongs:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
    songs:state.songs
})

export default connect(mapStateToProps,{getMTSongs,getTrendingSongs})(Album);