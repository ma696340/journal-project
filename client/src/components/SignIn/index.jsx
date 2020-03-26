import React from "react";
import "./style.css";
import SignInPicForm from "../SignInPicForm"
import SignInText from "../SignInText"

function SignIn(props) {


    return (
        <div className="background">
            <form>
            <div className="form-group">

            <h1 className="title">
Please Sign in ... 
                </h1>  
<SignInPicForm />
<SignInText />





            </div>
            </form>
        </div>
    );
}

export default SignIn;