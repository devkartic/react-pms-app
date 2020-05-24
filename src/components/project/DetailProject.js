import React from "react";

const DetailProjects = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project Title-{id}</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eligendi id maxime nesciunt saepe? Autem, consectetur, culpa cumque et expedita fugiat iure minima nam nisi odio, officia quasi quia sunt!</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by the next ninja</div>
                    <div>2nd september, 3am</div>
                </div>
            </div>
        </div>
    );
}

export default DetailProjects;