import {USER_DATA, ADD_USER, REMOVE_USER} from "../actionTypes/index";

const initialState = {
    data: []
  };
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case USER_DATA: {
        return {
          ...state,
          data: [ ...state.data, action.payload.user ]
        }
      }
      case ADD_USER: {
        return {
            ...state,
            data: [...state.data, action.payload.addus]
        }
      }
      case REMOVE_USER: {
        return {
            data: state.data.filter(datuser => datuser !== action.payload)
        }
      }
      default:
        return state;
    }
  }