import React, {Component} from "react";
import {connect} from 'react-redux'
import { createProject} from "../../store/actions/ProjectAction";

class CreateProject extends Component{
    state = {
        title: '',
        content: ''
    }

    onsubmitHandler = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
    }

    onchangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.onsubmitHandler} className="white">
                    <h5 className="grey-text text-darken-3 center-align">Project Create</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={this.onchangeHandler} id="title"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" onChange={this.onchangeHandler} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pik lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps) (CreateProject);