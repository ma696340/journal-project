import React from "react";
import "./style.css";
import SignInPicForm from "../SignInPicForm"
import SignUpText from "../SignUpText"

function SignUp(props) {


    return (
        <div className="background">
            <form>
            <div className="form-group">

            <h1 className="title">
Excited for you to join ... 
                </h1>  
<SignInPicForm />
<SignUpText />





            </div>
            </form>
        </div>
    );
}

export default SignUp;