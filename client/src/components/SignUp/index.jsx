import React, { Component } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../../utils/API"
/* const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
})); */
/* const classes = useStyles(); */


export default class FormPropsTextFields extends Component {

  state = {
    name: "",
    email: "",
    username: "",
    password: ""

  }
  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (event) => {

    console.log(this.state.username, this.state.password)
    API.SignUp({
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }).then(function (response) {
      window.location.href = "/home"
    })
  }



  render() {
    return (
      <form noValidate autoComplete="off">
        <div>
          <Container maxWidth="sm">
            <TextField
              id="standard-read-only-input"
              label="Name"
              defaultValue=""
              InputProps={{
                readOnly: false,
              }}

            />

            <br />
            <TextField
              id="standard-read-only-input"
              label="Email"
              defaultValue=""
              InputProps={{
                readOnly: false,
              }}
            />

            <br />

            <TextField required id="standard-required"
              onChange={this.handleInputChange}
              name="username"
              value={this.state.username}
              label="Create Username"
              defaultValue="" />

            <br />

            <TextField
              id="standard-password-input"
              label="Create Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
              autoComplete="current-password"
            />

            <br />
            <br />
            <Button onClick={this.handleFormSubmit} >Sign Up</Button>
            <br />
          </Container>
        </div>
      </form>
    );
  }


}