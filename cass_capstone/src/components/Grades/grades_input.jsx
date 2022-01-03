import React, { Component } from 'react';
import './grades.css';
import { Link } from "react-router-dom";


class NewGrade extends Component {
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
        this.props.addNewGrade(grade);
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
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg">
                    <option value=" " selected disabled hidden>Student</option>
                        {this.props.students.map((student, index) => {
                            return(
                            <option key={index}                        
                                value={this.state.student.id} onChange={this.handleChange}>
                                {student.first_name} {student.last_name}
                            </option>  
                            ) 
                        })}                 
                    </select>
                </div>
                <div className="form-outline form-white mb-2">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg">
                    <option value=" " selected disabled hidden>Assignment</option>
                        {this.props.assignments.map((assignment, index) => {
                            return(
                            <option key={index}
                                value={this.state.assignment.id} onChange={this.handleChange}>
                                {assignment.assignment_name}
                            </option>  
                            ) 
                        })}                 
                    </select>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "grade" 
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
                    <button className="btn btn-outline-light btn-lg" type="submit"> Submit </button>
                  <Link to="/Grades">
                    <button className="btn btn-outline-light btn-lg" type="submit"> Return To Grades </button>
                  </Link>
                </div>
            </div>  
  
  </form>
</div>

    )
}
}

export default NewGrade;