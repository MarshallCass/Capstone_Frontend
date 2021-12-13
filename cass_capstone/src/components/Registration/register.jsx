import React, { Component } from 'react';
import './Register.css';

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
                  <h1 class="fs-1 fw-bold mb-5 text-uppercase">Register</h1>
                  <p class="fs-5 text-white-50 mb-4">Please enter registration information!</p>
                </div>

                <div class="form-outline form-white mb-2">
                  <input type="text" name = "first_name" id="typeFirstNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.first_name} />
                  <label class="form-label fs-6 fw-bold" for="typeFirstNameX">First Name</label>
                </div>

                <div class="form-outline form-white mb-2">
                  <input type="text" name = "last_name" id="typeLastNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.last_name} />
                  <label class="form-label fs-6 fw-bold" for="typeLastNameX">Last Name</label>
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="text" name = "username" id="typeUserNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.username} />
                  <label class="form-label fs-6 fw-bold" for="typeUserNameX">User Name</label>
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="text" name = "password" minlength="8" id="typePasswordX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.password} />
                  <label class="form-label fs-6 fw-bold" for="typePasswordX">Password</label>
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="text" name = "email" id="typeEmailX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.email} />
                  <label class="form-label fs-6 fw-bold" for="typeEmailX">Email</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input type="text" name = "phone_number" id="typePhonenumberX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.phone_number} />
                  <label class="form-label fs-6 fw-bold" for="typePhonenumberX">Phone Number</label>
                </div>
                <div class="form-outline form-white mb-2">
                  <input type="text" name = "address" id="typeAddressX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.address} />
                  <label class="form-label fs-6 fw-bold" for="typeAdressX">Address</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input type="text" name = "zipcode" minLength="5" id="typeZipcodeX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.zipcode} />
                  <label class="form-label fs-6 fw-bold" for="typeZipcodeX">Zipcode</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="guardian"> </input>
                    <label class="form-check-label" for="guardian">Parent/Guardian</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="teacher" checked> </input> 
                    <label class="form-check-label" for="teacher">Staff</label>    
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="staff" checked> </input> 
                    <label class="form-check-label" for="staff">Staff</label>    
                <div class="card-footer">
                    <button class="btn btn-outline-light btn-lg" type="submit">Register</button>
                </div>
            </div>  
        </div>
  </form>
</div>

        )
    }
}

export default Register;