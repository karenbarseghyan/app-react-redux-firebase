import React from 'react'

const ProjectDetails = (props) =>  {
    const id = props.match.params.id;
    return (
        <div className = "container section project-details">
            <div className = "card">
                <div className = "card-content">
                    <span className = "card-title">Project Title {id}</span>
                    <p>Lorem Ipsum tratratra tratratra tratratra tratratra</p>
                </div>
                <div className = "card-action grey lighten-4 grey-text">
                    <div>Posted by Karen Barseghyan</div>
                    <div>Today 1 a.m.</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
