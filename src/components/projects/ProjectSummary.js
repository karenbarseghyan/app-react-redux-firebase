import React from 'react'

const ProjectSummary = (project) => {
    return (
        <div className = "card project-summary purple lighten-5">
            <div className = "card-content grey-text text-darken-3">
                <span className = "card-title red-text"> {project.title}</span>
                <p>Posted By Karen</p>
                <p className="grey-text">Today, 1 a.m</p>
            </div>
        </div>
    )
}

export default ProjectSummary
