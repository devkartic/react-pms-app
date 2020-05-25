import React from "react";
import SummeryProjects from "./SummeryProjects";

const ListProjects = ({projects}) => {
    return(
      <div className="project-list section">
          { projects && projects.map((project)=>{
              return(
                  <SummeryProjects project={project} key={project.id}/>
              );
          }) }
      </div>
    );
}

export default ListProjects;