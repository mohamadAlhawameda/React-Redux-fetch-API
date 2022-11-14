import {USER_DATA, ADD_USER, REMOVE_USER} from '../actionTypes';


const API = "https://random-data-api.com/api/v2/users";

export const getdata = (dispatch) => {
  fetch(API)
    .then(res => res.json())
    .then(json => {
      const user = {
        firstName: json.first_name,
        lastName: json.last_name,
        userName: json.username,
      }
      dispatch({
        type: USER_DATA,
        payload: {
          user: user
        }
      }); 
    })

}
export const add = user =>({
    type:ADD_USER,
    payload: {
        addus: user
    }
})
export const remove = user =>({
    type:REMOVE_USER,
    payload: {
        removeus: user
    }
})