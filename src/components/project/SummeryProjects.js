import React from "react";

const SummeryProjects = ({project}) => {
    return(
        <div className="card z-depth-0 project-summery">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>{ project.content }</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    );
}

export default SummeryProjects;