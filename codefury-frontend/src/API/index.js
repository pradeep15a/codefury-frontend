import axios from 'axios';

const API = axios.create({ baseURL: 'https://codefury-backend.vercel.app/' });

export const createProject = (newProject) => API.post('/projects', newProject);
export const fetchProjects = () => API.get('/projects');

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
