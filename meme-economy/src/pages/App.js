import React, { Component } from 'react';
import SignIn from '../components/SignIn'
import '../App.css';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router';
class App extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div>
        <SignIn var = {this.props}/>


        <div style={{backgroundColor: '#B6C8BC', 'boxShadow': 'none', 'padding': '30px 40px 45px 45px', }}>
        <center>
        <div style={{'max-width': '375px', 'min-width': '200px'}}>

        <Button style={{'boxShadow': 'none', 'margin-top':'10px', backgroundColor: '#FFFFFF'}}
          onClick={() => {this.props.history.push('/Homepage')}}
            type="submit"
            fullWidth
            variant="contained"
            color="red"
          >
            Register
          </Button>
            </div>
            </center>
            </div>
            
      </div>
    );
  }
}

export default App;
