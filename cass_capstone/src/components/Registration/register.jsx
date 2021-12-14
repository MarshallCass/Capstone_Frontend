import React, { Component } from 'react';
import './register.css';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name:"",
            last_name:"",
            username:"",
            password:"",
            email:"",
            phone_number:"",
            address:"",
            zipcode:"",
            is_staff:"",
            is_parent:"",
            is_teacher:"",

         };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            password:this.state.password,
            email: this.state.email,
            phone_number: this.state.phone_number,
            address: this.state.address,
            zipcode: this.state.zipcode,
            is_staff: this.state.is_staff,
            is_parent: this.state.is_staff,
            is_teacher: this.state.is_teacher,
        };
        this.props.registerNewUser(user);
        this.setState({
            first_name:"",
            last_name:"",
            username:"",
            password:"",
            email:"",
            phone_number:"",
            address:"",
            zipcode:"",
            is_staff:"",
            is_parent:"",
            is_teacher:"",
        });
    }

    render() {
        return (
          
<div className="container">
   <form onSubmit={this.handleSubmit} className="form-signup">
        <div className="row">
            <div className="col">
                <div>
                  <h1 className="fs-1 fw-bold mb-5 text-uppercase">Register</h1>
                  <p className="fs-5 text-white-50 mb-4">Please enter registration information!</p>
                </div>

                <div className="form-outline form-white mb-2">
                  <input type="text" name = "first_name" id="typeFirstNameX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.first_name} />
                  <label className="form-label fs-6 fw-bold" htmlFor="typeFirstNameX">First Name</label>
                </div>

                <div className="form-outline form-white mb-2">
                  <input type="text" name = "last_name" id="typeLastNameX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.last_name} />
                  <label className="form-label fs-6 fw-bold" htmlFor="typeLastNameX">Last Name</label>
                </div>
                <div className="form-outline form-white mb-2">
                  <input type="text" name = "username" id="typeUserNameX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.username} />
                  <label className="form-label fs-6 fw-bold" htmlFor="typeUserNameX">User Name</label>
                </div>
                <div className="form-outline form-white mb-2">
                  <input type="text" name = "password" minLength="8" id="typePasswordX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.password} />
                  <label className="form-label fs-6 fw-bold" htmlFor="typePasswordX">Password</label>
                </div>
                <div className="form-outline form-white mb-2">
                  <input type="text" name = "email" id="typeEmailX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.email} />
                  <label className="form-label fs-6 fw-bold" htmlFor="typeEmailX">Email</label>
                </div>
                <div className="form-outline form-white mb-4">
                  <input type="text" name = "phone_number" id="typePhonenumberX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.phone_number} />
                  <label className="form-label fs-6 fw-bold" htmlFor="typePhonenumberX">Phone Number</label>
                </div>
                <div className="form-outline form-white mb-2">
                  <input type="text" name = "address" id="typeAddressX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.address} />
                  <label className="form-label fs-6 fw-bold" htmlFor="typeAdressX">Address</label>
                </div>
                <div className="form-outline form-white mb-4">
                  <input type="text" name = "zipcode" minLength="5" id="typeZipcodeX" className="form-control form-control-lg" onChange={this.handleChange} value={this.state.zipcode} />
                  <label className="form-label fs-6 fw-bold" htmlFor="typeZipcodeX">Zipcode</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="guardian" onChange={this.handleChange} value={this.state.is_parent}> </input>
                    <label className="form-check-label" htmlFor="guardian">Parent/Guardian</label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" id="teacher" onChange={this.handleChange} value={this.state.is_staff}> </input> 
                    <label className="form-check-label" htmlFor="teacher">Staff</label>    
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" id="staff" onChange={this.handleChange} value={this.state.is_teacher}> </input> 
                    <label className="form-check-label" htmlFor="staff">Teacher</label>  
                </div>  
                <div className="card-footer">
                    <button className="btn btn-outline-light btn-lg" type="submit">Register</button>
                </div>
            </div>  
        </div>
  </form>
</div>

        )
    }
}

export default Register;