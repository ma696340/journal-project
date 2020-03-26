import React, { Component } from "react";
import "./style.css";
import CalendarPicForm from "../CalendarPicForm"
import CalendarCard from "../HomePageCard"
import CalendarTabs from "../CalendarTabs"
import API from "../../utils/API";

class Calendar extends Component {
    state = {
        todo: ""
    }

    handleFormSubmit = () => {
        alert(this.state.todo);
        //to create an express route to create this entry into your mongodb
        //create api 
        //update the user id to the person who logs in!!!!! right now just 1 ---
        API.CreateToDo({
            ToDo: this.state.todo,
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
                            Let's Set Something <br /> in Motion ...
                        </h1>
                        <CalendarPicForm 
                        todoValue={this.state.todo} 
                        handleFormSubmit={this.handleFormSubmit} 
                        handleInputChange={this.handleInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}


export default Calendar;

