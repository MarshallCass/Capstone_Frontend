import React, { Component } from 'react';
import 'react-router-dom';
import './assignments.css';


class NewAssignment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",

        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password,
        };
        this.props.loginUser(login);
        this.setState({
            username: "",
            password: "",
        });
        
    }

    render() {
        return (
          
<div className="container">
    <form onSubmit={this.handleSubmit} className="form-signin">
        <div className="row">
            <div className="col">
                <div>
                <h1 className="fs-1 fw-bold mb-5 text-uppercase">Login</h1>
                </div>
                  <p className="fs-5 text-white-50 mb-4">Please enter your username and password!</p>

                  <div className="form-outline form-white mb-4">
                    <input type="text" name="username" id="typeUsernameX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.username}/>
                    <label className="form-label fs-5 fw-bold" value="Username"/>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="current-password" name="password" id="typePasswordX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.password}/>
                    <label className="form-label fs-5 fw-bold" value="Password"/>
                  </div>
                  <div className="card-footer">
              
                  </div>
            </div>    
        </div>          
    </form>
</div>
     )
    }
}

export default NewAssignment
