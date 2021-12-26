import React, { Component } from 'react';
import 'react-router-dom';
import './student.css';
import { Link } from "react-router-dom";

class StudentUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            address:"",
            zipcode:"",
            guardian_one: "",
            guardian_two: "",
            account_balance: "" ,
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
           first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            zipcode: this.state.zipcode,
            guardian_one: this.state.guardian_one,
            guardian_two: this.state.guardian_two,
            account_balance: this.state.account_balance,
        };
        this.props.addNewAssignment(assignment);
        this.setState({
            first_name: "",
            last_name: "",
            address:"",
            zipcode:"",
            guardian_one:"",
            guardian_two:"",
            account_balance:"", 
        }); 
    }
 
    render() {   
    
        return (
          
<div className="container">
    <form onSubmit={this.handleSubmit} className="form-newassignment">
        <div className="row">
            <div className="col">
                <div>
                  <h1 className="fs-1 fw-bold mb-5 text">Student Update</h1>
                  <p className="fs-5 text-white-50 mb-4">Please enter student information!</p>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input
                      type="text"
                      name = "first_name" 
                      id="typeFirstNameX"
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.first_name}
                      placeholder='First Name'
                    />
                 </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "last_name" 
                      id="typeLastNameX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.last_name}
                      placeholder='Last Name'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "address" 
                      id="typeAddressX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.address}
                      placeholder='Address'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "zipcode" 
                      id="typeZipcodeX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.zipcode}
                      placeholder='Zipcode'
                    />
                  </label>
                  </div>
                  <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "guardian_one" 
                      id="typeGuardian_OneX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.guardian_one}
                      placeholder='Guardian One'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "guardian_two" 
                      id="typeGuardian_TwoX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.guardian_two}
                      placeholder='Guardian Two'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "accout_balance" 
                      id="typeAccount_BalanceX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.account_balance}
                      placeholder='Account Balance'
                    />
                  </label>
                </div>
                <div className="card-footer">
                  <Link to="/StudentProfile">
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

export default StudentUpdate;
