import React from "react";
import CreateEventForm from "./CreateEventForm";

export default function CreateEventDetails(props) {
  return props.editMode ? (
    <CreateEventForm
      values={props.formValues}
      onEdit={props.onEdit}
      onChange={props.onChange}
      onSubmit={props.onSubmit}
    />
  ) : props.event ? (
    <div>
      <h1>{props.event.name}</h1>
      <i>{props.event.date}</i>
      <p>{props.event.description}</p>
      <button onClick={props.onClick}>Delete event</button>
      <button onClick={props.onEdit}>Edit event</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
