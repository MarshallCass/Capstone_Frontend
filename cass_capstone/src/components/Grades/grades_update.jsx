import React, { Component } from 'react';
import './grades.css';
import { Link } from "react-router-dom";


class UpdateGrade extends Component {
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
        const grade = {
            student: this.state.student,
            grade: this.state.grade,
            assignement: this.state.assignment,
            comments: this.state.comments
        };
        this.props.new_grade(grade);
        this.setState({
            student: "",
            grade: "",
            assignment: "",
            comments: "",
        });
        
    }


    render (){

    return (
       
<div className="container">
   <form onSubmit={this.handleSubmit} className="add_grade">
            <div className="col">
            <div>
                  <h1 className="fs-1 fw-bold mb-5 text-uppercase">New Grades</h1>
                  <p className="fs-5 text-white-50 mb-4">Please enter grade information!</p>
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
                      value={this.state.comments}
                      placeholder='Comments'
                    />
                  </label>
                </div>
                <div className="card-footer">
                  <Link to="/Grades">
                    <button className="btn btn-outline-light btn-lg" type="submit"> Submit </button>
                  </Link>
                </div>
            </div>  
  
  </form>
</div>

    )
}
}

export default UpdateGrade;