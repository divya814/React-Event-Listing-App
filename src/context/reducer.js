import {ADD_TODO, REMOVE_TODO} from "./action.types";

// on the basis of what action is called we want to provide a reducer on that

export default (state,action)=>{
    switch (action.type) {
        case ADD_TODO:
            return[...state, action.payload]
        //...state-> load state and payload carries the information of action type-> a string or object
        
        case REMOVE_TODO:
            // filter allow us to give a callback
            return state.filter(todo => todo.id != action.payload)
        default:
            return state;
    }
};