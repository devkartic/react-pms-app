import React from "react";
import Notification from "./Notification";
import ListProjects from "../project/ListProjects";

class Dashboard extends React.Component{
    render() {
        return(
          <div className="container">
              <div className="row">
                  <div className="col s12 m6"><ListProjects/></div>
                  <div className="col s12 m5 offset-m1"><Notification/></div>
              </div>
          </div>
        );
    }
}

export default Dashboard;