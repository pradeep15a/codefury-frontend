import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ( {
    project
} ) => {
    const navigate = useNavigate();
    const [invested, setInvested] = useState(false);
    const handleInvest = () => {
        setInvested((prevInvested) => (!prevInvested))
    }
    const user = JSON.parse(localStorage.getItem('profile'));
    return (  
        <div className="project-card">
            <div className="project-details-container">
                <h2 className="project-heading">Client Name : {project.clientName}</h2>
                <h3 className="project-heading">Domain : {project.domain}</h3>
                <p className="project-details">Description : {project.description}</p>
                <p className="project-details">Funding Required : {project.projectValue}</p>
                <p className="project-num">Contact Number :<a href={`tel:${project.contact}`}>{project.contact}</a></p>
                <p className="project-mail">Client email : <a href={`mailto:${project.clientEmail}`}>{project.clientEmail}</a> </p>
                {
                    user &&
                    <button onClick={handleInvest}>{invested ? 'Interested' : 'Interested to invest'}</button> 
                    
                }
            </div>
        </div>
    );
}
 
export default ProjectCard;