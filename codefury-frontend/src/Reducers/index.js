import { combineReducers } from 'redux';

import authreducer from './auth';
import projects from './projectReducer'

export default combineReducers({
    authreducer, projects
})
