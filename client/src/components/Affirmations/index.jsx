import React, { Component } from "react";
import "./style.css";
import AffirmationPicForm from "../AffirmationPicForm"
import API from "../../utils/API";

class Affirmations extends Component {
    state = {
        goal: "",
        intention: "",
        affirmation: "",
    }

    handleFormSubmit = () => {
        alert(this.state.affirmation);
        //to create an express route to create this entry into your mongodb
        //create api 
        //update the user id to the person who logs in!!!!! right now just 1 ---
        API.CreateAffirmation({
            goal: this.state.goal,
            intention: this.state.intention,
            affirmation: this.state.affirmation,
            userId: "1"
        }).then(function (data) {
            console.log(data);
        })

    }
    handleInputChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })

        console.log(value)
    }
    render() {
        return (
            <div className="background">
                <form>
                    <div className="form-group">

                        <h1 className="title">
                            Let's Set a Goal <br /> in Motion ...
                        </h1>
                        <AffirmationPicForm 
                        goalValue={this.state.goal} 
                        intentionValue={this.state.intention}
                        affirmationValue={this.state.affirmation}
                        handleFormSubmit={this.handleFormSubmit} 
                        handleInputChange={this.handleInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}


export default Affirmations;

