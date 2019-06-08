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
        const {trending,monthlytop} = this.props.song;
        
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
                {
                <TrendingList className="mv2" trending={trending}/>
                }
                <div>
                <Typography gutterBottom variant="h5" component="h2">Monthly Top</Typography>
                </div>
                <Divider variant="middle"/>
                {
                <MTList className="mv2" mt={monthlytop}/>
                }
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
    song:PropTypes.object.isRequired,
    getMTSongs:PropTypes.func.isRequired,
    getTrendingSongs:PropTypes.func.isRequired
}

const mapStateToProps = state=>({
    song:state.song,
    auth:state.auth
})

export default connect(mapStateToProps,{getMTSongs,getTrendingSongs})(Album);