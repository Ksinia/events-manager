import React from "react";
export default function CreateEventDetails(props) {
  return props.event ? (
    <div>
      <h1>{props.event.name}</h1>
      <i>{props.event.date}</i>
      <p>{props.event.description}</p>
      <button onClick={props.onClick}>Delete event</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
