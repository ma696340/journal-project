import React, { Component } from "react";
import "./style.css";
import CalendarPicForm from "../CalendarPicForm";
import API from "../../utils/API";

class Calendar extends Component {
  state = {
    todoArray: [],
    todo: ""
  };

  componentDidMount() {
    this.getToDos();
  }

  getToDos = () => {
    API.GetToDo().then(res => {
      console.log(res.data);
      this.setState({ todoArray: res.data });
    });
  };

  handleFormSubmit = () => {
    alert(this.state.todo);
    let getToDos = this.getToDos;
                    //to create an express route to create this entry into your mongodb
                    //create api
                    //update the user id to the person who logs in!!!!! right now just 1 ---
    API.CreateToDo({
      ToDo: this.state.todo
    }).then(function(data) {
      console.log(data);
      getToDos();
    });
  };
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    console.log(value);
  };
  render() {
    return (
      <div className="background">
        <form>
          <div className="form-group">
            <h1 className="title">
              Let's List a Few Things <br /> for Today ...
            </h1>
            <CalendarPicForm
              todoValue={this.state.todoArray}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Calendar;
