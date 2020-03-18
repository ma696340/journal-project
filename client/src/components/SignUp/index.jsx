import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class SignUp extends Component {
    constructor() {
        this.state = {
            name: "",
            username: "",
            email: "",
            password: ""
            
        };
    };

    
render() {  
    
    
<form action="/signup" method="post">

{/* User Name Enter  */}      
    <div>
        <label>Name:</label>
        <div>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                  invalid: errors.name
                  })}
                />
        </div>
    </div>

{/* User chooses a username */}

    <div>
        <label>Choose UserName:</label>
        <div>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="username"
                  type="text"
                  className={classnames("", {
                  invalid: errors.name
                  })}
                />
        </div>
    </div>

{/* User enters email */}    

    <div>
        <label>Email:</label>
        <div>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="email"
                  type="text"
                  className={classnames("", {
                  invalid: errors.name
                  })}
                />
        </div>
    </div>

{/* User chooses a password */}

    <div>
        <label>Password:</label>
        <div>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="email"
                  type="text"
                  className={classnames("", {
                  invalid: errors.name
                  })}
                />
        </div>
    </div>




    <div>
        <buttom type="submit" value="Log In"/>
    </div>

</form>

};

SignUp.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };

}

};


export default withRouter(SignUp);



