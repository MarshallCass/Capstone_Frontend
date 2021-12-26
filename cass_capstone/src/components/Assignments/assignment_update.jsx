import React, { Component } from 'react';
import 'react-router-dom';
import './assignments.css';
import { Link } from "react-router-dom";

class UpdateAssignment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            assignment_subject: "",
            assignment_name: "",
            assignment_description:"",
            assignment_notes:"", 
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const assignment = {
            assignment_name: this.state.assignment_name,
            assignment_subject: this.state.assignment_subject,
            assignment_description: this.state.assignment_description,
            assignment_notes: this.state.assignment_notes,
        };
        this.props.addNewAssignment(assignment);
        this.setState({
            assignment_subject: "",
            assignment_name: "",
            assignment_description:"",
            assignment_notes:"", 
        }); 
    }
 
    render() {   
    
        return (
          
<div className="container">
    <form onSubmit={this.handleSubmit} className="form-newassignment">
        <div className="row">
            <div className="col">
                <div>
                  <h1 className="fs-1 fw-bold mb-5 text">New Assignment</h1>
                  <p className="fs-5 text-white-50 mb-4">Please enter assignment information!</p>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input
                      type="text"
                      name = "assignment_subject" 
                      id="typeSubjectX"
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.assignment_subject}
                      placeholder='Subject'
                    />
                 </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "assignment_name" 
                      id="typeNameX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.assignment_name}
                      placeholder='Assignment'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "assignment_description" 
                      id="typeDescriptionX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.assignment_description}
                      placeholder='Description'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "assignment_notes" 
                      id="typeNotesX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.assignment_notes}
                      placeholder='Notes'
                    />
                  </label>
                  
                </div>
                <div className="card-footer">
                  <Link to="/Assignments">
                    <button className="btn btn-outline-light btn-lg" type="submit"> Submit </button>
                  </Link>
                </div>
            </div>    
        </div>          
    </form>
</div>
     )
    }
}

export default UpdateAssignment
