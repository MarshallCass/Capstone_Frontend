import React, { Component } from 'react';
import 'react-router-dom';
import './assignments.css';


class NewAssignment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: "",
            assignment: "",
            grade:"",
            comments:"",
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
            student: this.state.student,
            assignment: this.state.assignment,
            grade: this.state.grade,
            comments: this.state.comments,
        };
        this.props.new_assignment(assignment);
        this.setState({
            student: "",
            assignment: "",
            grade:"",
            comments:"",
        });
        
    }

    render() {
        return (
          
<div className="container">
    <form onSubmit={this.handleSubmit} className="form-newassignment">
        <div className="row">
            <div className="col">
                <div>
                  <h1 className="fs-1 fw-bold mb-5 text-uppercase">Register</h1>
                  <p className="fs-5 text-white-50 mb-4">Please enter registration information!</p>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "student" 
                      id="typeStudentX"
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.student}
                      placeholder='Student'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "assignment" 
                      id="typeAssignmentX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.assignment}
                      placeholder='Assignment'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "username" 
                      id="typeGradeX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.grade}
                      placeholder='Grade'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "comments" 
                      id="typeCommentsX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.password}
                      placeholder='Comments'
                    />
                  </label>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-light btn-lg" type="submit"> Submit </button>
                </div>
            </div>    
        </div>          
    </form>
</div>
     )
    }
}

export default NewAssignment
