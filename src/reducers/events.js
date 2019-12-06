import { EVENTS_FETCHED, EVENT_CREATE_SUCCESS } from "../actions/events";
const initialState = null;

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case EVENTS_FETCHED: {
      return action.events; //because we called this thing 'events' instead of payload
    }
    case EVENT_CREATE_SUCCESS: {
      if (state) {
        return [...state, action.event];
      }
    }
    default: {
      return state;
    }
  }
}
