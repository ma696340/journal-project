import React from "react";
import "./style.css";
import AffirmationTabs from "../AffirmationTabs";

export default function AffirmationPicForm(props){

    return(

        <div className="backgroundImage" >
            <AffirmationTabs   
            goalValue={props.goalValue}
            intentionValue={props.intentionValue}
            affirmationValue={props.affirmationValue}
            handleFormSubmit={props.handleFormSubmit} 
            handleInputChange={props.handleInputChange} />


         
        </div>
    )
}