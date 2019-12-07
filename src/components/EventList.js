import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventList extends Component {
  render() {
    return this.props.events ? (
      <ul>
        {this.props.events.map(event => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    ) : (
      "Loading..."
    );
  }
}

export default EventList;
