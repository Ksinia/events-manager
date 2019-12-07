import request from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";

const baseUrl = "http://localhost:4000";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  // when the state already contains events, we don't fetch them again
  if (getState().events) return;

  // a GET /events request
  request(`${baseUrl}/event`)
    .then(response => {
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body.events)); //added .events because now due to pagination our api returns qty of events and events
    })
    .catch(console.error);
};
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const LOAD_EVENT = "LOAD_EVENT";

const loadEventSuccess = event => ({
  type: LOAD_EVENT,
  event
});

export const loadEvent = id => dispatch => {
  request(`${baseUrl}/event/${id}`)
    .then(data => dispatch(loadEventSuccess(data.body)))
    .catch(console.error);
};

export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";

const deleteEventSuccess = id => ({
  type: EVENT_DELETE_SUCCESS,
  payload: id
});

export const deleteEvent = id => dispatch => {
  request
    .delete(`${baseUrl}/event/${id}`)
    .then(data => dispatch(deleteEventSuccess(id)))
    .catch(console.error);
};

export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS";

const updateEventSuccess = updatedEvent => ({
  type: UPDATE_EVENT_SUCCESS,
  payload: updatedEvent
});

export const updateEvent = (id, data) => dispatch => {
  request
    .patch(`${baseUrl}/event/${id}`)
    .send(data)
    .then(response => dispatch(updateEventSuccess(response.body)))
    .catch(console.error);
};
