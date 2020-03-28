import React, { Component } from "react";

function Note(props) {
  console.log(props.todo);

  return (
    <ul>
      {props.todo.length != 0 ? (
        props.todo.map((i, index) => (
          <li key={index} style={{ padding: "0px" }}>
            {i.ToDo}
          </li>
        ))
      ) : (
        <span></span>
      )}
    </ul>
  );
}

export default Note;
