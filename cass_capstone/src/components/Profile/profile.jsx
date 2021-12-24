import React from "react";
import "../Assignments/assignments.css";
import { Link } from "react-router-dom";

const Home = (props) => {

// Need to add student if any and students teacher


    return (
                 
<div className="container">
    
    <div className="row">
        <div className="col">
            <div>
                <h1 className="fs-2 fw-bold mb-5 text">Profile</h1>
            </div>
                <table className="form-profile">
                    <thead>
                        <tr>
                            <th> Username </th>
                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Email </th>
                            <th> Phone_Number </th>
                            <th> Address </th>
                            <th> Zipcode </th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(props.user)}
                        {props.user.map((user, index) => { 
                            return( 
                            <tr key={index}>                        
                                <td>{user.username}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone_number}</td>
                                <td>{user.address}</td>
                                <td>{user.zipcode}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="updateregistration">
            <Link to="/UpdateRegister">
            <button className="btn btn-outline-light btn-lg" type="button">Update Info</button>
            </Link>
        </div>
</div>
    );
};

export default Home;