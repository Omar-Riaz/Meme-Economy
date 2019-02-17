import React from 'react';
import PropTypes from 'prop-types';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import imag from '../images/login.png';
import Pikachu from 'react-avatar';
import Avatar from 'react-avatar';
import '../css/Signin.css'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    marginRight: theme.spacing.unit,
    marginTop: '-20px',
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '-30px',
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignIn extends React.Component {

   constructor(props){
      super(props);
      this.state={
        username:'',
        password:''
      }
  }
  render() {
  const classes = this.props; 
  return (
    <main className={classes.main}>
      <center>
      <CssBaseline />
      <Paper className={classes.paper} style= {{backgroundColor: '#fafafa', 'boxShadow': 'none'}}>
        <Avatar 
          name={this.props.fullName}
          color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
          round={true}
          size="100"
          src={imag}
        />
          
        {/* <Avatar className={classes.avatar}> */}
          {/* <LockOutlinedIcon /> */}
          {/* <img src={imag} width='60'height='60'/>
        </Avatar> */}
      
        <Typography component="h1" variant="h5">
          
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <Button style={{'boxShadow': 'none', backgroundColor: "#B6C8BC"}}
                    onClick={() => {
                      fetch('https://jsonplaceholder.typicode.com/todos/1'
                      // , {
                      //   method: "post",
                      //   headers: {
                      //     'Accept': 'application/json',
                      //     'Content-Type': 'application/json'
                      //   },body: JSON.stringify({
                      //     email: "ihhrfeoiwho@jfiorhjoi.com",//this.props.email,
                      //     password: "hfihrewoifhh",//this.props.password,
                      //   })}
                        )
                      .then((res) => res.json())
                      .then((data) => {
                        console.log('data:', data);
                        window.location.pathname = '/Homepage/'+data.id;
                      })
                      .catch((error) => {

                      })}}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>

          
        </form>
      </Paper>
      </center>
    </main>
  );
}
} 

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);