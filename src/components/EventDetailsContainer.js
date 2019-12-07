import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent, updateEvent, deleteEvent } from "../actions/events";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id));
  }

  state = { editMode: false };

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the event details
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    });
  };

  onChange = event => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });
    this.props.updateEvent(this.props.event.id, this.state.formValues);
  };

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id);
    this.props.history.push("/"); //redirection!
  };

  render() {
    return (
      <EventDetails
        event={this.props.event}
        onClick={this.onDelete}
        onEdit={this.onEdit}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        formValues={this.state.formValues}
        editMode={this.state.editMode}
      />
    );
  }
}

const mapStateToProps = state => ({
  event: state.event
});

export default connect(mapStateToProps, {
  loadEvent,
  deleteEvent,
  updateEvent
})(EventDetailsContainer);
