import React from "react";

function CreateEventForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          id="name"
          type="text"
          onChange={props.onChange}
          value={props.values.name}
        ></input>
        <label htmlFor="date">Date: </label>
        <input
          name="date"
          id="date"
          onChange={props.onChange}
          value={props.values.date}
        ></input>
        <label htmlFor="description">Description: </label>
        <input
          name="description"
          id="description"
          onChange={props.onChange}
          value={props.values.description}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateEventForm;
