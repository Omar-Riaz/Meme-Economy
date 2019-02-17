import React, { Component } from 'react';
import SignIn from '../components/SignIn'
import '../App.css';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router';
import { Link } from 'react-router-dom'
import '../css/Signin.css'
class App extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div className="center">
        <SignIn var = {this.props}/>
        <div style={{'boxShadow': 'none', 'padding': '30px 40px 45px 45px', }}>
        <center>
        <div style={{'max-width': '375px', 'min-width': '200px'}}>
        <Link to="/Homepage">Register</Link>
        {/* <Button style={{'boxShadow': 'none', 'margin-top':'10px'}}
          onClick={() => {this.props.history.push('/Homepage')}}
            type="submit"
            fullWidth
            variant="contained"
            color="red"
          >
            Register
          </Button> */}
            </div>
            </center>
            </div>
            
      </div>
    );
  }
}

export default App;
