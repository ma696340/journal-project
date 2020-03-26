import React from "react";
import "./style.css";
import CalendarTabs from "../CalendarTabs";

export default function CalendarPicForm(props){

    return(

        <div className="backgroundImage" >
            <CalendarTabs   
            todoValue={props.todoValue}
            handleFormSubmit={props.handleFormSubmit} 
            handleInputChange={props.handleInputChange} />


         
        </div>
    )
}