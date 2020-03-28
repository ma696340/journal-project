import React from "react";
import "./style.css";
import AffirmationTabs from "../AffirmationTabs";

export default function AffirmationPicForm(props) {
  console.log(props);
  return (
    <div className="backgroundImage">
      <AffirmationTabs
        goalValue={props.goalValue}
        handleFormSubmit={props.handleFormSubmit}
        handleInputChange={props.handleInputChange}
      />
    </div>
  );
}
