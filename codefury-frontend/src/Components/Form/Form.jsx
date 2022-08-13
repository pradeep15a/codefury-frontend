import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../Actions/projects';
import './Form.css';

const initialProjectData = { clientName : ' ', domain: ' ', description : ' ', clientEmail : ' ' ,contact : 0, projectValue : 0};

export default function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState(initialProjectData); 

    const handleChange = (e) => {
        setProjectData({ ...projectData, [e.target.name] : e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(projectData);
        dispatch(createProject({ ...projectData }));
        clear();
    }

    const clear = () => {
        setProjectData(initialProjectData);
    }
    const handleRedirect = () => {
        navigate('/projects');
    }

  return (
    <div className="main-form-container">
        <div className="container">
        <div className="wrapper-1">
            <div className="heading">
                <h2>Project Idea</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <input type="text"  name="clientName" placeholder="Name*" required onChange={handleChange} />
                </div>
                <div className="row">
                    <select name="domain" id="domain" onChange={handleChange} >
                        <option value="Medical">Medical</option>
                        <option value="Education" selected>Education</option>
                        <option value="E Commerce">E Commerce</option>
                        <option value="IT Industry">IT Industry</option>
                        <option value="Banking">Banking</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Online Services">Online services and marketing</option>
                    </select>
                </div>
                <div className="row">
                    <textarea name="description"  placeholder="Project Description" required onChange={handleChange} />
                </div>
                <div className="row" id="mail">
                    <input type="email" name="clientEmail" placeholder="Email*" required onChange={handleChange} />
                </div>
                <div className="row">
                    <input type="number" name="contact" placeholder="Phone number*" required onChange={handleChange} />
                </div>
                <div className="row">
                    <input type="number" name="projectValue" placeholder="Project value*" required onChange={handleChange} />
                </div>
                <div className="row">
                    <button type='submit'>Submit</button>
                </div>
                <div className="row">
                    <button id='handle' onClick={handleRedirect}>Go To Projects</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    
  );
}
