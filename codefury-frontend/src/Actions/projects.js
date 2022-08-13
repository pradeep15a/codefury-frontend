import * as api from '../API/index.js';
import { CREATE, FETCH, INVEST } from '../Constants/constants.js';
import swal from '@sweetalert/with-react';


export const createProject = (projectData) => async(dispatch) => {
    try {
        const { data } = await api.createProject(projectData);
        swal("Post" , "Project posted successfully", 'success')

        dispatch({ type: CREATE, payload: data });
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchProjects = () => async(dispatch) => {
    try {
        const { data } = await api.fetchProjects();

        // console.log(data.data[0]);
        dispatch({ type: FETCH , payload: data})
    } catch (error) {
        console.log(error);
    }
}

