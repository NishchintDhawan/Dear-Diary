import {FETCH_ALL,CREATE,DELETE,UPDATE} from '../constants/actionTypes';
export default (entries=[], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return [...entries, action.payload];
        
        case UPDATE: 
            return entries.map((entry) => entry._id === action.payload._id ? action.payload: entry);

        case DELETE:
            return entries.filter((entry) => entry._id!==action.payload);

        default: 
        return entries;
    }
};
