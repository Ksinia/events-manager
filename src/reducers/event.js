import { LOAD_EVENT, UPDATE_EVENT_SUCCESS } from "../actions/events";
const initialState = null;

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EVENT: {
      return action.event; //because we called this thing 'events' instead of payload
    }
    case UPDATE_EVENT_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
