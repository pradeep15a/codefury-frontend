import { CREATE, FETCH, INVEST } from '../Constants/constants.js';

export default (projects = [], action ) => {
    switch (action.type) {
        case CREATE:
            return [...projects, action.payload.data];
        case FETCH:
            return action.payload;
        default:
            return projects;
    }
}