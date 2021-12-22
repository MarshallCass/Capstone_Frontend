import React, { Component } from 'react';
import '../Registration/register.css';

class UpdateRegister extends Component {
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
            is_staff:false,
            is_parent:false,
            is_teacher: false,
            is_superuser:false,
            room_number:"Office",
         };
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        })
    }
    handleCheckbox1Change = event =>
    this.setState({is_parent: !event.target.is_parent
                  })
    handleCheckbox2Change = event =>
    this.setState({is_teacher: !event.target.teacher
                  })
    handleCheckbox3Change = event =>
    this.setState({is_staff: !event.target.is_staff
                  })

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
            is_parent: this.state.is_parent,
            is_teacher: this.state.is_teacher,
            room_number: this.state.room_number,
            is_superuser: this.state.is_superuser
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
            is_superuser:"",
            room_number:"Office"
        });
    }

    render() {
        return (
          
<div className="container">
   <form onSubmit={this.handleSubmit} className="form-update">
        <div className="row">
            <div className="col">
                <div>
                  <h1 className="fs-1 fw-bold mb-5 text-uppercase">Update Registration</h1>
                  <p className="fs-5 text-white-50 mb-4">Please enter registration information!</p>
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
                      name = "username" 
                      id="typeUserNameX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.username}
                      placeholder='Username'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "password" 
                      minLength="8" 
                      id="typePasswordX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.password}
                      placeholder='Password'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">           
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "email" 
                      id="typeEmailX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.email}
                      placeholder='Email'
                    />
                  </label>
                </div>
                <div className="form-outline form-white mb-2">
                  <label className="form-label fs-6 fw-bold">
                    <input 
                      type="text" 
                      name = "phone_number" 
                      id="typePhonenumberX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.phone_number}
                      placeholder='Phone Number'
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
                      minLength="5"
                      maxLength="5" 
                      id="typeZipcodeX" 
                      className="form-control form-control-lg" 
                      onChange={this.handleChange} 
                      value={this.state.zipcode}
                      placeholder='Zipcode'
                    />
                  </label>
                </div>

                <div className="form-check">
                  <label  className="form-check-label"> Parent/Guaridan 
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="guardian"
                      defaultChecked={this.state.is_parent}
                      onChange={this.handleCheckbox1Change}
                    /> 
                  </label>
                </div>

                <div className="form-check">
                  <label className="form-check-label"> Staff  
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="teacher" 
                      defaultChecked={this.state.is_staff}
                      onChange={this.handleCheckbox3Change}
                    /> 
                  </label> 
                </div>

                <div className="form-check">
                  <label className="form-check-label"> Teacher  
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="staff" 
                      defaultChecked={this.state.is_teacher}
                      onChange={this.handleCheckbox2Change} 
                    /> 
                  </label> 
                </div>

                <div className="card-footer">
                    <button className="btn btn-outline-light btn-lg" type="submit"> Update </button>
                </div>
            </div>  
        </div>
  </form>
</div>

        )
    }
}

export default UpdateRegister;