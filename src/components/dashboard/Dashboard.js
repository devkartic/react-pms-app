import React from "react";
import Notification from "./Notification";
import ListProjects from "../project/ListProjects";
import {connect} from "react-redux";

class Dashboard extends React.Component{
    render() {
        // console.log(this.props);
        const { projects } = this.props;
        return(
          <div className="container">
              <div className="row">
                  <div className="col s12 m6">
                      <ListProjects projects={projects}/>
                  </div>
                  <div className="col s12 m5 offset-m1"><Notification/></div>
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps) (Dashboard);