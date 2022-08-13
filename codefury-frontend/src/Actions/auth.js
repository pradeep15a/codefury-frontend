import * as api from '../API/index.js';
import { AUTH } from '../Constants/constants.js';
import swal from '@sweetalert/with-react';

export const signIn = (formData,navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH , data})
        swal("Login success", data.result.name, "success")
        navigate('/projects');
    } catch (error) {
        // console.log(error.response.data.message);
        swal("Error", error.response.data.message, "warning")
    }
}

export const signUp = (formData,navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH , data});
        swal("Sign UP success", data.result.name, "success")
        navigate('/projects');
    } catch (error) {
        console.log(error.response.data.message);
        // alert('Error: ' + error.response.data.message);
        swal("Error", error.response.data.message, "warning")
        
    }
}