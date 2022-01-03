import React, { Component } from 'react';
import 'react-router-dom';
import './cohort.css';
import { Link } from 'react-router-dom';



class NewCohort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cohort_name: "",
            student: "",

        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const cohort = {
            cohort_name: this.state.cohort_name,
            student: this.state.student_id,
        };
        this.props.addNewCohort(cohort);
        this.setState({ 
            cohort_name: "",
            student: "",
        });
        
    }

    render() {
    
        return (
          
<div className="container">
    <form onSubmit={this.handleSubmit} className="form-newCohort">
        <div className="row">
            <div className="col">
                <div>
                <h1 className="fs-1 fw-bold mb-5 text-uppercase">New Cohort</h1>
                </div>
                  <p className="fs-5 text-white-50 mb-4">Please enter cohort information!</p>

                  <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "cohort_name" 
                      id="typeCohortNameX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.cohort_name}
                      placeholder='Cohort Name'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg" defaultValue={"Student"}>
                    <option selected disabled hidden>Student</option>
                        {this.props.students.map((student, index) => {
                            return(
                            <option key={index}
                                value={this.state.student.id} 
                                onChange={this.handleChange}>
                               {student.student_id} {student.first_name} {student.last_name}
                            </option>  
                            ) 
                        })}                 
                    </select>
                </div>
                <div className="card-footer">
                        <button className="btn btn-outline-light btn-lg" type="submit"> Submit </button>
                    <Link to="/Cohorts">  
                        <button className="btn btn-outline-light btn-lg" type="submit"> Return To Cohorts </button>
                    </Link>
                </div>
            </div>    
        </div>          
    </form>
</div>
     )
    }
}

export default NewCohort
