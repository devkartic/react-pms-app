import React, {Component} from "react";

class SignIn extends Component{
    state = {
        email: '',
        password: ''
    }

    onsubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
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
                  <h5 className="grey-text text-darken-3 center-align">Sign In</h5>
                  <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input type="email" onChange={this.onchangeHandler} id="email"/>
                  </div>
                  <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <input type="password" onChange={this.onchangeHandler} id="password"/>
                  </div>
                  <div className="input-field">
                      <button className="btn pik lighten-1 z-depth-0">Sign In</button>
                  </div>
              </form>
          </div>
        );
    }
}

export default SignIn;