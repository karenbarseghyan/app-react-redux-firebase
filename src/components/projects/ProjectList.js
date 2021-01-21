import React from 'react';

const ProjectList = () => {
    return (
        <div className = "project list section">

            <div className = "card project-summary purple lighten-5">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title red-text"> Project Title 1 </span>
                    <p>Posted By Karen</p>
                    <p className="grey-text">Today, 1 a.m</p>
                </div>
            </div>

            <div className = "card project-summary purple lighten-5">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title red-text"> Project Title 2 </span>
                    <p>Posted By Christina</p>
                    <p className="grey-text">Today, 2 a.m</p>
                </div>
            </div>

            <div className = "card project-summary purple lighten-5">
                <div className = "card-content grey-text text-darken-3">
                    <span className = "card-title red-text"> Project Title 3 </span>
                    <p>Posted By Ruben</p>
                    <p className="grey-text">Today, 3 a.m</p>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectList