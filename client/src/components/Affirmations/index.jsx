import React, { Component } from "react";
import "./style.css";
import AffirmationPicForm from "../AffirmationPicForm"
import API from "../../utils/API";

class Affirmations extends Component {
    state = {
        affirmationArray: [],
        goal: ""
      
    }

    componentDidMount(){
        
        this.getAffirmations();
        
    }

    getAffirmations = () => {
        API.GetAffirmation().then(res => {
            console.log(res.data)
            this.setState({affirmationArray: res.data})
        })
    }
    



    handleFormSubmit = () => {
        alert(this.state.goal);
        let getAffirmations = this.getAffirmations
        //to create an express route to create this entry into your mongodb
        //create api 
        //update the user id to the person who logs in!!!!! right now just 1 ---
        API.CreateAffirmation({
            Affirmation: this.state.goal,
            
         }).then(function (data) {
             console.log(data)  
            getAffirmations();
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
                        goalValue={this.state.affirmationArray}
                        handleFormSubmit={this.handleFormSubmit} 
                        handleInputChange={this.handleInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}


export default Affirmations;

