import React, { Component } from "react";

function Notes(props) {
  console.log(props.goal);

  return (
    <ul>
      {props.goal.length != 0 ? (
        props.goal.map((i, index) => (
          <li key={index} style={{ padding: "0px" }}>
            {i.Affirmation}
          </li>
        ))
      ) : (
        <span></span>
      )}
    </ul>
  );
}

export default Notes;
