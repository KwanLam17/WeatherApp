import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    //console.log('Action received' , action);
    switch(action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]);  // creates new state, array, with new data
            //return [ action.payload.data, ...state ]; 
    }

    return state;
}